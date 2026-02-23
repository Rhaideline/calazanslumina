'use client'

import { useState } from 'react'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'

const categorias = [
  {
    id: 'sites',
    titulo: 'Sites & Landing Pages',
    subtitulo: 'Design que converte',
    descricao:
      'Sites profissionais de alta performance com Next.js, focados em conversão e SEO técnico. Cada projeto é único e desenvolvido para gerar resultados.',
    imagens: [
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d624c8da2a02097df7b.png',
        alt: 'Site profissional — layout moderno e responsivo desenvolvido pela Calazans Lumina',
        nome: 'Brazil Clean Co.',
        tipo: 'Site Profissional',
        resultado: 'PageSpeed 97 · +180% leads',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d62df9bdf1a8f06e132.png',
        alt: 'Landing page de alta conversão — design premium para captação de leads',
        nome: 'Maria Oliveira Estética',
        tipo: 'Landing Page',
        resultado: 'Taxa de conversão 12.4%',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc91e4457164.png',
        alt: 'Site institucional para empresa brasileira — presença digital profissional',
        nome: 'JM Consulting Group',
        tipo: 'Site Institucional',
        resultado: '1º no Google Maps',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6220c0352e5305e8cc.png',
        alt: 'Página de vendas otimizada para conversão — funil integrado',
        nome: 'Sabor Tropical',
        tipo: 'Página de Vendas',
        resultado: '+320% de leads em 90 dias',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d62df9bdfed7506e133.png',
        alt: 'Design responsivo para negócios locais em Massachusetts',
        nome: 'Elite Auto Detail',
        tipo: 'Negócio Local',
        resultado: '7x mais cliques no Google',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc22d845716a.png',
        alt: 'Site de serviços profissionais para empreendedores brasileiros nos EUA',
        nome: 'Luana Tax Services',
        tipo: 'Serviços Profissionais',
        resultado: 'Leads orgânicos diários',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc3b6f457169.png',
        alt: 'Layout premium para agência digital — Calazans Lumina portfólio',
        nome: 'Viva Marketing',
        tipo: 'Agência Digital',
        resultado: 'Design premiado',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6220c035435705e8cd.png',
        alt: 'Site com funil integrado para geração de leads qualificados',
        nome: 'Carlos Construction',
        tipo: 'Funil Integrado',
        resultado: '8.2% conversão do funil',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc503d457168.png',
        alt: 'Design mobile-first para negócios brasileiros nos EUA',
        nome: 'Bella Hair Studio',
        tipo: 'Mobile-First',
        resultado: '95+ PageSpeed Mobile',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc756045716b.png',
        alt: 'Site de alta performance com PageSpeed 95+',
        nome: 'Smart Home Tech',
        tipo: 'Alta Performance',
        resultado: 'Carrega em 0.8s',
      },
    ],
  },
  {
    id: 'performance',
    titulo: 'Resultados & Performance',
    subtitulo: 'Números reais',
    descricao:
      'Métricas reais de campanhas de tráfego pago, SEO local e performance digital. Cada número aqui representa crescimento real de negócios brasileiros.',
    imagens: [
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d624c8da285cc97df7c.png',
        alt: 'Dashboard de performance — métricas reais de campanhas Calazans Lumina',
        nome: 'Dashboard Analytics',
        tipo: 'Performance',
        resultado: 'Visão 360° do negócio',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f13f714ee618fd93ca5.png',
        alt: 'Relatório de tráfego pago — ROI positivo em Google Ads',
        nome: 'Campanha Google Ads',
        tipo: 'Tráfego Pago',
        resultado: 'ROI +440%',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1320c035efa006b443.png',
        alt: 'Crescimento orgânico — resultados de SEO local para brasileiros',
        nome: 'SEO Orgânico',
        tipo: 'SEO Local',
        resultado: '+520% tráfego orgânico',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1355d8bc19b9463b26.png',
        alt: 'Performance de landing page — taxa de conversão otimizada',
        nome: 'Landing Page Metrics',
        tipo: 'Conversão',
        resultado: 'De 2% para 12.4%',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1355d8bc676d463b27.png',
        alt: 'Dashboard de leads — funil de vendas automatizado GHL',
        nome: 'Pipeline de Leads',
        tipo: 'CRM GoHighLevel',
        resultado: '+320% leads qualificados',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1320c035699706b444.png',
        alt: 'Relatório de redes sociais — crescimento de engajamento',
        nome: 'Social Media Growth',
        tipo: 'Redes Sociais',
        resultado: '+250% engajamento',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b406720c035d914076364.png',
        alt: 'Resultados de Google Business Profile — aumento de visualizações',
        nome: 'Google Business',
        tipo: 'SEO Local',
        resultado: '7x mais visualizações',
      },
    ],
  },
  {
    id: 'automacao',
    titulo: 'Automações & IA',
    subtitulo: 'Máquinas que vendem',
    descricao:
      'Fluxos de automação no GoHighLevel, pipelines de vendas e robôs de WhatsApp com IA que trabalham 24 horas por dia pelo seu negócio.',
    imagens: [
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b406720c0355e60076365.png',
        alt: 'Fluxo de automação GoHighLevel — pipeline de vendas automatizado',
        nome: 'Sales Pipeline',
        tipo: 'CRM & Pipeline',
        resultado: 'Cada lead no lugar certo',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b410c4c8da2445e99c973.png',
        alt: 'Workflow GHL com disparo automático de WhatsApp, email e SMS',
        nome: 'Workflow Multicanal',
        tipo: 'Automação',
        resultado: 'WhatsApp + Email + SMS',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b418ddf9bdf249608cf87.png',
        alt: 'Robô de IA conversacional no WhatsApp — atendimento 24h automatizado',
        nome: 'Robô de IA 24h',
        tipo: 'IA Conversacional',
        resultado: 'Responde em 5 segundos',
      },
    ],
  },
]

