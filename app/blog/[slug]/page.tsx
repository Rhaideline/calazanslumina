import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts, getBlogPostBySlug } from '@/data/blog'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTAForm from '@/components/CTAForm'
import CoursesSection from '@/components/CoursesSection'

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.titulo,
    description: post.resumo,
    alternates: { canonical: `https://calazanslumina.com.br/blog/${slug}` },
    openGraph: {
      title: post.titulo,
      description: post.resumo,
      type: 'article',
      authors: [post.autor],
      publishedTime: post.dataPublicacao,
      images: [{ url: post.imagem, width: 1200, height: 630, alt: post.titulo }],
      url: `https://calazanslumina.com.br/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.titulo,
      description: post.resumo,
      images: [post.imagem],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const outrosPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.titulo,
    description: post.resumo,
    image: post.imagem,
    author: { '@type': 'Person', name: post.autor },
    publisher: {
      '@type': 'Organization',
      name: 'Calazans Lumina',
      logo: { '@type': 'ImageObject', url: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699cdc6da0830220a0c3e452.png' },
    },
    datePublished: post.dataPublicacao,
    mainEntityOfPage: `https://calazanslumina.com.br/blog/${slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }, { name: post.titulo }]} />
      {/* Header */}
      <article className="section-padding bg-white">
        <div className="container-main max-w-3xl">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-dark/40 hover:text-brand-dark/60 text-sm mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar ao blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="bg-brand-mint/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                {post.categoria}
              </span>
              <span className="text-brand-dark/40 text-sm">{post.dataPublicacao}</span>
              <span className="text-brand-dark/40 text-sm">•</span>
              <span className="text-brand-dark/40 text-sm">{post.tempoLeitura}</span>
            </div>

            <h1 className="heading-1 mb-6">{post.titulo}</h1>

            <div className="flex items-center gap-3 mb-10">
              <Image
                src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67d742765106d5f70635510a.jpeg"
                alt="Rhaideline Calazans — autora do blog Calazans Lumina"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-brand-dark text-sm font-medium">{post.autor}</p>
                <p className="text-brand-dark/40 text-xs">Fundadora, Calazans Lumina</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Featured Image */}
          <ScrollReveal>
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-10">
              <Image
                src={post.imagem}
                alt={post.titulo}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 720px"
              />
            </div>
          </ScrollReveal>

          {/* TL;DR */}
          {post.tldr && (
            <ScrollReveal>
              <div className="bg-brand-bg border-l-4 border-brand-mint rounded-r-xl p-6 mb-10">
                <p className="text-brand-mint font-bold text-sm uppercase tracking-wider mb-2">Resumo (TL;DR)</p>
                <p className="text-brand-dark/80 leading-relaxed">{post.tldr}</p>
              </div>
            </ScrollReveal>
          )}

          {/* Content */}
          <ScrollReveal>
            <div className="prose prose-lg max-w-none [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:text-brand-mint [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:text-brand-dark/70 [&>p]:leading-relaxed [&>ul]:text-brand-dark/70 [&>ol]:text-brand-dark/70 [&>blockquote]:border-brand-mint [&>blockquote]:text-brand-dark/60">
              {post.conteudo.split('\n').map((line, i) => {
                if (line.startsWith('### ')) {
                  return <h3 key={i} className="font-serif text-xl text-brand-dark mt-8 mb-3">{line.replace('### ', '')}</h3>
                }
                if (line.startsWith('## ')) {
                  return <h2 key={i}>{line.replace('## ', '')}</h2>
                }
                if (line.trim() === '') return <br key={i} />
                // Parse markdown links [text](url) and **bold**
                const parts = line.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g)
                const rendered = parts.map((part, j) => {
                  const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/)
                  if (linkMatch) {
                    const [, text, href] = linkMatch
                    if (href.startsWith('/')) {
                      return <Link key={j} href={href} className="text-pink-600 hover:text-pink-700 underline underline-offset-2 font-medium">{text}</Link>
                    }
                    return <a key={j} href={href} target="_blank" rel="noopener noreferrer nofollow" className="text-pink-600 hover:text-pink-700 underline underline-offset-2 font-medium">{text}</a>
                  }
                  const boldMatch = part.match(/^\*\*(.*?)\*\*$/)
                  if (boldMatch) {
                    return <strong key={j} className="text-brand-dark font-semibold">{boldMatch[1]}</strong>
                  }
                  return part
                })
                return <p key={i}>{rendered}</p>
              })}
            </div>
          </ScrollReveal>


          {/* Share */}
          <div className="border-t border-gray-200 mt-12 pt-8 flex items-center justify-between">
            <p className="text-brand-dark/40 text-sm">
              Por {post.autor} • {post.dataPublicacao}
            </p>
            <a
              href={`https://wa.me/5531982948067?text=${encodeURIComponent(`Olá, li o artigo "${post.titulo}" e quero saber mais`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-mint text-sm font-medium hover:underline"
            >
              Falar sobre este artigo →
            </a>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <h2 className="heading-3 text-center mb-10">Outros artigos</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {outrosPosts.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 100}>
                <Link href={`/blog/${p.slug}`} className="group block">
                  <div className="card-premium overflow-hidden p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={p.imagem}
                        alt={p.titulo}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-sm font-bold group-hover:text-brand-mint transition-colors leading-snug">
                        {p.titulo}
                      </h3>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CoursesSection />

      {/* Internal cross-links for SEO */}
      <section className="py-10 bg-white border-t border-brand-dark/5">
        <div className="container-main">
          <nav aria-label="Páginas relacionadas" className="flex flex-wrap justify-center gap-3 text-sm">
            <Link href="/servicos" className="text-brand-mint hover:text-brand-dark transition-colors">Nossos Serviços →</Link>
            <span className="text-brand-dark/20">·</span>
            <Link href="/servicos/sites-landing-pages" className="text-brand-mint hover:text-brand-dark transition-colors">Sites Profissionais →</Link>
            <span className="text-brand-dark/20">·</span>
            <Link href="/servicos/funis-automacao-ghl" className="text-brand-mint hover:text-brand-dark transition-colors">Funis GHL →</Link>
            <span className="text-brand-dark/20">·</span>
            <Link href="/servicos/crm-ia-whatsapp" className="text-brand-mint hover:text-brand-dark transition-colors">CRM com IA →</Link>
            <span className="text-brand-dark/20">·</span>
            <Link href="/para-agencias" className="text-brand-mint hover:text-brand-dark transition-colors">Para Agências →</Link>
            <span className="text-brand-dark/20">·</span>
            <Link href="/portfolio" className="text-brand-mint hover:text-brand-dark transition-colors">Portfólio →</Link>
            <span className="text-brand-dark/20">·</span>
            <Link href="/sobre" className="text-brand-mint hover:text-brand-dark transition-colors">Sobre Nós →</Link>
            <span className="text-brand-dark/20">·</span>
            <Link href="/contato" className="text-brand-mint hover:text-brand-dark transition-colors">Contato →</Link>
          </nav>
        </div>
      </section>

      <CTAForm />
    </>
  )
}
