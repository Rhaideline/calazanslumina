/**
 * Guarda o que precisa sobreviver entre invocações: o refresh token do
 * Docketwise e o marcador da última varredura.
 *
 * Função serverless não tem memória entre execuções — e o OAuth 2.0 do
 * Docketwise ROTACIONA o refresh token a cada renovação. Se o novo não for
 * gravado em lugar nenhum, a ponte funciona até o access token expirar e
 * depois morre calada, exigindo reautorizar na mão.
 *
 * Em produção: Upstash Redis (REST, sem SDK — só fetch). Sem as variáveis
 * configuradas cai para memória, que serve para teste local e AVISA, porque
 * silenciosamente perder token é o pior jeito de descobrir isso.
 */

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN

const memoria = new Map<string, string>()
let avisou = false

export function armazenamentoPersistente(): boolean {
  return Boolean(UPSTASH_URL && UPSTASH_TOKEN)
}

function avisarSeVolatil(): void {
  if (armazenamentoPersistente() || avisou) return
  avisou = true
  console.warn(
    '[store] UPSTASH_REDIS_REST_URL/TOKEN ausentes: guardando em memoria. ' +
    'O refresh token do Docketwise se perde a cada deploy ou cold start.'
  )
}

export async function ler(chave: string): Promise<string | null> {
  avisarSeVolatil()
  if (!armazenamentoPersistente()) return memoria.get(chave) ?? null

  const res = await fetch(`${UPSTASH_URL}/get/${encodeURIComponent(chave)}`, {
    headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
  })
  if (!res.ok) {
    throw new Error(`[store] leitura de "${chave}" falhou: HTTP ${res.status}`)
  }
  const json = (await res.json()) as { result: string | null }
  return json.result
}

export async function gravar(chave: string, valor: string): Promise<void> {
  avisarSeVolatil()
  if (!armazenamentoPersistente()) {
    memoria.set(chave, valor)
    return
  }

  // POST com o valor no corpo: refresh token em query string vaza em log de
  // acesso e em histórico de proxy.
  const res = await fetch(`${UPSTASH_URL}/set/${encodeURIComponent(chave)}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    body: valor,
  })
  if (!res.ok) {
    throw new Error(`[store] gravacao de "${chave}" falhou: HTTP ${res.status}`)
  }
}

export const CHAVES = {
  refreshToken: 'docketwise:refresh_token',
  accessToken: 'docketwise:access_token',
  accessTokenExpiraEm: 'docketwise:access_token_expira_em',
  ultimaVarredura: 'docketwise:ultima_varredura',
  estadoOauth: 'docketwise:oauth_state',
} as const
