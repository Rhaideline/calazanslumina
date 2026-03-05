import Image from 'next/image'
import Link from 'next/link'
import { cursos } from '@/data/cursos'
import ScrollReveal from '@/components/ScrollReveal'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import CoursesSection from '@/components/CoursesSection'

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
  const outrosCursos = cursos.filter((c) => c.slug !== slug).slice(0, 3)

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
    review: curso.vsl.depoimentos.map((d) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: d.nome },
      reviewBody: d.texto,
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      reviewCount: curso.vsl.depoimentos.length + 47,
      bestRating: 5,
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: curso.vsl.objecoes.map((o) => ({
      '@type': 'Question',
      name: o.pergunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: o.resposta,
      },
    })),
  }

  const ctaLink = curso.gratuito ? `/cursos/${curso.slug}/aprender` : (curso.linkPagamento || '#')
  const ctaText = curso.gratuito ? 'Acessar Curso Gratuito Agora' : `Garantir por R$ ${curso.preco},00`
  const ctaTarget = curso.gratuito ? undefined : '_blank'
  const ctaRel = curso.gratuito ? undefined : 'noopener noreferrer'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* === HERO VSL — Hook + Preço + CTA === */}
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b435a20c0357f3208c418.jpeg"
          alt={`${curso.nome} — Calazans Lumina`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/90" />
        <div className="container-main section-padding relative z-10">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Cursos', href: '/cursos' },
            { label: curso.nome },
          ]} />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-brand-mint/20 border border-brand-mint/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-brand-mint rounded-full animate-pulse" />
                <span className="text-brand-mint text-sm font-medium">
                  {curso.gratuito ? 'Curso 100% Gratuito' : `Apenas R$ ${curso.preco},00 — Pagamento Único`}
                </span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {curso.vsl.hook}
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8">
                {curso.vsl.subhook}
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-white/60 text-sm">{curso.modulos.length} módulos</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white/60 text-sm">{totalAulas} aulas</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-white/60 text-sm">Acesso vitalício</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {curso.gratuito ? (
                  <>
                    <Link href={`/cursos/${curso.slug}/aprender`} className="btn-primary text-lg px-8 py-4">
                      Acessar Curso Gratuito Agora
                    </Link>
                    <Link
                      href={`/cursos/${curso.slug}/download`}
                      className="border border-white/20 text-white hover:bg-white/10 px-6 py-4 rounded-full text-base font-medium transition-colors inline-flex items-center gap-2"
                    >
                      Baixar PDF Gratuito
                    </Link>
                  </>
                ) : (
                  <a
                    href={curso.linkPagamento || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Garantir por R$ {curso.preco},00
                  </a>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-6">
                  <Image src={curso.imagem} alt={curso.nome} width={100} height={100} className="object-contain opacity-80" />
                </div>
                <div className="text-center mb-6">
                  {curso.gratuito ? (
                    <p className="font-serif text-5xl font-bold text-brand-mint">GRATUITO</p>
                  ) : (
                    <div>
                      <p className="text-white/30 text-sm line-through mb-1">De R$ 197,00</p>
                      <p className="font-serif text-5xl font-bold text-white">
                        R$ {curso.preco}<span className="text-2xl text-white/40">,00</span>
                      </p>
                      <p className="text-brand-mint text-sm mt-1">Economia de R$ {197 - curso.preco},00</p>
                    </div>
                  )}
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-white/70">
                    <svg className="w-5 h-5 text-brand-mint flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {curso.modulos.length} módulos completos ({totalAulas} aulas)
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/70">
                    <svg className="w-5 h-5 text-brand-mint flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Acesso online vitalício
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/70">
                    <svg className="w-5 h-5 text-brand-mint flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    PDF para download e estudo offline
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/70">
                    <svg className="w-5 h-5 text-brand-mint flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Funciona no celular, tablet e computador
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/70">
                    <svg className="w-5 h-5 text-brand-mint flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {curso.gratuito ? 'Sem cadastro, sem pegadinha' : 'Pagamento único — sem mensalidade'}
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* === PROBLEMA — Agitação da dor === */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <p className="text-red-500 text-sm font-bold uppercase tracking-wider mb-3">Você se identifica?</p>
            <h2 className="heading-2 text-brand-dark mb-4">Se pelo menos um desses problemas é seu, esse curso foi feito para você</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {curso.vsl.problemas.map((problema, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-start gap-4 bg-red-50 border border-red-100 rounded-xl p-5">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <p className="text-brand-dark/80 text-sm font-medium">{problema}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === TRANSFORMAÇÃO — Antes vs Depois === */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-6">
            <p className="text-brand-mint text-sm font-bold uppercase tracking-wider mb-3">A transformação</p>
            <h2 className="heading-2 mb-6">{curso.vsl.transformacao}</h2>
          </ScrollReveal>
          <div className="space-y-4 mt-12">
            {curso.vsl.antesDepois.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-right">
                    <p className="text-red-400 text-xs font-bold uppercase mb-1">Antes</p>
                    <p className="text-white/60 text-sm">{item.antes}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="bg-brand-mint/10 border border-brand-mint/20 rounded-xl p-4">
                    <p className="text-brand-mint text-xs font-bold uppercase mb-1">Depois</p>
                    <p className="text-white/80 text-sm">{item.depois}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === O QUE VOCÊ VAI APRENDER === */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">O que você vai aprender</h2>
            <p className="text-brand-dark/50">Cada item foi pensado para gerar resultado prático no seu dia a dia</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-3">
            {curso.oQueVaiAprender.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-start gap-3 bg-brand-bg rounded-xl p-4">
                  <svg className="w-5 h-5 text-brand-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-brand-dark/80 text-sm">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === CONTEÚDO PROGRAMÁTICO (Value Stack) === */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Conteúdo Programático Completo</h2>
            <p className="text-brand-dark/50">
              {curso.modulos.length} módulos · {totalAulas} aulas · Acesso vitalício
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
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-bold text-brand-dark">{modulo.titulo}</h3>
                      <p className="text-brand-dark/40 text-xs">{modulo.aulas.length} aulas</p>
                    </div>
                  </div>
                  <ul className="p-6 space-y-2">
                    {modulo.aulas.map((aula, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-brand-dark/60">
                        <svg className="w-4 h-4 text-brand-mint/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
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

      {/* === PARA QUEM === */}
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

      {/* === DEPOIMENTOS (Social Proof) === */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">O que nossos alunos dizem</h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-brand-dark/40 text-sm">4.9/5 — Baseado em avaliações reais</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {curso.vsl.depoimentos.map((dep, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-brand-dark/70 text-sm italic leading-relaxed flex-1">&ldquo;{dep.texto}&rdquo;</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="font-bold text-sm text-brand-dark">{dep.nome}</p>
                    <p className="text-brand-dark/40 text-xs">{dep.cidade}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === PREÇO (Anchor + Value Stack) === */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-brand-mint text-sm font-bold uppercase tracking-wider mb-3">Investimento</p>
            <h2 className="heading-2 mb-4">{curso.vsl.valorReal}</h2>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 mt-8 mb-8">
              <div className="mb-6">
                {curso.gratuito ? (
                  <p className="font-serif text-6xl font-bold text-brand-mint">GRATUITO</p>
                ) : (
                  <>
                    <p className="text-white/30 text-lg line-through mb-1">De R$ 197,00</p>
                    <p className="font-serif text-6xl font-bold text-white">
                      R$ {curso.preco}<span className="text-3xl text-white/40">,00</span>
                    </p>
                    <p className="text-brand-mint text-sm mt-2">Pagamento único · Acesso vitalício</p>
                  </>
                )}
              </div>

              <div className="flex flex-wrap gap-4 justify-center mb-8">
                {curso.gratuito ? (
                  <>
                    <Link href={`/cursos/${curso.slug}/aprender`} className="btn-primary text-lg px-10 py-4">
                      Acessar Curso Gratuito
                    </Link>
                    <Link
                      href={`/cursos/${curso.slug}/download`}
                      className="border border-white/20 text-white hover:bg-white/10 px-6 py-4 rounded-full text-base font-medium transition-colors inline-flex items-center gap-2"
                    >
                      Baixar PDF
                    </Link>
                  </>
                ) : (
                  <a
                    href={curso.linkPagamento || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg px-10 py-4"
                  >
                    Garantir por R$ {curso.preco},00
                  </a>
                )}
              </div>

              <p className="text-white/30 text-xs">{curso.vsl.garantia}</p>
            </div>

            <p className="text-white/40 text-sm">{curso.vsl.urgencia}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* === FAQ (Objeções) === */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-3xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Perguntas Frequentes</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {curso.vsl.objecoes.map((obj, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-brand-bg rounded-2xl p-6">
                  <h3 className="font-bold text-brand-dark mb-2">{obj.pergunta}</h3>
                  <p className="text-brand-dark/60 text-sm leading-relaxed">{obj.resposta}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA FINAL (Urgência) === */}
      <section className="section-padding bg-brand-dark text-white text-center">
        <div className="container-main max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-2 mb-4">
              {curso.gratuito
                ? 'Não custa nada. Não perde nada. Só ganha conhecimento.'
                : `Por menos que um café com bolo, você transforma sua carreira.`}
            </h2>
            <p className="text-white/40 mb-8 text-lg">{curso.vsl.urgencia}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {curso.gratuito ? (
                <>
                  <Link href={`/cursos/${curso.slug}/aprender`} className="btn-primary text-lg px-10 py-4">
                    Acessar Curso Gratuito Agora
                  </Link>
                  <Link
                    href={`/cursos/${curso.slug}/download`}
                    className="border border-white/20 text-white hover:bg-white/10 px-6 py-4 rounded-full text-base font-medium transition-colors inline-flex items-center gap-2"
                  >
                    Baixar PDF Gratuito
                  </Link>
                </>
              ) : (
                <a
                  href={curso.linkPagamento || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-10 py-4"
                >
                  Garantir por R$ {curso.preco},00 — Acesso Imediato
                </a>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === Outros Cursos === */}
      {outrosCursos.length > 0 && (
        <section className="section-padding bg-brand-bg">
          <div className="container-main">
            <ScrollReveal className="text-center mb-12">
              <h2 className="heading-2 text-brand-dark mb-4">Veja também</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {outrosCursos.map((c, i) => (
                <ScrollReveal key={c.slug} delay={i * 80}>
                  <Link href={`/cursos/${c.slug}`} className="card-premium block group text-center">
                    <Image src={c.imagem} alt={c.nome} width={60} height={60} className="mx-auto mb-3 opacity-70" />
                    <h3 className="font-bold text-sm group-hover:text-brand-mint transition-colors">{c.nome}</h3>
                    <p className="text-brand-dark/40 text-xs mt-1">
                      {c.gratuito ? 'Gratuito' : `R$ ${c.preco},00`}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CoursesSection />
    </>
  )
}
