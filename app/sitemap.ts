import type { MetadataRoute } from 'next'
import { capitaisBR } from '@/data/capitais-br'
import { cidadesBrasil } from '@/data/cidades-brasil'

const BASE = 'https://calazanslumina.com.br'

// Data fixa do ultimo update significativo do site.
// Google so respeita lastmod quando e estavel — usar new Date() faz com que
// cada build mude todas as datas, o que sinaliza "ruido" e Google ignora.
const SITE_LAST_UPDATE = '2026-08-30T00:00:00.000Z'

/**
 * Sitemap do site de MATERNIDADE.
 *
 * Desde 30/ago/2026 este dominio e so enxoval: todo assunto de agencia
 * responde 301 para o `.com` (ver lib/so-maternidade.ts). Por isso o sitemap
 * encolheu de 13.105 para 572 URLs — declarar URL que redireciona queima
 * crawl budget e atrasa a descoberta do que e novo, que e exatamente o que
 * nao queremos agora, com 566 paginas recem-publicadas esperando indexacao.
 *
 * As ~12.500 URLs que sairam (cursos, servicos, blog, portfolio, cidades
 * MA/BR, brasil/*, ia-preview) seguem vivas no `.com` e sao declaradas no
 * sitemap DE LA.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = SITE_LAST_UPDATE

  const todasCidadesBR = [...capitaisBR, ...cidadesBrasil]

  // Enxoval por cidade. A pagina de cada cidade nao e a nacional com o slug
  // trocado: clima do estado muda a quantidade de cada peca, a regiao muda o
  // mes de fechar o enxoval, o porte muda o conselho de loja fisica, e item
  // sem sentido no calor sai da lista. Ver lib/enxoval-local.ts.
  const enxovalCidadesPages: MetadataRoute.Sitemap = todasCidadesBR.map((c) => ({
    url: `${BASE}/enxoval-de-bebe/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: capitaisBR.some((cap) => cap.slug === c.slug) ? 0.8 : 0.7,
  }))

  return [
    // Hub nacional do enxoval, com vitrine de produto e preco.
    {
      url: `${BASE}/enxoval-de-bebe`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    // A isca de e-mail. Era a pagina de maior trafego do site inteiro, e
    // "lista enxoval de bebe completo pdf 2026" e a consulta que mais perdeu
    // clique quando ela saiu do ar — confirmado pela API do Search Console.
    {
      url: `${BASE}/checklist-enxoval-bebe`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.95,
    },
    // Home. Ainda e a da agencia, por decisao da Rhai em 30/ago — e hoje a
    // unica duplicacao entre este dominio e o `.com`.
    { url: BASE, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    // Paginas legais: prioridade baixa porque nao sao de trafego, mas PRECISAM
    // estar no sitemap — sao sinal de Trustworthiness no E-E-A-T, e o Google
    // usa a existencia delas pra avaliar legitimidade do negocio.
    { url: `${BASE}/privacidade`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE}/termos`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE}/cookies`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    ...enxovalCidadesPages, // 566 (27 capitais + 539 interior)
    // TOTAL: 572 URLs — so o que responde 200 neste dominio.
  ]
}
