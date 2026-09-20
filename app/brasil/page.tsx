import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ListaCidadesBR from '@/components/ListaCidadesBR'
import CTAForm from '@/components/CTAForm'
import { capitaisBR } from '@/data/capitais-br'
import { cidadesBrasil } from '@/data/cidades-brasil'
import { servicos } from '@/data/servicos'

/**
 * ESTE INDICE NAO EXISTIA — e essa ausencia sozinha explica boa parte da queda.
 *
 * A auditoria de 20/set/2026 achou a rota `/brasil/[capital]` com 209 paginas
 * e a rota `/brasil/[capital]/[servico]` com 1.045, e nenhuma pagina `/brasil`
 * para apontar para elas. Andando pelos links a partir da home cheguei a 84 de
 * 1.254 — 6,7%.
 *
 * A pagina de cidade JA linka os cinco servicos dela. Entao faltava so um
 * degrau: com este indice no ar, 209 cidades ficam a um clique da home, e as
 * 1.045 de servico a dois.
 */

const BASE = 'https://calazanslumina.com.br'
const total = capitaisBR.length + cidadesBrasil.length

export const metadata: Metadata = {
  title: `Marketing Digital no Brasil | ${total} Cidades`,
  description: `Sites, funis, CRM com IA, redes sociais e Google Meu Negócio para empresas em ${total} cidades brasileiras. Atendimento remoto, em português, com página própria para cada cidade.`,
  alternates: { canonical: `${BASE}/brasil` },
  openGraph: {
    title: `Marketing Digital no Brasil | ${total} Cidades`,
    description: `Cada cidade com página própria: o mercado local, as dores do setor e o serviço que resolve.`,
    url: `${BASE}/brasil`,
    type: 'website',
  },
}

export default function BrasilPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Marketing Digital no Brasil — ${total} cidades`,
    description: `Páginas de marketing digital por cidade brasileira, com os serviços da Calazans Lumina.`,
    url: `${BASE}/brasil`,
    inLanguage: 'pt-BR',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: total,
      itemListElement: capitaisBR.slice(0, 10).map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Place',
          name: `${c.nome}, ${c.siglaEstado}`,
          url: `${BASE}/brasil/${c.slug}`,
        },
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative bg-brand-dark text-white">
        <div className="container-main section-padding">
          <Breadcrumbs items={[{ name: 'Brasil', href: '/brasil' }]} />
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Onde a gente atende
              </p>
              <h1 className="heading-1 mt-4">
                Marketing digital em{' '}
                <span className="text-brand-mint tabular-nums">{total} cidades</span>{' '}
                do Brasil
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pb-2">
              <p className="text-white/70 text-lg leading-relaxed">
                O atendimento é remoto, então a cidade não limita o trabalho. O
                que cada página traz é o que muda de lugar para lugar: como o
                mercado local se comporta e o que costuma travar quem vende
                serviço ali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* os cinco servicos, para a pessoa entrar pelo que precisa */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="heading-2 text-brand-dark max-w-xl">
            O que entra em cada cidade
          </h2>
          <div className="mt-8 divide-y divide-brand-dark/10 border-t border-brand-dark/10">
            {servicos.map((s) => (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}`}
                className="group grid gap-1 py-5 md:grid-cols-12 md:gap-8 md:items-baseline"
              >
                <span className="font-serif text-xl font-bold text-brand-dark md:col-span-4 group-hover:underline underline-offset-4 decoration-1">
                  {s.nome}
                </span>
                <span className="text-brand-dark/55 text-sm leading-relaxed md:col-span-8">
                  {s.descricaoCurta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ListaCidadesBR
        href={(cidade) => `/brasil/${cidade}`}
        titulo="Escolha a sua cidade"
        apoio="Cada página traz o retrato do mercado local, o que costuma travar quem vende serviço ali, e os cinco serviços aplicados àquela realidade."
        rodape="capitais e cidades do interior"
      />

      <CTAForm />
    </>
  )
}
