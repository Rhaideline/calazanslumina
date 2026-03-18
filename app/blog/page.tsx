import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import BlogFilter from '@/components/BlogFilter'
import CoursesSection from '@/components/CoursesSection'
import Breadcrumbs from '@/components/Breadcrumbs'
import { blogPosts, categoriasBlog } from '@/data/blog'

const BASE = 'https://calazanslumina.com.br'

export const metadata: Metadata = {
  title: 'Blog de Marketing Digital e Maternidade (2026) | 60+ Artigos Gratuitos',
  description:
    '60+ artigos sobre marketing digital, SEO, Google Maps, funis de vendas, IA, maternidade e enxoval de bebe. Conteudo 100% gratuito para brasileiros nos EUA e Brasil. Leia agora →',
  alternates: { canonical: `${BASE}/blog` },
  openGraph: {
    title: 'Blog de Marketing Digital | Calazans Lumina',
    description: 'Artigos praticos sobre marketing digital, SEO, Google Maps e automacao para brasileiros.',
    url: `${BASE}/blog`,
    type: 'website',
  },
}

export default function BlogPage() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog de Marketing Digital — Calazans Lumina',
    description: '60+ artigos sobre marketing digital, SEO, Google Maps, funis de vendas e IA para brasileiros nos EUA e Brasil.',
    url: `${BASE}/blog`,
    isPartOf: { '@type': 'WebSite', name: 'Calazans Lumina', url: BASE },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: blogPosts.length,
      itemListElement: blogPosts.slice(0, 20).map((post, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Article',
          headline: post.titulo,
          description: post.resumo,
          url: `${BASE}/blog/${post.slug}`,
          image: post.imagem,
          datePublished: post.dataPublicacao,
          author: { '@type': 'Person', name: post.autor },
        },
      })),
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
    ],
  }

  // Group posts by category for server-rendered SEO content
  const postsByCategory = categoriasBlog.reduce((acc, cat) => {
    const posts = blogPosts.filter((p) => p.categoria === cat)
    if (posts.length > 0) acc[cat] = posts
    return acc
  }, {} as Record<string, typeof blogPosts>)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ name: 'Blog' }]} />

      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">
              Blog
            </p>
            <h1 className="heading-1 mb-4">
              Conteúdo que <span className="gradient-text">educa e converte</span>
            </h1>
            <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
              Dicas práticas, estratégias e insights para empreendedores brasileiros
              que querem dominar o marketing digital nos EUA e no Brasil.
            </p>
          </ScrollReveal>

          <BlogFilter />

          {/* Server-rendered blog index for SEO crawling */}
          <noscript>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {blogPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-xl p-6 border border-gray-100">
                  <p className="text-brand-mint text-xs font-medium mb-2">{post.categoria}</p>
                  <h2 className="font-serif text-lg font-bold text-brand-dark mb-2">
                    <Link href={`/blog/${post.slug}`}>{post.titulo}</Link>
                  </h2>
                  <p className="text-brand-dark/60 text-sm">{post.resumo}</p>
                  <p className="text-brand-dark/40 text-xs mt-3">{post.tempoLeitura} · {post.autor}</p>
                </article>
              ))}
            </div>
          </noscript>

          {/* Hidden SEO links for Google to discover all blog posts */}
          <div className="sr-only" aria-hidden="true">
            <h2>Todos os Artigos do Blog</h2>
            {Object.entries(postsByCategory).map(([cat, posts]) => (
              <div key={cat}>
                <h3>Artigos sobre {cat}</h3>
                <ul>
                  {posts.map((post) => (
                    <li key={post.slug}>
                      <Link href={`/blog/${post.slug}`}>{post.titulo}</Link>
                      <span>{post.resumo}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal linking section */}
      <section className="py-12 bg-white">
        <div className="container-main">
          <h2 className="font-serif text-2xl font-bold text-brand-dark text-center mb-8">Explore Mais Conteudo</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/enxoval-de-bebe" className="bg-brand-bg rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow text-center">
              <p className="font-serif text-lg font-bold text-brand-dark mb-1">Enxoval de Bebe</p>
              <p className="text-brand-dark/50 text-sm">Checklist completo + PDF gratis</p>
            </Link>
            <Link href="/ferramentas" className="bg-brand-bg rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow text-center">
              <p className="font-serif text-lg font-bold text-brand-dark mb-1">Ferramentas</p>
              <p className="text-brand-dark/50 text-sm">Produtos recomendados para empreendedores</p>
            </Link>
            <Link href="/para-agencias" className="bg-brand-bg rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow text-center">
              <p className="font-serif text-lg font-bold text-brand-dark mb-1">GoHighLevel</p>
              <p className="text-brand-dark/50 text-sm">Sub-contas prontas para empresas</p>
            </Link>
          </div>
        </div>
      </section>

      <CoursesSection />
    </>
  )
}
