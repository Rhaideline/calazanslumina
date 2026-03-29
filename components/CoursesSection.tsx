import Image from 'next/image'
import Link from 'next/link'
import { cursos } from '@/data/cursos'
import ScrollReveal from '@/components/ScrollReveal'

export default function CoursesSection() {
  const cursosDestaque = cursos.filter((c) => c.destaque || c.gratuito).slice(0, 3)
  const cursosResto = cursos.filter((c) => !cursosDestaque.includes(c)).slice(0, 4)
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
            práticos. 4 cursos gratuitos + 3 a partir de R$10.
          </p>
        </ScrollReveal>

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
                        {curso.gratuito ? 'GRATUITO' : `R$${curso.preco}`}
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
