import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { servicos } from '@/data/servicos'
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
  return cidadesMA.map((c) => ({ cidade: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ cidade: string }> }): Promise<Metadata> {
  const { cidade: cidadeSlug } = await params
  const cidade = getCidadeMABySlug(cidadeSlug)
  if (!cidade) return {}
  return {
    title: `Marketing Digital em ${cidade.nome}, MA | Sites, Funis e Google Maps`,
    description: `Agencia de marketing digital para brasileiros em ${cidade.nome}, Massachusetts. Sites profissionais, funis de vendas, CRM com IA e Google Maps. Atendimento em portugues. Fale agora!`,
    alternates: { canonical: `https://calazanslumina.com.br/cidades/${cidadeSlug}` },
    openGraph: {
      title: `Marketing Digital em ${cidade.nome}, MA | Calazans Lumina`,
      description: `Sites, funis GHL, CRM com IA e Google Maps para brasileiros em ${cidade.nome}, MA.`,
      url: `https://calazanslumina.com.br/cidades/${cidadeSlug}`,
      type: 'website',
    },
  }
}

export default async function CidadePage({ params }: { params: Promise<{ cidade: string }> }) {
  const { cidade: cidadeSlug } = await params
  const cidade = getCidadeMABySlug(cidadeSlug)
  if (!cidade) notFound()

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67d74aa28b2801643ac3f117.jpeg"
          alt={`Marketing Digital em ${cidade.nome}, MA — Calazans Lumina`}
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
                { label: 'Cidades', href: '/' },
                { label: `${cidade.nome}, MA` },
              ]} />

              <HeroBadges cidade={`${cidade.nome}, MA`} />

              <h1 className="heading-1 mb-6">
                Marketing Digital para Brasileiros em{' '}
                <span className="text-brand-mint">{cidade.nome}, MA</span>
              </h1>

              <p className="text-white/70 text-lg leading-relaxed mb-4 max-w-2xl">
                Você é empreendedor brasileiro em {cidade.nome} e sente que seu negócio poderia estar crescendo mais?
                Com a Calazans Lumina, sua marca ganha presença digital profissional — sites de alta performance,
                funis automatizados, CRM com IA e posicionamento no Google Maps — tudo em português.
              </p>
              <p className="text-white/50 text-base mb-8 max-w-2xl">
                {cidade.comunidade}. {cidade.doresEspecificas}.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/5531982948067?text=${encodeURIComponent(`Olá, moro em ${cidade.nome}, MA e quero saber mais sobre os serviços da Calazans Lumina`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Atendo em {cidade.nome} — Fale Comigo
                </a>
                <Link href="/servicos" className="btn-secondary">
                  Ver Serviços
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <HeroForm titulo={`Orçamento Gratuito em ${cidade.nome}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Dores */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">
              Desafios de empreendedores brasileiros em {cidade.nome}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              `Concorrer com empresas americanas estabelecidas em ${cidade.nome}`,
              `Não ser encontrado no Google quando pesquisam serviços em ${cidade.nome}`,
              'Leads chegando pelo boca a boca, sem sistema para escalar',
              'Falta de presença digital profissional para atender americanos e brasileiros',
              `Google Meu Negócio incompleto perdendo clientes em ${cidade.nome}`,
              'Instagram sem estratégia e sem conversão',
            ].map((dor, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-red-400/50 h-full">
                  <p className="text-brand-dark/70 text-sm">{dor}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">
              Nossos serviços em <span className="text-brand-mint">{cidade.nome}, MA</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico, i) => (
              <ScrollReveal key={servico.slug} delay={i * 100}>
                <Link href={`/cidades/${cidade.slug}/${servico.slug}`} className="card-premium block h-full group">
                  <ServiceIcon name={servico.icone} className="w-8 h-8 text-brand-mint mb-3" />
                  <h3 className="text-lg font-bold mb-2 group-hover:text-brand-mint transition-colors">{servico.nome}</h3>
                  <p className="text-brand-dark/70 text-sm mb-4">{servico.descricaoCurta}</p>
                  <span className="text-brand-mint text-sm font-medium">{servico.cta} em {cidade.nome} →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <PricingTable />
      <CoursesSection />
      <ReviewsWidget />
      <CTAForm cidade={cidade.nome} />
    </>
  )
}
