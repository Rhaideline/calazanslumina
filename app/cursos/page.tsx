import Image from 'next/image'
import Link from 'next/link'
import { cursos } from '@/data/cursos'
import { formatPreco } from '@/lib/formatters'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumbs from '@/components/Breadcrumbs'
import PortfolioSites from '@/components/PortfolioSites'
import type { Metadata } from 'next'
import CapturaEmail from '@/components/CapturaEmail'

export const metadata: Metadata = {
  title: 'Cursos de Marketing Digital — 4 Grátis',
  description:
    'Aprenda marketing digital do zero: IA & ChatGPT, Google Meu Negócio, Redes Sociais, Funis de Vendas. 4 cursos gratuitos + 7 a partir de R$ 9,90. PDF + acesso online. Comece agora!',
  alternates: { canonical: 'https://calazanslumina.com.br/cursos' },
  openGraph: {
    title: 'Cursos de Marketing Digital | 4 Gratuitos + 7 a partir de R$ 9,90',
    description: 'Aprenda marketing digital do zero. 11 cursos disponíveis, 4 gratuitos. PDF + acesso online.',
    url: 'https://calazanslumina.com.br/cursos',
    type: 'website',
  },
}

export default function CursosPage() {
  const cursosSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Cursos de Marketing Digital e IA — Calazans Lumina',
    description: 'Cursos online de marketing digital, ChatGPT, Google Meu Negocio, funis de vendas e redes sociais. A partir de R$ 9,90.',
    url: 'https://calazanslumina.com.br/cursos',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: 7,
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Course', name: 'ChatGPT para Idosos', url: 'https://calazanslumina.com.br/cursos/chatgpt-para-idosos' } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Course', name: 'IA & ChatGPT Completo', url: 'https://calazanslumina.com.br/cursos/ia-chatgpt-completo' } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Course', name: 'Marketing Digital para Iniciantes', url: 'https://calazanslumina.com.br/cursos/marketing-digital-iniciantes' } },
        { '@type': 'ListItem', position: 4, item: { '@type': 'Course', name: 'Google Meu Negocio do Zero', url: 'https://calazanslumina.com.br/cursos/google-meu-negocio-do-zero' } },
        { '@type': 'ListItem', position: 5, item: { '@type': 'Course', name: 'Redes Sociais que Vendem', url: 'https://calazanslumina.com.br/cursos/redes-sociais-que-vendem' } },
        { '@type': 'ListItem', position: 6, item: { '@type': 'Course', name: 'Funis de Vendas Simplificado', url: 'https://calazanslumina.com.br/cursos/funis-de-vendas-simplificado' } },
        { '@type': 'ListItem', position: 7, item: { '@type': 'Course', name: 'Ferramentas Digitais para Secretarias', url: 'https://calazanslumina.com.br/cursos/ferramentas-digitais-secretarias' } },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cursosSchema) }}
      />
      <Breadcrumbs items={[{ name: 'Cursos' }]} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67d859c95106d5e512376e8e.jpeg"
          alt="Rhaideline Calazans — Cursos de Marketing Digital"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/85" />
        <div className="container-main section-padding relative z-10 text-center">
          <ScrollReveal>
            <p className="text-brand-mint font-medium mb-3 text-sm uppercase tracking-wider">
              Aprenda no seu ritmo
            </p>
            <h1 className="heading-1 mb-6">
              Cursos de Marketing Digital{' '}
              <span className="text-brand-mint">para Iniciantes</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Conhecimento prático e direto ao ponto. Temos cursos <strong className="text-white">gratuitos</strong> e cursos a partir de{' '}
              <strong className="text-white">R$ 9,90</strong> — menos que um café, mais que muitos cursos caros ensinam.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 text-center">
                <p className="text-brand-mint font-bold text-2xl">{cursos.length}</p>
                <p className="text-white/40 text-xs">Cursos disponíveis</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 text-center">
                <p className="text-brand-mint font-bold text-2xl">R$ 0–9,90</p>
                <p className="text-white/40 text-xs">Por curso</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 text-center">
                <p className="text-brand-mint font-bold text-2xl">Online + PDF</p>
                <p className="text-white/40 text-xs">Duas formas de estudar</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ CURSO PREMIUM · CARRO-CHEFE ═══════════════ */}
      {(() => {
        const premium = cursos.find((c) => c.tier === 'premium')
        if (!premium) return null
        const totalAulas = premium.modulos.reduce((acc, m) => acc + m.aulas.length, 0)
        return (
          <section className="py-16 md:py-20 bg-gradient-to-br from-brand-dark via-brand-dark to-black text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-gradient-radial from-red-500/40 via-transparent to-transparent rounded-full blur-3xl" />
              <div className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] bg-gradient-radial from-amber-500/20 via-transparent to-transparent rounded-full blur-3xl" />
            </div>
            <div className="container-main relative z-10">
              <ScrollReveal>
                <div className="text-center mb-10">
                  <span className="inline-block bg-red-500 text-white text-[10px] font-bold tracking-[0.4em] uppercase px-4 py-2 rounded-full mb-4">
                    🔥 Edição completa · Lançamento 2026
                  </span>
                  <h2 className="font-serif italic font-normal text-4xl md:text-6xl leading-tight mb-4">
                    O <span className="text-red-400">único curso</span> de IA que você precisa.
                  </h2>
                  <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
                    95 páginas. 10 IAs detalhadas. 50 templates de prompt. 9 planos por profissão.
                    <br className="hidden md:block" />
                    De <span className="line-through text-white/40">R$ {formatPreco(premium.precoOriginal || 297)}</span> por <strong className="text-white text-2xl">R$ {formatPreco(premium.preco)}</strong>. Edição de lançamento.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto bg-white/[0.03] border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-sm">
                  <div className="relative aspect-[8/5] rounded-2xl overflow-hidden bg-brand-dark border border-white/10">
                    <Image src={premium.imagem} alt={premium.nome} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] tracking-[0.32em] uppercase font-bold px-3 py-1.5 rounded-full">
                      Premium
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif italic font-normal text-3xl md:text-4xl leading-tight mb-3">{premium.nome}</h3>
                    <p className="text-white/65 leading-relaxed mb-5">{premium.descricaoCurta}</p>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                        <p className="font-serif italic text-3xl text-red-400">{premium.numeroPaginas || 95}</p>
                        <p className="text-[9px] tracking-[0.28em] uppercase text-white/40 mt-1">páginas</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                        <p className="font-serif italic text-3xl text-red-400">10</p>
                        <p className="text-[9px] tracking-[0.28em] uppercase text-white/40 mt-1">IAs</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                        <p className="font-serif italic text-3xl text-red-400">50</p>
                        <p className="text-[9px] tracking-[0.28em] uppercase text-white/40 mt-1">prompts</p>
                      </div>
                    </div>

                    {premium.bonus && (
                      <div className="mb-6 bg-amber-500/[0.08] border border-amber-500/20 rounded-xl p-4">
                        <p className="text-[10px] tracking-[0.32em] uppercase text-amber-400 font-bold mb-3">+ 5 bônus inclusos</p>
                        <ul className="space-y-1.5 text-sm text-white/75">
                          {premium.bonus.slice(0, 3).map((b, i) => (
                            <li key={i} className="flex gap-2"><span className="text-amber-400">✓</span><span>{b}</span></li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex items-end gap-3 mb-5">
                      <div>
                        <p className="text-[10px] tracking-[0.32em] uppercase text-white/40 mb-1">Investimento</p>
                        <div className="flex items-baseline gap-3">
                          <span className="font-serif italic text-5xl md:text-6xl text-white">R$ {formatPreco(premium.preco)}</span>
                          <span className="font-serif italic text-2xl text-white/40 line-through">R$ {formatPreco(premium.precoOriginal || 297)}</span>
                        </div>
                        <p className="text-amber-300 text-xs font-medium mt-1">Acesso vitalício · pagamento único</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <a
                        href={premium.linkPagamento || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-500 hover:bg-red-600 text-white font-bold text-base py-4 rounded-full text-center inline-flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-red-500/30"
                      >
                        Garantir agora por R$ {formatPreco(premium.preco)}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                      <Link
                        href={`/cursos/${premium.slug}`}
                        className="border border-white/20 hover:bg-white/5 text-white text-sm py-3 rounded-full text-center font-medium transition-colors"
                      >
                        Ver o que tem dentro
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        )
      })()}

      {/* ═══════════════ REEL · MERCADO LIVRE DEFINITIVO ═══════════════ */}
      {(() => {
        const ml = cursos.find((c) => c.slug === 'mercado-livre-definitivo')
        if (!ml) return null
        return (
          <section className="py-16 md:py-20 bg-gradient-to-br from-[#0d1f1c] via-brand-dark to-black text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-25 pointer-events-none">
              <div className="absolute -top-1/3 -left-1/4 w-[500px] h-[500px] bg-gradient-radial from-yellow-400/40 via-transparent to-transparent rounded-full blur-3xl" />
              <div className="absolute -bottom-1/3 -right-1/4 w-[500px] h-[500px] bg-gradient-radial from-brand-mint/30 via-transparent to-transparent rounded-full blur-3xl" />
            </div>
            <div className="container-main relative z-10">
              <ScrollReveal>
                <div className="max-w-3xl mx-auto">
                  <div>
                    <span className="inline-block bg-yellow-400 text-brand-dark text-[10px] font-bold tracking-[0.4em] uppercase px-4 py-2 rounded-full mb-4">
                      Lançamento · R$ 9,90
                    </span>
                    <h2 className="font-serif italic font-normal text-3xl md:text-5xl leading-tight mb-4">
                      Mercado Livre, <span className="text-yellow-400">do zero</span> ao Mercado Líder.
                    </h2>
                    <p className="text-white/70 text-base md:text-lg mb-5 leading-relaxed">
                      O passo a passo pra vender no Mercado Livre — do primeiro anúncio até o selo <strong className="text-white">Mercado Líder Gold</strong>. O método completo em <strong className="text-white">126 páginas, 15 módulos</strong>, com estratégia de ROAS, anti-bloqueio e custo variável real.
                    </p>
                    <ul className="text-white/75 text-sm md:text-base space-y-1.5 mb-6">
                      <li>✦ ROAS-first (estratégia 2026)</li>
                      <li>✦ Anti-bloqueio + custo variável real</li>
                      <li>✦ Do iniciante ao Mercado Líder Gold</li>
                    </ul>
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href={ml.linkPagamento || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-yellow-400 text-brand-dark font-bold px-7 py-3.5 rounded-xl hover:bg-yellow-300 transition-all shadow-2xl hover:-translate-y-0.5"
                      >
                        Quero por R$ {formatPreco(ml.preco)}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </a>
                      <Link href="/cursos/mercado-livre-definitivo" className="text-white/70 text-sm font-medium hover:text-white underline underline-offset-4">
                        Ver conteúdo do curso
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        )
      })()}

      {/* Cursos Grid */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="mb-10 text-center">
            <p className="text-brand-mint font-medium text-sm uppercase tracking-wider mb-2">Todos os cursos</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-dark">
              Cursos <span className="text-brand-mint">disponíveis</span>
            </h2>
            <p className="text-brand-dark/60 mt-3 max-w-2xl mx-auto">
              Cursos focados em um tema só, do gratuito ao premium. Escolha o que se encaixa no seu objetivo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursos.map((curso, i) => (
              <ScrollReveal key={curso.slug} delay={i * 100}>
                <div className={`relative rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  curso.destaque
                    ? 'border-2 border-brand-mint shadow-xl shadow-black/10'
                    : 'border border-gray-100 shadow-sm'
                }`}>
                  {curso.gratuito ? (
                    <div className="absolute top-4 right-4 z-10 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Gratuito
                    </div>
                  ) : curso.destaque ? (
                    <div className="absolute top-4 right-4 z-10 bg-brand-mint text-white text-xs font-bold px-3 py-1 rounded-full">
                      Mais vendido
                    </div>
                  ) : null}

                  {/* Image area — full-bleed cover */}
                  <Link href={`/cursos/${curso.slug}`} className="group block relative aspect-[8/5] bg-brand-dark overflow-hidden">
                    <Image
                      src={curso.imagem}
                      alt={curso.nome}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-brand-dark/60 text-sm leading-relaxed mb-4 flex-1">
                      {curso.descricaoCurta}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-brand-dark/40 text-xs">{curso.gratuito ? 'Acesso' : 'Investimento'}</p>
                        {curso.gratuito ? (
                          <p className="font-serif text-3xl font-bold text-green-600">GRÁTIS</p>
                        ) : (
                          <p className="font-serif text-3xl font-bold text-brand-dark">
                            R$ {formatPreco(curso.preco)}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-brand-dark/40 text-xs">{curso.modulos.length} módulos</p>
                        <p className="text-brand-dark/40 text-xs">
                          {curso.modulos.reduce((acc, m) => acc + m.aulas.length, 0)} aulas
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {curso.gratuito ? (
                        <>
                          <Link
                            href={`/cursos/${curso.slug}/aprender`}
                            className="btn-primary text-sm py-3 text-center w-full inline-flex items-center justify-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Fazer Curso Online
                          </Link>
                          <Link
                            href={`/cursos/${curso.slug}/download`}
                            className="border border-brand-dark/20 text-brand-dark hover:bg-brand-bg text-sm py-3 rounded-full text-center w-full font-medium transition-colors inline-flex items-center justify-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Baixar PDF Gratuito
                          </Link>
                        </>
                      ) : (
                        <>
                          <a
                            href={curso.linkPagamento || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-sm py-3 text-center w-full inline-flex items-center justify-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            Comprar por R$ {formatPreco(curso.preco)}
                          </a>
                          <Link
                            href={`/cursos/${curso.slug}`}
                            className="border border-brand-dark/20 text-brand-dark hover:bg-brand-bg text-sm py-3 rounded-full text-center w-full font-medium transition-colors inline-flex items-center justify-center gap-2"
                          >
                            Ver Conteudo Completo
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <PortfolioSites compact />

      {/* CTA */}
      <section className="section-padding bg-brand-dark text-white text-center">
        <div className="container-main max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-2 mb-4">
              Quer todos os cursos com <span className="text-brand-mint">desconto?</span>
            </h2>
            <p className="text-white/50 text-lg mb-8">
              Me chama no WhatsApp e monto um pacote especial com todos os cursos por um preço que cabe no seu bolso.
            </p>
            <a
              href="https://wa.me/5531982948067?text=Olá! Quero saber sobre o pacote de cursos da Calazans Lumina"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar sobre Pacote de Cursos
            </a>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <CapturaEmail origem="cursos-indice" />
        </div>
      </section>
    </>
  )
}
