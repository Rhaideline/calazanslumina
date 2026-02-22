import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { servicos, getServicoBySlug } from '@/data/servicos'
import { cidadesMA, getCidadeMABySlug } from '@/data/cidades-ma'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'
import ReviewsWidget from '@/components/ReviewsWidget'
import HeroForm from '@/components/HeroForm'
import HeroBadges from '@/components/HeroBadges'
import Breadcrumb from '@/components/Breadcrumb'
import PricingTable from '@/components/PricingTable'
import ServiceIcon from '@/components/ServiceIcon'

export async function generateStaticParams() {
  return cidadesMA.flatMap((cidade) =>
    servicos.map((servico) => ({ cidade: cidade.slug, servico: servico.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ cidade: string; servico: string }> }): Promise<Metadata> {
  const { cidade: cidadeSlug, servico: servicoSlug } = await params
  const cidade = getCidadeMABySlug(cidadeSlug)
  const servico = getServicoBySlug(servicoSlug)
  if (!cidade || !servico) return {}
  return {
    title: `${servico.nome} para Brasileiros em ${cidade.nome}, MA`,
    description: `${servico.descricaoCurta} para empreendedores brasileiros em ${cidade.nome}, MA. Atendimento em português, resultados reais. Fale agora pelo WhatsApp.`,
  }
}

export default async function CidadeServicoPage({ params }: { params: Promise<{ cidade: string; servico: string }> }) {
  const { cidade: cidadeSlug, servico: servicoSlug } = await params
  const cidade = getCidadeMABySlug(cidadeSlug)
  const servico = getServicoBySlug(servicoSlug)
  if (!cidade || !servico) notFound()

  const outrosServicos = servicos.filter((s) => s.slug !== servicoSlug)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67d74aa28b2801643ac3f117.jpeg"
          alt={`${servico.nome} em ${cidade.nome}, MA — Calazans Lumina`}
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
                { label: servico.nome, href: `/servicos/${servico.slug}` },
                { label: `${cidade.nome}, MA` },
              ]} />

              <HeroBadges cidade={`${cidade.nome}, MA`} />

              <h1 className="heading-1 mb-6">
                {servico.nome} para Brasileiros em{' '}
                <span className="text-brand-mint">{cidade.nome}, MA</span>
              </h1>

              <p className="text-white/70 text-lg leading-relaxed mb-4 max-w-2xl">
                {servico.descricaoLonga} Em {cidade.nome}, entendemos os desafios únicos de empreendedores
                brasileiros que precisam competir no mercado americano.
              </p>
              <p className="text-white/50 text-base mb-8 max-w-2xl">
                {cidade.referencia}. {cidade.doresEspecificas}.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/5531982948067?text=${encodeURIComponent(`Olá, sou de ${cidade.nome}, MA e tenho interesse em ${servico.nome}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {servico.cta} em {cidade.nome}
                </a>
                <Link href={`/servicos/${servico.slug}`} className="btn-secondary">
                  Sobre {servico.nome}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <HeroForm titulo={`${servico.nome} em ${cidade.nome}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Dores */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Problemas que resolvemos em {cidade.nome}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {servico.dores.map((dor, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-red-400/50 h-full">
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
            <h2 className="heading-2 text-brand-dark mb-4">Como funciona em <span className="text-brand-mint">{cidade.nome}</span></h2>
            <p className="text-brand-dark/70 text-lg leading-relaxed">{servico.solucao}</p>
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

      <PricingTable />
      <ReviewsWidget />

      {/* Outros Serviços */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Outros serviços em {cidade.nome}, MA</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outrosServicos.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 80}>
                <Link href={`/cidades/${cidade.slug}/${s.slug}`} className="card-premium block group">
                  <ServiceIcon name={s.icone} className="w-8 h-8 text-brand-mint mb-3" />
                  <h3 className="font-bold group-hover:text-brand-mint transition-colors text-sm">{s.nome} em {cidade.nome}</h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTAForm cidade={cidade.nome} servico={servico.nome} />
    </>
  )
}
