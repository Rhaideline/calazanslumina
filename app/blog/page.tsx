import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumbs from '@/components/Breadcrumbs'
import BlogFilter from '@/components/BlogFilter'
import CoursesSection from '@/components/CoursesSection'

export const metadata: Metadata = {
  title: 'Blog de Marketing Digital (2026) | 60+ Artigos Gratuitos',
  description:
    '60+ artigos sobre marketing digital, SEO, Google Maps, funis de vendas, IA e automação. Conteudo 100% gratuito para brasileiros nos EUA e Brasil. Leia agora →',
  alternates: { canonical: 'https://calazanslumina.com.br/blog' },
  openGraph: {
    title: 'Blog de Marketing Digital | Calazans Lumina',
    description: 'Artigos praticos sobre marketing digital, SEO, Google Maps e automacao para brasileiros.',
    url: 'https://calazanslumina.com.br/blog',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <>
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
        </div>
      </section>

      <CoursesSection />
    </>
  )
}
