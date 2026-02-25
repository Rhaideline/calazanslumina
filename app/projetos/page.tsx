'use client'

import { useState } from 'react'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'

const categorias = [
  {
    id: 'sites',
    titulo: 'Sites & Landing Pages',
    subtitulo: 'Projetos reais',
    descricao:
      'Sites profissionais de alta performance desenvolvidos para empresas reais. Cada projeto é organizado por cliente e mostra o trabalho completo entregue.',
    imagens: [
      // RS Development Group — Framing & Construction, Marlborough MA
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d624c8da2a02097df7b.png',
        alt: 'RS Development Group — site de framing contractor em Marlborough, MA',
        nome: 'RS Development Group',
        tipo: 'Site + SEO Completo · 600+ páginas',
        resultado: 'PageSpeed 90+ · 13.1K impressões/semana',
        descricao: 'Site com mais de 600 páginas para empresa de framing em Marlborough, MA. Entregue com SEO completo (técnico, local e on-page), blog com dezenas de artigos otimizados, Google Business Profile configurado, páginas de serviços por cidade, design responsivo e formulário de orçamento. Resultado: 13.1K impressões e 25 cliques orgânicos por semana no Google.',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6220c035435705e8cd.png',
        alt: 'RS Development Group — página de serviços de framing e construção',
        nome: 'RS Development Group',
        tipo: 'Páginas de Serviços',
        resultado: 'Ranking excelente no Google',
        descricao: 'Páginas de serviços detalhadas para cada tipo de trabalho: framing residencial, comercial, roofing e decks. Cada página otimizada para SEO local com palavras-chave de Massachusetts, galeria de fotos reais e CTAs estratégicos para captação de leads.',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc503d457168.png',
        alt: 'RS Development Group — blog de construção com artigos sobre framing e roofing',
        nome: 'RS Development Group',
        tipo: 'Blog SEO',
        resultado: '25 cliques orgânicos/semana',
        descricao: 'Blog com artigos completos sobre construção, framing, roofing e decks. Cada artigo entre 1500-3000 palavras, otimizado para palavras-chave locais de Massachusetts. O blog é a principal fonte de tráfego orgânico do site.',
      },
      // Wolf's Siding — Siding Company, Massachusetts
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc22d845716a.png',
        alt: "Wolf's Siding — site de exterior e interior siding em Massachusetts",
        nome: "Wolf's Siding",
        tipo: 'Site + SEO Completo · 800+ páginas',
        resultado: 'PageSpeed 100 · 41.1K impressões',
        descricao: 'Site com mais de 800 páginas para empresa de siding em Massachusetts. PageSpeed perfeito (100/100). Entregue com SEO completo, centenas de páginas por cidade e serviço, blog com guias detalhados, galeria de trabalhos e formulário de contato. Resultado: 41.1K impressões e 40 cliques orgânicos em 3 meses — ranking excelente no Google.',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc91e4457164.png',
        alt: "Wolf's Siding — blog com dicas e guias sobre siding",
        nome: "Wolf's Siding",
        tipo: 'Blog SEO · Crescimento orgânico',
        resultado: '41.1K impressões em 3 meses',
        descricao: 'Blog completo com guias sobre siding para Massachusetts. Artigos sobre instalação, manutenção, materiais e custos. De zero a 41.1K impressões orgânicas no Google em apenas 3 meses, com crescimento constante mês a mês.',
      },
      // JF Painting Services — Painting, Massachusetts
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d62df9bdfed7506e133.png',
        alt: 'JF Painting Services — site de pintura profissional em Massachusetts',
        nome: 'JF Painting Services',
        tipo: 'Site + SEO Completo · 600+ páginas',
        resultado: 'PageSpeed 90+ · Ranking no Google',
        descricao: 'Site com mais de 600 páginas para empresa de pintura em Massachusetts. Entregue com SEO completo, páginas de serviço por cidade, blog com artigos otimizados, galeria before/after, depoimentos de clientes e formulário de orçamento. Ranking excelente no Google para buscas locais.',
      },
      // Professional Painting — Massachusetts
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d62df9bdf1a8f06e132.png',
        alt: 'Site de pintura profissional em Massachusetts — design moderno verde',
        nome: 'Professional Painting MA',
        tipo: 'Site + SEO Completo',
        resultado: 'PageSpeed 90+ · Design Premium',
        descricao: 'Site profissional com design premium para empresa de pintura. Entregue com SEO local, galeria de transformações before/after, mapa interativo de áreas atendidas, avaliações de clientes e integração com Google Maps.',
      },
      // Painting & Remodeling — Massachusetts
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc3b6f457169.png',
        alt: 'Site de painting e remodeling em Massachusetts',
        nome: 'Painting & Remodeling MA',
        tipo: 'Site + SEO Completo',
        resultado: 'PageSpeed 90+ · SEO Local',
        descricao: 'Site completo para empresa de pintura e remodelação. Entregue com SEO local para múltiplas cidades de Massachusetts, portfólio de projetos, seção de perguntas frequentes e sistema de agendamento online.',
      },
      // Sinmevaço — Sindicato, Brasil
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6220c0352e5305e8cc.png',
        alt: 'Sinmevaço — site institucional do sindicato brasileiro',
        nome: 'Sinmevaço',
        tipo: 'Site Institucional · Sem SEO',
        resultado: 'Design Institucional',
        descricao: 'Site institucional para sindicato brasileiro. Entregue sem SEO (foco exclusivamente institucional). Inclui área de notícias, eventos, benefícios para filiados, galeria de fotos e formulário de contato. Exemplo de entrega de site sem pacote de SEO.',
      },
      // HVAC Company — Massachusetts
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc756045716b.png',
        alt: 'Site de HVAC em Massachusetts — aquecimento e ar condicionado',
        nome: 'HVAC Experts MA',
        tipo: 'Site + SEO Completo',
        resultado: 'PageSpeed 90+ · SEO Local',
        descricao: 'Site profissional para empresa de HVAC (aquecimento e ar condicionado). Entregue com SEO local, descrição de serviços, área de emergência 24h, avaliações de clientes e formulário de orçamento.',
      },
    ],
  },
  {
    id: 'performance',
    titulo: 'Resultados & Performance',
    subtitulo: 'Números reais',
    descricao:
      'Métricas reais do Google Search Console e PageSpeed Insights. Cada screenshot mostra dados verdadeiros dos sites que construímos e gerenciamos.',
    imagens: [
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d624c8da285cc97df7c.png',
        alt: 'RS Development Group — Google Search Console com 25 cliques e 13.1K impressões',
        nome: 'RS Development Group',
        tipo: 'Google Search Console',
        resultado: '25 cliques · 13.1K impressões · 7 dias',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f13f714ee618fd93ca5.png',
        alt: "Wolf's Siding — PageSpeed Insights com nota 99 em desempenho",
        nome: "Wolf's Siding",
        tipo: 'PageSpeed Insights',
        resultado: 'Desempenho 99 · SEO 100 · Práticas 100',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1320c035efa006b443.png',
        alt: "Wolf's Siding — Google Search Console com 11.8K impressões em 28 dias",
        nome: "Wolf's Siding",
        tipo: 'Google Search Console',
        resultado: '9 cliques · 11.8K impressões · 28 dias',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1355d8bc19b9463b26.png',
        alt: "Wolf's Siding — crescimento orgânico no Google Search Console",
        nome: "Wolf's Siding",
        tipo: 'Google Search Console',
        resultado: '12.9K impressões · Crescimento orgânico',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1355d8bc676d463b27.png',
        alt: "Wolf's Siding — 3 meses de performance no Google com 41.1K impressões",
        nome: "Wolf's Siding",
        tipo: 'Google Search Console',
        resultado: '40 cliques · 41.1K impressões · 3 meses',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1320c035699706b444.png',
        alt: "Wolf's Siding — PageSpeed Insights com nota 100 em desempenho",
        nome: "Wolf's Siding",
        tipo: 'PageSpeed Insights',
        resultado: 'Desempenho 100 · Acessibilidade 96 · SEO 100',
      },
    ],
  },
  {
    id: 'automacao',
    titulo: 'Automações & IA',
    subtitulo: 'Máquinas que vendem',
    descricao:
      'Fluxos de automação no GoHighLevel, bots de IA conversacional e workflows de WhatsApp para atendimento 24 horas.',
    imagens: [
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b406720c0355e60076365.png',
        alt: 'Bot de IA conversacional no GoHighLevel para qualificação automática de leads',
        nome: 'Empresa de Energia Solar',
        tipo: 'Bot de IA · GoHighLevel',
        resultado: 'Qualificação automática de leads',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b406720c035d914076364.png',
        alt: 'Workflow de WhatsApp no GoHighLevel — atendimento automatizado com IA',
        nome: 'Automação WhatsApp',
        tipo: 'Workflow · GoHighLevel',
        resultado: 'Atendimento + Orçamento + IA',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b410c4c8da2445e99c973.png',
        alt: 'Bot de IA com OpenAI GPT para atendimento automatizado de clínica',
        nome: 'Clínica de Fisioterapia',
        tipo: 'Bot de IA · OpenAI GPT',
        resultado: 'Atendimento 24h para clínica',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b418ddf9bdf249608cf87.png',
        alt: 'Templates de avaliação automatizados no GoHighLevel para clínica',
        nome: 'Clínica de Fisioterapia',
        tipo: 'Templates de Avaliação',
        resultado: 'Coleta automática de feedback',
      },
    ],
  },
]

