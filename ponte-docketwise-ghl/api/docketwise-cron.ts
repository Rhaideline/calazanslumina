/**
 * Docketwise -> GHL.
 *
 * O Docketwise não avisa quando algo muda, então a ponte pergunta: a cada 15
 * minutos varre os matters, pega os que mudaram desde a última passada e
 * reflete no GHL como tag `caso-<status>` no contato. É a tag que dispara o
 * workflow de WhatsApp/e-mail daquele momento do caso.
 *
 * Chamada pelo Vercel Cron (vercel.json). Para rodar na mão:
 *   GET /api/docketwise-cron?token=<PONTE_ADMIN_TOKEN>
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'
import { listarMatters, type MatterDocketwise } from '../lib/docketwise'
import * as ghl from '../lib/ghl'
import { CHAVES, gravar, ler } from '../lib/store'

const PREFIXO_TAG = process.env.GHL_PREFIXO_TAG_CASO ?? 'caso'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!autorizado(req)) return res.status(401).json({ erro: 'Nao autorizado.' })

  const marcador = await ler(CHAVES.ultimaVarredura)
  const agora = new Date().toISOString()

  const resposta = await listarMatters()
  if (!resposta.ok || !resposta.data) {
    return res.status(502).json({ ok: false, erro: resposta.erro })
  }

  const matters = Array.isArray(resposta.data)
    ? resposta.data
    : (resposta.data.matters ?? [])

  // Primeira execução: só marca o ponto de partida. Sem isso, a estreia
  // empurraria a base inteira de casos para o GHL de uma vez — e cada tag
  // dispararia o workflow, mandando mensagem para todo cliente antigo.
  if (!marcador) {
    await gravar(CHAVES.ultimaVarredura, agora)
    return res.status(200).json({
      ok: true,
      primeira_execucao: true,
      matters_vistos: matters.length,
      mensagem: 'Marco inicial gravado. A partir daqui so o que mudar e enviado.',
    })
  }

  const corte = new Date(marcador).getTime()
  const mudaram = matters.filter((m) => {
    if (!m.updated_at) return false
    return new Date(m.updated_at).getTime() > corte
  })

  const resultados: Array<{ matter: number; ok: boolean; detalhe: string }> = []

  for (const matter of mudaram) {
    const email = emailPrincipal(matter)
    if (!email) {
      resultados.push({ matter: matter.id, ok: false, detalhe: 'matter sem contato com e-mail' })
      continue
    }

    const status = nomeDoStatus(matter)
    if (!status) {
      resultados.push({ matter: matter.id, ok: false, detalhe: 'matter sem status legivel' })
      continue
    }

    const upsert = await ghl.upsertContato({
      email,
      tags: [`${PREFIXO_TAG}-${slug(status)}`],
      source: 'docketwise',
    })

    resultados.push({
      matter: matter.id,
      ok: upsert.ok,
      detalhe: upsert.ok ? `tag ${PREFIXO_TAG}-${slug(status)}` : (upsert.erro ?? 'erro'),
    })
  }

  // O marcador só avança se tudo passou. Avançar com falha no meio faria a
  // ponte pular de vez o caso que não subiu — e ninguém ia notar.
  const todosOk = resultados.every((r) => r.ok)
  if (todosOk) await gravar(CHAVES.ultimaVarredura, agora)

  return res.status(200).json({
    ok: todosOk,
    desde: marcador,
    matters_alterados: mudaram.length,
    enviados: resultados.filter((r) => r.ok).length,
    marcador_avancou: todosOk,
    resultados,
  })
}

function autorizado(req: VercelRequest): boolean {
  // O Vercel Cron manda o CRON_SECRET no Authorization
  const cronSecret = process.env.CRON_SECRET
  if (cronSecret && req.headers.authorization === `Bearer ${cronSecret}`) return true

  const adminToken = process.env.PONTE_ADMIN_TOKEN
  if (adminToken && req.query.token === adminToken) return true

  // Sem nenhum segredo configurado a rota fica aberta: melhor recusar e
  // deixar claro no log do que expor a base de casos.
  if (!cronSecret && !adminToken) {
    console.error('[cron] nem CRON_SECRET nem PONTE_ADMIN_TOKEN configurados')
  }
  return false
}

function emailPrincipal(matter: MatterDocketwise): string | null {
  const contatos = matter.contacts ?? []
  for (const c of contatos) {
    if (typeof c.email === 'string' && c.email.includes('@')) return c.email.toLowerCase()
  }
  return null
}

function nomeDoStatus(matter: MatterDocketwise): string | null {
  const s = matter.matter_status
  if (typeof s === 'string') return s
  if (s && typeof s === 'object' && typeof s.name === 'string') return s.name
  return null
}

function slug(valor: string): string {
  return valor
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
