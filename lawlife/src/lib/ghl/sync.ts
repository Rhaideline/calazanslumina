/**
 * Sincronização Law Life -> GHL.
 *
 * Princípio: o GHL nunca é a fonte da verdade do escritório. O dado nasce
 * e vive no Law Life; o GHL recebe uma projeção para tocar o funil e as
 * automações de WhatsApp/e-mail. Se o GHL cair, o escritório continua
 * trabalhando — por isso nenhuma função aqui lança exceção pra cima: elas
 * devolvem o resultado e registram a falha.
 */

import 'server-only'
import { createAdminClient } from '@/lib/supabase/admin'
import { getGhlContext, logSync, touchIntegration } from '@/lib/ghl/config'
import { caseToOpportunity, clientToContact } from '@/lib/ghl/mappers'
import type { Case, Client, Deadline } from '@/types/database'

export interface SyncResult {
  ok: boolean
  ghlId: string | null
  error: string | null
  /** true quando a integração está desligada/ausente — não é falha. */
  skipped: boolean
}

const skip = (reason: string): SyncResult => ({
  ok: true, ghlId: null, error: reason, skipped: true,
})

/**
 * Cliente/lead -> contato no GHL. Idempotente: usa o upsert do GHL e
 * guarda o ghl_contact_id de volta no Law Life.
 */
export async function syncClient(firmId: string, clientId: string): Promise<SyncResult> {
  const result = await getGhlContext(firmId)
  if ('error' in result) return skip(result.error)
  const { integration, client: ghl } = result.ctx
  if (!integration.sync_clients) return skip('sync_clients desligado')

  const supabase = createAdminClient()
  const { data: client } = await supabase
    .from('clients')
    .select('*')
    .eq('id', clientId)
    .eq('firm_id', firmId)
    .maybeSingle()

  if (!client) {
    return { ok: false, ghlId: null, error: 'cliente nao encontrado', skipped: false }
  }

  const row = client as Client
  if (!row.email && !row.phone) {
    // O GHL casa contato por e-mail ou telefone. Sem nenhum dos dois ele
    // cria um contato órfão a cada chamada.
    await logSync({
      firmId, direction: 'outbound', entityType: 'client', entityId: clientId,
      event: 'contact.upsert', status: 'skipped', error: 'cliente sem email e sem telefone',
    })
    return skip('cliente sem email e sem telefone')
  }

  // a área de atuação vem do processo mais recente — vira tag no GHL
  const { data: latestCase } = await supabase
    .from('cases')
    .select('practice_area, stage')
    .eq('client_id', clientId)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  const payload = clientToContact({
    client: row,
    integration,
    practiceArea: latestCase?.practice_area ?? null,
    caseStage: latestCase?.stage ?? null,
  })

  const res = await ghl.upsertContact(payload)
  const contactId = res.data?.contact?.id ?? null

  await logSync({
    firmId, direction: 'outbound', entityType: 'client', entityId: clientId,
    ghlId: contactId, event: 'contact.upsert',
    status: res.ok ? 'success' : 'error',
    httpStatus: res.status, error: res.error,
    payload: { tags: payload.tags, hasEmail: !!payload.email, hasPhone: !!payload.phone },
  })
  await touchIntegration(firmId, res.ok ? null : res.error)

  if (!res.ok || !contactId) {
    return { ok: false, ghlId: null, error: res.error ?? 'GHL nao devolveu contactId', skipped: false }
  }

  await supabase
    .from('clients')
    .update({ ghl_contact_id: contactId, ghl_synced_at: new Date().toISOString() })
    .eq('id', clientId)

  return { ok: true, ghlId: contactId, error: null, skipped: false }
}

/**
 * Processo -> oportunidade no pipeline. Cria na primeira vez, atualiza
 * estágio e valor nas seguintes.
 */
