/**
 * Captação pública: formulário da landing/site -> lead no Law Life -> contato no GHL.
 *
 * Rota aberta de propósito (o visitante não tem login). O que a protege:
 *  - a lead_form_key identifica o escritório sem expor o UUID interno;
 *  - ela só permite CRIAR lead, nunca ler nada;
 *  - rate limit por IP;
 *  - o lead entra no banco ANTES de ir ao GHL. Se o GHL estiver fora do ar,
 *    o lead não se perde — fica no Law Life com ghl_contact_id nulo.
 */

import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { syncClient } from '@/lib/ghl/sync'
import { logSync } from '@/lib/ghl/config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface LeadBody {
  formKey?: string
  nome?: string
  email?: string
  whatsapp?: string
  area?: string
  cidade?: string
  estado?: string
  mensagem?: string
  origem?: string
}

// Rate limit em memória. Serve para conter repetição boba de formulário;
// numa frota com várias instâncias cada uma tem o próprio contador, então
// para abuso sério isso aqui não basta — o limite de verdade é do WAF.
const HITS = new Map<string, { count: number; resetAt: number }>()
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = HITS.get(ip)
  if (!entry || now > entry.resetAt) {
    HITS.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > MAX_PER_WINDOW
}

// o Map cresceria para sempre com IPs que nunca voltam
function sweep() {
  const now = Date.now()
  for (const [ip, entry] of HITS) if (now > entry.resetAt) HITS.delete(ip)
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      'desconhecido'

    if (HITS.size > 5_000) sweep()
    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: 'Muitas tentativas. Aguarde um minuto.' },
        { status: 429 }
      )
    }

    const body = (await req.json()) as LeadBody
    const nome = body.nome?.trim()
    const email = body.email?.trim().toLowerCase()
    const whatsapp = body.whatsapp?.trim()
    const formKey = body.formKey?.trim()

    if (!formKey) {
      return NextResponse.json({ error: 'Formulario nao identificado.' }, { status: 400 })
    }
    if (!nome) {
      return NextResponse.json({ error: 'Informe seu nome.' }, { status: 400 })
    }
    if (!email && !whatsapp) {
      return NextResponse.json(
        { error: 'Informe ao menos e-mail ou WhatsApp.' },
        { status: 400 }
      )
    }
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: 'E-mail invalido.' }, { status: 400 })
    }

    const supabase = createAdminClient()

    const { data: firm } = await supabase
      .from('firms')
      .select('id, is_active')
      .eq('lead_form_key', formKey)
      .maybeSingle()

    // mesma resposta para chave errada e escritório desativado: quem está
    // sondando chaves não descobre quais existem
    if (!firm || !firm.is_active) {
      return NextResponse.json({ error: 'Formulario nao identificado.' }, { status: 404 })
    }

    const { data: lead, error: insertError } = await supabase
      .from('clients')
      .insert({
        firm_id: firm.id,
        full_name: nome,
        person_type: 'PF',
        email: email || null,
        phone: whatsapp || null,
        city: body.cidade || null,
        state: body.estado?.toUpperCase().slice(0, 2) || null,
        status: 'lead',
        origin: body.origem || 'site',
        notes: [
          body.area ? `Area de interesse: ${body.area}` : null,
          body.mensagem ? `Mensagem: ${body.mensagem}` : null,
        ].filter(Boolean).join('\n') || null,
      })
      .select('id')
      .single()

    if (insertError || !lead) {
      console.error('[ghl/lead] falha ao gravar lead:', insertError)
      return NextResponse.json(
        { error: 'Nao consegui registrar seu contato. Tente novamente.' },
        { status: 500 }
      )
    }

    // O lead já está salvo. O GHL daqui em diante é bônus: falhou, o log
    // registra e o escritório reenvia pela tela de integrações.
    const sync = await syncClient(firm.id, lead.id)
    if (!sync.ok) {
      await logSync({
        firmId: firm.id, direction: 'outbound', entityType: 'lead', entityId: lead.id,
        event: 'lead.capture', status: 'error', error: sync.error,
      })
    }

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      ghlContactId: sync.ghlId,
    })
  } catch (err) {
    console.error('[ghl/lead] erro inesperado:', err)
    return NextResponse.json({ error: 'Erro interno.' }, { status: 500 })
  }
}
