/**
 * Carrega a configuração + credencial do GHL de um escritório e registra
 * o resultado de cada chamada no ghl_sync_log.
 *
 * Server-only: usa a service_role, única que enxerga ghl_credentials
 * (a tabela tem RLS ligada e nenhuma policy, de propósito).
 */

import 'server-only'
import { createAdminClient } from '@/lib/supabase/admin'
import { GhlClient } from '@/lib/ghl/client'
import type { GhlIntegration } from '@/types/database'

export interface GhlContext {
  integration: GhlIntegration
  client: GhlClient
  webhookSecret: string | null
}

export type GhlContextError =
  | 'not_configured'   // escritório nunca plugou o GHL
  | 'inactive'         // plugou e desligou o sync
  | 'no_credentials'   // config existe, token sumiu (rotação incompleta)
  | 'no_encryption_key'

export async function getGhlContext(
  firmId: string
): Promise<{ ctx: GhlContext } | { error: GhlContextError }> {
  const encryptionKey = process.env.GHL_CRED_ENCRYPTION_KEY
  if (!encryptionKey) {
    console.error('[ghl] GHL_CRED_ENCRYPTION_KEY ausente — sem ela o token nao decifra')
    return { error: 'no_encryption_key' }
  }

  const supabase = createAdminClient()

  const { data: integration } = await supabase
    .from('ghl_integrations')
    .select('*')
    .eq('firm_id', firmId)
    .maybeSingle()

  if (!integration) return { error: 'not_configured' }
  if (!integration.is_active) return { error: 'inactive' }

  const { data: creds, error: credError } = await supabase.rpc('ghl_read_credentials', {
    p_firm_id: firmId,
    p_encryption_key: encryptionKey,
  })

  const row = Array.isArray(creds) ? creds[0] : creds
  if (credError || !row?.token) return { error: 'no_credentials' }

  return {
    ctx: {
      integration: integration as GhlIntegration,
      client: new GhlClient(row.token, integration.location_id),
      webhookSecret: row.webhook_secret ?? null,
    },
  }
}

/** Resolve a integração a partir da location — o caminho do webhook, que
 *  chega sem saber qual escritório é. */
export async function getGhlContextByLocation(
  locationId: string
): Promise<{ ctx: GhlContext } | { error: GhlContextError }> {
  const supabase = createAdminClient()
  const { data } = await supabase
    .from('ghl_integrations')
    .select('firm_id')
    .eq('location_id', locationId)
    .maybeSingle()

  if (!data) return { error: 'not_configured' }
  return getGhlContext(data.firm_id)
}

export interface SyncLogInput {
  firmId: string | null
  direction: 'outbound' | 'inbound'
  entityType: 'client' | 'case' | 'deadline' | 'lead'
  entityId?: string | null
  ghlId?: string | null
  event: string
  status: 'success' | 'error' | 'skipped'
  httpStatus?: number | null
  error?: string | null
  payload?: Record<string, unknown> | null
}

/**
 * Log de integração nunca derruba a operação: se o insert falhar, a gente
 * registra no console e segue. Perder o log é ruim; perder o lead é pior.
 */
export async function logSync(input: SyncLogInput): Promise<void> {
  try {
    const supabase = createAdminClient()
    await supabase.from('ghl_sync_log').insert({
      firm_id: input.firmId,
      direction: input.direction,
      entity_type: input.entityType,
      entity_id: input.entityId ?? null,
      ghl_id: input.ghlId ?? null,
      event: input.event,
      status: input.status,
      http_status: input.httpStatus ?? null,
      error: input.error ?? null,
      payload: input.payload ?? null,
    })
  } catch (err) {
    console.error('[ghl] falha ao gravar ghl_sync_log:', err)
  }
}

/** Marca o resultado do último sync na própria integração (aparece na UI). */
export async function touchIntegration(
  firmId: string,
  error: string | null
): Promise<void> {
  try {
    const supabase = createAdminClient()
    await supabase
      .from('ghl_integrations')
      .update({ last_sync_at: new Date().toISOString(), last_error: error })
      .eq('firm_id', firmId)
  } catch (err) {
    console.error('[ghl] falha ao atualizar last_sync_at:', err)
  }
}