export default function ProjetosPage() {
  const [activeTab, setActiveTab] = useState('sites')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

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
                  <div className="group">
                    <div
                      className="relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
                      onClick={() => setLightboxIndex(i)}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-brand-mint text-xs font-bold uppercase tracking-wider mb-1">{img.tipo}</p>
                        <p className="text-white font-serif text-xl font-bold mb-1">{img.nome}</p>
                        <p className="text-white/70 text-sm font-medium">{img.resultado}</p>
                      </div>
                      {/* Always-visible label */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1.5 rounded-full">
                        {img.tipo}
                      </div>
                    </div>
                    {/* Description below image */}
                    {'descricao' in img && (
                      <div className="mt-3 px-1">
                        <p className="text-brand-dark/60 text-sm leading-relaxed">{(img as { descricao: string }).descricao}</p>
                      </div>
                    )}
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
                  <div className="group">
                    <div
                      className="relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
                      onClick={() => setLightboxIndex(i + 2)}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-brand-mint text-xs font-bold uppercase tracking-wider mb-1">{img.tipo}</p>
                        <p className="text-white font-serif text-lg font-bold mb-0.5">{img.nome}</p>
                        <p className="text-white/70 text-xs font-medium">{img.resultado}</p>
                      </div>
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
                        {img.tipo}
                      </div>
                    </div>
                    {/* Description below image */}
                    {'descricao' in img && (
                      <div className="mt-3 px-1">
                        <p className="text-brand-dark/60 text-xs leading-relaxed">{(img as { descricao: string }).descricao}</p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Banner — SEO + PageSpeed */}
      <section className="py-12 bg-brand-dark text-white">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-brand-mint font-bold text-3xl mb-1">80+</p>
              <p className="text-white/50 text-sm">PageSpeed Score em todos os sites entregues</p>
            </div>
            <div>
              <p className="text-brand-mint font-bold text-3xl mb-1">800+</p>
              <p className="text-white/50 text-sm">Páginas criadas no maior projeto (Wolf&apos;s Siding)</p>
            </div>
            <div>
              <p className="text-brand-mint font-bold text-3xl mb-1">Com ou Sem SEO</p>
              <p className="text-white/50 text-sm">Entregamos sites com ou sem SEO conforme sua necessidade</p>
            </div>
            <div>
              <p className="text-brand-mint font-bold text-3xl mb-1">Ranking Real</p>
              <p className="text-white/50 text-sm">Todos os sites com SEO posicionados no Google com resultados comprovados</p>
            </div>
          </div>
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
              Conteúdo em <span className="text-brand-mint">Vídeo</span>
            </h2>
            <p className="text-brand-dark/50 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
              Dicas práticas, estratégias e ferramentas de marketing digital para empreendedores brasileiros.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699c9f81590acb2f32c57fde.mp4',
                label: 'Marketing Digital na Prática',
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
                label: 'Dicas de IA para Negócios',
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
                    Seu navegador não suporta vídeo HTML5.
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

      {/* Project Viewer - Full width scrollable */}
      {lightboxIndex !== null && (() => {
        const img = activeCat.imagens[lightboxIndex]
        if (!img) return null
        const total = activeCat.imagens.length
        const hasPrev = lightboxIndex > 0
        const hasNext = lightboxIndex < total - 1
        return (
          <div className="fixed inset-0 z-[100] bg-black flex flex-col">
            {/* Top bar with info + close */}
            <div className="flex-shrink-0 bg-black/90 border-b border-white/10 px-4 md:px-8 py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <span className="text-brand-mint text-xs font-bold uppercase tracking-wider flex-shrink-0">
                  {lightboxIndex + 1}/{total}
                </span>
                <div className="min-w-0">
                  <p className="text-white font-serif font-bold text-sm md:text-lg truncate">{img.nome}</p>
                  <p className="text-white/50 text-xs truncate">{img.tipo} · {img.resultado}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="text-white/60 hover:text-white transition-colors flex-shrink-0 p-2"
                aria-label="Fechar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable image area - full width */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              <div className="max-w-4xl mx-auto">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={3000}
                  className="w-full h-auto"
                  sizes="(max-width: 896px) 100vw, 896px"
                  priority
                />
              </div>
              {/* Description below image */}
              {'descricao' in img && (
                <div className="max-w-4xl mx-auto px-6 py-8 border-t border-white/10">
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">{(img as { descricao: string }).descricao}</p>
                </div>
              )}
            </div>

            {/* Bottom nav */}
            <div className="flex-shrink-0 bg-black/90 border-t border-white/10 px-4 md:px-8 py-3 flex items-center justify-between">
              <button
                type="button"
                onClick={() => hasPrev && setLightboxIndex(lightboxIndex - 1)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  hasPrev ? 'text-white hover:bg-white/10' : 'text-white/20 cursor-not-allowed'
                }`}
                disabled={!hasPrev}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Anterior
              </button>
              <p className="text-white/30 text-xs hidden md:block">
                Role para ver cada seção do site
              </p>
              <button
                type="button"
                onClick={() => hasNext && setLightboxIndex(lightboxIndex + 1)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  hasNext ? 'text-white hover:bg-white/10' : 'text-white/20 cursor-not-allowed'
                }`}
                disabled={!hasNext}
              >
                Próximo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )
      })()}
    </>
  )
}
