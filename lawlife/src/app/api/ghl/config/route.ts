/**
 * Configuração da integração — só admin do escritório.
 *
 * O token do GHL entra por aqui, é cifrado pelo Postgres (pgp_sym_encrypt,
 * via ghl_store_token) e NUNCA volta em GET. O GET devolve os últimos 4
 * dígitos apenas para a pessoa reconhecer qual token está ativo.
 */

import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface ConfigBody {
  locationId?: string
  token?: string
  webhookSecret?: string
  pipelineId?: string | null
  calendarId?: string | null
  stageMap?: Record<string, string>
  customFieldMap?: Record<string, string>
  defaultTags?: string[]
  isActive?: boolean
  syncClients?: boolean
  syncCases?: boolean
  syncDeadlines?: boolean
}

async function requireFirmAdmin() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: NextResponse.json({ error: 'Nao autenticado.' }, { status: 401 }) }

  const { data: membership } = await supabase
    .from('firm_members')
    .select('firm_id, role')
    .eq('user_id', user.id)
    .eq('is_active', true)
    .maybeSingle()

  if (!membership) {
    return { error: NextResponse.json({ error: 'Usuario sem escritorio ativo.' }, { status: 403 }) }
  }
  if (!['firm_admin', 'super_admin'].includes(membership.role)) {
    return { error: NextResponse.json({ error: 'Apenas administradores.' }, { status: 403 }) }
  }
  return { firmId: membership.firm_id as string }
}

export async function GET() {
  const auth = await requireFirmAdmin()
  if ('error' in auth) return auth.error

  const admin = createAdminClient()
  const { data: integration } = await admin
    .from('ghl_integrations')
    .select('*')
    .eq('firm_id', auth.firmId)
    .maybeSingle()

  const { data: cred } = await admin
    .from('ghl_credentials')
    .select('token_hint, rotated_at')
    .eq('firm_id', auth.firmId)
    .maybeSingle()

  const { data: firm } = await admin
    .from('firms')
    .select('lead_form_key')
    .eq('id', auth.firmId)
    .maybeSingle()

  return NextResponse.json({
    integration: integration ?? null,
    tokenHint: cred?.token_hint ?? null,
    tokenRotatedAt: cred?.rotated_at ?? null,
    leadFormKey: firm?.lead_form_key ?? null,
  })
}

export async function POST(req: Request) {
  const auth = await requireFirmAdmin()
  if ('error' in auth) return auth.error

  try {
    const body = (await req.json()) as ConfigBody
    if (!body.locationId?.trim()) {
      return NextResponse.json({ error: 'Informe o Location ID da sub-conta.' }, { status: 400 })
    }

    const admin = createAdminClient()

    const { error: upsertError } = await admin
      .from('ghl_integrations')
      .upsert({
        firm_id: auth.firmId,
        location_id: body.locationId.trim(),
        pipeline_id: body.pipelineId || null,
        calendar_id: body.calendarId || null,
        stage_map: body.stageMap ?? {},
        custom_field_map: body.customFieldMap ?? {},
        default_tags: body.defaultTags?.length ? body.defaultTags : ['lawlife'],
        is_active: body.isActive ?? true,
        sync_clients: body.syncClients ?? true,
        sync_cases: body.syncCases ?? true,
        sync_deadlines: body.syncDeadlines ?? false,
      }, { onConflict: 'firm_id' })

    if (upsertError) {
      console.error('[ghl/config] falha no upsert:', upsertError)
      return NextResponse.json({ error: 'Nao consegui salvar a configuracao.' }, { status: 500 })
    }

    // Token em branco = "mantém o que já está lá". É o caso de quem só
    // mexeu no pipeline e não quer redigitar a credencial.
    if (body.token?.trim()) {
      const encryptionKey = process.env.GHL_CRED_ENCRYPTION_KEY
      if (!encryptionKey) {
        return NextResponse.json(
          { error: 'Servidor sem GHL_CRED_ENCRYPTION_KEY — token nao pode ser guardado com seguranca.' },
          { status: 503 }
        )
      }
      const { error: credError } = await admin.rpc('ghl_store_token', {
        p_firm_id: auth.firmId,
        p_token: body.token.trim(),
        p_webhook_secret: body.webhookSecret?.trim() || null,
        p_encryption_key: encryptionKey,
      })
      if (credError) {
        console.error('[ghl/config] falha ao guardar token:', credError)
        return NextResponse.json({ error: 'Nao consegui guardar o token.' }, { status: 500 })
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[ghl/config] erro inesperado:', err)
    return NextResponse.json({ error: 'Erro interno.' }, { status: 500 })
  }
}
