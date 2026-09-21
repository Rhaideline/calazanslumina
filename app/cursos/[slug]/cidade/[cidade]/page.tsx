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
import { formatPreco, formatPrecoCompacto } from '@/lib/formatters'
import { cursoLocalEUA } from '@/lib/local-br'

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
  return {
    title: { absolute: `${curso.nome} em ${cidade.nome}, MA` },
    description: `${curso.descricaoCurta} Para brasileiros em ${cidade.nome}, MA. ${curso.modulos.length} modulos, ${totalAulas} aulas. ${curso.gratuito ? 'Acesso 100% gratuito. Comece agora →' : `So R$ ${formatPrecoCompacto(curso.preco)}. Acesso vitalicio →`}`,
    alternates: { canonical: `https://calazanslumina.com.br/cursos/${slug}/cidade/${cidadeSlug}` },
  }
}

export default async function CursoCidadePage({ params }: { params: Promise<{ slug: string; cidade: string }> }) {
  const { slug, cidade: cidadeSlug } = await params
  const curso = cursos.find((c) => c.slug === slug)
  const cidade = getCidadeMABySlug(cidadeSlug)
  if (!curso || !cidade) notFound()

  const totalAulas = curso.modulos.reduce((acc, m) => acc + m.aulas.length, 0)
  const outrosCursos = cursos.filter((c) => c.slug !== slug).slice(0, 4)

  // abertura que varia por cidade — ver lib/local-br.ts
  const local = cursoLocalEUA(cidade, curso.slug)

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
    review: curso.vsl.depoimentos.map((d) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: d.nome },
      reviewBody: d.texto,
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: curso.vsl.objecoes.map((o) => ({
      '@type': 'Question',
      name: o.pergunta,
      acceptedAnswer: { '@type': 'Answer', text: o.resposta },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* === HERO VSL === */}
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b435a20c0357f3208c418.jpeg"
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
              <p className="text-white/40 text-base mb-8">{cidade.comunidade}</p>

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
                <div className="flex items-center justify-center mb-6">
                  <Image src={curso.imagem} alt={curso.nome} width={100} height={100} className="object-contain opacity-80" />
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

      {/* ⚠️ "Voce se identifica?" e "A transformacao" sairam: 107 palavras
          identicas nas 832 paginas. Pertencem a pagina do curso, onde ja
          estao. Ver o commit da malha brasileira para a medida. */}

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
              <p className="text-brand-dark/70 leading-relaxed mb-6">{local.abertura}</p>
              <p className="text-brand-dark/70 leading-relaxed mb-6">{cidade.comunidade}</p>
              <p className="text-brand-dark/70 leading-relaxed mb-6">{cidade.doresEspecificas}</p>
              {/* ⚠️ `regraLocal` e o fato mais especifico que existe sobre cada
                  cidade: a licenca, a certificacao ou o comite historico que
                  muda a operacao ali. Veio da pesquisa profunda do .com em
                  20/set — 104 cidades enriquecidas de 72 para 174 palavras
                  proprias. Ver _enriquece-ma.py. */}
              {cidade.regraLocal && (
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  <span className="font-semibold text-brand-dark">O que vale em {cidade.nome}: </span>
                  {cidade.regraLocal}
                </p>
              )}
              {cidade.nichos && cidade.nichos.length > 0 && (
                <p className="text-brand-dark/60 leading-relaxed mb-6 text-sm">
                  Os ofícios que mais aparecem por aqui: {cidade.nichos.join(', ')}. É para
                  esse cliente que o curso vai te ajudar a aparecer.
                </p>
              )}
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

      {/* ⚠️ AQUI FICAVAM DEPOIMENTOS, CONTEUDO PROGRAMATICO e FAQ: 239
          palavras IDENTICAS nas 832 paginas de curso x cidade americana.
          Medicao de 20/set contra o site no ar: 80,9% de sobreposicao entre
          irmas, 860 palavras por pagina — a pior malha do site.
          A ementa ser igual nao e erro: e o mesmo curso. O erro e publica-la
          832 vezes. Ela vive em /cursos/<slug>. */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-4xl">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            <div className="md:col-span-7">
              <h2 className="heading-2 text-brand-dark">O curso, em uma linha</h2>
              <p className="mt-5 text-brand-dark/70 leading-relaxed">
                {curso.modulos.length} módulos e{' '}
                {curso.modulos.reduce((a, m) => a + m.aulas.length, 0)} aulas, em
                português, com PDF para baixar e acesso online.{' '}
                {curso.gratuito
                  ? 'Gratuito, sem pedir cartão.'
                  : `Pagamento único de R$ ${formatPreco(curso.preco)}, com acesso imediato.`}
              </p>
              <p className="mt-4 text-brand-dark/55 text-sm leading-relaxed">
                O conteúdo é o mesmo em qualquer cidade — seria estranho se não
                fosse. A ementa completa, aula por aula, com as perguntas
                frequentes,{' '}
                <Link
                  href={`/cursos/${curso.slug}`}
                  className="font-semibold text-brand-dark underline underline-offset-4"
                >
                  está na página do curso
                </Link>
                .
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-brand-dark/10 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark/40">
                  {cidade.nome}, MA
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-dark/65">
                  {cidade.referencia}
                </p>
              </div>
            </div>
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

      {/* ⚠️ <CoursesSection /> saiu: 224 palavras IDENTICAS, 37% da pagina,
          nas 832 paginas de curso x cidade americana. Foi removido da malha
          brasileira e ficou aqui por descuido meu — a medicao bloco a bloco
          pegou. */}
      <CTAForm cidade={cidade.nome} />
    </>
  )
}
