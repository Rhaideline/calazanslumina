import { NextResponse } from 'next/server'

// SEM fallback com o token no codigo. Estava assim ate 16/ago/2026:
//   process.env.GHL_PIT_TOKEN || 'pit-e58d02c5-...'
// O repositorio e PUBLICO, entao o token estava legivel por qualquer pessoa
// no GitHub e em todo o historico de commits. Trocar o valor aqui nao basta:
// ele precisa ser REVOGADO no GHL, porque continua no historico do git.
const GHL_TOKEN = process.env.GHL_PIT_TOKEN
const GHL_LOCATION = process.env.GHL_LOCATION || 'MR3yMqtdBa4732pi4ZCw'

interface LeadPayload {
  nome: string
  whatsapp: string
  email?: string
  source: string
  cidade?: string
  cidadeSlug?: string
  pais?: 'BR' | 'US'
}

export async function POST(req: Request) {
  try {
    const body: LeadPayload = await req.json()
    const { nome, whatsapp, email, source, cidade, cidadeSlug, pais } = body

    // Aceita lead por WhatsApp OU por e-mail. Antes exigia os dois, o que
    // impedia a captura de lista (onde so o e-mail faz sentido pedir).
    if (!nome || (!whatsapp && !email)) {
      return NextResponse.json(
        { error: 'Informe seu nome e ao menos WhatsApp ou e-mail' },
        { status: 400 }
      )
    }

    // Sem o token nao ha como gravar o lead. Falhar explicitamente e melhor
    // que mandar "Bearer undefined" para o GHL e o visitante achar que
    // cadastrou quando o contato nao chegou em lugar nenhum.
    if (!GHL_TOKEN) {
      console.error('[preview-request] GHL_PIT_TOKEN ausente no ambiente')
      return NextResponse.json(
        { error: 'Cadastro indisponível no momento. Tente novamente em instantes.' },
        { status: 503 }
      )
    }

    // whatsapp agora e opcional (captura de lista manda so e-mail)
    const phoneClean = (whatsapp || '').replace(/\D/g, '')
    const countryCode = pais === 'US' ? '1' : '55'
    const phoneFull = phoneClean
      ? (phoneClean.startsWith(countryCode) ? phoneClean : `${countryCode}${phoneClean}`)
      : ''

    // A tag antiga marcava TODO lead como "preview-ia-completo", inclusive os
    // que vem da lista. Agora so quem vem do preview leva essa tag.
    const daLista = source.startsWith('lista-')
    const tagsBase = daLista
      ? ['lista-email', source]
      : ['preview-ia-completo', 'lead-magnet', source]
    if (cidadeSlug) tagsBase.push(`cidade-${cidadeSlug}`)
    if (pais) tagsBase.push(`pais-${pais.toLowerCase()}`)

    const ghlPayload = {
      locationId: GHL_LOCATION,
      firstName: nome.split(' ')[0],
      lastName: nome.split(' ').slice(1).join(' ') || '',
      // so manda o telefone quando existe — senao ia "+" sozinho para o GHL
      ...(phoneFull && { phone: `+${phoneFull}` }),
      ...(email && { email }),
      ...(cidade && { city: cidade }),
      tags: tagsBase,
      source: cidadeSlug ? `site-ia-preview-${cidadeSlug}` : 'site-ia-preview',
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
