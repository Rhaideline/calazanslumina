import Image from 'next/image'
import Link from 'next/link'
import { cursos } from '@/data/cursos'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cursos de Marketing Digital | Gratuitos e a partir de R$ 20',
  description:
    'Cursos de marketing digital para iniciantes. IA & ChatGPT, Google Meu Negócio, Redes Sociais, Funis de Vendas. Cursos gratuitos e a partir de R$ 20. Por Rhaideline Calazans.',
}

export default function CursosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b435a20c0357f3208c418.jpeg"
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
              <strong className="text-white">R$ 20,00</strong> — menos que um almoço, mais que muitos cursos caros ensinam.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 text-center">
                <p className="text-brand-mint font-bold text-2xl">{cursos.length}</p>
                <p className="text-white/40 text-xs">Cursos disponíveis</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 text-center">
                <p className="text-brand-mint font-bold text-2xl">R$ 0–20</p>
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

      {/* Cursos Grid */}
      <section className="section-padding bg-white">
        <div className="container-main">
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

                  {/* Image area */}
                  <Link href={`/cursos/${curso.slug}`} className="group">
                    <div className="relative h-48 bg-brand-dark flex items-center justify-center overflow-hidden">
                      <Image
                        src={curso.imagem}
                        alt={curso.nome}
                        width={120}
                        height={120}
                        className="object-contain opacity-30 group-hover:opacity-50 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white font-serif text-xl font-bold text-center px-6 leading-snug">
                          {curso.nome}
                        </p>
                      </div>
                    </div>
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
                            R$ {curso.preco}<span className="text-base text-brand-dark/40">,00</span>
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
                            href={`https://wa.me/5531982948067?text=Ol%C3%A1!%20Quero%20comprar%20o%20curso%20${encodeURIComponent(curso.nome)}%20por%20R$${curso.preco}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-sm py-3 text-center w-full inline-flex items-center justify-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Comprar por R$ {curso.preco},00
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
    </>
  )
}
