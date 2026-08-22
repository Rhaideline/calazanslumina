/**
 * Cliente da API v1 do Docketwise.
 *
 * Base: https://app.docketwise.com/api/v1/
 * OAuth 2.0: /oauth/authorize e /oauth/token (Doorkeeper, padrão Rails).
 *
 * Aviso honesto sobre o que aqui é certeza e o que é hipótese:
 * os NOMES dos campos vieram do schema real do conector oficial (first_name,
 * last_name, email, date_of_birth em mm/dd/yyyy, alien_registration_number...).
 * O FORMATO do corpo — se o POST espera {"contact": {...}} aninhado ou os
 * campos soltos — não deu para confirmar, porque a documentação está fora do
 * ar para esta máquina. Por isso o envelope é configurável e o corpo do erro
 * é registrado inteiro: a primeira chamada real responde a pergunta em vez de
 * a gente adivinhar duas vezes.
 */

import { CHAVES, gravar, ler } from './store'

const BASE = process.env.DOCKETWISE_BASE_URL ?? 'https://app.docketwise.com'
const API = `${BASE}/api/v1`
const CLIENT_ID = process.env.DOCKETWISE_CLIENT_ID
const CLIENT_SECRET = process.env.DOCKETWISE_CLIENT_SECRET
const REDIRECT_URI = process.env.DOCKETWISE_REDIRECT_URI
/** 'contact' = {"contact": {...}} (padrão Rails) | 'flat' = campos na raiz */
const ENVELOPE = process.env.DOCKETWISE_PAYLOAD_ENVELOPE ?? 'contact'

const TIMEOUT_MS = 15_000
/** Renova antes de expirar: token que vence no meio da chamada vira 401 tardio. */
const MARGEM_RENOVACAO_MS = 60_000

export interface RespostaDocketwise<T> {
  ok: boolean
  status: number
  data: T | null
  erro: string | null
}

export interface ContatoDocketwise {
  id: number
  first_name?: string
  last_name?: string
  email?: string
  [k: string]: unknown
}

export interface MatterDocketwise {
  id: number
  name?: string
  updated_at?: string
  matter_status?: { id?: number; name?: string } | string | null
  matter_type?: { id?: number; name?: string } | string | null
  contacts?: ContatoDocketwise[]
  [k: string]: unknown
}

// ─── OAuth ─────────────────────────────────────────────────────────

export function urlDeAutorizacao(state: string): string {
  if (!CLIENT_ID || !REDIRECT_URI) {
    throw new Error('DOCKETWISE_CLIENT_ID ou DOCKETWISE_REDIRECT_URI ausentes')
  }
  const p = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    state,
  })
  return `${BASE}/oauth/authorize?${p.toString()}`
}

interface RespostaToken {
  access_token: string
  refresh_token?: string
  expires_in?: number
  token_type?: string
}

