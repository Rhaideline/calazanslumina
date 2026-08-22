/**
 * Diagnóstico da ponte: o que está configurado, sem revelar nenhum segredo.
 *
 * É a primeira coisa a abrir quando "não chegou no Docketwise": em geral a
 * resposta está aqui — falta uma variável ou o OAuth nunca foi feito.
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'
import { armazenamentoPersistente, CHAVES, ler } from '../lib/store'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const adminToken = process.env.PONTE_ADMIN_TOKEN
  if (!adminToken || req.query.token !== adminToken) {
    return res.status(401).json({ erro: 'Nao autorizado.' })
  }

  const [refresh, expiraEm, ultimaVarredura] = await Promise.all([
    ler(CHAVES.refreshToken),
    ler(CHAVES.accessTokenExpiraEm),
    ler(CHAVES.ultimaVarredura),
  ])

  return res.status(200).json({
    docketwise: {
      credenciais_no_ambiente: Boolean(
        process.env.DOCKETWISE_CLIENT_ID && process.env.DOCKETWISE_CLIENT_SECRET
      ),
      redirect_uri: process.env.DOCKETWISE_REDIRECT_URI ?? null,
      autorizado: Boolean(refresh),
      access_token_expira_em: expiraEm ? new Date(Number(expiraEm)).toISOString() : null,
      envelope_do_payload: process.env.DOCKETWISE_PAYLOAD_ENVELOPE ?? 'contact',
      matter_type_id: process.env.DOCKETWISE_MATTER_TYPE_ID ?? null,
    },
    ghl: {
      token_no_ambiente: Boolean(process.env.GHL_PIT_TOKEN),
      location_id: process.env.GHL_LOCATION_ID ?? null,
      campo_id_docketwise: process.env.GHL_CF_DOCKETWISE_ID ?? null,
    },
    webhook: {
      segredo_configurado: Boolean(process.env.PONTE_WEBHOOK_SECRET),
    },
    varredura: {
      armazenamento_persistente: armazenamentoPersistente(),
      ultima: ultimaVarredura,
    },
  })
}