export default function ProjetosPage() {
  const [activeTab, setActiveTab] = useState('sites')
  const [lightbox, setLightbox] = useState<string | null>(null)

  const activeCat = categorias.find((c) => c.id === activeTab)!

  return (
    <>
      {/* Magazine Cover Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={categorias[0].imagens[0].src}
            alt="Portfólio Calazans Lumina"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/40" />
        </div>

        <div className="container-main section-padding relative z-10 text-white pb-16">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-brand-mint" />
              <p className="text-brand-mint font-medium text-sm uppercase tracking-[0.3em]">
                Portfólio
              </p>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
              Nossos<br />
              <span className="text-brand-mint">Projetos</span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl max-w-xl leading-relaxed">
              Cada projeto é uma história de transformação digital.
              Explore nosso trabalho organizado como uma revista — cada
              página conta um resultado real.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Magazine Navigation Bar */}
      <div className="sticky top-[60px] z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="container-main px-4 sm:px-6 lg:px-8 flex items-center gap-1 overflow-x-auto py-3">
          {categorias.map((cat) => (
            <button
              type="button"
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-brand-mint text-white'
                  : 'text-brand-dark/50 hover:text-brand-dark hover:bg-brand-bg'
              }`}
            >
              {cat.titulo}
            </button>
          ))}
          <div className="flex-1" />
          <p className="text-brand-dark/30 text-xs font-medium flex-shrink-0 hidden md:block">
            {activeCat.imagens.length} projetos
          </p>
        </div>
      </div>

      {/* Magazine Section Header */}
      <section className="py-16 bg-white border-b border-gray-50">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="text-brand-mint text-xs font-bold uppercase tracking-[0.3em] mb-2">
                {activeCat.subtitulo}
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-dark leading-tight">
                {activeCat.titulo}
              </h2>
            </div>
            <p className="text-brand-dark/40 text-sm max-w-sm hidden md:block leading-relaxed pt-2">
              {activeCat.descricao}
            </p>
          </div>
        </div>
      </section>

      {/* Magazine Grid — Bento / Editorial Layout */}
      <section className="py-12 bg-white">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          {/* Featured (first 2 large) */}
          {activeCat.imagens.length >= 2 && (
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {activeCat.imagens.slice(0, 2).map((img, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div
                    className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
                    onClick={() => setLightbox(img.src)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-brand-mint text-xs font-bold uppercase tracking-wider mb-1">{img.tipo}</p>
                      <p className="text-white font-serif text-xl font-bold mb-1">{img.nome}</p>
                      <p className="text-white/60 text-sm">{img.resultado}</p>
                    </div>
                    {/* Always-visible label */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1.5 rounded-full">
                      {img.tipo}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Remaining in 3-column grid */}
          {activeCat.imagens.length > 2 && (
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              {activeCat.imagens.slice(2).map((img, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div
                    className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
                    onClick={() => setLightbox(img.src)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-brand-mint text-xs font-bold uppercase tracking-wider mb-1">{img.tipo}</p>
                      <p className="text-white font-serif text-lg font-bold mb-0.5">{img.nome}</p>
                      <p className="text-white/60 text-xs">{img.resultado}</p>
                    </div>
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
                      {img.tipo}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-16 bg-brand-bg">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="text-brand-mint text-xs font-bold uppercase tracking-[0.3em] mb-2">
              Assista e aprenda
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-dark leading-tight">
              Conteudo em <span className="text-brand-mint">Video</span>
            </h2>
            <p className="text-brand-dark/50 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
              Dicas praticas, estrategias e ferramentas de marketing digital para empreendedores brasileiros.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699c9f81590acb2f32c57fde.mp4',
                label: 'Marketing Digital na Pratica',
              },
              {
                src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699c9f811001a525e2e45e93.mp4',
                label: 'Como Atrair Clientes Online',
              },
              {
                src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699c9f813eba04ab9649d652.mp4',
                label: 'Ferramentas que Uso no Dia a Dia',
              },
              {
                src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699c9f8110bc9c7c8a6841ea.mp4',
                label: 'Dicas de IA para Negocios',
              },
            ].map((video, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full aspect-video"
                  >
                    <source src={video.src} type="video/mp4" />
                    Seu navegador nao suporta video HTML5.
                  </video>
                  <div className="p-5">
                    <p className="text-brand-mint text-xs font-bold uppercase tracking-wider mb-1">
                      Video {i + 1}
                    </p>
                    <h3 className="font-serif text-lg font-bold text-brand-dark">
                      {video.label}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Magazine Pull Quote */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container-main px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <ScrollReveal>
            <div className="w-16 h-[2px] bg-brand-mint mx-auto mb-8" />
            <blockquote className="font-serif text-2xl md:text-4xl font-bold leading-snug mb-6">
              &ldquo;Cada projeto que entrego é uma parceria. Eu não descanso até o
              número provar que funcionou.&rdquo;
            </blockquote>
            <p className="text-brand-mint font-medium">
              Rhaideline Calazans
            </p>
            <p className="text-white/30 text-sm">
              Fundadora, Calazans Lumina
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <CTAForm />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
            aria-label="Fechar"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Image
            src={lightbox}
            alt="Projeto em tamanho completo"
            width={1200}
            height={800}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
