/**
 * Reenvio manual para o GHL, a partir do painel.
 *
 * O escritório é deduzido da SESSÃO, nunca do corpo do request: se viesse
 * do body, um advogado logado poderia disparar sync no escritório do vizinho.
 */

import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { syncCase, syncClient, syncDeadline } from '@/lib/ghl/sync'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface SyncBody {
  entity?: 'client' | 'case' | 'deadline'
  id?: string
}

export async function POST(req: Request) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Nao autenticado.' }, { status: 401 })
    }

    const { data: membership } = await supabase
      .from('firm_members')
      .select('firm_id, role')
      .eq('user_id', user.id)
      .eq('is_active', true)
      .maybeSingle()

    if (!membership) {
      return NextResponse.json({ error: 'Usuario sem escritorio ativo.' }, { status: 403 })
    }

    const body = (await req.json()) as SyncBody
    if (!body.id || !body.entity) {
      return NextResponse.json({ error: 'Informe entity e id.' }, { status: 400 })
    }

    const firmId = membership.firm_id
    const result =
      body.entity === 'client' ? await syncClient(firmId, body.id) :
      body.entity === 'case' ? await syncCase(firmId, body.id) :
      body.entity === 'deadline' ? await syncDeadline(firmId, body.id) :
      null

    if (!result) {
      return NextResponse.json({ error: 'entity invalida.' }, { status: 400 })
    }

    if (result.skipped) {
      // 200 e não erro: "integração desligada" é uma escolha do escritório,
      // não uma falha que mereça alarme na tela.
      return NextResponse.json({ success: true, skipped: true, reason: result.error })
    }

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 502 })
    }

    return NextResponse.json({ success: true, ghlId: result.ghlId })
  } catch (err) {
    console.error('[ghl/sync] erro inesperado:', err)
    return NextResponse.json({ error: 'Erro interno.' }, { status: 500 })
  }
}
