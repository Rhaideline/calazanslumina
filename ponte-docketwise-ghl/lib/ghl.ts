/**
 * Cliente da API v2 do GoHighLevel.
 *
 * Autenticação: Private Integration Token da sub-conta (Settings → Private
 * Integrations). Escopos necessários para o que a ponte faz:
 * contacts.readonly, contacts.write, opportunities.write.
 *
 * O header `Version` é obrigatório — sem ele o GHL responde 401 sem explicar
 * o motivo, e a pessoa passa meia hora achando que o token está errado.
 */

const API = 'https://services.leadconnectorhq.com'
const VERSION = '2021-07-28'
const TIMEOUT_MS = 10_000
const MAX_TENTATIVAS = 2

const TOKEN = process.env.GHL_PIT_TOKEN
const LOCATION_ID = process.env.GHL_LOCATION_ID

export interface RespostaGhl<T> {
  ok: boolean
  status: number
  data: T | null
  erro: string | null
}

export interface ContatoGhl {
  id: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  tags?: string[]
  customFields?: Array<{ id: string; value?: unknown; fieldValue?: unknown }>
  [k: string]: unknown
}

export function configurado(): boolean {
  return Boolean(TOKEN && LOCATION_ID)
}

async function chamar<T>(
  metodo: 'GET' | 'POST' | 'PUT',
  caminho: string,
  corpo?: unknown,
  tentativa = 0
): Promise<RespostaGhl<T>> {
  if (!TOKEN || !LOCATION_ID) {
    return { ok: false, status: 500, data: null, erro: 'GHL_PIT_TOKEN ou GHL_LOCATION_ID ausentes' }
  }

  const controle = new AbortController()
  const timer = setTimeout(() => controle.abort(), TIMEOUT_MS)

  try {
    const res = await fetch(`${API}${caminho}`, {
      method: metodo,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Version: VERSION,
        Accept: 'application/json',
        ...(corpo ? { 'Content-Type': 'application/json' } : {}),
      },
      ...(corpo ? { body: JSON.stringify(corpo) } : {}),
      signal: controle.signal,
    })

    // 429 e 5xx costumam passar em segundos; uma espera curta salva o lead
    if ((res.status === 429 || res.status >= 500) && tentativa < MAX_TENTATIVAS) {
      clearTimeout(timer)
      const retryAfter = Number(res.headers.get('retry-after'))
      const espera = Number.isFinite(retryAfter) && retryAfter > 0
        ? Math.min(retryAfter * 1000, 5_000)
        : 500 * 2 ** tentativa
      await new Promise((r) => setTimeout(r, espera))
      return chamar<T>(metodo, caminho, corpo, tentativa + 1)
    }

    const texto = await res.text()
    const data = texto ? (JSON.parse(texto) as T) : null

    if (!res.ok) {
      console.error(`[ghl] ${metodo} ${caminho} -> ${res.status}: ${texto.slice(0, 600)}`)
      return { ok: false, status: res.status, data, erro: extrairErro(data) ?? `HTTP ${res.status}` }
    }

    return { ok: true, status: res.status, data, erro: null }
  } catch (err) {
    const abortou = err instanceof Error && err.name === 'AbortError'
    return {
      ok: false,
      status: abortou ? 504 : 0,
      data: null,
      erro: abortou ? `GHL nao respondeu em ${TIMEOUT_MS / 1000}s` : (err as Error).message,
    }
  } finally {
    clearTimeout(timer)
  }
}

function extrairErro(data: unknown): string | null {
  if (!data || typeof data !== 'object') return null
  const o = data as Record<string, unknown>
  if (typeof o.message === 'string') return o.message
  if (Array.isArray(o.message)) return o.message.join('; ')
  return null
}

export function buscarContato(contactId: string) {
  return chamar<{ contact: ContatoGhl }>('GET', `/contacts/${contactId}`)
}

export interface UpsertContatoGhl {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  tags?: string[]
  source?: string
  customFields?: Array<{ id: string; field_value: string | number }>
}

/** Cria ou atualiza casando por e-mail/telefone dentro da location. */
export function upsertContato(dados: UpsertContatoGhl) {
  return chamar<{ contact: ContatoGhl; new?: boolean }>('POST', '/contacts/upsert', {
    ...dados,
    locationId: LOCATION_ID,
  })
}

export function atualizarContato(contactId: string, dados: Partial<UpsertContatoGhl>) {
  return chamar<{ contact: ContatoGhl }>('PUT', `/contacts/${contactId}`, dados)
}

export function adicionarTags(contactId: string, tags: string[]) {
  return chamar<{ tags: string[] }>('POST', `/contacts/${contactId}/tags`, { tags })
}

export function atualizarOportunidade(
  opportunityId: string,
  dados: { pipelineStageId?: string; status?: 'open' | 'won' | 'lost' | 'abandoned'; name?: string }
) {
  return chamar<unknown>('PUT', `/opportunities/${opportunityId}`, dados)
}
