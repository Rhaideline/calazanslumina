'use client'

import { useState } from 'react'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'

const categorias = [
  {
    id: 'sites',
    titulo: 'Sites & Landing Pages',
    descricao:
      'Sites profissionais de alta performance com Next.js, focados em conversão e SEO técnico. Cada projeto é único e desenvolvido para gerar resultados.',
    imagens: [
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d624c8da2a02097df7b.png',
        alt: 'Site profissional — layout moderno e responsivo desenvolvido pela Calazans Lumina',
        label: 'Site Profissional',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d62df9bdf1a8f06e132.png',
        alt: 'Landing page de alta conversão — design premium para captação de leads',
        label: 'Landing Page',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc91e4457164.png',
        alt: 'Site institucional para empresa brasileira — presença digital profissional',
        label: 'Site Institucional',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6220c0352e5305e8cc.png',
        alt: 'Página de vendas otimizada para conversão — funil integrado',
        label: 'Página de Vendas',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d62df9bdfed7506e133.png',
        alt: 'Design responsivo para negócios locais em Massachusetts',
        label: 'Negócio Local',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc22d845716a.png',
        alt: 'Site de serviços profissionais para empreendedores brasileiros nos EUA',
        label: 'Serviços Profissionais',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc3b6f457169.png',
        alt: 'Layout premium para agência digital — Calazans Lumina portfólio',
        label: 'Agência Digital',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6220c035435705e8cd.png',
        alt: 'Site com funil integrado para geração de leads qualificados',
        label: 'Funil Integrado',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc503d457168.png',
        alt: 'Design mobile-first para negócios brasileiros nos EUA',
        label: 'Mobile-First',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc756045716b.png',
        alt: 'Site de alta performance com PageSpeed 95+ — portfólio Calazans Lumina',
        label: 'Alta Performance',
      },
    ],
  },
  {
    id: 'performance',
    titulo: 'Resultados & Performance',
    descricao:
      'Métricas reais de campanhas de tráfego pago, SEO local e performance digital. Cada número aqui representa crescimento real de negócios brasileiros.',
    imagens: [
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d624c8da285cc97df7c.png',
        alt: 'Dashboard de performance — métricas reais de campanhas Calazans Lumina',
        label: 'Dashboard',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f13f714ee618fd93ca5.png',
        alt: 'Relatório de tráfego pago — ROI positivo em Google Ads',
        label: 'Google Ads',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1320c035efa006b443.png',
        alt: 'Crescimento orgânico — resultados de SEO local para brasileiros',
        label: 'SEO Local',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1355d8bc19b9463b26.png',
        alt: 'Performance de landing page — taxa de conversão otimizada',
        label: 'Landing Page',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1355d8bc676d463b27.png',
        alt: 'Dashboard de leads — funil de vendas automatizado GHL',
        label: 'Funil GHL',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1320c035699706b444.png',
        alt: 'Relatório de redes sociais — crescimento de engajamento',
        label: 'Redes Sociais',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b406720c035d914076364.png',
        alt: 'Resultados de Google Business Profile — aumento de visualizações',
        label: 'Google Business',
      },
    ],
  },
  {
    id: 'automacao',
    titulo: 'Automações & IA',
    descricao:
      'Fluxos de automação no GoHighLevel, pipelines de vendas e robôs de WhatsApp com IA que trabalham 24 horas por dia pelo seu negócio.',
    imagens: [
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b406720c0355e60076365.png',
        alt: 'Fluxo de automação GoHighLevel — pipeline de vendas automatizado',
        label: 'Pipeline GHL',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b410c4c8da2445e99c973.png',
        alt: 'Workflow GHL com disparo automático de WhatsApp, email e SMS',
        label: 'Workflow Multicanal',
      },
      {
        src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b418ddf9bdf249608cf87.png',
        alt: 'Robô de IA conversacional no WhatsApp — atendimento 24h automatizado',
        label: 'IA WhatsApp',
      },
    ],
  },
]

export default function ProjetosPage() {
  const [activeTab, setActiveTab] = useState('sites')

  return (
    <>
      {/* Hero / Intro */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">
              Nosso trabalho
            </p>
            <h1 className="heading-1 mb-4">
              Projetos & <span className="gradient-text">Portfólio</span>
            </h1>
            <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
              Cada projeto é uma transformação real. Confira os sites, automações,
              campanhas e resultados que entregamos para nossos clientes.
            </p>
          </ScrollReveal>

          {/* Category Navigation Tabs */}
          <div className="flex justify-center gap-2 mb-16 flex-wrap">
            {categorias.map((cat) => (
              <button
                type="button"
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === cat.id
                    ? 'bg-brand-dark text-white shadow-lg'
                    : 'bg-white text-brand-dark/60 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.titulo}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {categorias.map((cat) => (
        <section
          key={cat.id}
          className={`section-padding ${activeTab === cat.id ? 'block' : 'hidden'} ${
            cat.id === 'performance' ? 'bg-brand-bg' : 'bg-white'
          }`}
        >
          <div className="container-main">
            <ScrollReveal className="mb-10">
              <h2 className="heading-3 mb-2 text-brand-dark">{cat.titulo}</h2>
              <p className="text-brand-dark/60 max-w-2xl">{cat.descricao}</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.imagens.map((img, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="group relative rounded-2xl overflow-hidden shadow-lg bg-white">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="text-white text-sm font-semibold">
                        {img.label}
                      </span>
                    </div>
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
