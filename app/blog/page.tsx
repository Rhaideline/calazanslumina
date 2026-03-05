import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import BlogFilter from '@/components/BlogFilter'

export const metadata: Metadata = {
  title: 'Blog de Marketing Digital | Estrategias que Geram Resultado',
  description:
    'Artigos praticos sobre marketing digital, SEO local, Google Maps, funis de vendas e automacao para brasileiros nos EUA e Brasil. Conteudo gratuito.',
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
    </>
  )
}
