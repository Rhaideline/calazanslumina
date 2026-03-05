import Image from 'next/image'
import Link from 'next/link'
import { cursos } from '@/data/cursos'
import ScrollReveal from '@/components/ScrollReveal'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return cursos.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const curso = cursos.find((c) => c.slug === slug)
  if (!curso) return {}
  const totalAulas = curso.modulos.reduce((acc, m) => acc + m.aulas.length, 0)
  return {
    title: `${curso.nome} | ${curso.gratuito ? 'Gratuito' : `R$ ${curso.preco}`} — ${curso.modulos.length} Modulos`,
    description: `${curso.descricaoCurta} ${curso.modulos.length} modulos, ${totalAulas} aulas. ${curso.gratuito ? 'Acesso gratuito + PDF.' : `Apenas R$ ${curso.preco},00. Acesso imediato.`}`,
    alternates: { canonical: `https://calazanslumina.com.br/cursos/${slug}` },
    openGraph: {
      title: `${curso.nome} | ${curso.gratuito ? 'Curso Gratuito' : `R$ ${curso.preco}`}`,
      description: curso.descricaoCurta,
      url: `https://calazanslumina.com.br/cursos/${slug}`,
      type: 'website',
      images: [{ url: curso.imagem, width: 600, height: 600, alt: curso.nome }],
    },
  }
}

export default async function CursoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const curso = cursos.find((c) => c.slug === slug)
  if (!curso) notFound()

  const totalAulas = curso.modulos.reduce((acc, m) => acc + m.aulas.length, 0)

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: curso.nome,
    description: curso.descricaoCurta,
    provider: { '@type': 'Organization', name: 'Calazans Lumina', url: 'https://calazanslumina.com.br' },
    offers: {
      '@type': 'Offer',
      price: curso.preco,
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: `${totalAulas} aulas`,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
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
        <div className="container-main section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <Link href="/cursos" className="text-brand-mint text-sm font-medium mb-4 inline-flex items-center gap-2 hover:underline">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Voltar aos cursos
              </Link>
              <h1 className="heading-1 mb-6">{curso.nome}</h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">{curso.descricaoLonga}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-center">
                  <p className="text-brand-mint font-bold text-xl">{curso.modulos.length}</p>
                  <p className="text-white/40 text-xs">Módulos</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-center">
                  <p className="text-brand-mint font-bold text-xl">{totalAulas}</p>
                  <p className="text-white/40 text-xs">Aulas</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-center">
                  <p className="text-brand-mint font-bold text-xl">PDF</p>
                  <p className="text-white/40 text-xs">Download</p>
                </div>
              </div>

              <div className="flex items-end gap-4 mb-6">
                {curso.gratuito ? (
                  <>
                    <p className="font-serif text-5xl font-bold text-brand-mint">GRATUITO</p>
                    <p className="text-white/30 text-sm pb-2">acesso livre</p>
                  </>
                ) : (
                  <>
                    <p className="font-serif text-5xl font-bold text-white">
                      R$ {curso.preco}<span className="text-2xl text-white/40">,00</span>
                    </p>
                    <p className="text-white/30 text-sm pb-2">pagamento único</p>
                  </>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                {curso.gratuito ? (
                  <>
                    <Link
                      href={`/cursos/${curso.slug}/aprender`}
                      className="btn-primary text-base"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Fazer Curso Online
                    </Link>
                    <Link
                      href={`/cursos/${curso.slug}/download`}
                      className="border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-full text-base font-medium transition-colors inline-flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Baixar PDF Gratuito
                    </Link>
                  </>
                ) : (
                  <a
                    href={curso.linkPagamento || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    Comprar por R$ {curso.preco},00
                  </a>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-center mb-6">
                  <Image
                    src={curso.imagem}
                    alt={curso.nome}
                    width={100}
                    height={100}
                    className="object-contain opacity-80"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-4">O que você vai aprender:</h3>
                <ul className="space-y-3">
                  {curso.oQueVaiAprender.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <svg className="w-5 h-5 text-brand-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Para quem */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Para quem é este curso?</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {curso.paraQuem.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex items-center gap-4 bg-brand-bg rounded-xl p-5">
                  <div className="w-10 h-10 bg-brand-mint rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-brand-dark font-medium text-sm">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdo programático */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Conteúdo Programático</h2>
            <p className="text-brand-dark/50">
              {curso.modulos.length} módulos · {totalAulas} aulas
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {curso.modulos.map((modulo, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="flex items-center gap-4 p-6 border-b border-gray-50">
                    <div className="w-10 h-10 bg-brand-mint rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-brand-dark">{modulo.titulo}</h3>
                      <p className="text-brand-dark/40 text-xs">{modulo.aulas.length} aulas</p>
                    </div>
                  </div>
                  <ul className="p-6 space-y-2">
                    {modulo.aulas.map((aula, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-brand-dark/60">
                        <svg className="w-4 h-4 text-brand-mint/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {aula}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-brand-dark text-white text-center">
        <div className="container-main max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-2 mb-4">
              {curso.gratuito ? 'Pronto para começar a aprender?' : 'Garanta seu acesso agora!'}
            </h2>
            <p className="text-white/40 mb-8">
              {curso.gratuito
                ? 'Curso online gratuito · PDF para download · Sem cadastro'
                : `Curso completo por apenas R$ ${curso.preco},00 · Pagamento único · Acesso imediato`}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {curso.gratuito ? (
                <>
                  <Link
                    href={`/cursos/${curso.slug}/aprender`}
                    className="btn-primary text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Fazer Curso Online
                  </Link>
                  <Link
                    href={`/cursos/${curso.slug}/download`}
                    className="border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-full text-base font-medium transition-colors inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Baixar PDF Gratuito
                  </Link>
                </>
              ) : (
                <a
                  href={curso.linkPagamento || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Comprar por R$ {curso.preco},00
                </a>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
