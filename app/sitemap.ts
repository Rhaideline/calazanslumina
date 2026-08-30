import type { MetadataRoute } from 'next'
import { cidadesMA } from '@/data/cidades-ma'
import { capitaisBR } from '@/data/capitais-br'
import { cidadesBrasil } from '@/data/cidades-brasil'
import { todasCidades } from '@/data/todas-cidades'
import { servicos } from '@/data/servicos'
import { cursos } from '@/data/cursos'
import { blogPosts } from '@/data/blog'
import { projetos } from '@/data/portfolio'

const BASE = 'https://calazanslumina.com.br'

// Data fixa do ultimo update significativo do site.
// Google so respeita lastmod quando e estavel — usar new Date() faz com que
// cada build mude todas as datas, o que sinaliza "ruido" e Google ignora.
const SITE_LAST_UPDATE = '2026-05-28T00:00:00.000Z'

// Sitemap focado em ~1.000+ URLs com conteudo realmente unico.
// Paginas que NAO estao no sitemap continuam servindo 200 normalmente —
// so saem do crawl prioritario do Google. As paginas program. nao listadas
// (cidades BR alem das top 200) podem ser indexadas via links internos.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = SITE_LAST_UPDATE

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/sobre`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/contato`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/cursos`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE}/servicos`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/para-agencias`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ia-preview`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Paginas legais: prioridade baixa porque nao sao de trafego, mas PRECISAM
    // estar no sitemap — sao sinal de Trustworthiness no E-E-A-T, e o Google
    // usa a existencia delas pra avaliar legitimidade do negocio.
    { url: `${BASE}/privacidade`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/termos`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Projetos do portfolio
  const portfolioPages: MetadataRoute.Sitemap = projetos.map((p) => ({
    url: `${BASE}/portfolio/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Cursos individuais (9)
  const cursosPages: MetadataRoute.Sitemap = cursos.map((c) => ({
    url: `${BASE}/cursos/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Servicos individuais (5)
  const servicosPages: MetadataRoute.Sitemap = servicos.map((s) => ({
    url: `${BASE}/servicos/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Blog posts editoriais
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 22 cidades MA (com conteudo unico: Boston Scientific, Raytheon, demografia)
  const cidadesMAPages: MetadataRoute.Sitemap = cidadesMA.map((c) => ({
    url: `${BASE}/cidades/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // 22 cidades MA x 5 servicos = 110 URLs
  const cidadesMAServicosPages: MetadataRoute.Sitemap = cidadesMA.flatMap((c) =>
    servicos.map((s) => ({
      url: `${BASE}/cidades/${c.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    }))
  )

  // ═══════════════════════════════════════════════════════════════════
  // TODAS as cidades BR (capitais + interior) e TODAS as combinacoes com
  // servico. Antes o sitemap declarava so as 27 capitais x 5 servicos e as
  // top 200 cidades sem servico — ~2.980 URLs de ~12.000 geradas.
  //
  // POR QUE MUDOU (dados do Search Console, 12 meses, lidos em 01/ago/2026):
  //   dentro do sitemap ..... 832 paginas, 142 cliques, 16.498 impressoes
  //   FORA do sitemap ..... 3.751 paginas, 302 cliques, 20.083 impressoes
  //   -> 68% dos cliques vinham de paginas NAO declaradas.
  //
  // A curadoria antiga priorizava capitais, mas quem performa e o interior
  // (Jaragua do Sul, Foz do Iguacu, Ipatinga, Pinhais, Serra, Betim,
  // Balneario Camboriu). Essas paginas ja estao indexadas — declara-las nao
  // pede indexacao nova, so para de esconder o que ja funciona.
  //
  // Limite do protocolo: 50.000 URLs / 50 MB por arquivo. ~11.800 URLs dao
  // ~2,4 MB — cabe folgado em um sitemap so. Se um dia passar de 50k, usar
  // generateSitemaps() do Next.
  // ═══════════════════════════════════════════════════════════════════
  const todasCidadesBR = [...capitaisBR, ...cidadesBrasil]

  const cidadesBRPages: MetadataRoute.Sitemap = todasCidadesBR.map((c) => ({
    url: `${BASE}/brasil/${c.slug}`,
    lastModified: now,
    // capitais mantem prioridade maior; interior entra em 0.7
    changeFrequency: 'monthly' as const,
    priority: capitaisBR.some((cap) => cap.slug === c.slug) ? 0.8 : 0.7,
  }))

  const cidadesBRServicosPages: MetadataRoute.Sitemap = todasCidadesBR.flatMap((c) =>
    servicos.map((s) => ({
      url: `${BASE}/brasil/${c.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    }))
  )

  // 9 cursos x 22 cidades MA = 198 URLs (Local SEO real)
  const cursosCidadesMAPages: MetadataRoute.Sitemap = cursos.flatMap((curso) =>
    cidadesMA.map((c) => ({
      url: `${BASE}/cursos/${curso.slug}/cidade/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  // cursos x TODAS as cidades BR. Era so x capitais (297 URLs), mas as paginas
  // de curso x cidade do INTERIOR sao a maior fonte de clique do site inteiro
  // (232 dos 440 cliques em 12 meses) e nenhuma estava declarada.
  const cursosCidadesBRPages: MetadataRoute.Sitemap = cursos.flatMap((curso) =>
    todasCidadesBR.map((c) => ({
      url: `${BASE}/cursos/${curso.slug}/brasil/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  // /ia-preview/[cidade] — isca de lead por cidade (amostra gratis do curso de
  // IA). Declara robots:{index:true,follow:true} e canonical proprio, entao e
  // pagina indexavel de verdade, nao variante de teste. Mesma fonte de cidades
  // que a rota usa (todasCidades = capitais + interior BR + MA).
  const iaPreviewPages: MetadataRoute.Sitemap = todasCidades.map((c) => ({
    url: `${BASE}/ia-preview/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Enxoval por cidade BR. A pagina de cada cidade nao e a nacional com o slug
  // trocado: clima do estado muda a quantidade de cada peca, a regiao muda o
  // mes de fechar o enxoval, o porte muda o conselho de loja fisica, e item
  // sem sentido no calor sai da lista. Ver lib/enxoval-local.ts.
  const enxovalCidadesPages: MetadataRoute.Sitemap = todasCidadesBR.map((c) => ({
    url: `${BASE}/enxoval-de-bebe/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: capitaisBR.some((cap) => cap.slug === c.slug) ? 0.8 : 0.7,
  }))

  // Contagens conferidas em 01/ago/2026 contra os datasets.
  return [
    // Checklist de enxoval: era a pagina de maior trafego do site e voltou como
    // isca de e-mail (ver middleware.ts). Declarada porque a busca por ela
    // existe e e a que mais perdeu clique quando saiu do ar.
    {
      url: `${BASE}/checklist-enxoval-bebe`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Guia do Google Meu Negocio: passo a passo completo em HTML + PDF gratuito.
    // Prioridade alta porque "como criar google meu negocio" e busca de volume
    // constante do publico deste site — negocio local que vai fazer sozinho.
    {
      url: `${BASE}/como-criar-google-meu-negocio`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    // Hub nacional do enxoval, com vitrine de produto e preco.
    {
      url: `${BASE}/enxoval-de-bebe`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    ...staticPages,            // 11 (8 + 3 legais)
    ...portfolioPages,         // 5
    ...cursosPages,            // 11
    ...servicosPages,          // 5
    ...blogPages,              // ~65
    ...cidadesMAPages,         // 125
    ...cidadesMAServicosPages, // 125 x 5 = 625
    ...cidadesBRPages,         // 27 capitais + 539 interior = 566
    ...cidadesBRServicosPages, // 566 x 5 = 2.830
    ...cursosCidadesMAPages,   // 11 x 125 = 1.375
    ...cursosCidadesBRPages,   // 11 x 566 = 6.226
    ...iaPreviewPages,         // 691 (566 BR + 125 MA)
    ...enxovalCidadesPages,    // 566 (27 capitais + 539 interior)
    // TOTAL: ~13.107 URLs — TODAS as paginas indexaveis do site.
    //
    // As unicas rotas geradas que NAO entram, e por motivo tecnico:
    //  · /ia-completo — o canonical dela aponta p/ /cursos/ia-chatgpt-completo
    //    (mesma LP do mesmo curso). Declarar no sitemap uma URL que canonicaliza
    //    p/ outra manda sinais contraditorios ao Google.
    //  · /cursos/acesso/* — bloqueada no robots.txt. URL no sitemap + Disallow
    //    gera erro de cobertura no Search Console.
    //  · /cases, /projetos, /ferramentas, /videos — sao 301, nao paginas.
    //  · /cursos/[slug]/aprender e /download — renderizadas sob demanda,
    //    conteudo de aluno.
  ]
}
