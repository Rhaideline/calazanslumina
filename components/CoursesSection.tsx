import Image from 'next/image'
import Link from 'next/link'
import { cursos } from '@/data/cursos'
import type { Curso } from '@/data/cursos'
import { formatPreco, formatPrecoCompacto } from '@/lib/formatters'
import ScrollReveal from '@/components/ScrollReveal'

// Bullets curtos por premium (subtitulo no card destaque)
const PREMIUM_BULLETS: Record<string, string> = {
  'ia-chatgpt-completo':
    '95 páginas · 10 IAs detalhadas · 50 templates de prompt · 9 planos por profissão. Tudo num único PDF.',
  'marketing-digital-definitivo':
    '146 páginas · 13 módulos · 4 níveis · 13 frameworks próprios · 11 diagramas vetoriais. Edição premium 2026.',
}

// Rota dedicada (quando existe) — outros caem em /cursos/<slug>
const PREMIUM_HREF: Record<string, string> = {
  'ia-chatgpt-completo': '/ia-completo',
}

// Pagina de detalhe do curso (rota dedicada premium quando houver)
function detailHref(c: Curso) {
  return PREMIUM_HREF[c.slug] ?? `/cursos/${c.slug}`
}

export default function CoursesSection() {
  const premiums = cursos.filter((c) => c.tier === 'premium')
  const naoPremium = cursos.filter((c) => c.tier !== 'premium')
  const totalGratuitos = naoPremium.filter((c) => c.gratuito).length
  const totalPagos = cursos.filter((c) => !c.gratuito).length

  return (
    <section className="section-padding bg-white" id="cursos">
      <div className="container-main">
        <ScrollReveal className="text-center mb-12">
          <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">
            Aprenda na prática
          </p>
          <h2 className="heading-2 text-brand-dark mb-4">
            Cursos de Marketing Digital —{' '}
            <span className="text-brand-mint">{totalGratuitos} Gratuitos</span>
          </h2>
          <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
            Aprenda marketing digital, IA, redes sociais e funis de vendas com cursos
            práticos. {totalGratuitos} cursos gratuitos + {totalPagos} a partir de R$ 9,90.
          </p>
        </ScrollReveal>

        {/* ═══ DESTAQUE PREMIUM ═══ */}
        {premiums.length > 0 && (
          <div className={`mb-14 max-w-6xl mx-auto grid gap-6 ${premiums.length > 1 ? 'md:grid-cols-2' : ''}`}>
            {premiums.map((premium, i) => (
              <ScrollReveal key={premium.slug} delay={i * 80}>
                <div className="group block h-full">
                  <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-dark via-[#1a0405] to-black border-2 border-red-500/30 shadow-2xl hover:border-red-500/60 transition-all hover:-translate-y-1 hover:shadow-red-500/20 h-full flex flex-col">
                    <div className="absolute inset-0 opacity-30 pointer-events-none">
                      <div className="absolute -top-1/2 -right-1/4 w-[500px] h-[500px] bg-gradient-radial from-red-500/40 via-transparent to-transparent rounded-full blur-3xl" />
                    </div>
                    <Link href={detailHref(premium)} className="relative aspect-[8/5] bg-brand-dark block">
                      <Image src={premium.imagem} alt={premium.nome} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                      <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] tracking-[0.32em] uppercase font-bold px-3 py-1.5 rounded-full">
                        🔥 Lançamento · Premium
                      </div>
                    </Link>
                    <div className="relative p-6 md:p-8 text-white flex-1 flex flex-col">
                      <p className="text-red-300 text-[10px] tracking-[0.36em] uppercase font-bold mb-3">Carro-chefe · curso completo</p>
                      <Link href={detailHref(premium)}>
                        <h3 className="font-serif italic font-normal text-2xl md:text-3xl leading-tight mb-3 hover:text-red-200 transition-colors">{premium.nome}</h3>
                      </Link>
                      <p className="text-white/70 text-sm leading-relaxed mb-5 min-h-[3.5rem]">
                        {PREMIUM_BULLETS[premium.slug] ?? premium.descricaoCurta}
                      </p>
                      <div className="flex items-baseline gap-3 mb-5">
                        <span className="font-serif italic text-3xl md:text-4xl">R$ {formatPreco(premium.preco)}</span>
                        {premium.precoOriginal && (
                          <span className="font-serif italic text-lg text-white/30 line-through">R$ {formatPreco(premium.precoOriginal)}</span>
                        )}
                        <span className="text-amber-300 text-xs font-medium ml-auto">Acesso vitalício</span>
                      </div>
                      <div className="mt-auto flex flex-col gap-2">
                        {premium.linkPagamento ? (
                          <a
                            href={premium.linkPagamento}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-500 hover:bg-red-600 text-white font-bold text-sm py-3 px-6 rounded-full text-center inline-flex items-center justify-center gap-2 transition-colors"
                          >
                            Garantir por R$ {formatPreco(premium.preco)}
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </a>
                        ) : (
                          <Link href={detailHref(premium)} className="bg-red-500 hover:bg-red-600 text-white font-bold text-sm py-3 px-6 rounded-full text-center transition-colors">
                            Garantir por R$ {formatPreco(premium.preco)}
                          </Link>
                        )}
                        <Link href={detailHref(premium)} className="border border-white/20 text-white text-xs py-2.5 px-6 rounded-full text-center font-medium hover:bg-white/5 transition-colors">
                          Ver o que tem dentro
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {naoPremium.map((curso, i) => (
            <ScrollReveal key={curso.slug} delay={i * 80}>
              <div className="card-premium overflow-hidden p-0 h-full flex flex-col group">
                <Link href={detailHref(curso)} className="relative aspect-[8/5] overflow-hidden block">
                  <Image
                    src={curso.imagem}
                    alt={curso.nome}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-white text-xs font-bold px-3 py-1 rounded-full ${
                        curso.gratuito ? 'bg-green-500' : 'bg-brand-mint'
                      }`}
                    >
                      {curso.gratuito ? 'GRATUITO' : `R$ ${formatPrecoCompacto(curso.preco)}`}
                    </span>
                  </div>
                </Link>
                <div className="p-5 flex-1 flex flex-col">
                  <Link href={detailHref(curso)}>
                    <h3 className="font-serif text-base font-bold text-brand-dark group-hover:text-brand-mint transition-colors leading-snug mb-2">
                      {curso.nome}
                    </h3>
                  </Link>
                  <p className="text-brand-dark/50 text-xs leading-relaxed mb-4 flex-1">
                    {curso.descricaoCurta.length > 100
                      ? curso.descricaoCurta.slice(0, 100) + '...'
                      : curso.descricaoCurta}
                  </p>
                  <div className="mt-auto flex flex-col gap-2">
                    {curso.gratuito ? (
                      <Link
                        href={`/cursos/${curso.slug}/aprender`}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold text-sm py-2.5 px-5 rounded-full text-center transition-colors"
                      >
                        Acessar grátis
                      </Link>
                    ) : curso.linkPagamento ? (
                      <a
                        href={curso.linkPagamento}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-mint hover:bg-brand-mint/90 text-brand-dark font-bold text-sm py-2.5 px-5 rounded-full text-center transition-colors"
                      >
                        Garantir por R$ {formatPreco(curso.preco)}
                      </a>
                    ) : (
                      <Link
                        href={detailHref(curso)}
                        className="bg-brand-mint hover:bg-brand-mint/90 text-brand-dark font-bold text-sm py-2.5 px-5 rounded-full text-center transition-colors"
                      >
                        Garantir por R$ {formatPreco(curso.preco)}
                      </Link>
                    )}
                    <Link
                      href={detailHref(curso)}
                      className="text-brand-mint text-xs font-medium text-center hover:underline"
                    >
                      Ver conteúdo do curso →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10">
          <Link href="/cursos" className="btn-primary inline-flex">
            Ver todos os cursos
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
