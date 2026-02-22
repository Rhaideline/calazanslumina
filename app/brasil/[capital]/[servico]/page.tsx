import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { servicos, getServicoBySlug } from '@/data/servicos'
import { capitaisBR, getCapitalBRBySlug } from '@/data/capitais-br'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'
import ReviewsWidget from '@/components/ReviewsWidget'
import HeroForm from '@/components/HeroForm'
import HeroBadges from '@/components/HeroBadges'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceIcon from '@/components/ServiceIcon'

export async function generateStaticParams() {
  return capitaisBR.flatMap((capital) =>
    servicos.map((servico) => ({ capital: capital.slug, servico: servico.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ capital: string; servico: string }> }): Promise<Metadata> {
  const { capital: capitalSlug, servico: servicoSlug } = await params
  const capital = getCapitalBRBySlug(capitalSlug)
  const servico = getServicoBySlug(servicoSlug)
  if (!capital || !servico) return {}
  return {
    title: `${servico.nome} em ${capital.nome} | Criação e Otimização`,
    description: `${servico.descricaoCurta} para negócios em ${capital.nome}, ${capital.siglaEstado}. Resultados reais. Fale agora. Calazans Lumina.`,
  }
}

export default async function CapitalServicoPage({ params }: { params: Promise<{ capital: string; servico: string }> }) {
  const { capital: capitalSlug, servico: servicoSlug } = await params
  const capital = getCapitalBRBySlug(capitalSlug)
  const servico = getServicoBySlug(servicoSlug)
  if (!capital || !servico) notFound()

  const outrosServicos = servicos.filter((s) => s.slug !== servicoSlug)

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc22d845716a.png"
          alt={`${servico.nome} em ${capital.nome} — Calazans Lumina`}
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
                { label: `${capital.nome}, ${capital.siglaEstado}` },
              ]} />

              <HeroBadges cidade={`${capital.nome}, ${capital.siglaEstado}`} />

              <h1 className="heading-1 mb-6">
                {servico.nome} em{' '}
                <span className="text-brand-mint">{capital.nome}</span>
              </h1>

              <p className="text-white/70 text-lg leading-relaxed mb-4 max-w-2xl">
                {servico.descricaoLonga} Em {capital.nome}, o mercado digital é competitivo e exige
                estratégias profissionais. A Calazans Lumina entrega resultados mensuráveis.
              </p>
              <p className="text-white/50 text-base mb-8 max-w-2xl">
                {capital.referencia}. {capital.doresEspecificas}.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/5531982948067?text=${encodeURIComponent(`Olá, sou de ${capital.nome} e tenho interesse em ${servico.nome}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {servico.cta} em {capital.nome}
                </a>
                <Link href={`/servicos/${servico.slug}`} className="btn-secondary">
                  Sobre {servico.nome}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <HeroForm titulo={`${servico.nome} em ${capital.nome}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Problemas que resolvemos em {capital.nome}</h2>
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

      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Como funciona em <span className="text-brand-mint">{capital.nome}</span></h2>
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

      <ReviewsWidget />

      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Outros serviços em {capital.nome}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outrosServicos.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 80}>
                <Link href={`/brasil/${capital.slug}/${s.slug}`} className="card-premium block group">
                  <ServiceIcon name={s.icone} className="w-8 h-8 text-brand-mint mb-3" />
                  <h3 className="font-bold group-hover:text-brand-mint transition-colors text-sm">{s.nome} em {capital.nome}</h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTAForm cidade={capital.nome} servico={servico.nome} />
    </>
  )
}
