import type { MetadataRoute } from 'next'
import { cidadesMA } from '@/data/cidades-ma'
import { capitaisBR } from '@/data/capitais-br'
import { cidadesBrasil } from '@/data/cidades-brasil'
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

  // TOP 200 cidades BR (das 439) — capitais regionais com maior populacao
  // brasileira / clientes potenciais. As outras 239 ficam fora do sitemap
  // mas continuam servindo 200 e podem ser indexadas via crawl natural.
  const cidadesBrasilTop = cidadesBrasil.slice(0, 200)

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/sobre`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/contato`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/cursos`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE}/servicos`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/para-agencias`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
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

  // 27 capitais BR
  const capitaisPages: MetadataRoute.Sitemap = capitaisBR.map((c) => ({
    url: `${BASE}/brasil/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // 27 capitais BR x 5 servicos = 135 URLs
  const capitaisServicosPages: MetadataRoute.Sitemap = capitaisBR.flatMap((c) =>
    servicos.map((s) => ({
      url: `${BASE}/brasil/${c.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    }))
  )

  // TOP 200 cidades BR (sem combinacao com servicos pra nao explodir o sitemap)
  const cidadesBRTopPages: MetadataRoute.Sitemap = cidadesBrasilTop.map((c) => ({
    url: `${BASE}/brasil/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // +100 cidades novas (2026) com conteudo pesquisado e unico por cidade
  // (dados IBGE + vocacao economica real). Ficam no fim do array cidadesBrasil,
  // por isso o slice(-100). Merecem sitemap: conteudo forte para indexar.
  const cidadesBRNovasPages: MetadataRoute.Sitemap = cidadesBrasil.slice(-100).map((c) => ({
    url: `${BASE}/brasil/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 9 cursos x 22 cidades MA = 198 URLs (Local SEO real)
  const cursosCidadesMAPages: MetadataRoute.Sitemap = cursos.flatMap((curso) =>
    cidadesMA.map((c) => ({
      url: `${BASE}/cursos/${curso.slug}/cidade/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  // 9 cursos x 27 capitais BR = 243 URLs (capitais merecem priority no sitemap)
  const cursosCapitaisPages: MetadataRoute.Sitemap = cursos.flatMap((curso) =>
    capitaisBR.map((c) => ({
      url: `${BASE}/cursos/${curso.slug}/brasil/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  return [
    ...staticPages,           // 9
    ...portfolioPages,        // 5
    ...cursosPages,           // 9
    ...servicosPages,         // 5
    ...blogPages,             // ~60
    ...cidadesMAPages,        // 22
    ...cidadesMAServicosPages,// 110
    ...capitaisPages,         // 27
    ...capitaisServicosPages, // 135
    ...cidadesBRTopPages,     // 200
    ...cidadesBRNovasPages,   // 100 (novas 2026, conteudo pesquisado)
    ...cursosCidadesMAPages,  // 198
    ...cursosCapitaisPages,   // 243
    // TOTAL: ~1.118 URLs
  ]
}
