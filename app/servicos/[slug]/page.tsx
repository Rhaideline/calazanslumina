import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { servicos, getServicoBySlug } from '@/data/servicos'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'
import ReviewsWidget from '@/components/ReviewsWidget'
import ConstellationBg from '@/components/ConstellationBg'

export async function generateStaticParams() {
  return servicos.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const servico = getServicoBySlug(slug)
  if (!servico) return {}
  return {
    title: `${servico.nome} | Marketing Digital para Brasileiros`,
    description: `${servico.descricaoLonga.slice(0, 155)}...`,
    openGraph: {
      title: `${servico.nome} | Calazans Lumina`,
      description: servico.descricaoCurta,
    },
  }
}

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const servico = getServicoBySlug(slug)
  if (!servico) notFound()

  const outrosServicos = servicos.filter((s) => s.slug !== slug)

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-brand-dark relative overflow-hidden">
        <ConstellationBg />
        <div className="container-main relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 text-sm mb-6 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Todos os serviços
              </Link>
              <span className="text-6xl mb-6 block">{servico.icone}</span>
              <h1 className="heading-1 mb-6">{servico.nome}</h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {servico.descricaoLonga}
              </p>
              <a
                href={`https://wa.me/5531982948067?text=${encodeURIComponent(servico.ctaTexto)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {servico.cta}
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Dores */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">
              Você se identifica?
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {servico.dores.map((dor, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-400/50">
                  <p className="text-brand-dark/70 text-sm">{dor}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="section-padding bg-brand-dark">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 mb-4">
              Nossa <span className="gradient-text">solução</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              {servico.solucao}
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {servico.diferenciais.map((d, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-premium flex items-start gap-4">
                  <svg className="w-6 h-6 text-brand-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-sm">{d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsWidget />

      {/* Outros Serviços */}
      <section className="section-padding bg-brand-dark">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 mb-4">Outros serviços</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outrosServicos.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 100}>
                <Link href={`/servicos/${s.slug}`} className="card-premium block group">
                  <span className="text-3xl mb-3 block">{s.icone}</span>
                  <h3 className="font-bold group-hover:text-brand-mint transition-colors">
                    {s.nome}
                  </h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAForm servico={servico.nome} />
    </>
  )
}
