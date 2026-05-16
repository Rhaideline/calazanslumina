import { NextResponse } from 'next/server'

const GHL_TOKEN = process.env.GHL_PIT_TOKEN || 'pit-e58d02c5-46d7-49ef-b3fd-89b4ec1db306'
const GHL_LOCATION = process.env.GHL_LOCATION || 'MR3yMqtdBa4732pi4ZCw'

interface LeadPayload {
  nome: string
  whatsapp: string
  email?: string
  source: string
}

export async function POST(req: Request) {
  try {
    const body: LeadPayload = await req.json()
    const { nome, whatsapp, email, source } = body

    if (!nome || !whatsapp) {
      return NextResponse.json({ error: 'Nome e WhatsApp obrigatórios' }, { status: 400 })
    }

    // Normaliza WhatsApp brasileiro
    const phoneClean = whatsapp.replace(/\D/g, '')
    const phoneFull = phoneClean.startsWith('55') ? phoneClean : `55${phoneClean}`

    // Envia pro GHL — Create Contact
    const ghlPayload = {
      locationId: GHL_LOCATION,
      firstName: nome.split(' ')[0],
      lastName: nome.split(' ').slice(1).join(' ') || '',
      phone: `+${phoneFull}`,
      ...(email && { email }),
      tags: ['preview-ia-completo', 'lead-magnet', source],
      source: 'site-ia-preview',
      customFields: [
        { id: 'curso_interesse', value: 'IA do Zero ao Avançado' },
      ],
    }

    const ghlRes = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GHL_TOKEN}`,
        Version: '2021-07-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ghlPayload),
    })

    const ghlData = await ghlRes.json()

    // Log mesmo se GHL falhar (não bloqueia o usuário)
    if (!ghlRes.ok) {
      console.error('GHL erro:', ghlData)
    }

    return NextResponse.json({
      success: true,
      contactId: ghlData?.contact?.id || null,
    })
  } catch (err) {
    console.error('preview-request erro:', err)
    return NextResponse.json(
      { error: 'Erro interno', detail: err instanceof Error ? err.message : 'unknown' },
      { status: 500 }
    )
  }
}
