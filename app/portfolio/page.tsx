import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { projetos, maisSites } from '@/data/portfolio'
import ScrollReveal from '@/components/ScrollReveal'

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

      <div className="bg-[#F3F2EF]">
        {/* ===== HEADER ===== */}
        <section className="container-main pt-16 pb-14 md:pt-24 md:pb-20">
          <ScrollReveal className="max-w-4xl">
            <p className="text-brand-mint text-xs md:text-sm font-semibold tracking-[0.34em] uppercase mb-7">
              Nosso trabalho
            </p>
            <h1 className="font-serif text-[2.7rem] leading-[1.02] md:text-7xl lg:text-8xl font-bold text-[#1E1C1A] tracking-[-0.02em]">
              Trabalho que fala
              <br className="hidden md:block" /> <span className="italic font-normal">por números.</span>
            </h1>
            <p className="text-brand-dark/55 text-lg md:text-xl leading-relaxed mt-8 max-w-2xl">
              Sites de alta performance, SEO 100% orgânico e automação com IA para empresas no Brasil
              e nos Estados Unidos. Cada número veio do Google Search Console e do CRM dos clientes —
              sem print editado.
            </p>
          </ScrollReveal>
        </section>

        {/* ===== GRADE DE PROJETOS (mockups) ===== */}
        <section className="container-main pb-20 md:pb-28">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-14 md:gap-x-10 md:gap-y-20">
            {projetos.map((p, i) => (
              <ScrollReveal key={p.slug} delay={(i % 2) * 90}>
                <Link href={`/portfolio/${p.slug}`} className="group block">
                  {/* navegador */}
                  <div className="rounded-xl overflow-hidden bg-white ring-1 ring-black/[0.06] shadow-[0_18px_50px_-24px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_36px_80px_-30px_rgba(0,0,0,0.45)]">
                    <div className="h-8 md:h-9 bg-[#e9e7e3] flex items-center gap-1.5 px-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
                    </div>
                    <div className="relative aspect-[16/10] bg-brand-dark overflow-hidden">
                      <Image
                        src={p.heroImagem}
                        alt={`${p.nome} — ${p.categoria}`}
                        fill
                        className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 44vw"
                      />
                    </div>
                  </div>
                  {/* legenda */}
                  <div className="mt-6">
                    <p className="text-brand-dark/40 text-[11px] tracking-[0.24em] uppercase">
                      {p.categoria} · {p.local}
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E1C1A] leading-tight mt-1.5 group-hover:text-brand-mint transition-colors">
                      {p.nome}
                    </h2>
                    <p className="text-brand-dark/55 text-base leading-relaxed mt-2.5 max-w-md">{p.resumo}</p>
                    <span className="inline-flex items-center gap-2 mt-5 text-brand-dark font-medium text-sm group-hover:gap-3 transition-all">
                      Ver projeto
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>

      {/* ===== MAIS SITES ===== */}
      <section className="section-padding bg-white border-t border-brand-dark/10">
        <div className="container-main">
          <ScrollReveal className="mb-12 max-w-2xl">
            <p className="text-brand-mint text-xs font-semibold tracking-[0.32em] uppercase mb-3">Mais entregas</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1E1C1A]">Sites desenvolvidos</h2>
            <p className="text-brand-dark/50 mt-3">Todos com SEO otimizado e design de alta performance.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
            {maisSites.map((s, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <div className="group">
                  <div className="rounded-lg overflow-hidden bg-white ring-1 ring-black/[0.06] shadow-[0_12px_36px_-20px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:-translate-y-1">
                    <div className="h-6 bg-[#e9e7e3] flex items-center gap-1 px-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]" aria-hidden="true" />
                    </div>
                    <div className="aspect-[4/3] relative bg-brand-dark">
                      <Image src={s.src} alt={s.nome} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 50vw, 25vw" />
                    </div>
                  </div>
                  <p className="text-[#1E1C1A] font-semibold text-sm mt-3">{s.nome}</p>
                  <p className="text-brand-dark/45 text-xs">{s.tipo}</p>
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
