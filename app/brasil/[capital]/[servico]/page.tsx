import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { servicos, getServicoBySlug } from '@/data/servicos'
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
import { blocoLocalServico } from '@/lib/conteudo-local'

export async function generateStaticParams() {
  const allCidades = [...capitaisBR, ...cidadesBrasil]
  return allCidades.flatMap((capital) =>
    servicos.map((servico) => ({ capital: capital.slug, servico: servico.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ capital: string; servico: string }> }): Promise<Metadata> {
  const { capital: capitalSlug, servico: servicoSlug } = await params
  const capital = getCapitalBRBySlug(capitalSlug) || getCidadeBRBySlug(capitalSlug)
  const servico = getServicoBySlug(servicoSlug)
  if (!capital || !servico) return {}
  return {
    title: `${servico.nome} em ${capital.nome}, ${capital.siglaEstado}`,
    description: `${servico.descricaoCurta} Para negocios em ${capital.nome}. velocidade otimizada, ROI comprovado, Orçamento gratis em 24h →`,
    alternates: { canonical: `https://calazanslumina.com.br/brasil/${capitalSlug}/${servicoSlug}` },
    openGraph: {
      title: `${servico.nome} em ${capital.nome}, ${capital.siglaEstado} | Calazans Lumina`,
      description: `${servico.descricaoCurta} Para negocios em ${capital.nome}, ${capital.estado}.`,
      url: `https://calazanslumina.com.br/brasil/${capitalSlug}/${servicoSlug}`,
      type: 'website',
    },
  }
}

export default async function CapitalServicoPage({ params }: { params: Promise<{ capital: string; servico: string }> }) {
  const { capital: capitalSlug, servico: servicoSlug } = await params
  const capital = getCapitalBRBySlug(capitalSlug) || getCidadeBRBySlug(capitalSlug)
  const servico = getServicoBySlug(servicoSlug)
  if (!capital || !servico) notFound()

  // indice do servico garante variante de contexto distinta entre os 5 servicos
  // desta cidade — ver blocoLocalServico().
  const blocoLocal = blocoLocalServico(capital, servico, servicos.findIndex((s) => s.slug === servicoSlug))

  const outrosServicos = servicos.filter((s) => s.slug !== servicoSlug)
  // Cross-link Local SEO: outras capitais BR no MESMO servico
  const outrasCapitais = capitaisBR.filter((c) => c.slug !== capitalSlug).slice(0, 10)

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calazans Lumina',
    description: `${servico.nome} em ${capital.nome}, ${capital.estado}`,
    url: `https://calazanslumina.com.br/brasil/${capitalSlug}/${servicoSlug}`,
    telephone: '+5531982948067',
    areaServed: { '@type': 'City', name: capital.nome, containedInPlace: { '@type': 'State', name: capital.estado } },
    serviceType: servico.nome,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `Quanto custa ${servico.nome.toLowerCase()} em ${capital.nome}?`, acceptedAnswer: { '@type': 'Answer', text: `Os preços de ${servico.nome.toLowerCase()} em ${capital.nome}, ${capital.siglaEstado} variam conforme o escopo. A Calazans Lumina oferece orçamento gratuito e personalizado. ${capital.descricao ? capital.descricao.slice(0, 150) : ''}` } },
      { '@type': 'Question', name: `Qual a melhor agência de ${servico.nome.toLowerCase()} em ${capital.nome}?`, acceptedAnswer: { '@type': 'Answer', text: `A Calazans Lumina e especialista em ${servico.nome.toLowerCase()} em ${capital.nome}, ${capital.siglaEstado}. Oferecemos ${servico.descricaoCurta.toLowerCase()}` } },
      { '@type': 'Question', name: `A Calazans Lumina atende em ${capital.nome}, ${capital.siglaEstado}?`, acceptedAnswer: { '@type': 'Answer', text: `Sim! Atendemos empresas em ${capital.nome} e em mais de 260 cidades do Brasil. Nosso atendimento e 100% remoto com resultados comprovados.` } },
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
      { '@type': 'ListItem', position: 2, name: 'Brasil', item: 'https://calazanslumina.com.br/' },
      { '@type': 'ListItem', position: 3, name: `${capital.nome}, ${capital.siglaEstado}`, item: `https://calazanslumina.com.br/brasil/${capitalSlug}` },
      { '@type': 'ListItem', position: 4, name: servico.nome, item: `https://calazanslumina.com.br/brasil/${capitalSlug}/${servicoSlug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative min-h-[80vh] flex items-center">
        <Image
          src="/rhai-retrato-1.webp"
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

              {/* Bloco local composto por par (cidade, servico): a selecao de
                  fatos muda a cada par, entao as 5 paginas de servico da mesma
                  cidade nao repetem texto entre si nem repetem a pagina-hub.
                  Todos os fatos vem do dataset ja pesquisado. */}
              <p className="text-white/70 text-lg leading-relaxed mb-4 max-w-2xl">
                {blocoLocal.contexto}
              </p>
              <p className="text-white/50 text-base mb-8 max-w-2xl">
                {blocoLocal.aplicacao}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/5531982948067?text=${encodeURIComponent(`Olá, moro em ${capital.nome} e tenho interesse em ${servico.nome}`)}`}
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
            {/* Fecha o bloco local: diferencial escolhido para este par
                especifico (cidade, servico), nao o mesmo em todas as paginas. */}
            <p className="text-brand-dark/60 text-base leading-relaxed mt-4">{blocoLocal.fechamento}</p>
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

      {/* Capitais vizinhas — mesmo servico (cross-link Local SEO BR) */}
      <section className="section-padding bg-white border-t border-brand-dark/10">
        <div className="container-main">
          <ScrollReveal className="text-center mb-10">
            <h2 className="heading-2 text-brand-dark mb-3">{servico.nome} em outras capitais brasileiras</h2>
            <p className="text-brand-dark/60 max-w-2xl mx-auto text-sm">
              Atendemos negócios em todas as capitais do Brasil. Veja outras cidades onde já entregamos:
            </p>
          </ScrollReveal>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-2 text-sm">
            {outrasCapitais.map((c) => (
              <li key={c.slug}>
                <Link href={`/brasil/${c.slug}/${servico.slug}`} className="text-brand-dark/70 hover:text-brand-mint transition-colors">
                  {servico.nome} em {c.nome}, {c.siglaEstado} →
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-center mt-6">
            <Link href="/servicos" className="text-brand-mint hover:text-brand-dark text-sm font-medium transition-colors">
              Ver todos os serviços e cidades →
            </Link>
          </div>
        </div>
      </section>

      <CoursesSection />

      <CTAForm cidade={capital.nome} servico={servico.nome} />
    </>
  )
}
