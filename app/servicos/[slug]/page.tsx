import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { servicos, getServicoBySlug } from '@/data/servicos'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'
import ReviewsWidget from '@/components/ReviewsWidget'
import HeroForm from '@/components/HeroForm'
import HeroBadges from '@/components/HeroBadges'
import Breadcrumb from '@/components/Breadcrumb'

export async function generateStaticParams() {
  return servicos.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const servico = getServicoBySlug(slug)
  if (!servico) return {}
  return {
    title: `${servico.nome} | Marketing Digital para Brasileiros`,
    description: `${servico.descricaoLonga.slice(0, 155)}...`,
  }
}

export default async function ServicoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const servico = getServicoBySlug(slug)
  if (!servico) notFound()

  const outrosServicos = servicos.filter((s) => s.slug !== slug)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc3b6f457169.png"
          alt={`${servico.nome} — Calazans Lumina Marketing Digital`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/85" />

        <div className="container-main section-padding relative z-10 text-white">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <Breadcrumb items={[
                { label: 'Home', href: '/' },
                { label: 'Serviços', href: '/servicos' },
                { label: servico.nome },
              ]} />

              <HeroBadges />

              <h1 className="heading-1 mb-6">
                <span className="text-brand-mint">{servico.nome}</span>
              </h1>

              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
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
            </div>

            <div className="lg:col-span-2">
              <HeroForm titulo={`Orçamento de ${servico.nome}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Dores */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Você se identifica?</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {servico.dores.map((dor, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-400/50 h-full">
                  <p className="text-brand-dark/70 text-sm">{dor}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 mb-4">Nossa <span className="text-brand-mint">solução</span></h2>
            <p className="text-brand-dark/70 text-lg leading-relaxed mb-10">{servico.solucao}</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {servico.diferenciais.map((d, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-premium flex items-start gap-4">
                  <svg className="w-6 h-6 text-brand-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-brand-dark/70 text-sm">{d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Outros Serviços */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 mb-4">Outros serviços</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outrosServicos.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 100}>
                <Link href={`/servicos/${s.slug}`} className="card-premium block group">
                  <span className="text-3xl mb-3 block">{s.icone}</span>
                  <h3 className="font-bold group-hover:text-brand-mint transition-colors">{s.nome}</h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTAForm servico={servico.nome} />
    </>
  )
}
