import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { cursos } from '@/data/cursos'
import { cidadesMA, getCidadeMABySlug } from '@/data/cidades-ma'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'
import Breadcrumb from '@/components/Breadcrumb'
import CoursesSection from '@/components/CoursesSection'
import {
  buildCursoCidadeFAQ,
  buildLocalBusinessSchema,
  buildCursoCidadeMetaDescription,
  buildAlternates,
  buildQuotableIntro,
} from '@/lib/seo-schemas'
import { formatPreco, formatPrecoCompacto } from '@/lib/formatters'
import { blocoLocalCurso } from '@/lib/conteudo-local'

export async function generateStaticParams() {
  return cursos.flatMap((curso) =>
    cidadesMA.map((cidade) => ({ slug: curso.slug, cidade: cidade.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; cidade: string }> }): Promise<Metadata> {
  const { slug, cidade: cidadeSlug } = await params
  const curso = cursos.find((c) => c.slug === slug)
  const cidade = getCidadeMABySlug(cidadeSlug)
  if (!curso || !cidade) return {}
  const totalAulas = curso.modulos.reduce((acc, m) => acc + m.aulas.length, 0)
  const canonical = `https://calazanslumina.com.br/cursos/${slug}/cidade/${cidadeSlug}`
  return {
    title: `${curso.nome} — ${cidade.nome}, MA`,
    description: buildCursoCidadeMetaDescription({
      curso,
      cidadeNome: cidade.nome,
      siglaEstado: 'MA',
      estadoNome: 'Massachusetts',
      pais: 'US',
      url: canonical,
      totalAulas,
    }),
    alternates: buildAlternates(canonical),
  }
}

export default async function CursoCidadePage({ params }: { params: Promise<{ slug: string; cidade: string }> }) {
  const { slug, cidade: cidadeSlug } = await params
  const curso = cursos.find((c) => c.slug === slug)
  const cidade = getCidadeMABySlug(cidadeSlug)
  if (!curso || !cidade) notFound()

  const totalAulas = curso.modulos.reduce((acc, m) => acc + m.aulas.length, 0)
  const outrosCursos = cursos.filter((c) => c.slug !== slug).slice(0, 4)

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${curso.nome} em ${cidade.nome}, MA`,
    description: `${curso.descricaoCurta} Para brasileiros em ${cidade.nome}, Massachusetts.`,
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
      name: cidade.nome,
      containedInPlace: { '@type': 'State', name: 'Massachusetts' },
    },
    // SEM `review` — ver o porque em app/cursos/[slug]/page.tsx.
    // Depoimento fabricado declarado como Review de Person gera acao manual
    // por spam de marcacao, e a penalidade e do dominio.
  }

  const seoCtx = {
    curso,
    cidadeNome: cidade.nome,
    siglaEstado: 'MA',
    estadoNome: 'Massachusetts',
    pais: 'US' as const,
    url: `https://calazanslumina.com.br/cursos/${slug}/cidade/${cidadeSlug}`,
    totalAulas,
  }
  const faqSchema = buildCursoCidadeFAQ(seoCtx)
  const localBusinessSchema = buildLocalBusinessSchema(cidade.nome, 'MA', 'US')
  const quotableIntro = buildQuotableIntro(seoCtx)
  const blocoLocal = blocoLocalCurso(cidade, curso.slug, curso.nome)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://calazanslumina.com.br/' },
      { '@type': 'ListItem', position: 2, name: 'Cursos', item: 'https://calazanslumina.com.br/cursos' },
      { '@type': 'ListItem', position: 3, name: curso.nome, item: `https://calazanslumina.com.br/cursos/${slug}` },
      { '@type': 'ListItem', position: 4, name: `${cidade.nome}, MA`, item: `https://calazanslumina.com.br/cursos/${slug}/cidade/${cidadeSlug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* === HERO VSL === */}
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67d859c95106d5e512376e8e.jpeg"
          alt={`${curso.nome} em ${cidade.nome}, MA — Calazans Lumina`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/90" />
        <div className="container-main section-padding relative z-10">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Cursos', href: '/cursos' },
            { label: curso.nome, href: `/cursos/${curso.slug}` },
            { label: `${cidade.nome}, MA` },
          ]} />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-brand-mint/20 border border-brand-mint/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-brand-mint rounded-full animate-pulse" />
                <span className="text-brand-mint text-sm font-medium">
                  {curso.gratuito ? 'Curso Gratuito' : `R$ ${formatPreco(curso.preco)}`} · {cidade.nome}, MA
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {curso.vsl.hook.split('.')[0]}.{' '}
                <span className="text-brand-mint">Para brasileiros em {cidade.nome}.</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-4">{curso.vsl.subhook}</p>
              <p className="text-white/55 text-sm leading-relaxed mb-4 italic border-l-2 border-brand-mint/40 pl-4">{quotableIntro}</p>
              {/* Antes repetia {cidade.comunidade}, o mesmo paragrafo de
                  /cidades/[cidade] e da secao de baixo desta propria pagina. */}
              <p className="text-white/40 text-base mb-8">{blocoLocal.contexto}</p>

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
                    {curso.gratuito ? 'GRÁTIS' : `R$ ${formatPrecoCompacto(curso.preco)}`}
                  </p>
                  <p className="text-white/40 text-xs">{curso.gratuito ? 'acesso livre' : 'pagamento único'}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {curso.gratuito ? (
                  <>
                    <Link href={`/cursos/${curso.slug}/aprender`} className="btn-primary text-base">
                      Acessar Curso Gratuito
                    </Link>
                    <Link
                      href={`/cursos/${curso.slug}/download`}
                      className="border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-full text-base font-medium transition-colors inline-flex items-center gap-2"
                    >
                      Baixar PDF Gratuito
                    </Link>
                  </>
                ) : (
                  <a href={curso.linkPagamento || '#'} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
                    Garantir por R$ {formatPreco(curso.preco)}
                  </a>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="relative w-full aspect-[8/5] rounded-xl overflow-hidden mb-6">
                  <Image src={curso.imagem} alt={curso.nome} fill sizes="(max-width:768px) 100vw, 400px" className="object-cover" />
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

      {/* === PROBLEMA — Agitação === */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <p className="text-red-500 text-sm font-bold uppercase tracking-wider mb-3">Você se identifica?</p>
            <h2 className="heading-2 text-brand-dark">Se isso é você, esse curso resolve</h2>
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
                  <svg className="w-6 h-6 text-brand-mint flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
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

      {/* === POR QUE EM {CIDADE} === */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">
              Por que brasileiros em <span className="text-brand-mint">{cidade.nome}</span> precisam desse curso?
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-brand-bg rounded-2xl p-8 md:p-10">
              <p className="text-brand-dark/70 leading-relaxed mb-6">{blocoLocal.aplicacao}</p>
              <p className="text-brand-dark/70 leading-relaxed mb-6">{cidade.doresEspecificas}</p>
              <p className="text-brand-dark/70 leading-relaxed">
                Com o curso <strong>{curso.nome}</strong>, brasileiros em {cidade.nome} têm acesso a conhecimento
                prático e atualizado. {curso.gratuito
                  ? 'Totalmente gratuito — acesso online e PDF para download.'
                  : `Investimento único de R$ ${formatPreco(curso.preco)} com acesso imediato e vitalício.`}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === DEPOIMENTOS === */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">O que você recebe</h2>
            <p className="text-brand-dark/60 max-w-xl mx-auto">
              Entregue no seu e-mail assim que o pagamento for confirmado.
              Acesso permanente, sem mensalidade.
            </p>
          </ScrollReveal>
          {/* Substituiu "Resultados reais de quem ja fez", que exibia
              depoimentos escritos a mao com cinco estrelas. Nao havia aluno
              nenhum por tras deles. */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              curso.numeroPaginas ? { n: String(curso.numeroPaginas), l: 'páginas em PDF' } : null,
              curso.modulos?.length ? { n: String(curso.modulos.length), l: 'módulos' } : null,
              { n: 'Imediato', l: 'acesso após o pagamento' },
            ]
              .filter(Boolean)
              .map((m, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-sm h-full">
                    <p className="text-brand-dark font-bold text-2xl leading-none">{m!.n}</p>
                    <p className="text-brand-dark/50 text-sm mt-2">{m!.l}</p>
                  </div>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </section>

      {/* === CONTEÚDO PROGRAMÁTICO === */}
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

      {/* === FAQ === */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-3xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Perguntas Frequentes</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {curso.vsl.objecoes.map((obj, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-brand-dark mb-2">{obj.pergunta}</h3>
                  <p className="text-brand-dark/60 text-sm leading-relaxed">{obj.resposta}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="section-padding bg-brand-dark text-white text-center">
        <div className="container-main max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-2 mb-4">
              {curso.gratuito
                ? `Brasileiros em ${cidade.nome} já estão aprendendo. E você?`
                : `Por R$ ${formatPreco(curso.preco)} você transforma sua carreira em ${cidade.nome}.`}
            </h2>
            <p className="text-white/40 mb-8">{curso.vsl.urgencia}</p>
            <div className="flex flex-wrap gap-4 justify-center">
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
                <a href={curso.linkPagamento || '#'} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-10 py-4">
                  Garantir por R$ {formatPreco(curso.preco)} — Acesso Imediato
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
              <h2 className="heading-2 text-brand-dark mb-4">Outros cursos para brasileiros em {cidade.nome}</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {outrosCursos.map((c, i) => (
                <ScrollReveal key={c.slug} delay={i * 80}>
                  <Link href={`/cursos/${c.slug}/cidade/${cidade.slug}`} className="card-premium block group text-center">
                    <Image src={c.imagem} alt={c.nome} width={60} height={60} className="mx-auto mb-3 opacity-70" />
                    <h3 className="font-bold text-sm group-hover:text-brand-mint transition-colors">{c.nome}</h3>
                    <p className="text-brand-dark/40 text-xs mt-1">{c.gratuito ? 'Gratuito' : `R$ ${formatPreco(c.preco)}`}</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CoursesSection />
      <CTAForm cidade={cidade.nome} />
    </>
  )
}
