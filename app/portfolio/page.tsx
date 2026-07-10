import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { projetos, maisSites } from '@/data/portfolio'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Portfólio · Cases de Marketing Digital e Automação com IA',
  description:
    'Trabalho real da Calazans Lumina: sites de alta performance, SEO orgânico e automação com IA (GoHighLevel) para empresas no Brasil e nos EUA. Números do Google Search Console e do CRM dos clientes.',
  alternates: { canonical: 'https://calazanslumina.com.br/portfolio' },
  openGraph: {
    title: 'Portfólio · Calazans Lumina',
    description: 'Sites, SEO e automação com IA que viram resultado. Cases reais, números reais.',
    type: 'website',
  },
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Portfólio · Calazans Lumina',
  description: 'Cases reais de sites, SEO orgânico e automação com IA no Brasil e nos EUA.',
  url: 'https://calazanslumina.com.br/portfolio',
  hasPart: projetos.map((p) => ({
    '@type': 'CreativeWork',
    name: p.nome,
    about: p.categoria,
    url: `https://calazanslumina.com.br/portfolio/${p.slug}`,
  })),
}

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <div className="container-main">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Portfólio' }]} />
      </div>

      {/* ===== HERO EDITORIAL ===== */}
      <section className="container-main pt-8 pb-16 md:pt-14 md:pb-24">
        <ScrollReveal className="max-w-5xl">
          <p className="text-brand-mint text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-8">
            Portfólio · Nosso trabalho
          </p>
          <h1 className="font-serif text-[2.6rem] leading-[1.02] md:text-7xl lg:text-8xl font-bold text-brand-dark tracking-[-0.02em]">
            Trabalho que fala
            <br />
            <span className="italic font-normal">por números.</span>
          </h1>
          <p className="text-brand-dark/55 text-lg md:text-2xl leading-relaxed mt-8 max-w-2xl">
            Sites de alta performance, SEO 100% orgânico e automação com IA para empresas
            no Brasil e nos Estados Unidos. Sem prints editados — cada número veio do
            Google Search Console e do CRM dos clientes.
          </p>
        </ScrollReveal>
      </section>

      {/* ===== LISTA EDITORIAL DE PROJETOS ===== */}
      <section className="border-t border-brand-dark/10">
        {projetos.map((p, i) => (
          <ScrollReveal key={p.slug}>
            <Link
              href={`/portfolio/${p.slug}`}
              className="group block border-b border-brand-dark/10 hover:bg-brand-bg/60 transition-colors"
            >
              <div className="container-main py-10 md:py-16">
                <div className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  {/* Imagem */}
                  <div className="md:col-span-7">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-brand-dark ring-1 ring-brand-dark/10">
                      <Image
                        src={p.heroImagem}
                        alt={`${p.nome} — ${p.categoria}`}
                        fill
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 58vw"
                      />
                    </div>
                  </div>

                  {/* Texto */}
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-4 mb-5">
                      <span className="font-serif italic text-2xl text-brand-mint">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="h-px flex-1 bg-brand-dark/15" />
                      <span className="text-brand-dark/40 text-[11px] tracking-[0.28em] uppercase">
                        {p.pais === 'BR' ? '🇧🇷 Brasil' : '🇺🇸 EUA'}
                      </span>
                    </div>

                    <p className="text-brand-dark/40 text-xs tracking-[0.24em] uppercase mb-2">{p.categoria}</p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-[1.05] group-hover:text-brand-mint transition-colors">
                      {p.nome}
                    </h2>
                    <p className="text-brand-dark/60 text-base md:text-lg leading-relaxed mt-4">{p.resumo}</p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {p.servicos.map((s) => (
                        <span key={s} className="text-[11px] tracking-wide uppercase text-brand-dark/50 border border-brand-dark/15 rounded-full px-3 py-1">
                          {s}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 mt-8 text-brand-dark font-medium text-sm group-hover:gap-3 transition-all">
                      Ver projeto
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </section>

      {/* ===== MAIS SITES ===== */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="mb-12 max-w-2xl">
            <p className="text-brand-mint text-xs font-bold tracking-[0.32em] uppercase mb-3">Mais entregas</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-dark">
              Sites desenvolvidos
            </h2>
            <p className="text-brand-dark/50 mt-3">Todos com SEO otimizado e design de alta performance.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {maisSites.map((s, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <div className="group relative rounded-xl overflow-hidden ring-1 ring-brand-dark/10">
                  <div className="aspect-[4/3] relative bg-brand-dark">
                    <Image src={s.src} alt={s.nome} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 50vw, 25vw" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-bold text-sm">{s.nome}</p>
                    <p className="text-white/60 text-xs">{s.tipo}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-3xl text-center">
          <ScrollReveal>
            <div className="w-14 h-px bg-brand-mint mx-auto mb-8" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-5">
              Quer o próximo case a ser o seu?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Site, SEO, GoHighLevel e Chatbot IA — configurados, integrados e medidos. 100% orgânico.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5531982948067?text=Ol%C3%A1!%20Vi%20o%20portf%C3%B3lio%20e%20quero%20resultados%20assim%20para%20minha%20empresa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Falar com a Rhaideline
              </a>
              <Link href="/servicos" className="border border-white/20 text-white hover:bg-white/10 px-6 py-4 rounded-full text-base font-medium transition-colors">
                Ver serviços
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
