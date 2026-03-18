import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { servicos } from '@/data/servicos'
import { capitaisBR, getCapitalBRBySlug } from '@/data/capitais-br'
import { cidadesBrasil, getCidadeBRBySlug } from '@/data/cidades-brasil'
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
  const allCidades = [...capitaisBR, ...cidadesBrasil]
  return allCidades.map((c) => ({ capital: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ capital: string }> }): Promise<Metadata> {
  const { capital: capitalSlug } = await params
  const capital = getCapitalBRBySlug(capitalSlug) || getCidadeBRBySlug(capitalSlug)
  if (!capital) return {}
  return {
    title: `Marketing Digital em ${capital.nome} (2026) | Sites + Funis + Google Maps`,
    description: `Agencia de marketing digital em ${capital.nome}, ${capital.siglaEstado}. Sites com PageSpeed 95+, funis automatizados que convertem 3x mais, CRM com IA no WhatsApp e Google Meu Negocio. 100+ projetos. Orcamento gratis →`,
    alternates: { canonical: `https://calazanslumina.com.br/brasil/${capitalSlug}` },
    openGraph: {
      title: `Marketing Digital em ${capital.nome} | Calazans Lumina`,
      description: `Sites, funis GHL, CRM com IA e Google Maps para negocios em ${capital.nome}.`,
      url: `https://calazanslumina.com.br/brasil/${capitalSlug}`,
      type: 'website',
    },
  }
}

export default async function CapitalPage({ params }: { params: Promise<{ capital: string }> }) {
  const { capital: capitalSlug } = await params
  const capital = getCapitalBRBySlug(capitalSlug) || getCidadeBRBySlug(capitalSlug)
  if (!capital) notFound()

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Calazans Lumina — Marketing Digital em ${capital.nome}, ${capital.siglaEstado}`,
    description: `Agencia de marketing digital em ${capital.nome}, ${capital.siglaEstado}. Sites profissionais, funis GoHighLevel, CRM com IA no WhatsApp e Google Meu Negocio.`,
    url: `https://calazanslumina.com.br/brasil/${capitalSlug}`,
    telephone: '+55-31-98294-8067',
    email: 'trafegocalazans@gmail.com',
    address: { '@type': 'PostalAddress', addressLocality: capital.nome, addressRegion: capital.siglaEstado, addressCountry: 'BR' },
    areaServed: { '@type': 'City', name: capital.nome },
    serviceType: ['Marketing Digital', 'Criacao de Sites', 'SEO', 'Google Meu Negocio', 'GoHighLevel CRM', 'Gestao de Redes Sociais'],
    availableLanguage: ['Portuguese'],
    priceRange: '$$',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `Qual a melhor agencia de marketing digital em ${capital.nome}?`, acceptedAnswer: { '@type': 'Answer', text: `A Calazans Lumina oferece servicos completos de marketing digital em ${capital.nome}, ${capital.siglaEstado}: sites profissionais com PageSpeed 95+, funis GoHighLevel, CRM com IA no WhatsApp, Google Meu Negocio e gestao de redes sociais. Mais de 100 projetos entregues.` } },
      { '@type': 'Question', name: `Quanto custa criar um site profissional em ${capital.nome}?`, acceptedAnswer: { '@type': 'Answer', text: `Sites profissionais para empresas em ${capital.nome} com precos acessiveis. Inclui design premium, SEO tecnico, PageSpeed 95+, versao mobile e integracao com Google Meu Negocio. Solicite um orcamento gratuito.` } },
      { '@type': 'Question', name: `A Calazans Lumina atende empresas em ${capital.nome}, ${capital.siglaEstado}?`, acceptedAnswer: { '@type': 'Answer', text: `Sim! Atendemos empresas de todos os segmentos em ${capital.nome}: clinicas, energia solar, construction, pintura, servicos em geral. Atendimento remoto com resultados comprovados em mais de 200 cidades brasileiras.` } },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="relative min-h-[80vh] flex items-center">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67d74aa28b2801643ac3f117.jpeg"
          alt={`Marketing Digital em ${capital.nome} — Calazans Lumina`}
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
                { label: 'Brasil' },
                { label: `${capital.nome}, ${capital.siglaEstado}` },
              ]} />

              <HeroBadges cidade={`${capital.nome}, ${capital.siglaEstado}`} />

              <h1 className="heading-1 mb-6">
                Agência de Marketing Digital em{' '}
                <span className="text-brand-mint">{capital.nome}</span>
              </h1>

              <p className="text-white/70 text-lg leading-relaxed mb-4 max-w-2xl">
                {capital.descricao}. Entregamos soluções completas de marketing digital para
                negócios em {capital.nome}: sites de alta performance, funis automatizados,
                CRM com IA e Google Meu Negócio otimizado.
              </p>
              <p className="text-white/50 text-base mb-8 max-w-2xl">{capital.doresEspecificas}.</p>

              <a
                href={`https://wa.me/5531982948067?text=${encodeURIComponent(`Olá, moro em ${capital.nome} e quero saber mais sobre os serviços da Calazans Lumina`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Atendo em {capital.nome} — Fale Comigo
              </a>
            </div>
            <div className="lg:col-span-2">
              <HeroForm titulo={`Orçamento Gratuito em ${capital.nome}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Dores */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Desafios de empreendedores em {capital.nome}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              `Alta concorrência digital em ${capital.nome} — CPL cada vez mais caro`,
              'Sites antigos sem mobile, sem velocidade e sem SEO',
              'Perder leads no WhatsApp por falta de automação',
              'Campanhas sem estrutura — dinheiro jogado fora',
              'Instagram com seguidores que não compram',
              `Google Meu Negócio nunca configurado corretamente em ${capital.nome}`,
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
            <h2 className="heading-2 text-brand-dark mb-4">Nossos serviços em <span className="text-brand-mint">{capital.nome}</span></h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico, i) => (
              <ScrollReveal key={servico.slug} delay={i * 100}>
                <Link href={`/brasil/${capital.slug}/${servico.slug}`} className="card-premium block h-full group">
                  <ServiceIcon name={servico.icone} className="w-8 h-8 text-brand-mint mb-3" />
                  <h3 className="text-lg font-bold mb-2 group-hover:text-brand-mint transition-colors">{servico.nome}</h3>
                  <p className="text-brand-dark/70 text-sm mb-4">{servico.descricaoCurta}</p>
                  <span className="text-brand-mint text-sm font-medium">{servico.cta} em {capital.nome} →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <PricingTable />
      <CoursesSection />
      <ReviewsWidget />

      {/* Cross-Links */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <h2 className="font-serif text-xl font-bold text-brand-dark mb-4">Serviços Disponíveis</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {servicos.map(s => (
              <Link key={s.slug} href={`/servicos/${s.slug}`} className="bg-white text-brand-dark text-sm px-4 py-2 rounded-full hover:bg-brand-mint hover:text-white transition-colors shadow-sm">
                {s.nome}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/cursos" className="text-brand-mint hover:text-brand-dark transition-colors">Cursos de Marketing Digital →</Link>
            <Link href="/blog" className="text-brand-mint hover:text-brand-dark transition-colors">Blog →</Link>
            <Link href="/sobre" className="text-brand-mint hover:text-brand-dark transition-colors">Sobre Nós →</Link>
            <Link href="/contato" className="text-brand-mint hover:text-brand-dark transition-colors">Contato →</Link>
          </div>
        </div>
      </section>

      <CTAForm cidade={capital.nome} />
    </>
  )
}
