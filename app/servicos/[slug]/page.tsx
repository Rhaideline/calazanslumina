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
import ServiceIcon from '@/components/ServiceIcon'
import AnimatedCounter from '@/components/AnimatedCounter'
import FAQAccordion from '@/components/FAQAccordion'
import CoursesSection from '@/components/CoursesSection'
import PortfolioSites from '@/components/PortfolioSites'

export async function generateStaticParams() {
  return servicos.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const servico = getServicoBySlug(slug)
  if (!servico) return {}
  return {
    title: servico.metaTitle,
    description: servico.metaDescription,
    alternates: {
      canonical: `https://calazanslumina.com.br/servicos/${servico.slug}`,
    },
    openGraph: {
      title: servico.metaTitle,
      description: servico.metaDescription,
      type: 'website',
      url: `https://calazanslumina.com.br/servicos/${servico.slug}`,
    },
  }
}

export default async function ServicoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const servico = getServicoBySlug(slug)
  if (!servico) notFound()

  const outrosServicos = servicos.filter((s) => s.slug !== slug)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: servico.nome,
    description: servico.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Calazans Lumina',
      url: 'https://calazanslumina.com',
    },
    areaServed: ['Massachusetts, USA', 'Brasil'],
    url: `https://calazanslumina.com.br/servicos/${servico.slug}`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: servico.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.pergunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.resposta,
      },
    })),
  }

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== 1. HERO ===== */}
      <section className="relative min-h-[80vh] flex items-center">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67d74aa28b2801643ac3f117.jpeg"
          alt={`${servico.nome} — Calazans Lumina Marketing Digital`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/90" />

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
                {servico.h1}
              </h1>

              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
                {servico.descricaoLonga}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/5531982948067?text=${encodeURIComponent(servico.ctaTexto)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {servico.cta}
                </a>
                <Link href="#como-funciona" className="btn-secondary-light">
                  Como funciona
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <HeroForm titulo={`Orçamento de ${servico.nome}`} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. STATS BAR ===== */}
      <section className="bg-brand-dark py-16 border-t border-white/5">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {servico.resultados.map((stat, i) => (
              <AnimatedCounter
                key={i}
                numero={stat.numero}
                label={stat.label}
                sufixo={stat.sufixo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. DORES ===== */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">Problemas comuns</p>
            <h2 className="heading-2 text-brand-dark mb-4">Você se identifica com algum desses?</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {servico.dores.map((dor, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-400/50 h-full flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">{dor}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. SOLUÇÃO ===== */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">A solução</p>
              <h2 className="heading-2 text-brand-dark mb-6">
                Como resolvemos com <span className="text-brand-mint">{servico.nome}</span>
              </h2>
              <p className="text-brand-dark/70 text-lg leading-relaxed mb-6">{servico.solucao}</p>
              <ul className="space-y-3">
                {servico.diferenciais.slice(0, 3).map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-dark/70">
                    <svg className="w-5 h-5 text-brand-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-black/20 to-black/5 rounded-3xl blur-2xl" />
                <div className="relative bg-brand-dark rounded-2xl p-8 text-white">
                  <ServiceIcon name={servico.icone} className="w-16 h-16 text-brand-mint mb-6" />
                  <h3 className="font-serif text-2xl font-bold mb-4">{servico.nome}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{servico.descricaoCurta}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== 5. COMO FUNCIONA ===== */}
      <section id="como-funciona" className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">Passo a passo</p>
            <h2 className="heading-2 mb-4">Como <span className="text-brand-mint">funciona</span></h2>
          </ScrollReveal>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-brand-mint/20" />

            {servico.comoFunciona.map((step, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className={`relative flex items-start gap-6 mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Step number */}
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-mint text-white rounded-full flex items-center justify-center font-serif text-xl font-bold z-10 relative">
                    {step.passo}
                  </div>
                  {/* Content */}
                  <div className={`card-dark flex-1 ${i % 2 === 0 ? 'md:mr-auto md:max-w-[calc(50%-3rem)]' : 'md:ml-auto md:max-w-[calc(50%-3rem)]'}`}>
                    <h3 className="font-serif text-lg font-bold text-brand-mint mb-2">{step.titulo}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{step.descricao}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. BENEFÍCIOS ===== */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">Vantagens</p>
            <h2 className="heading-2 text-brand-dark mb-4">
              Benefícios de investir em <span className="text-brand-mint">{servico.nome}</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {servico.beneficios.map((b, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-premium h-full">
                  <ServiceIcon name={b.icone} className="w-10 h-10 text-brand-mint mb-4" />
                  <h3 className="font-bold text-brand-dark mb-2">{b.titulo}</h3>
                  <p className="text-brand-dark/60 text-sm leading-relaxed">{b.descricao}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. DIFERENCIAIS ===== */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Por que a <span className="text-brand-mint">Calazans Lumina</span>?</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {servico.diferenciais.map((d, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 bg-brand-bg rounded-xl p-5 border border-brand-mint/10 hover:border-brand-mint/30 transition-colors">
                  <div className="w-8 h-8 bg-brand-mint/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">{d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. PARA QUEM É ===== */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">Público ideal</p>
            <h2 className="heading-2 mb-4">Para quem é este serviço?</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {servico.casosDeUso.map((caso, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex items-center gap-4 card-dark">
                  <div className="w-10 h-10 bg-brand-mint/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-white/70 text-sm">{caso}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. REVIEWS ===== */}
      <ReviewsWidget />

      {/* ===== 10. FAQ ===== */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-3xl">
          <ScrollReveal className="text-center mb-12">
            <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">Dúvidas frequentes</p>
            <h2 className="heading-2 text-brand-dark mb-4">
              Perguntas sobre <span className="text-brand-mint">{servico.nome}</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <FAQAccordion faqs={servico.faqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 11. SEO CONTENT ===== */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-3xl">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none [&>p]:text-brand-dark/60 [&>p]:leading-relaxed [&>p]:mb-4">
              {servico.conteudoSEO.split('\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 12. OUTROS SERVIÇOS ===== */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Outros serviços</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outrosServicos.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 100}>
                <Link href={`/servicos/${s.slug}`} className="card-premium block group">
                  <ServiceIcon name={s.icone} className="w-8 h-8 text-brand-mint mb-3" />
                  <h3 className="font-bold group-hover:text-brand-mint transition-colors mb-2">{s.nome}</h3>
                  <p className="text-brand-dark/50 text-sm">{s.descricaoCurta}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 13. CURSOS ===== */}
      <CoursesSection />

      {/* ===== 14. EXPLORE MAIS — CROSS-LINKS ===== */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6 text-center">Explore Mais</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-brand-dark mb-4">Outros Serviços</h3>
              <ul className="space-y-2">
                {servicos.filter(s => s.slug !== slug).map(s => (
                  <li key={s.slug}>
                    <Link href={`/servicos/${s.slug}`} className="text-brand-mint hover:text-brand-dark text-sm transition-colors">
                      {s.nome} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-dark mb-4">Conteúdo Relacionado</h3>
              <ul className="space-y-2">
                <li><Link href="/cursos" className="text-brand-mint hover:text-brand-dark text-sm transition-colors">Cursos de Marketing Digital →</Link></li>
                <li><Link href="/blog" className="text-brand-mint hover:text-brand-dark text-sm transition-colors">Blog com 60+ Artigos Gratuitos →</Link></li>
                <li><Link href="/para-agencias" className="text-brand-mint hover:text-brand-dark text-sm transition-colors">Para Agências — Sub-contas GHL →</Link></li>
                <li><Link href="/projetos" className="text-brand-mint hover:text-brand-dark text-sm transition-colors">Portfólio de Projetos →</Link></li>
                <li><Link href="/sobre" className="text-brand-mint hover:text-brand-dark text-sm transition-colors">Sobre Rhaideline Calazans →</Link></li>
                <li><Link href="/contato" className="text-brand-mint hover:text-brand-dark text-sm transition-colors">Solicitar Orçamento Gratuito →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PortfolioSites compact />
      {/* ===== 15. CTA FORM ===== */}
      <CTAForm servico={servico.nome} />
    </>
  )
}
