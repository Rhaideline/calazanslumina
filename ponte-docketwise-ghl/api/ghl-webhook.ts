/**
 * GHL -> Docketwise.
 *
 * Recebe o Custom Webhook do workflow (contrato assinado, tag de cliente) e
 * cria o contato no Docketwise. Se já existir contato com aquele e-mail,
 * atualiza em vez de duplicar.
 *
 * Configurar no GHL: Workflow -> Add Action -> Custom Webhook
 *   POST  https://<dominio-da-ponte>/api/ghl-webhook
 *   Header  x-ponte-token: <PONTE_WEBHOOK_SECRET>
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'
import { autenticarWebhook } from '../lib/auth'
import {
  acharContatoPorEmail, atualizarContato, criarContato, criarMatter,
} from '../lib/docketwise'
import * as ghl from '../lib/ghl'
import {
  normalizarPayloadGhl, paraContatoDocketwise, validarParaDocketwise,
} from '../lib/map'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ erro: 'Use POST.' })
  }

  // O corpo cru é necessário para conferir HMAC; o Vercel já entrega o objeto
  // parseado, então reserializar é o mais próximo do original que dá para ter.
  // Por isso o caminho HMAC só é confiável para quem assinar o mesmo JSON.
  const corpoBruto = typeof req.body === 'string' ? req.body : JSON.stringify(req.body ?? {})

  const auth = autenticarWebhook(corpoBruto, req.headers)
  if (auth === 'sem_segredo') {
    console.error('[ghl-webhook] PONTE_WEBHOOK_SECRET ausente — recusando tudo')
    return res.status(503).json({ erro: 'Ponte sem segredo configurado.' })
  }
  if (auth === 'invalido') {
    return res.status(401).json({ erro: 'Nao autorizado.' })
  }

  const payload = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body ?? {})
  const contato = normalizarPayloadGhl(payload)

  const validacao = validarParaDocketwise(contato)
  if (!validacao.ok) {
    // 200 de propósito: o dado está incompleto, repetir não conserta. Devolver
    // erro faria o GHL reenfileirar para sempre a mesma coisa quebrada.
    console.warn(`[ghl-webhook] payload incompleto: falta ${validacao.faltando.join(', ')}`)
    return res.status(200).json({
      ok: false,
      ignorado: true,
      motivo: `Faltando: ${validacao.faltando.join(', ')}`,
    })
  }

  const dadosDocketwise = paraContatoDocketwise(contato)

  // Idempotência: o mesmo lead pode disparar o workflow duas vezes (reentrada
  // de estágio, tag re-aplicada). O e-mail decide se cria ou atualiza.
  const existente = await acharContatoPorEmail(contato.email!)
  const resposta = existente
    ? await atualizarContato(existente.id, dadosDocketwise)
    : await criarContato(dadosDocketwise)

  if (!resposta.ok || !resposta.data) {
    // 502 aqui é intencional: falha do Docketwise (rede, token, validação do
    // outro lado) merece reentrega do GHL.
    return res.status(502).json({
      ok: false,
      erro: resposta.erro,
      status_docketwise: resposta.status,
    })
  }

  const contatoDocketwise = resposta.data
  const criouAgora = !existente

  // Abrir matter é opcional e desligado por padrão: matter aberto no tipo
  // errado dá trabalho para desfazer no Docketwise.
  let matterId: number | null = null
  const tipoMatter = process.env.DOCKETWISE_MATTER_TYPE_ID
  if (criouAgora && tipoMatter) {
    const matter = await criarMatter({
      matter_type_id: Number(tipoMatter),
      contact_ids: [contatoDocketwise.id],
      name: `${contato.primeiroNome} ${contato.sobrenome}`.trim(),
    })
    if (matter.ok && matter.data) matterId = matter.data.id
    else console.error(`[ghl-webhook] matter nao criado: ${matter.erro}`)
  }

  await marcarNoGhl(contato.contactIdGhl, contatoDocketwise.id)

  return res.status(200).json({
    ok: true,
    acao: criouAgora ? 'criado' : 'atualizado',
    docketwise_contact_id: contatoDocketwise.id,
    docketwise_matter_id: matterId,
  })
}

/**
 * Escreve o ID do Docketwise de volta no contato do GHL.
 *
 * É o que fecha o par entre os dois sistemas: com ele o escritório abre o
 * caso certo a partir da ficha de marketing, e a ponte tem como saber que
 * aquele lead já atravessou. Falhar aqui não invalida o que já foi feito do
 * outro lado — por isso só registra.
 */
async function marcarNoGhl(contactId: string | null, docketwiseId: number): Promise<void> {
  if (!contactId || !ghl.configurado()) return

  const campo = process.env.GHL_CF_DOCKETWISE_ID
  if (campo) {
    const r = await ghl.atualizarContato(contactId, {
      customFields: [{ id: campo, field_value: String(docketwiseId) }],
    })
    if (!r.ok) console.error(`[ghl-webhook] nao gravou o ID no GHL: ${r.erro}`)
  }

  const tag = process.env.GHL_TAG_SUCESSO ?? 'docketwise-ok'
  const t = await ghl.adicionarTags(contactId, [tag])
  if (!t.ok) console.error(`[ghl-webhook] nao aplicou a tag "${tag}": ${t.erro}`)
}
