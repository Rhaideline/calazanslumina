/**
 * GHL -> Law Life.
 *
 * Recebe eventos da sub-conta (contato criado no funil, oportunidade que
 * mudou de estágio, agendamento marcado pelo bot) e reflete no Law Life.
 *
 * Autenticação: o GHL só assina webhook de app do marketplace. Workflow com
 * ação "Custom Webhook" — que é como a maioria das sub-contas manda evento —
 * sai sem assinatura nenhuma, e a UI do GHL não calcula HMAC do corpo: ela só
 * permite header com valor fixo. Por isso a rota aceita duas provas, ambas
 * contra o mesmo segredo guardado em ghl_credentials:
 *
 *   1. `x-lawlife-signature: sha256=<hmac do corpo cru>` — a forte, para quem
 *      consegue assinar (app do marketplace, Make/Zapier no meio do caminho);
 *   2. `x-lawlife-token: <segredo>` — segredo compartilhado em header, que é o
 *      que dá para configurar direto no workflow do GHL. Vale o que vale um
 *      bearer: viaja em TLS, não prova integridade do corpo, e se vazar tem
 *      que ser rotacionado. É o preço de ser configurável pela UI.
 *
 * Sem segredo cadastrado, a rota recusa tudo — endpoint público que grava
 * cliente no banco sem autenticar é convite para envenenamento de base.
 *
 * O corpo é lido cru e parseado antes de conferir a assinatura (é preciso
 * saber a location para achar o segredo certo), mas NADA é gravado antes
 * da conferência passar.
 */

import { NextResponse } from 'next/server'
import { createHmac, timingSafeEqual } from 'node:crypto'
import { createAdminClient } from '@/lib/supabase/admin'
import { getGhlContextByLocation, logSync } from '@/lib/ghl/config'
import { toE164 } from '@/lib/ghl/mappers'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface GhlWebhookPayload {
  type?: string
  webhookId?: string
  locationId?: string
  id?: string
  contactId?: string
  email?: string
  phone?: string
  firstName?: string
  lastName?: string
  name?: string
  tags?: string[]
  status?: string
  pipelineStageId?: string
  pipelineId?: string
  monetaryValue?: number
  startTime?: string
  endTime?: string
  title?: string
  appointment?: { id?: string; startTime?: string; title?: string; contactId?: string }
  [key: string]: unknown
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a, 'utf8')
  const bufB = Buffer.from(b, 'utf8')
  // timingSafeEqual joga exceção quando os tamanhos diferem — e o tamanho
  // já é público, então comparar antes não vaza nada além do que vazaria
  if (bufA.length !== bufB.length) return false
  return timingSafeEqual(bufA, bufB)
}

/** Confere a assinatura HMAC do corpo cru ou, na falta dela, o token fixo. */
function isAuthenticated(rawBody: string, secret: string, headers: Headers): boolean {
  const signature = headers.get('x-lawlife-signature')
  if (signature) {
    const received = signature.startsWith('sha256=') ? signature.slice(7) : signature
    const expected = createHmac('sha256', secret).update(rawBody, 'utf8').digest('hex')
    return safeEqual(received.toLowerCase(), expected)
  }

  const token = headers.get('x-lawlife-token')
  if (token) return safeEqual(token, secret)

  return false
}

