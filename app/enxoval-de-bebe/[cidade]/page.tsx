import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CapturaEmail from '@/components/CapturaEmail'
import EnxovalConteudo from '@/components/EnxovalConteudo'
import { capitaisBR } from '@/data/capitais-br'
import { cidadesBrasil } from '@/data/cidades-brasil'
import { blocoEnxovalCidade, type CidadeEnxoval } from '@/lib/enxoval-local'

/**
 * Enxoval por cidade brasileira.
 *
 * A pagina nao e a nacional com o nome trocado: clima do estado muda a
 * QUANTIDADE de cada peca, regiao muda o mes de fechar o enxoval, porte da
 * cidade muda o conselho de loja fisica e de segunda mao, e o FAQ carrega
 * fato local. Cidade de calor perde a manta da lista em vez de exibi-la
 * com quantidade zero. Ver lib/enxoval-local.ts.
 */

const CIDADES: CidadeEnxoval[] = [
  ...capitaisBR.map((c) => ({
    slug: c.slug, nome: c.nome, estado: c.estado,
    siglaEstado: c.siglaEstado, populacao: c.populacao,
  })),
  ...cidadesBrasil.map((c) => ({
    slug: c.slug, nome: c.nome, estado: c.estado,
    siglaEstado: c.siglaEstado, populacao: c.populacao,
  })),
]

const porSlug = new Map(CIDADES.map((c) => [c.slug, c]))

export function generateStaticParams() {
  return CIDADES.map((c) => ({ cidade: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cidade: string }>
}): Promise<Metadata> {
  const { cidade: slug } = await params
  const cidade = porSlug.get(slug)
  if (!cidade) return {}
  const b = blocoEnxovalCidade(cidade)
  const url = `https://calazanslumina.com.br/enxoval-de-bebe/${slug}`
  return {
    title: b.title,
    description: b.description,
    alternates: { canonical: url },
    openGraph: { title: b.title, description: b.description, url, type: 'article' },
  }
}

export default async function EnxovalCidadePage({
  params,
}: {
  params: Promise<{ cidade: string }>
}) {
  const { cidade: slug } = await params
  const cidade = porSlug.get(slug)
  if (!cidade) notFound()

  const b = blocoEnxovalCidade(cidade)
  const url = `https://calazanslumina.com.br/enxoval-de-bebe/${slug}`

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: b.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Enxoval de bebê', item: 'https://calazanslumina.com.br/enxoval-de-bebe' },
      { '@type': 'ListItem', position: 2, name: `${cidade.nome}, ${cidade.siglaEstado}`, item: url },
    ],
  }

  const vizinhas = CIDADES.filter(
    (c) => c.siglaEstado === cidade.siglaEstado && c.slug !== cidade.slug,
  ).slice(0, 12)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-3xl">
          <p className="text-brand-mint text-xs font-bold tracking-[0.22em] uppercase mb-4">
            {cidade.nome} · {cidade.siglaEstado}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6">
            {b.h1}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">{b.description}</p>
        </div>
      </section>

      <EnxovalConteudo local={b} />

      {vizinhas.length > 0 && (
        <section className="section-padding bg-brand-bg">
          <div className="container-main max-w-3xl">
            <h2 className="heading-2 text-brand-dark mb-3">Outras cidades de {cidade.estado}</h2>
            <div className="w-14 h-1 bg-brand-mint mb-6" />
            <div className="flex flex-wrap gap-2">
              {vizinhas.map((c) => (
                <Link
                  key={c.slug}
                  href={`/enxoval-de-bebe/${c.slug}`}
                  className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-brand-dark/70 hover:border-brand-mint hover:text-brand-mint transition-colors bg-white"
                >
                  {c.nome}
                </Link>
              ))}
            </div>
            <p className="mt-6">
              <Link href="/enxoval-de-bebe" className="text-brand-mint font-semibold text-sm hover:underline">
                Ver a lista nacional completa →
              </Link>
            </p>
          </div>
        </section>
      )}

      <section className="pb-24 pt-16">
        <div className="container-main max-w-3xl">
          <CapturaEmail
            origem="enxoval-cidade"
            cidade={cidade.nome}
            isca="checklist-enxoval-bebe-2026.pdf"
            titulo="Leve a lista com você"
            descricao="O PDF tem tudo isto em 8 páginas, com caixinha para marcar. Deixe seu e-mail e ele chega agora."
          />
        </div>
      </section>
    </>
  )
}
