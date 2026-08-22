/**
 * Passo 1 do OAuth do Docketwise: manda o escritório autorizar.
 *
 * Abrir esta URL no navegador uma única vez, logado no Docketwise. O `state`
 * é gerado aqui e conferido no callback — sem isso, um terceiro consegue
 * fazer a ponte trocar um code dele por tokens (CSRF de autorização).
 *
 * Protegido por PONTE_ADMIN_TOKEN: quem abrir esta rota está iniciando uma
 * concessão de acesso ao sistema do escritório.
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'
import { randomBytes } from 'node:crypto'
import { urlDeAutorizacao } from '../../lib/docketwise'
import { CHAVES, gravar } from '../../lib/store'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const adminToken = process.env.PONTE_ADMIN_TOKEN
  if (!adminToken) {
    return res.status(503).json({ erro: 'PONTE_ADMIN_TOKEN ausente no ambiente.' })
  }

  const informado = typeof req.query.token === 'string' ? req.query.token : ''
  if (informado !== adminToken) {
    return res.status(401).json({ erro: 'Token de administracao invalido.' })
  }

  try {
    const state = randomBytes(16).toString('hex')
    await gravar(CHAVES.estadoOauth, state)
    return res.redirect(302, urlDeAutorizacao(state))
  } catch (err) {
    return res.status(500).json({ erro: (err as Error).message })
  }
}
