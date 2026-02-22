import type { Metadata } from 'next'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'

export const metadata: Metadata = {
  title: 'Projetos & Portfólio | Sites, Funis e Automações',
  description:
    'Veja nosso portfólio de sites profissionais, landing pages, funis de vendas, automações GHL e resultados de performance. Calazans Lumina.',
}

const categorias = {
  sites: {
    titulo: 'Sites & Landing Pages',
    descricao: 'Sites profissionais de alta performance desenvolvidos em Next.js',
    imagens: [
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d624c8da2a02097df7b.png', alt: 'Site profissional — layout moderno e responsivo desenvolvido pela Calazans Lumina' },
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d62df9bdf1a8f06e132.png', alt: 'Landing page de alta conversão — design premium para captação de leads' },
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc91e4457164.png', alt: 'Site institucional para empresa brasileira — presença digital profissional' },
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6220c0352e5305e8cc.png', alt: 'Página de vendas otimizada para conversão — funil integrado' },
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d62df9bdfed7506e133.png', alt: 'Design responsivo para negócios locais em Massachusetts' },
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc22d845716a.png', alt: 'Site de serviços profissionais para empreendedores brasileiros nos EUA' },
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc3b6f457169.png', alt: 'Layout premium para agência digital — Calazans Lumina portfolio' },
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6220c035435705e8cd.png', alt: 'Site com funil integrado para geração de leads qualificados' },
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc503d457168.png', alt: 'Design mobile-first para negócios brasileiros nos EUA' },
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc756045716b.png', alt: 'Site de alta performance com PageSpeed 95+ — portfolio Calazans Lumina' },
    ],
  },
  performance: {
    titulo: 'Resultados & Performance',
    descricao: 'Métricas reais de campanhas, SEO e performance digital',
    imagens: [
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d624c8da285cc97df7c.png', alt: 'Dashboard de performance — métricas reais de campanhas Calazans Lumina' },
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f13f714ee618fd93ca5.png', alt: 'Relatório de tráfego pago — ROI positivo em Google Ads' },
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1320c035efa006b443.png', alt: 'Crescimento orgânico — resultados de SEO local para brasileiros' },
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1355d8bc19b9463b26.png', alt: 'Performance de landing page — taxa de conversão otimizada' },
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1355d8bc676d463b27.png', alt: 'Dashboard de leads — funil de vendas automatizado GHL' },
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1320c035699706b444.png', alt: 'Relatório de redes sociais — crescimento de engajamento' },
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b406720c035d914076364.png', alt: 'Resultados de Google Business Profile — aumento de visualizações' },
    ],
  },
  automacao: {
    titulo: 'Automações & IA',
    descricao: 'Fluxos GoHighLevel, pipelines e robôs de WhatsApp',
    imagens: [
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b406720c0355e60076365.png', alt: 'Fluxo de automação GoHighLevel — pipeline de vendas automatizado' },
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b410c4c8da2445e99c973.png', alt: 'Workflow GHL com disparo automático de WhatsApp, email e SMS' },
      { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b418ddf9bdf249608cf87.png', alt: 'Robô de IA conversacional no WhatsApp — atendimento 24h automatizado' },
    ],
  },
}

export default function ProjetosPage() {
  return (
    <>
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">
              Nosso trabalho
            </p>
            <h1 className="heading-1 mb-4">
              Projetos & <span className="gradient-text">Portfólio</span>
            </h1>
            <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
              Cada projeto é uma transformação real. Sites, automações, campanhas e
              resultados que falam por si.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {Object.entries(categorias).map(([key, cat]) => (
        <section
          key={key}
          className={`section-padding ${key === 'performance' ? 'bg-brand-bg' : 'bg-white'}`}
        >
          <div className="container-main">
            <ScrollReveal className="mb-10">
              <h2 className="heading-3 mb-2 text-brand-dark">
                {cat.titulo}
              </h2>
              <p className="text-brand-dark/60">
                {cat.descricao}
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.imagens.map((img, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTAForm />
    </>
  )
}