async function pedirToken(corpo: Record<string, string>): Promise<RespostaToken> {
  if (!CLIENT_ID || !CLIENT_SECRET) {
    throw new Error('DOCKETWISE_CLIENT_ID ou DOCKETWISE_CLIENT_SECRET ausentes')
  }

  const res = await fetch(`${BASE}/oauth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ ...corpo, client_id: CLIENT_ID, client_secret: CLIENT_SECRET }),
  })

  const texto = await res.text()
  if (!res.ok) {
    throw new Error(`[docketwise] /oauth/token respondeu ${res.status}: ${texto.slice(0, 400)}`)
  }
  return JSON.parse(texto) as RespostaToken
}

async function guardarTokens(t: RespostaToken): Promise<void> {
  await gravar(CHAVES.accessToken, t.access_token)
  // expires_in em segundos; sem ele assume 2h, que é o padrão do Doorkeeper
  const validadeMs = (t.expires_in ?? 7200) * 1000
  await gravar(CHAVES.accessTokenExpiraEm, String(Date.now() + validadeMs))

  // O refresh token roda a cada renovação. Não gravar o novo = ponte morta
  // no próximo ciclo.
  if (t.refresh_token) await gravar(CHAVES.refreshToken, t.refresh_token)
}

/** Troca o `code` do redirect pelo primeiro par de tokens. */
export async function trocarCodigoPorToken(code: string): Promise<void> {
  if (!REDIRECT_URI) throw new Error('DOCKETWISE_REDIRECT_URI ausente')
  const t = await pedirToken({
    grant_type: 'authorization_code',
    code,
    redirect_uri: REDIRECT_URI,
  })
  if (!t.refresh_token) {
    console.warn('[docketwise] autorizacao veio sem refresh_token — a ponte vai parar quando o access token expirar')
  }
  await guardarTokens(t)
}

/** Access token válido, renovando pelo refresh quando necessário. */
export async function accessTokenValido(): Promise<string> {
  const [token, expiraEm] = await Promise.all([
    ler(CHAVES.accessToken),
    ler(CHAVES.accessTokenExpiraEm),
  ])

  const prazo = expiraEm ? Number(expiraEm) : 0
  if (token && prazo - MARGEM_RENOVACAO_MS > Date.now()) return token

  const refresh = await ler(CHAVES.refreshToken)
  if (!refresh) {
    throw new Error(
      'Docketwise nao autorizado: abra /api/oauth/start para conectar o escritorio'
    )
  }

  const t = await pedirToken({ grant_type: 'refresh_token', refresh_token: refresh })
  await guardarTokens(t)
  return t.access_token
}

// ─── HTTP ──────────────────────────────────────────────────────────

async function chamar<T>(
  metodo: 'GET' | 'POST' | 'PUT',
  caminho: string,
  corpo?: unknown
): Promise<RespostaDocketwise<T>> {
  let token: string
  try {
    token = await accessTokenValido()
  } catch (err) {
    return { ok: false, status: 401, data: null, erro: (err as Error).message }
  }

  const controle = new AbortController()
  const timer = setTimeout(() => controle.abort(), TIMEOUT_MS)

  try {
    const res = await fetch(`${API}${caminho}`, {
      method: metodo,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        ...(corpo ? { 'Content-Type': 'application/json' } : {}),
      },
      ...(corpo ? { body: JSON.stringify(corpo) } : {}),
      signal: controle.signal,
    })

    const texto = await res.text()
    const data = texto ? (JSON.parse(texto) as T) : null

    if (!res.ok) {
      // O corpo inteiro vai para o log: é ele que diz se o envelope está
      // errado, se falta campo obrigatório ou se o escopo não cobre a rota.
      console.error(`[docketwise] ${metodo} ${caminho} -> ${res.status}: ${texto.slice(0, 800)}`)
      return { ok: false, status: res.status, data, erro: extrairErro(data, texto) }
    }

    return { ok: true, status: res.status, data, erro: null }
  } catch (err) {
    const abortou = err instanceof Error && err.name === 'AbortError'
    return {
      ok: false,
      status: abortou ? 504 : 0,
      data: null,
      erro: abortou ? `Docketwise nao respondeu em ${TIMEOUT_MS / 1000}s` : (err as Error).message,
    }
  } finally {
    clearTimeout(timer)
  }
}

function extrairErro(data: unknown, bruto: string): string {
  if (data && typeof data === 'object') {
    const o = data as Record<string, unknown>
    if (typeof o.error === 'string') return o.error
    if (typeof o.message === 'string') return o.message
    if (o.errors) return JSON.stringify(o.errors).slice(0, 300)
  }
  return bruto.slice(0, 300) || 'erro sem corpo'
}

function envelopar(recurso: string, dados: Record<string, unknown>): Record<string, unknown> {
  return ENVELOPE === 'flat' ? dados : { [recurso]: dados }
}

// ─── Recursos ──────────────────────────────────────────────────────

/**
 * Procura contato pelo e-mail — a chave de casamento entre os dois sistemas.
 *
 * O parâmetro de busca da API não pôde ser confirmado, então a filtragem
 * exata acontece aqui: mesmo que `query` faça busca ampla (ou seja ignorado),
 * só volta quem tem o e-mail idêntico.
 */
export async function acharContatoPorEmail(
  email: string
): Promise<ContatoDocketwise | null> {
  const alvo = email.trim().toLowerCase()
  const res = await chamar<ContatoDocketwise[] | { contacts?: ContatoDocketwise[] }>(
    'GET',
    `/contacts?query=${encodeURIComponent(alvo)}`
  )
  if (!res.ok || !res.data) return null

  const lista = Array.isArray(res.data) ? res.data : (res.data.contacts ?? [])
  return lista.find((c) => c.email?.trim().toLowerCase() === alvo) ?? null
}

export function criarContato(dados: Record<string, unknown>) {
  return chamar<ContatoDocketwise>('POST', '/contacts', envelopar('contact', dados))
}

export function atualizarContato(id: number, dados: Record<string, unknown>) {
  return chamar<ContatoDocketwise>('PUT', `/contacts/${id}`, envelopar('contact', dados))
}

export function criarMatter(dados: Record<string, unknown>) {
  return chamar<MatterDocketwise>('POST', '/matters', envelopar('matter', dados))
}

export function listarMatters() {
  return chamar<MatterDocketwise[] | { matters?: MatterDocketwise[] }>('GET', '/matters')
}

export function listarTiposDeMatter() {
  return chamar<unknown>('GET', '/matter_types')
}

export function listarStatusDeMatter() {
  return chamar<unknown>('GET', '/matter_statuses')
}
