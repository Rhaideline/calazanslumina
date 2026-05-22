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
import CoursesSection from '@/components/CoursesSection'

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
    title: `${servico.nome} em ${cidade.nome}, MA`,
    description: `${servico.descricaoCurta} Para brasileiros em ${cidade.nome}, MA. 100+ projetos entregues, atendimento em portugues. Resultados em 30 dias ou menos. Orçamento gratis →`,
    alternates: { canonical: `https://calazanslumina.com.br/cidades/${cidadeSlug}/${servicoSlug}` },
    openGraph: {
      title: `${servico.nome} em ${cidade.nome}, MA | Calazans Lumina`,
      description: `${servico.descricaoCurta} Para brasileiros em ${cidade.nome}, Massachusetts.`,
      url: `https://calazanslumina.com.br/cidades/${cidadeSlug}/${servicoSlug}`,
      type: 'website',
    },
  }
}

export default async function CidadeServicoPage({ params }: { params: Promise<{ cidade: string; servico: string }> }) {
  const { cidade: cidadeSlug, servico: servicoSlug } = await params
  const cidade = getCidadeMABySlug(cidadeSlug)
  const servico = getServicoBySlug(servicoSlug)
  if (!cidade || !servico) notFound()

  const outrosServicos = servicos.filter((s) => s.slug !== servicoSlug)

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calazans Lumina',
    description: `${servico.nome} para brasileiros em ${cidade.nome}, Massachusetts`,
    url: `https://calazanslumina.com.br/cidades/${cidadeSlug}/${servicoSlug}`,
    telephone: '+5531982948067',
    areaServed: { '@type': 'City', name: cidade.nome, containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
    serviceType: servico.nome,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `Quanto custa ${servico.nome.toLowerCase()} em ${cidade.nome}, MA?`, acceptedAnswer: { '@type': 'Answer', text: `Os preços de ${servico.nome.toLowerCase()} em ${cidade.nome} variam conforme o escopo do projeto. A Calazans Lumina oferece orçamento gratuito e personalizado para empresas brasileiras em ${cidade.nome}, MA. Atendimento 100% em portugues com resultados comprovados.` } },
      { '@type': 'Question', name: `Qual a melhor agência de ${servico.nome.toLowerCase()} para brasileiros em ${cidade.nome}?`, acceptedAnswer: { '@type': 'Answer', text: `A Calazans Lumina e especialista em ${servico.nome.toLowerCase()} para empreendedores brasileiros em ${cidade.nome}, Massachusetts. Com 8+ anos de experiência, 100+ projetos entregues e atendimento em portugues, oferecemos ${servico.descricaoCurta.toLowerCase()}` } },
      { '@type': 'Question', name: `A Calazans Lumina atende em ${cidade.nome}, MA?`, acceptedAnswer: { '@type': 'Answer', text: `Sim! Atendemos empresas brasileiras em ${cidade.nome} e em mais de 120 cidades de Massachusetts. ${cidade.referencia}. Nosso atendimento e 100% remoto e em portugues.` } },
      ...servico.faqs.slice(0, 2).map((f) => ({
        '@type': 'Question' as const,
        name: f.pergunta,
        acceptedAnswer: { '@type': 'Answer' as const, text: f.resposta },
      })),
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://calazanslumina.com.br/' },
      { '@type': 'ListItem', position: 2, name: 'Cidades MA', item: 'https://calazanslumina.com.br/' },
      { '@type': 'ListItem', position: 3, name: `${cidade.nome}, MA`, item: `https://calazanslumina.com.br/cidades/${cidadeSlug}` },
      { '@type': 'ListItem', position: 4, name: servico.nome, item: `https://calazanslumina.com.br/cidades/${cidadeSlug}/${servicoSlug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67d742765106d5f70635510a.jpeg"
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
                  href={`https://wa.me/5531982948067?text=${encodeURIComponent(`Olá, moro em ${cidade.nome}, MA e tenho interesse em ${servico.nome}`)}`}
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

      <CoursesSection />

      <CTAForm cidade={cidade.nome} servico={servico.nome} />
    </>
  )
}
