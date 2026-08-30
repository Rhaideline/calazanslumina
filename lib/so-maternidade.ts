import type { Redirect } from 'next/dist/lib/load-custom-routes'

/**
 * O `.com.br` passa a ser o site de maternidade, e so isso.
 *
 * A decisao (30/ago/2026): enxoval mora no `.com.br`; marketing e o mercado
 * americano moram no `.com`. Antes deste arquivo o dominio inteiro caia num
 * 301 curinga para a home do `.com` — inclusive as paginas de enxoval, que
 * por isso nasciam inalcancaveis.
 *
 * O que fica AQUI (nao redireciona):
 *   /                          — home do site de maternidade
 *   /enxoval-de-bebe/*         — hub nacional + 566 cidades
 *   /checklist-enxoval-bebe    — a isca de e-mail, pagina de maior trafego
 *   /privacidade /termos /cookies — exigencia legal, tem que responder aqui
 *   /api/*                     — captura de lead
 *
 * O que VAI para o `.com`: todo o resto — cursos, servicos, blog, portfolio,
 * cidades da agencia, para-agencias, sobre, contato. Sao ~12 mil URLs que o
 * `.com` ja serve, entao mandar para la e consolidar, nao perder.
 *
 * Por que 301 (permanent) e nao 302: a mudanca e definitiva e queremos que a
 * autoridade dessas URLs va para o `.com` de uma vez.
 */

const COM = 'https://calazanslumina.com'

export const soMaternidade: Redirect[] = [
  // ── canonical do proprio dominio ────────────────────────────────────
  {
    source: '/:path*',
    has: [{ type: 'host', value: 'www.calazanslumina.com.br' }],
    destination: 'https://calazanslumina.com.br/:path*',
    permanent: true,
  },

  // ── assunto de agencia: vai inteiro para o .com, com o caminho preservado ──
  // Preservar o caminho importa: /blog/x cair na home do .com perderia a
  // pagina especifica que ja rankeava la.
  { source: '/blog/:slug', destination: `${COM}/blog/:slug`, permanent: true },
  { source: '/blog', destination: `${COM}/blog`, permanent: true },
  { source: '/servicos/:slug', destination: `${COM}/servicos/:slug`, permanent: true },
  { source: '/servicos', destination: `${COM}/servicos`, permanent: true },
  { source: '/portfolio/:slug', destination: `${COM}/portfolio/:slug`, permanent: true },
  { source: '/portfolio', destination: `${COM}/portfolio`, permanent: true },
  { source: '/cidades/:cidade/:servico', destination: `${COM}/cidades/:cidade/:servico`, permanent: true },
  { source: '/cidades/:cidade', destination: `${COM}/cidades/:cidade`, permanent: true },
  { source: '/sobre', destination: `${COM}/sobre`, permanent: true },
  { source: '/contato', destination: `${COM}/contato`, permanent: true },
  { source: '/para-agencias', destination: `${COM}/para-agencias`, permanent: true },

  // Curso e a arvore de curso x cidade nao existem no `.com` (saíram de la em
  // 28/ago). O assunto equivalente que sobrou e servico.
  { source: '/cursos/:path*', destination: `${COM}/servicos`, permanent: true },
  { source: '/cursos', destination: `${COM}/servicos`, permanent: true },
  { source: '/ia-completo', destination: `${COM}/servicos`, permanent: true },
  { source: '/ia-preview/:path*', destination: `${COM}/servicos`, permanent: true },
  { source: '/ia-preview', destination: `${COM}/servicos`, permanent: true },
  { source: '/brasil/:cidade/:servico', destination: `${COM}/servicos/:servico`, permanent: true },
  { source: '/brasil/:cidade', destination: `${COM}/servicos`, permanent: true },
  { source: '/como-criar-google-meu-negocio', destination: `${COM}/servicos`, permanent: true },

  // ── redirects internos que ja existiam ──────────────────────────────
  { source: '/projetos', destination: `${COM}/portfolio`, permanent: true },
  { source: '/cases', destination: `${COM}/portfolio`, permanent: true },
  { source: '/ferramentas', destination: `${COM}/servicos`, permanent: true },
  { source: '/videos', destination: `${COM}/servicos`, permanent: true },
]
