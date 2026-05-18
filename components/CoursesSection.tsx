import Image from 'next/image'
import Link from 'next/link'
import { cursos } from '@/data/cursos'
import { formatPreco, formatPrecoCompacto } from '@/lib/formatters'
import ScrollReveal from '@/components/ScrollReveal'

export default function CoursesSection() {
  const premium = cursos.find((c) => c.tier === 'premium')
  const cursosDestaque = cursos.filter((c) => c.tier !== 'premium' && (c.destaque || c.gratuito)).slice(0, 3)
  const cursosResto = cursos.filter((c) => c.tier !== 'premium' && !cursosDestaque.includes(c)).slice(0, 3)
  const todos = [...cursosDestaque, ...cursosResto]

  return (
    <section className="section-padding bg-white" id="cursos">
      <div className="container-main">
        <ScrollReveal className="text-center mb-12">
          <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">
            Aprenda na prática
          </p>
          <h2 className="heading-2 text-brand-dark mb-4">
            Cursos de Marketing Digital —{' '}
            <span className="text-brand-mint">2 Gratuitos</span>
          </h2>
          <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
            Aprenda marketing digital, IA, redes sociais e funis de vendas com cursos
            práticos. 4 cursos gratuitos + 3 a partir de R$ 9,90.
          </p>
        </ScrollReveal>

        {/* ═══ DESTAQUE PREMIUM ═══ */}
        {premium && (
          <ScrollReveal className="mb-14 max-w-5xl mx-auto">
            <Link href="/ia-completo" className="group block">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-dark via-[#1a0405] to-black border-2 border-red-500/30 shadow-2xl hover:border-red-500/60 transition-all hover:-translate-y-1 hover:shadow-red-500/20">
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <div className="absolute -top-1/2 -right-1/4 w-[500px] h-[500px] bg-gradient-radial from-red-500/40 via-transparent to-transparent rounded-full blur-3xl" />
                </div>
                <div className="grid md:grid-cols-5 gap-0 relative">
                  <div className="md:col-span-2 relative aspect-[8/5] md:aspect-auto md:min-h-[280px] bg-brand-dark">
                    <Image src={premium.imagem} alt={premium.nome} fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] tracking-[0.32em] uppercase font-bold px-3 py-1.5 rounded-full">
                      🔥 Lançamento · Premium
                    </div>
                  </div>
                  <div className="md:col-span-3 p-6 md:p-10 text-white">
                    <p className="text-red-300 text-[10px] tracking-[0.36em] uppercase font-bold mb-3">Carro-chefe · curso completo</p>
                    <h3 className="font-serif italic font-normal text-3xl md:text-4xl leading-tight mb-3">{premium.nome}</h3>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed mb-5">
                      95 páginas · 10 IAs detalhadas · 50 templates de prompt · 9 planos por profissão. Tudo num único PDF.
                    </p>
                    <div className="flex items-baseline gap-3 mb-5">
                      <span className="font-serif italic text-4xl md:text-5xl">R$ {formatPreco(premium.preco)}</span>
                      {premium.precoOriginal && (
                        <span className="font-serif italic text-xl text-white/30 line-through">R$ {formatPreco(premium.precoOriginal)}</span>
                      )}
                      <span className="text-amber-300 text-xs font-medium ml-auto">Acesso vitalício</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <span className="bg-red-500 group-hover:bg-red-600 text-white font-bold text-sm py-3 px-6 rounded-full text-center inline-flex items-center justify-center gap-2 transition-colors">
                        Garantir por R$ {formatPreco(premium.preco)}
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <span className="border border-white/20 text-white text-sm py-3 px-6 rounded-full text-center font-medium group-hover:bg-white/5 transition-colors">
                        Ver o que tem dentro
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {todos.slice(0, 6).map((curso, i) => (
            <ScrollReveal key={curso.slug} delay={i * 80}>
              <Link
                href={`/cursos/${curso.slug}`}
                className="group block h-full"
              >
                <div className="card-premium overflow-hidden p-0 h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
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
                          curso.gratuito
                            ? 'bg-green-500'
                            : 'bg-brand-mint'
                        }`}
                      >
                        {curso.gratuito ? 'GRATUITO' : `R$ ${formatPrecoCompacto(curso.preco)}`}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-serif text-base font-bold text-brand-dark group-hover:text-brand-mint transition-colors leading-snug mb-2">
                      {curso.nome}
                    </h3>
                    <p className="text-brand-dark/50 text-xs leading-relaxed mb-4 flex-1">
                      {curso.descricaoCurta.length > 100
                        ? curso.descricaoCurta.slice(0, 100) + '...'
                        : curso.descricaoCurta}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-brand-dark/30 text-xs">
                        {curso.modulos.length} módulos ·{' '}
                        {curso.modulos.reduce((a, m) => a + m.aulas.length, 0)} aulas
                      </span>
                      <span className="text-brand-mint text-xs font-medium group-hover:underline">
                        Ver curso →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
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
