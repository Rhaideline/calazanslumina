import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { cursos } from '@/data/cursos'
import { capitaisBR, getCapitalBRBySlug } from '@/data/capitais-br'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'
import Breadcrumb from '@/components/Breadcrumb'
import CoursesSection from '@/components/CoursesSection'

export async function generateStaticParams() {
  return cursos.flatMap((curso) =>
    capitaisBR.map((capital) => ({ slug: curso.slug, capital: capital.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; capital: string }> }): Promise<Metadata> {
  const { slug, capital: capitalSlug } = await params
  const curso = cursos.find((c) => c.slug === slug)
  const capital = getCapitalBRBySlug(capitalSlug)
  if (!curso || !capital) return {}
  const totalAulas = curso.modulos.reduce((acc, m) => acc + m.aulas.length, 0)
  return {
    title: `${curso.nome} em ${capital.nome}, ${capital.siglaEstado} | ${curso.gratuito ? 'Gratuito' : `R$ ${curso.preco}`}`,
    description: `${curso.descricaoCurta} Para profissionais em ${capital.nome}, ${capital.estado}. ${curso.modulos.length} módulos, ${totalAulas} aulas. ${curso.gratuito ? 'Acesso gratuito.' : `Apenas R$ ${curso.preco},00.`}`,
    alternates: { canonical: `https://calazanslumina.com.br/cursos/${slug}/brasil/${capitalSlug}` },
  }
}

export default async function CursoCapitalPage({ params }: { params: Promise<{ slug: string; capital: string }> }) {
  const { slug, capital: capitalSlug } = await params
  const curso = cursos.find((c) => c.slug === slug)
  const capital = getCapitalBRBySlug(capitalSlug)
  if (!curso || !capital) notFound()

  const totalAulas = curso.modulos.reduce((acc, m) => acc + m.aulas.length, 0)
  const outrosCursos = cursos.filter((c) => c.slug !== slug).slice(0, 4)

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${curso.nome} em ${capital.nome}`,
    description: `${curso.descricaoCurta} Para profissionais em ${capital.nome}, ${capital.estado}.`,
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
    areaServed: {
      '@type': 'City',
      name: capital.nome,
      containedInPlace: { '@type': 'State', name: capital.estado },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b435a20c0357f3208c418.jpeg"
          alt={`${curso.nome} em ${capital.nome} — Calazans Lumina`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/85" />
        <div className="container-main section-padding relative z-10">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Cursos', href: '/cursos' },
            { label: curso.nome, href: `/cursos/${curso.slug}` },
            { label: `${capital.nome}, ${capital.siglaEstado}` },
          ]} />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <p className="text-brand-mint text-sm font-medium mb-4 uppercase tracking-wider">
                Curso {curso.gratuito ? 'Gratuito' : `R$ ${curso.preco},00`} · {capital.nome}, {capital.siglaEstado}
              </p>
              <h1 className="heading-1 mb-6">
                {curso.nome} em{' '}
                <span className="text-brand-mint">{capital.nome}, {capital.siglaEstado}</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-4">{curso.descricaoLonga}</p>
              <p className="text-white/40 text-base mb-8">{capital.descricao}</p>

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
                  <p className="text-brand-mint font-bold text-xl">
                    {curso.gratuito ? 'GRÁTIS' : `R$${curso.preco}`}
                  </p>
                  <p className="text-white/40 text-xs">{curso.gratuito ? 'acesso livre' : 'pagamento único'}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {curso.gratuito ? (
                  <>
                    <Link href={`/cursos/${curso.slug}/aprender`} className="btn-primary text-base">
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

      {/* Por que em {capital} */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">
              Por que fazer este curso em <span className="text-brand-mint">{capital.nome}</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-brand-bg rounded-2xl p-8 md:p-10">
              <p className="text-brand-dark/70 leading-relaxed mb-6">{capital.descricao}</p>
              <p className="text-brand-dark/70 leading-relaxed mb-6">{capital.doresEspecificas}</p>
              <p className="text-brand-dark/70 leading-relaxed">
                Com o curso <strong>{curso.nome}</strong>, profissionais em {capital.nome} terão as ferramentas
                necessárias para se destacar no mercado digital. {curso.gratuito
                  ? 'E o melhor: é totalmente gratuito, com acesso online e PDF para download.'
                  : `Investimento único de apenas R$ ${curso.preco},00 com acesso imediato.`}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Para quem */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Para quem é este curso?</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {curso.paraQuem.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm">
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
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Conteúdo Programático</h2>
            <p className="text-brand-dark/50">{curso.modulos.length} módulos · {totalAulas} aulas</p>
          </ScrollReveal>
          <div className="space-y-4">
            {curso.modulos.map((modulo, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-brand-bg rounded-2xl border border-gray-100 overflow-hidden">
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

      {/* Outros cursos */}
      {outrosCursos.length > 0 && (
        <section className="section-padding bg-brand-bg">
          <div className="container-main">
            <ScrollReveal className="text-center mb-12">
              <h2 className="heading-2 text-brand-dark mb-4">Outros cursos disponíveis em {capital.nome}</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {outrosCursos.map((c, i) => (
                <ScrollReveal key={c.slug} delay={i * 80}>
                  <Link href={`/cursos/${c.slug}/brasil/${capital.slug}`} className="card-premium block group text-center">
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

      <CTAForm cidade={capital.nome} />
    </>
  )
}
