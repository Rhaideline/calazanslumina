import type { MetadataRoute } from 'next'
import { cidadesMA } from '@/data/cidades-ma'
import { capitaisBR } from '@/data/capitais-br'
import { cidadesBrasil } from '@/data/cidades-brasil'
import { servicos } from '@/data/servicos'
import { cursos } from '@/data/cursos'
import { blogPosts } from '@/data/blog'

const BASE = 'https://calazanslumina.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  // Páginas estáticas
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/sobre`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contato`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/cursos`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/servicos`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    // indice das cidades brasileiras — criado em 20/set/2026. Ele nao existia,
    // e por isso 209 paginas de cidade e 1.045 de cidade x servico estavam sem
    // nenhum link apontando para elas. Ver app/brasil/page.tsx.
    { url: `${BASE}/brasil`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/projetos`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/para-agencias`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ferramentas`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/enxoval-de-bebe`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ]

  // Cursos
  const cursosPages: MetadataRoute.Sitemap = cursos.map((c) => ({
    url: `${BASE}/cursos/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Serviços
  const servicosPages: MetadataRoute.Sitemap = servicos.map((s) => ({
    url: `${BASE}/servicos/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Blog
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Cidades MA
  const cidadesPages: MetadataRoute.Sitemap = cidadesMA.map((c) => ({
    url: `${BASE}/cidades/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Cidades MA + Serviços
  const cidadesServicosPages: MetadataRoute.Sitemap = cidadesMA.flatMap((c) =>
    servicos.map((s) => ({
      url: `${BASE}/cidades/${c.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  // Capitais BR + Cidades BR
  const allCidadesBR = [...capitaisBR, ...cidadesBrasil]
  const capitaisPages: MetadataRoute.Sitemap = allCidadesBR.map((c) => ({
    url: `${BASE}/brasil/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Capitais BR + Cidades BR + Serviços
  const capitaisServicosPages: MetadataRoute.Sitemap = allCidadesBR.flatMap((c) =>
    servicos.map((s) => ({
      url: `${BASE}/brasil/${c.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  // Cursos × Cidades MA
  const cursosCidadesPages: MetadataRoute.Sitemap = cursos.flatMap((curso) =>
    cidadesMA.map((c) => ({
      url: `${BASE}/cursos/${curso.slug}/cidade/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  // Cursos × Capitais BR + Cidades BR
  const cursosCapitaisPages: MetadataRoute.Sitemap = cursos.flatMap((curso) =>
    allCidadesBR.map((c) => ({
      url: `${BASE}/cursos/${curso.slug}/brasil/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  // Enxoval de Bebê × Cidades BR
  const enxovalCidadesPages: MetadataRoute.Sitemap = allCidadesBR.map((c) => ({
    url: `${BASE}/enxoval-de-bebe/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...cursosPages,
    ...servicosPages,
    ...blogPages,
    // ⚠️ /cidades/* (624 URLs de cidade americana) SAIU DO SITEMAP.
    // Elas passaram a redirecionar 301 para o mesmo caminho no .com — ver o
    // bloco em next.config.ts. URL que redireciona nao deve estar no sitemap:
    // o sitemap diz "indexe isto", e o 301 diz "isto mora noutro lugar". Os
    // dois sinais juntos sao contraditorios e o Google reporta como erro.
    // As paginas continuam no repositorio; para reverter, religar aqui e
    // apagar o redirect.
    ...capitaisPages,
    ...capitaisServicosPages,
    ...cursosCidadesPages,
    ...cursosCapitaisPages,
    ...enxovalCidadesPages,
  ]
}
