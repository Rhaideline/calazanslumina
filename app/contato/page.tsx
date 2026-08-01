import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTAForm from '@/components/CTAForm'
import CoursesSection from '@/components/CoursesSection'
import PortfolioSites from '@/components/PortfolioSites'

export const metadata: Metadata = {
  title: 'Contato | Fale Agora pelo WhatsApp ou Formulario',
  description:
    'Fale com a Calazans Lumina pelo WhatsApp, Instagram ou formulario. Marketing digital para brasileiros nos EUA e Brasil. Resposta em ate 24h. Orcamento gratuito!',
  alternates: { canonical: 'https://calazanslumina.com.br/contato' },
  openGraph: {
    title: 'Contato | Calazans Lumina',
    description: 'Fale pelo WhatsApp, Instagram ou formulario. Resposta em ate 24h.',
    url: 'https://calazanslumina.com.br/contato',
    type: 'website',
  },
}

const canais = [
  {
    titulo: 'WhatsApp',
    desc: 'Resposta rápida e direta',
    link: 'https://wa.me/5531982948067?text=Olá, vim pelo site e quero saber mais sobre os serviços da Calazans Lumina',
    cta: 'Chamar no WhatsApp',
    icon: (
      <svg className="w-10 h-10 text-brand-mint" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    titulo: 'Instagram',
    desc: 'Acompanhe nosso conteúdo',
    link: 'https://www.instagram.com/calazanslumina/',
    cta: 'Seguir no Instagram',
    icon: (
      <svg className="w-10 h-10 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    titulo: 'E-mail',
    desc: 'Para orçamentos e parcerias',
    link: 'mailto:contato@calazanslumina.com.br',
    cta: 'Enviar E-mail',
    icon: (
      <svg className="w-10 h-10 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    titulo: 'Google Maps',
    desc: 'Veja nossas avaliações',
    link: 'https://maps.app.goo.gl/umLNmLYMyhbVx4HQ6',
    cta: 'Ver no Google Maps',
    icon: (
      <svg className="w-10 h-10 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
]

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contato — Calazans Lumina',
  description: 'Entre em contato com a Calazans Lumina para servicos de marketing digital.',
  url: 'https://calazanslumina.com.br/contato',
  mainEntity: {
    '@type': 'Organization',
    name: 'Calazans Lumina',
    telephone: '+55-31-98294-8067',
    email: 'contato@calazanslumina.com.br',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-31-98294-8067',
      contactType: 'customer service',
      availableLanguage: ['Portuguese', 'English'],
    },
  },
}

export default function ContatoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Breadcrumbs items={[{ name: 'Contato' }]} />

      {/* Hero — full-width background image with overlay */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67d742765106d5f70635510a.jpeg"
          alt="Rhaideline Calazans — Contato Calazans Lumina"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-brand-dark/80" />

        <div className="container-main section-padding relative z-10 text-white">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <h1 className="heading-1 mb-4">
              Vamos <span className="text-brand-mint">conversar?</span>
            </h1>
            <p className="text-white/70 text-lg">
              Escolha o canal que preferir. Estou pronta para entender seu negócio e
              criar a estratégia ideal para você.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {canais.map((canal, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <a
                  href={canal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium block text-center group"
                >
                  <span className="mb-4 block flex justify-center">{canal.icon}</span>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-brand-mint transition-colors">
                    {canal.titulo}
                  </h2>
                  <p className="text-brand-dark/50 text-sm mb-4">{canal.desc}</p>
                  <span className="text-brand-mint text-sm font-medium">{canal.cta} →</span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CoursesSection />

      {/* Internal Links */}
      <section className="py-12 bg-brand-bg">
        <div className="container-main">
          <h2 className="font-serif text-2xl font-bold text-brand-dark text-center mb-8">Explore Nossos Servicos</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/servicos" className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow text-center">
              <p className="font-bold text-brand-dark mb-1">Servicos</p>
              <p className="text-brand-dark/50 text-xs">Sites, funis, CRM e mais</p>
            </Link>
            <Link href="/para-agencias" className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow text-center">
              <p className="font-bold text-brand-dark mb-1">GoHighLevel</p>
              <p className="text-brand-dark/50 text-xs">Sub-contas prontas para empresas</p>
            </Link>
            <Link href="/cursos" className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow text-center">
              <p className="font-bold text-brand-dark mb-1">Cursos</p>
              <p className="text-brand-dark/50 text-xs">Marketing digital e IA</p>
            </Link>
          </div>
        </div>
      </section>

      <PortfolioSites compact />
      <CTAForm />
    </>
  )
}
