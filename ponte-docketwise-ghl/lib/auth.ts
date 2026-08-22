/**
 * Autenticação do webhook que chega do GHL.
 *
 * O Custom Webhook do GHL manda headers de valor FIXO — a interface dele não
 * calcula HMAC do corpo. Então a prova aceita é um segredo compartilhado no
 * header, comparado em tempo constante. Vale o que vale um bearer: viaja em
 * TLS, não prova integridade do corpo, e se vazar tem que ser trocado.
 *
 * Quem conseguir assinar (um intermediário, um app do marketplace) pode mandar
 * `x-ponte-signature: sha256=<hmac do corpo cru>`, que é conferido primeiro.
 *
 * Sem PONTE_WEBHOOK_SECRET no ambiente, a rota recusa tudo. Endpoint aberto
 * que escreve cliente no sistema do escritório é convite para envenenar a base.
 */

import { createHmac, timingSafeEqual } from 'node:crypto'

export type ResultadoAuth = 'ok' | 'sem_segredo' | 'invalido'

function iguais(a: string, b: string): boolean {
  const bufA = new Uint8Array(Buffer.from(a, 'utf8'))
  const bufB = new Uint8Array(Buffer.from(b, 'utf8'))
  // timingSafeEqual lança quando os tamanhos diferem — e o tamanho já é
  // observável, então comparar antes não entrega nada
  if (bufA.length !== bufB.length) return false
  return timingSafeEqual(bufA, bufB)
}

export function autenticarWebhook(
  corpoBruto: string,
  headers: Record<string, string | string[] | undefined>
): ResultadoAuth {
  const segredo = process.env.PONTE_WEBHOOK_SECRET
  if (!segredo) return 'sem_segredo'

  const assinatura = primeiro(headers['x-ponte-signature'])
  if (assinatura) {
    const recebida = assinatura.startsWith('sha256=') ? assinatura.slice(7) : assinatura
    const esperada = createHmac('sha256', segredo).update(corpoBruto, 'utf8').digest('hex')
    return iguais(recebida.toLowerCase(), esperada) ? 'ok' : 'invalido'
  }

  const token = primeiro(headers['x-ponte-token'])
  if (token) return iguais(token, segredo) ? 'ok' : 'invalido'

  return 'invalido'
}

function primeiro(valor: string | string[] | undefined): string | null {
  if (Array.isArray(valor)) return valor[0] ?? null
  return valor ?? null
}
