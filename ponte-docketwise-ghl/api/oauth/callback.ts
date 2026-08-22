/**
 * Passo 2 do OAuth do Docketwise: recebe o `code` e guarda os tokens.
 *
 * Esta é a URL que precisa ser registrada como redirect URI no pedido de
 * acesso à API (o e-mail para dev@docketwise.com).
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'
import { trocarCodigoPorToken } from '../../lib/docketwise'
import { armazenamentoPersistente, CHAVES, ler } from '../../lib/store'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const code = typeof req.query.code === 'string' ? req.query.code : null
  const state = typeof req.query.state === 'string' ? req.query.state : null
  const erroOauth = typeof req.query.error === 'string' ? req.query.error : null

  if (erroOauth) {
    return res.status(400).send(pagina('Autorizacao recusada', erroOauth))
  }
  if (!code) {
    return res.status(400).send(pagina('Faltou o code', 'O Docketwise nao devolveu o parametro code.'))
  }

  const esperado = await ler(CHAVES.estadoOauth)
  if (!esperado || state !== esperado) {
    return res.status(400).send(pagina(
      'State invalido',
      'A autorizacao nao casou com a que foi iniciada aqui. Recomece por /api/oauth/start.'
    ))
  }

  try {
    await trocarCodigoPorToken(code)
  } catch (err) {
    return res.status(502).send(pagina('Falhou a troca de token', (err as Error).message))
  }

  const aviso = armazenamentoPersistente()
    ? ''
    : 'Atencao: sem Upstash configurado, este token vive em memoria e some no proximo cold start.'

  return res.status(200).send(pagina('Docketwise conectado', `A ponte ja pode escrever no escritorio. ${aviso}`))
}

function pagina(titulo: string, mensagem: string): string {
  const esc = (s: string) => s.replace(/[<>&"]/g, (c) =>
    ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' })[c] ?? c)
  return `<!doctype html><meta charset="utf-8"><title>${esc(titulo)}</title>
<body style="font:16px/1.6 system-ui;max-width:38rem;margin:12vh auto;padding:0 1.5rem;color:#141a24">
<h1 style="font-size:1.4rem;margin:0 0 .5rem">${esc(titulo)}</h1>
<p style="color:#5a6472;margin:0">${esc(mensagem)}</p>
</body>`
}