export async function POST(req: Request) {
  let payload: GhlWebhookPayload

  const rawBody = await req.text()
  try {
    payload = JSON.parse(rawBody) as GhlWebhookPayload
  } catch {
    return NextResponse.json({ error: 'Corpo invalido.' }, { status: 400 })
  }

  const locationId = payload.locationId
  if (!locationId) {
    return NextResponse.json({ error: 'locationId ausente.' }, { status: 400 })
  }

  const result = await getGhlContextByLocation(locationId)
  if ('error' in result) {
    // location desconhecida: 404 seco, sem dizer se existe escritório
    return NextResponse.json({ error: 'Location nao reconhecida.' }, { status: 404 })
  }
  const { integration, webhookSecret } = result.ctx

  if (!webhookSecret) {
    console.warn(`[ghl/webhook] escritorio ${integration.firm_id} sem webhook secret configurado`)
    return NextResponse.json(
      { error: 'Webhook sem segredo configurado para esta location.' },
      { status: 401 }
    )
  }

  if (!isAuthenticated(rawBody, webhookSecret, req.headers)) {
    await logSync({
      firmId: integration.firm_id, direction: 'inbound', entityType: 'lead',
      event: payload.type ?? 'unknown', status: 'error',
      error: 'assinatura ou token invalido',
    })
    return NextResponse.json({ error: 'Nao autorizado.' }, { status: 401 })
  }

  const supabase = createAdminClient()
  const eventType = payload.type ?? 'unknown'

  // Idempotência: o GHL reentrega quando não recebe 2xx rápido. Sem isto,
  // a mesma entrega viraria dois clientes.
  const webhookId = payload.webhookId ?? `${eventType}:${payload.id ?? ''}:${payload.contactId ?? ''}`
  const { error: dedupeError } = await supabase
    .from('ghl_webhook_events')
    .insert({
      webhook_id: webhookId,
      location_id: locationId,
      firm_id: integration.firm_id,
      event_type: eventType,
      payload: payload as Record<string, unknown>,
    })

  // 23505 = unique_violation: já processamos esta entrega
  if (dedupeError?.code === '23505') {
    return NextResponse.json({ success: true, duplicate: true })
  }

  try {
    await handleEvent(eventType, payload, integration.firm_id)

    await supabase
      .from('ghl_webhook_events')
      .update({ processed_at: new Date().toISOString() })
      .eq('webhook_id', webhookId)

    await logSync({
      firmId: integration.firm_id, direction: 'inbound', entityType: 'lead',
      ghlId: payload.contactId ?? payload.id ?? null,
      event: eventType, status: 'success',
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'erro desconhecido'
    console.error(`[ghl/webhook] falha ao processar ${eventType}:`, err)
    await logSync({
      firmId: integration.firm_id, direction: 'inbound', entityType: 'lead',
      event: eventType, status: 'error', error: message,
    })
    // 200 de propósito: o evento está guardado em ghl_webhook_events e pode
    // ser reprocessado. Devolver 5xx faria o GHL reentregar em loop.
    return NextResponse.json({ success: false, error: message })
  }
}

async function handleEvent(
  eventType: string,
  payload: GhlWebhookPayload,
  firmId: string
): Promise<void> {
  const supabase = createAdminClient()

  switch (eventType) {
    // Contato novo no GHL (chatbot, formulário do funil, importação):
    // vira lead no Law Life se ainda não existir.
    case 'ContactCreate':
    case 'ContactUpdate': {
      const contactId = payload.id ?? payload.contactId
      if (!contactId) return

      const fullName =
        payload.name ||
        [payload.firstName, payload.lastName].filter(Boolean).join(' ').trim() ||
        payload.email ||
        'Contato sem nome'

      const { data: existing } = await supabase
        .from('clients')
        .select('id')
        .eq('firm_id', firmId)
        .eq('ghl_contact_id', contactId)
        .maybeSingle()

      if (existing) {
        await supabase
          .from('clients')
          .update({
            full_name: fullName,
            email: payload.email ?? null,
            phone: toE164(payload.phone) ?? null,
            ghl_synced_at: new Date().toISOString(),
          })
          .eq('id', existing.id)
        return
      }

      // ContactUpdate de contato que nunca passou pelo Law Life não cria
      // registro: seria trazer para dentro do escritório gente que só
      // existe no marketing.
      if (eventType === 'ContactUpdate') return

      await supabase.from('clients').insert({
        firm_id: firmId,
        full_name: fullName,
        person_type: 'PF',
        email: payload.email ?? null,
        phone: toE164(payload.phone) ?? null,
        status: 'lead',
        origin: 'ghl',
        ghl_contact_id: contactId,
        ghl_synced_at: new Date().toISOString(),
      })
      return
    }

    // Oportunidade mudou de estágio no funil do GHL -> reflete no processo.
    case 'OpportunityStatusUpdate':
    case 'OpportunityStageUpdate': {
      const opportunityId = payload.id
      if (!opportunityId) return

      const { data: legalCase } = await supabase
        .from('cases')
        .select('id, stage')
        .eq('firm_id', firmId)
        .eq('ghl_opportunity_id', opportunityId)
        .maybeSingle()

      if (!legalCase) return

      const stage = stageFromGhl(payload, legalCase.stage)
      if (stage === legalCase.stage) return

      await supabase
        .from('cases')
        .update({ stage, ghl_synced_at: new Date().toISOString() })
        .eq('id', legalCase.id)
      return
    }

    // Agendamento marcado no GHL (bot, calendário público) -> compromisso.
    case 'AppointmentCreate': {
      const appt = payload.appointment ?? payload
      const startTime = appt.startTime ?? payload.startTime
      const contactId = appt.contactId ?? payload.contactId
      if (!startTime || !contactId) return

      const { data: client } = await supabase
        .from('clients')
        .select('id')
        .eq('firm_id', firmId)
        .eq('ghl_contact_id', contactId)
        .maybeSingle()

      if (!client) return

      await supabase.from('deadlines').insert({
        firm_id: firmId,
        client_id: client.id,
        title: appt.title ?? payload.title ?? 'Reuniao agendada pelo GHL',
        kind: 'reuniao',
        // compromisso vindo do marketing nunca é prazo fatal: fatal é só
        // o que o escritório marca à mão, com processo na mão
        is_fatal: false,
        due_at: new Date(startTime).toISOString(),
        status: 'pendente',
        ghl_event_id: appt.id ?? payload.id ?? null,
        ghl_synced_at: new Date().toISOString(),
      })
      return
    }

    // Mensagem recebida (WhatsApp/SMS/e-mail): fica no log de integração.
    // O conteúdo NÃO é copiado para o Law Life — a conversa vive no GHL e
    // duplicá-la aqui seria espalhar dado de cliente sem necessidade.
    case 'InboundMessage':
      return

    default:
      // evento não tratado já está gravado em ghl_webhook_events
      return
  }
}

/** Estágio do GHL -> estágio do processo. */
function stageFromGhl(payload: GhlWebhookPayload, current: string): string {
  if (payload.status === 'won') return 'encerrado'
  if (payload.status === 'lost' || payload.status === 'abandoned') return 'perdido'
  return current
}
