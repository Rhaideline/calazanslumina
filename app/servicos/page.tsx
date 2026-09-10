import type { Metadata } from 'next'
import Link from 'next/link'
import { servicos } from '@/data/servicos'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTAForm from '@/components/CTAForm'
import ServiceIcon from '@/components/ServiceIcon'
import CoursesSection from '@/components/CoursesSection'
import PortfolioSites from '@/components/PortfolioSites'

export const metadata: Metadata = {
  title: 'Servicos de Marketing Digital | Sites, Funis GHL, CRM com IA',
  description:
    'Sites de alta performance, funis automatizados no GoHighLevel, CRM com IA no WhatsApp, gestao de redes sociais e Google Maps. Para brasileiros nos EUA e Brasil.',
  alternates: { canonical: 'https://calazanslumina.com.br/servicos' },
  openGraph: {
    title: 'Servicos de Marketing Digital | Calazans Lumina',
    description: 'Sites, funis GHL, CRM com IA, redes sociais e Google Maps. Solucoes completas para brasileiros.',
    url: 'https://calazanslumina.com.br/servicos',
    type: 'website',
  },
}

export default function ServicosPage() {
  const servicosSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Servicos de Marketing Digital — Calazans Lumina',
    description: 'Sites profissionais, funis GoHighLevel, CRM com IA, gestao de redes sociais, Google Business Profile e trafego pago para brasileiros nos EUA e Brasil.',
    url: 'https://calazanslumina.com.br/servicos',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Sites & Landing Pages', url: 'https://calazanslumina.com.br/servicos/sites-landing-pages' } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'Funis & Automacao GHL', url: 'https://calazanslumina.com.br/servicos/funis-automacao-ghl' } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'CRM & IA no WhatsApp', url: 'https://calazanslumina.com.br/servicos/crm-ia-whatsapp' } },
        { '@type': 'ListItem', position: 4, item: { '@type': 'Service', name: 'Gestao de Redes Sociais', url: 'https://calazanslumina.com.br/servicos/gestao-redes-sociais' } },
        { '@type': 'ListItem', position: 5, item: { '@type': 'Service', name: 'Google Business Profile', url: 'https://calazanslumina.com.br/servicos/google-business-profile' } },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicosSchema) }}
      />
      <Breadcrumbs items={[{ name: 'Serviços' }]} />

      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">
              O que fazemos
            </p>
            <h1 className="heading-1 mb-4">
              Nossos <span className="gradient-text">Serviços</span>
            </h1>
            <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
              Soluções completas de marketing digital, do primeiro clique ao fechamento.
              Cada serviço é pensado para gerar resultados mensuráveis.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, i) => (
              <ScrollReveal key={servico.slug} delay={i * 100}>
                <Link href={`/servicos/${servico.slug}`} className="card-premium block h-full group">
                  <ServiceIcon name={servico.icone} className="w-8 h-8 text-brand-mint mb-3" />
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-brand-mint transition-colors font-serif">
                    {servico.nome}
                  </h2>
                  <p className="text-brand-dark/60 text-sm mb-4 leading-relaxed">
                    {servico.descricaoCurta}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {servico.dores.slice(0, 3).map((dor, j) => (
                      <li key={j} className="flex items-start gap-2 text-brand-dark/50 text-xs">
                        <span className="text-red-400 mt-0.5">x</span>
                        {dor}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 text-brand-mint text-sm font-medium group-hover:gap-3 transition-all">
                    {servico.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CoursesSection />

      {/* ===== EXPLORE MAIS — CROSS-LINKS ===== */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6 text-center">Explore Mais</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-brand-dark mb-4">Conteúdo Relacionado</h3>
              <ul className="space-y-2">
                <li><Link href="/cursos" className="text-brand-mint hover:text-brand-dark text-sm transition-colors">Cursos de Marketing Digital →</Link></li>
                <li><Link href="/blog" className="text-brand-mint hover:text-brand-dark text-sm transition-colors">Blog com 60+ Artigos Gratuitos →</Link></li>
                <li><Link href="/para-agencias" className="text-brand-mint hover:text-brand-dark text-sm transition-colors">Para Agências — Sub-contas GHL →</Link></li>
                <li><Link href="/projetos" className="text-brand-mint hover:text-brand-dark text-sm transition-colors">Portfólio de Projetos →</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-dark mb-4">Saiba Mais</h3>
              <ul className="space-y-2">
                <li><Link href="/sobre" className="text-brand-mint hover:text-brand-dark text-sm transition-colors">Sobre Rhaideline Calazans →</Link></li>
                <li><Link href="/contato" className="text-brand-mint hover:text-brand-dark text-sm transition-colors">Solicitar Orçamento Gratuito →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PortfolioSites compact />
      <CTAForm />
    </>
  )
}
