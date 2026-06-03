import type { MetadataRoute } from 'next'
import { cidadesMA } from '@/data/cidades-ma'
import { servicos } from '@/data/servicos'
import { cursos } from '@/data/cursos'
import { blogPosts } from '@/data/blog'

const BASE = 'https://calazanslumina.com.br'

// Data fixa do ultimo update significativo do site.
// Google so respeita lastmod quando e estavel — usar new Date() faz com que
// cada build mude todas as datas, o que sinaliza "ruido" e Google ignora.
// Atualize esta string quando houver mudancas relevantes em conteudo/dados.
const SITE_LAST_UPDATE = '2026-05-28T00:00:00.000Z'

// Sitemap focado: so URLs com conteudo realmente unico (core + cursos +
// servicos + blog + cases + 22 cidades MA com pesquisa de campo).
// As paginas /brasil/[capital]/*, /cursos/[slug]/brasil/[capital],
// /cursos/[slug]/cidade/[cidade] e /cidades/[cidade]/[servico] continuam
// servindo (200) mas saem do sitemap pra evitar diluicao de crawl budget
// e sinal de "scaled content" pro Google.
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
    { url: `${BASE}/cases`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/videos`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
  ]

  const cursosPages: MetadataRoute.Sitemap = cursos.map((c) => ({
    url: `${BASE}/cursos/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const servicosPages: MetadataRoute.Sitemap = servicos.map((s) => ({
    url: `${BASE}/servicos/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 22 cidades MA — TODAS tem pesquisa de campo unica (Boston Scientific,
  // Raytheon, demografia Census, dor especifica). Local SEO real, nao programatic.
  const cidadesMAPages: MetadataRoute.Sitemap = cidadesMA.map((c) => ({
    url: `${BASE}/cidades/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [
    ...staticPages,
    ...cursosPages,
    ...servicosPages,
    ...blogPages,
    ...cidadesMAPages,
  ]
}