export async function syncCase(firmId: string, caseId: string): Promise<SyncResult> {
  const result = await getGhlContext(firmId)
  if ('error' in result) return skip(result.error)
  const { integration, client: ghl } = result.ctx
  if (!integration.sync_cases) return skip('sync_cases desligado')
  if (!integration.pipeline_id) return skip('pipeline nao configurado')

  const supabase = createAdminClient()
  const { data: legalCase } = await supabase
    .from('cases')
    .select('*')
    .eq('id', caseId)
    .eq('firm_id', firmId)
    .maybeSingle()

  if (!legalCase) {
    return { ok: false, ghlId: null, error: 'processo nao encontrado', skipped: false }
  }

  const row = legalCase as Case

  // A oportunidade precisa de um contato. Se o cliente ainda não foi para
  // o GHL, ele vai agora — senão o processo não teria onde se pendurar.
  const { data: client } = await supabase
    .from('clients')
    .select('ghl_contact_id')
    .eq('id', row.client_id)
    .maybeSingle()

  let contactId = client?.ghl_contact_id ?? null
  if (!contactId) {
    const clientSync = await syncClient(firmId, row.client_id)
    if (!clientSync.ok || !clientSync.ghlId) {
      return {
        ok: false, ghlId: null, skipped: false,
        error: `cliente nao sincronizado: ${clientSync.error ?? 'motivo desconhecido'}`,
      }
    }
    contactId = clientSync.ghlId
  }

  const payload = caseToOpportunity(row, contactId, integration)
  if (!payload) return skip('pipeline nao configurado')

  const res = row.ghl_opportunity_id
    ? await ghl.updateOpportunity(row.ghl_opportunity_id, payload)
    : await ghl.createOpportunity(payload)

  const opportunityId = res.data?.opportunity?.id ?? row.ghl_opportunity_id ?? null

  await logSync({
    firmId, direction: 'outbound', entityType: 'case', entityId: caseId,
    ghlId: opportunityId,
    event: row.ghl_opportunity_id ? 'opportunity.update' : 'opportunity.create',
    status: res.ok ? 'success' : 'error',
    httpStatus: res.status, error: res.error,
    payload: { stage: row.stage, status: payload.status, monetaryValue: payload.monetaryValue },
  })
  await touchIntegration(firmId, res.ok ? null : res.error)

  if (!res.ok || !opportunityId) {
    return { ok: false, ghlId: null, error: res.error ?? 'GHL nao devolveu opportunityId', skipped: false }
  }

  await supabase
    .from('cases')
    .update({ ghl_opportunity_id: opportunityId, ghl_synced_at: new Date().toISOString() })
    .eq('id', caseId)

  return { ok: true, ghlId: opportunityId, error: null, skipped: false }
}

/**
 * Prazo/audiência -> compromisso no calendário do GHL, para disparar
 * lembrete de WhatsApp/SMS ao cliente.
 *
 * Só sobem compromissos que envolvem o cliente (audiência, reunião). Prazo
 * interno do escritório não vira evento no GHL: o cliente receberia um
 * lembrete de algo que não é dele, e prazo fatal é assunto de controle
 * interno, não de automação de marketing.
 */
export async function syncDeadline(firmId: string, deadlineId: string): Promise<SyncResult> {
  const result = await getGhlContext(firmId)
  if ('error' in result) return skip(result.error)
  const { integration, client: ghl } = result.ctx
  if (!integration.sync_deadlines) return skip('sync_deadlines desligado')
  if (!integration.calendar_id) return skip('calendario nao configurado')

  const supabase = createAdminClient()
  const { data: deadline } = await supabase
    .from('deadlines')
    .select('*')
    .eq('id', deadlineId)
    .eq('firm_id', firmId)
    .maybeSingle()

  if (!deadline) {
    return { ok: false, ghlId: null, error: 'prazo nao encontrado', skipped: false }
  }

  const row = deadline as Deadline
  if (row.kind !== 'audiencia' && row.kind !== 'reuniao') {
    return skip('so audiencia e reuniao viram evento no GHL')
  }
  if (!row.client_id) return skip('compromisso sem cliente vinculado')

  const { data: client } = await supabase
    .from('clients')
    .select('ghl_contact_id')
    .eq('id', row.client_id)
    .maybeSingle()

  let contactId = client?.ghl_contact_id ?? null
  if (!contactId) {
    const clientSync = await syncClient(firmId, row.client_id)
    if (!clientSync.ok || !clientSync.ghlId) {
      return {
        ok: false, ghlId: null, skipped: false,
        error: `cliente nao sincronizado: ${clientSync.error ?? 'motivo desconhecido'}`,
      }
    }
    contactId = clientSync.ghlId
  }

  // audiência sem duração declarada: 1h é a janela padrão de pauta
  const start = new Date(row.due_at)
  const end = new Date(start.getTime() + 60 * 60 * 1000)

  const res = await ghl.createAppointment({
    calendarId: integration.calendar_id,
    contactId,
    startTime: start.toISOString(),
    endTime: end.toISOString(),
    title: row.title,
    appointmentStatus: 'confirmed',
    ...(row.location ? { address: row.location } : {}),
    // a pauta do fórum não obedece a disponibilidade do calendário do GHL
    ignoreFreeSlotValidation: true,
  })

  await logSync({
    firmId, direction: 'outbound', entityType: 'deadline', entityId: deadlineId,
    ghlId: res.data?.id ?? null, event: 'appointment.create',
    status: res.ok ? 'success' : 'error',
    httpStatus: res.status, error: res.error,
    payload: { kind: row.kind, due_at: row.due_at },
  })

  if (!res.ok || !res.data?.id) {
    return { ok: false, ghlId: null, error: res.error ?? 'GHL nao devolveu id do evento', skipped: false }
  }

  await supabase
    .from('deadlines')
    .update({ ghl_event_id: res.data.id, ghl_synced_at: new Date().toISOString() })
    .eq('id', deadlineId)

  return { ok: true, ghlId: res.data.id, error: null, skipped: false }
}
