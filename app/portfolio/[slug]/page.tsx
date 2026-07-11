import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projetos, getProjetoBySlug } from '@/data/portfolio'
import ScrollReveal from '@/components/ScrollReveal'

export function generateStaticParams() {
  return projetos.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = getProjetoBySlug(slug)
  if (!p) return {}
  return {
    title: `${p.nome} · Case ${p.categoria} · Portfólio`,
    description: `${p.resumo} ${p.overview.slice(0, 110)}`,
    alternates: { canonical: `https://calazanslumina.com.br/portfolio/${p.slug}` },
    openGraph: {
      title: `${p.nome} — Case Calazans Lumina`,
      description: p.resumo,
      type: 'article',
      images: [{ url: p.heroImagem }],
    },
  }
}

export default async function ProjetoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getProjetoBySlug(slug)
  if (!p) notFound()

  const idx = projetos.findIndex((x) => x.slug === p.slug)
  const proximo = projetos[(idx + 1) % projetos.length]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: p.nome,
    about: p.categoria,
    url: `https://calazanslumina.com.br/portfolio/${p.slug}`,
    image: p.heroImagem,
    creator: { '@type': 'Organization', name: 'Calazans Lumina', url: 'https://calazanslumina.com.br' },
    keywords: p.servicos.join(', '),
    locationCreated: { '@type': 'Place', name: p.local },
  }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://calazanslumina.com.br/' },
      { '@type': 'ListItem', position: 2, name: 'Portfólio', item: 'https://calazanslumina.com.br/portfolio' },
      { '@type': 'ListItem', position: 3, name: p.nome, item: `https://calazanslumina.com.br/portfolio/${p.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ===== HERO — showcase em mockups de dispositivo (estilo Upthought) ===== */}
      <section className="bg-[#F3F2EF]">
        <div className="container-main pt-10 md:pt-16">
          <ScrollReveal>
            <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[11px] tracking-[0.24em] uppercase text-brand-dark/40 mb-8">
              <Link href="/portfolio" className="hover:text-brand-dark transition-colors">Nosso trabalho</Link>
              <span aria-hidden="true">·</span>
              <span>{p.local}</span>
            </nav>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-[#1E1C1A] leading-[1.04] tracking-[-0.015em] max-w-4xl">
              {p.nome}
            </h1>
            <p className="text-brand-mint text-sm md:text-base font-semibold tracking-wide mt-5">
              {p.servicos.join(' · ')}
            </p>
          </ScrollReveal>
        </div>

        <div className="container-main pt-14 md:pt-20 pb-24 md:pb-32">
          <ScrollReveal>
            <div className="relative max-w-5xl mx-auto">
              {/* navegador desktop */}
              <div className="rounded-xl overflow-hidden shadow-[0_40px_90px_-30px_rgba(0,0,0,0.42)] ring-1 ring-black/[0.06] bg-white">
                <div className="h-10 md:h-11 bg-[#e9e7e3] flex items-center gap-2 px-4 md:px-5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" aria-hidden="true" />
                  <span className="ml-4 flex-1 max-w-md h-6 rounded-md bg-white/70 items-center px-3 text-[11px] text-brand-dark/40 truncate hidden sm:flex">
                    {(p.url ?? 'https://calazanslumina.com.br').replace(/^https?:\/\//, '')}
                  </span>
                </div>
                <div className="relative aspect-[16/10] bg-brand-dark">
                  <Image src={p.heroImagem} alt={`${p.nome} — site`} fill priority className="object-cover object-top" sizes="(max-width:768px) 100vw, 64rem" />
                </div>
              </div>
              {/* celular sobreposto */}
              <div className="absolute -bottom-12 left-2 md:-left-6 w-[124px] md:w-[188px]">
                <div className="rounded-[24px] md:rounded-[32px] bg-[#0b0b0d] p-1.5 md:p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] ring-1 ring-black/20">
                  <div className="relative rounded-[18px] md:rounded-[26px] overflow-hidden aspect-[9/19] bg-white">
                    <Image src={p.galeria[0]?.src ?? p.heroImagem} alt={`${p.nome} — versão mobile`} fill className="object-cover object-top" sizes="188px" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== OVERVIEW + SERVIÇOS ===== */}
      <section className="container-main pt-16 pb-12 md:pt-24 md:pb-16">
        <ScrollReveal className="max-w-4xl">
          <p className="text-brand-dark/70 text-lg md:text-2xl leading-relaxed">{p.overview}</p>
          <div className="flex flex-wrap gap-2 mt-8">
            {p.servicos.map((s) => (
              <span key={s} className="text-[11px] tracking-wide uppercase text-brand-dark/55 border border-brand-dark/15 rounded-full px-3.5 py-1.5">
                {s}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ===== MÉTRICAS ===== */}
      {p.metricas.length > 0 && (
        <section className="container-main mb-16 md:mb-24">
          <ScrollReveal>
            <div className={`grid grid-cols-2 ${p.metricas.length >= 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'} gap-px bg-brand-dark/10 rounded-2xl overflow-hidden ring-1 ring-brand-dark/10`}>
              {p.metricas.map((m) => (
                <div key={m.label} className="bg-white p-6 md:p-8 text-center">
                  <p className="font-serif text-3xl md:text-5xl font-bold text-brand-mint tracking-tight">{m.valor}</p>
                  <p className="text-brand-dark/50 text-[11px] md:text-xs tracking-[0.18em] uppercase mt-2">{m.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ===== DESAFIO + SOLUÇÃO ===== */}
      <section className="container-main mb-16 md:mb-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-5xl">
          <ScrollReveal>
            <p className="text-brand-dark/40 text-xs tracking-[0.28em] uppercase mb-4">O desafio</p>
            <p className="font-serif text-xl md:text-2xl text-brand-dark leading-relaxed">{p.desafio}</p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="text-brand-mint text-xs tracking-[0.28em] uppercase mb-4">A solução</p>
            <p className="text-brand-dark/70 text-base md:text-lg leading-relaxed">{p.solucao}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== GALERIA ===== */}
      {p.galeria.length > 0 && (
        <section className="container-main mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {p.galeria.map((img, i) => (
              <ScrollReveal key={i} delay={(i % 2) * 100}>
                <figure className="group">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-brand-dark ring-1 ring-brand-dark/10">
                    <Image src={img.src} alt={img.label} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width:768px) 100vw, 48vw" />
                  </div>
                  <figcaption className="text-brand-dark/45 text-sm mt-3">{img.label}</figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* ===== VISITAR SITE ===== */}
      {p.url && (
        <section className="container-main mb-20 md:mb-28">
          <ScrollReveal className="text-center">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-serif italic text-2xl md:text-3xl text-brand-dark hover:text-brand-mint transition-colors">
              Visitar {p.nome.replace(/ Inc\.| Group|\./g, '')}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </ScrollReveal>
        </section>
      )}

      {/* ===== PRÓXIMO PROJETO ===== */}
      <section className="border-t border-brand-dark/10">
        <Link href={`/portfolio/${proximo.slug}`} className="group block hover:bg-brand-bg/60 transition-colors">
          <div className="container-main py-12 md:py-16 flex items-center justify-between gap-6">
            <div>
              <p className="text-brand-dark/40 text-xs tracking-[0.28em] uppercase mb-2">Próximo projeto</p>
              <p className="font-serif text-3xl md:text-5xl font-bold text-brand-dark group-hover:text-brand-mint transition-colors">{proximo.nome}</p>
            </div>
            <svg className="w-8 h-8 md:w-12 md:h-12 text-brand-dark/30 group-hover:text-brand-mint group-hover:translate-x-2 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>
        </Link>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-5">Quer resultados assim?</h2>
            <p className="text-white/60 text-lg mb-8">Site, SEO, GoHighLevel e Chatbot IA — configurados e medidos. 100% orgânico.</p>
            <a
              href={`https://wa.me/5531982948067?text=Ol%C3%A1!%20Vi%20o%20case%20da%20${encodeURIComponent(p.nome)}%20e%20quero%20algo%20assim`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Falar com a Rhaideline
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
