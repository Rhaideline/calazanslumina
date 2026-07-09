import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTAForm from '@/components/CTAForm'
import PortfolioSites from '@/components/PortfolioSites'

export const metadata: Metadata = {
  title: 'GoHighLevel para Empresas & Agências | Sub-contas Prontas + Freelancer GHL — Calazans Lumina',
  description: 'Sub-contas GoHighLevel prontas para qualquer tipo de empresa (clínicas, construction, energia solar, pintura e mais) com automações, chatbot IA e CRM. Também ofereço serviços de freelancer GHL para agências.',
  alternates: { canonical: 'https://calazanslumina.com.br/para-agencias' },
  openGraph: {
    title: 'GoHighLevel para Empresas & Agências | Calazans Lumina',
    description: 'Sub-contas GHL prontas para qualquer empresa + freelancer operacional para agências.',
    url: 'https://calazanslumina.com.br/para-agencias',
    type: 'website',
  },
}

const subAccountFeatures = [
  {
    icone: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    titulo: 'Chatbot IA no WhatsApp',
    desc: 'Robô de atendimento com IA que responde clientes 24h, agenda serviços e tira dúvidas automaticamente — funciona para qualquer nicho.',
  },
  {
    icone: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    titulo: 'Follow-up Automático',
    desc: 'Sequências de mensagens automáticas pós-serviço, lembretes de retorno e reativação de clientes inativos.',
  },
  {
    icone: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    titulo: 'CRM & Pipeline de Vendas',
    desc: 'Pipeline completo: novo lead → orçamento → fechou → em execução → finalizado. Tags automáticas por tipo de serviço.',
  },
  {
    icone: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    titulo: 'Calendário & Agendamento',
    desc: 'Sistema de agendamento online com lembretes automáticos por WhatsApp (24h e 1h antes) e anti-no-show.',
  },
  {
    icone: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    titulo: 'Campanhas de Email & SMS',
    desc: 'Sequências automatizadas de email e SMS para promoções, datas comemorativas e lembretes de retorno.',
  },
  {
    icone: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
    titulo: 'Dashboard & Relatórios',
    desc: 'Painel visual com métricas de leads, agendamentos, taxa de no-show, conversão e faturamento.',
  },
]

const freelancerServices = [
  {
    titulo: 'Configuração de Automações',
    desc: 'Crio workflows completos dentro do GHL: follow-up, nurturing, onboarding, anti-no-show, reativação de leads e qualquer fluxo customizado.',
    items: ['Workflows com triggers, condições e ações', 'Sequências multi-canal (WhatsApp, email, SMS)', 'Delays inteligentes e condições if/else', 'Integração com pipeline e tags automáticas'],
  },
  {
    titulo: 'Treinamento de Chatbot IA',
    desc: 'Configuro e treino o agente IA do GHL com a base de conhecimento do seu cliente para atendimento automatizado inteligente.',
    items: ['Setup do bot de conversação com IA', 'Treinamento com FAQ e info do negócio', 'Qualificação automática de leads', 'Transferência para humano com contexto'],
  },
  {
    titulo: 'Setup de Sub-accounts',
    desc: 'Configuro sub-accounts do zero para novos clientes da sua agência: CRM, pipeline, automações, chatbot, calendário.',
    items: ['Sub-account completo pronto para uso', 'Pipeline e campos customizados', 'Templates de mensagem WhatsApp', 'Vídeo-walkthrough de entrega'],
  },
  {
    titulo: 'Funis & Landing Pages',
    desc: 'Construo funis completos dentro do GHL: landing pages, páginas de obrigado, formulários multi-step e integração com pagamento.',
    items: ['Landing pages otimizadas para conversão', 'Formulários multi-step de qualificação', 'Integração com Stripe/PayPal', 'A/B testing de headlines e CTAs'],
  },
  {
    titulo: 'CRM, Pipeline & Relatórios',
    desc: 'Estruturo o CRM completo: pipelines por serviço, etapas de venda, automação de movimentação e dashboards.',
    items: ['Pipelines customizados por nicho', 'Movimentação automática entre etapas', 'Dashboard com métricas de conversão', 'Relatórios automatizados semanais/mensais'],
  },
  {
    titulo: 'Calendário & Integrações',
    desc: 'Configuro agendamento, lembretes anti-no-show, round-robin, webhooks e integrações com ferramentas externas.',
    items: ['Calendário com disponibilidade configurada', 'Lembretes automáticos (24h, 1h antes)', 'Integrações via API/Webhook/Zapier/Make', 'Round-robin para equipes'],
  },
]

const diferenciais = [
  { num: '50+', label: 'Sub-accounts configurados' },
  { num: '200+', label: 'Workflows criados' },
  { num: '100%', label: 'Remoto e assíncrono' },
  { num: '24h', label: 'Tempo médio de resposta' },
]

export default function ParaAgenciasPage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'GoHighLevel para Empresas e Agências',
    description: 'Sub-contas GoHighLevel prontas para qualquer tipo de empresa com automações e chatbot IA. Freelancer GHL para agências.',
    provider: {
      '@type': 'Organization',
      name: 'Calazans Lumina',
      url: 'https://calazanslumina.com.br',
    },
    areaServed: { '@type': 'Country', name: 'Brazil' },
    serviceType: 'GoHighLevel Implementation',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços GoHighLevel',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sub-conta GHL para Empresas',
            description: 'Sub-conta GoHighLevel pronta com automações, chatbot IA, CRM e agendamento para qualquer tipo de empresa.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Freelancer GHL para Agências',
            description: 'Serviços operacionais de GoHighLevel para agências: automações, treinamento de chatbot, setup de sub-accounts.',
          },
        },
      ],
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'O que está incluso na sub-conta GHL?', acceptedAnswer: { '@type': 'Answer', text: 'A sub-conta vem pronta com: chatbot IA no WhatsApp, follow-up automático, CRM com pipeline de vendas, calendário de agendamento com lembretes, campanhas de email/SMS e dashboard de métricas. Funciona para qualquer nicho: clínicas, construction, energia solar, pintura, serviços em geral. Funis e landing pages podem ser adicionados a critério do cliente.' } },
      { '@type': 'Question', name: 'Como funciona o pagamento da sub-conta?', acceptedAnswer: { '@type': 'Answer', text: 'O pagamento é dividido em duas partes: uma taxa única de configuração (setup inicial com todas as automações) e uma mensalidade para manutenção, suporte e atualizações contínuas.' } },
      { '@type': 'Question', name: 'Posso adicionar funis de vendas à minha sub-conta?', acceptedAnswer: { '@type': 'Answer', text: 'Sim! Os funis e landing pages são opcionais e podem ser adicionados a qualquer momento conforme sua necessidade. Construo funis otimizados para conversão com formulários multi-step e integração com pagamento.' } },
      { '@type': 'Question', name: 'Você trabalha como freelancer para agências que já têm GHL?', acceptedAnswer: { '@type': 'Answer', text: 'Sim! Ofereço serviços operacionais para agências que já possuem GoHighLevel: configuração de automações, treinamento de chatbot IA, setup de sub-accounts, funis, CRM e integrações. Trabalho como white-label da sua agência.' } },
      { '@type': 'Question', name: 'Qual versão do GHL você trabalha?', acceptedAnswer: { '@type': 'Answer', text: 'Trabalho com todas as versões: Agency Pro, Agency Starter e SaaS Mode. Também configuro sub-accounts em white-label de outras agências.' } },
      { '@type': 'Question', name: 'Quanto tempo leva o setup de uma sub-conta?', acceptedAnswer: { '@type': 'Answer', text: 'Um sub-account completo (CRM + automações + chatbot + agendamento) leva em média 5-7 dias úteis. Tarefas pontuais como criar um workflow ou template, 1-2 dias.' } },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ name: 'Para Agências' }]} />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* HERO — editorial com layered backgrounds                      */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-brand-dark text-white overflow-hidden">
        {/* Background photo + escurecedor */}
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67d859c95106d5e512376e8e.jpeg"
          alt="GoHighLevel para Empresas e Agências — Calazans Lumina"
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-black" />

        {/* Radial glow mint no centro-esquerda */}
        <div className="absolute -top-1/3 -left-1/4 w-[800px] h-[800px] rounded-full bg-brand-mint/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-mint/8 blur-3xl pointer-events-none" />

        {/* Asteriscos decorativos */}
        <div className="absolute top-16 right-[10%] text-brand-mint/30 text-2xl font-serif select-none">✦</div>
        <div className="absolute bottom-24 left-[8%] text-brand-mint/20 text-3xl font-serif select-none">✦</div>

        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              {/* Eyebrow refinado */}
              <div className="inline-flex items-center gap-2.5 bg-brand-mint/10 border border-brand-mint/25 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-brand-mint rounded-full animate-pulse" />
                <span className="text-brand-mint text-[11px] font-bold uppercase tracking-[0.28em]">Especialista GoHighLevel</span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-8">
                GoHighLevel pronto
                <br />
                <span className="font-serif italic font-normal text-brand-mint">para sua empresa</span>
                <br />
                <span className="text-white/40 font-normal italic font-serif text-3xl md:text-4xl lg:text-5xl">ou sua </span>
                <span className="font-serif italic font-normal text-brand-mint">agência.</span>
              </h1>

              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-5 max-w-2xl">
                Sub-contas GHL completas para <strong className="text-white font-semibold">qualquer tipo de empresa</strong> — clínicas, construction, energia solar, pintura, serviços e mais. Automações, chatbot IA e CRM prontos para usar.
              </p>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
                Também trabalho como <strong className="text-white font-semibold">freelancer para agências</strong> que já têm GHL e precisam de operacional: automações, treinamento de robô, setup de sub-accounts.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#empresas"
                  className="group inline-flex items-center gap-2.5 bg-brand-mint hover:bg-brand-mint/90 text-white font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-[1.03] shadow-2xl shadow-brand-mint/30"
                >
                  Para Empresas
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#agencias"
                  className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 hover:bg-white/5 text-white px-7 py-4 rounded-full text-base font-medium transition-all"
                >
                  Para Agências com GHL
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              {/* Card "Dois caminhos" — premium glassmorphism */}
              <div className="relative">
                {/* Glow border */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand-mint/30 via-transparent to-brand-mint/10 blur-sm" />

                <div className="relative bg-white/[0.04] border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                  <p className="text-[11px] tracking-[0.32em] uppercase font-bold text-brand-mint/80 mb-5 text-center">Dois caminhos</p>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-8 leading-tight">
                    Um <span className="italic text-brand-mint">objetivo</span>.
                  </h2>

                  <div className="space-y-4">
                    <div className="group bg-gradient-to-br from-brand-mint/15 to-brand-mint/5 border border-brand-mint/30 rounded-2xl p-5 hover:border-brand-mint/50 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 bg-brand-mint rounded-full flex items-center justify-center text-white font-serif font-bold flex-shrink-0 shadow-lg shadow-brand-mint/40">1</div>
                        <p className="text-white font-bold text-base">Tem uma empresa?</p>
                      </div>
                      <p className="text-white/65 text-sm leading-relaxed ml-12">Sub-conta GHL pronta com tudo configurado: chatbot IA, agendamento, follow-up, CRM. Qualquer nicho. Pague configuração + mensalidade.</p>
                    </div>

                    <div className="group bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 bg-white/15 rounded-full flex items-center justify-center text-white font-serif font-bold flex-shrink-0">2</div>
                        <p className="text-white font-bold text-base">Agência com GHL?</p>
                      </div>
                      <p className="text-white/65 text-sm leading-relaxed ml-12">Contrate como freelancer: configuro automações, treino chatbots, monto sub-accounts. Trabalho 100% white-label.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* NUMBERS BAR — gradient sutil + hover                          */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-r from-brand-mint via-brand-mint to-emerald-500 py-8 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.08)_50%,transparent_70%)]" />
        <div className="container-main relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/15">
            {diferenciais.map((d, i) => (
              <div key={i} className="group px-4 transition-transform hover:scale-105">
                <p className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight">{d.num}</p>
                <p className="text-white/85 text-[11px] md:text-xs mt-2 uppercase tracking-[0.18em] font-medium">{d.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* OFERTA 1 · PARA EMPRESAS                                       */}
      {/* ═══════════════════════════════════════════════════════════ */}

      <section id="empresas" className="section-padding bg-white scroll-mt-20 relative overflow-hidden">
        {/* Decorative number — editorial */}
        <div className="absolute top-12 right-8 md:right-16 font-serif text-[12rem] md:text-[18rem] font-bold text-brand-mint/5 leading-none select-none pointer-events-none">01</div>

        <div className="container-main relative">
          <ScrollReveal className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-5">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-700 text-[11px] font-bold uppercase tracking-[0.22em]">Para empresas de qualquer nicho</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-[1.1] mb-6 tracking-tight">
              Sub-conta GoHighLevel <span className="italic font-normal text-brand-mint">pronta</span> para sua empresa.
            </h2>
            <p className="text-brand-dark/60 text-lg md:text-xl leading-relaxed">
              Você recebe um sistema completo já configurado: chatbot IA atendendo seus clientes no WhatsApp, agendamento automático, follow-up pós-serviço, CRM com pipeline de vendas e muito mais. Funciona para clínicas, construction, energia solar, pintura, e qualquer outro nicho.
            </p>
          </ScrollReveal>

          {/* Pain Points — design editorial */}
          <ScrollReveal className="mb-20">
            <div className="relative bg-gradient-to-br from-red-50/60 via-red-50/30 to-orange-50/40 border border-red-100/60 rounded-3xl p-10 md:p-12 max-w-5xl mx-auto">
              <p className="text-red-600 text-[11px] font-bold uppercase tracking-[0.32em] mb-6 text-center">Isso parece familiar?</p>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl mx-auto">
                {[
                  'Clientes marcam e não aparecem (no-show)',
                  'Respondendo WhatsApp manualmente o dia inteiro',
                  'Clientes somem depois do primeiro serviço',
                  'Não sabe quantos leads viraram clientes este mês',
                  'Perde tempo com agendamento por telefone',
                  'Não faz follow-up pós-serviço',
                ].map((dor, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-red-400/70 font-serif text-2xl leading-none mt-0.5 flex-shrink-0">×</span>
                    <p className="text-brand-dark/75 text-[15px] leading-relaxed">{dor}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* O que vem na sub-conta — header */}
          <ScrollReveal className="text-center mb-10">
            <p className="text-brand-mint text-[11px] font-bold uppercase tracking-[0.28em] mb-3">O que vem pronto</p>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark leading-tight">Tudo configurado <span className="italic text-brand-mint">desde o dia 1</span>.</h3>
          </ScrollReveal>

          {/* Feature cards — gradient sutil + hover lift */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-20">
            {subAccountFeatures.map((feat, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="group relative bg-gradient-to-br from-white to-brand-bg border border-gray-100 rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-mint/10 hover:border-brand-mint/30">
                  {/* Accent line top */}
                  <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-brand-mint/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="w-12 h-12 bg-brand-mint/10 group-hover:bg-brand-mint/15 rounded-xl flex items-center justify-center mb-5 transition-colors">
                    <svg className="w-6 h-6 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={feat.icone} />
                    </svg>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-brand-dark mb-2 leading-snug">{feat.titulo}</h4>
                  <p className="text-brand-dark/60 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Funis & Landing Pages — destaque card */}
          <ScrollReveal className="max-w-5xl mx-auto mb-20">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-dark via-[#0a1a16] to-brand-dark p-10 md:p-12 text-white">
              {/* Glow background */}
              <div className="absolute -top-1/2 -right-1/4 w-[500px] h-[500px] rounded-full bg-brand-mint/20 blur-3xl pointer-events-none" />

              <div className="relative flex flex-col md:flex-row items-start gap-6">
                <div className="w-14 h-14 bg-brand-mint/15 rounded-2xl flex items-center justify-center flex-shrink-0 border border-brand-mint/30">
                  <svg className="w-7 h-7 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="inline-block bg-brand-mint/20 text-brand-mint text-[10px] font-bold tracking-[0.28em] uppercase px-3 py-1 rounded-full mb-3">Opcional</span>
                  <h4 className="font-serif text-2xl md:text-3xl font-bold mb-3 leading-tight">Funis & Landing Pages</h4>
                  <p className="text-white/70 text-base leading-relaxed mb-5">
                    A critério do cliente, posso criar funis de vendas e landing pages dentro do GHL para captar novos clientes. Páginas otimizadas para conversão com formulários, integração com pagamento e automações de follow-up.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Landing page de captação', 'Formulário multi-step', 'Página de obrigado', 'Integração Stripe/PayPal', 'A/B testing'].map((item) => (
                      <span key={item} className="bg-white/8 border border-white/10 rounded-full px-3.5 py-1.5 text-xs text-white/75 hover:bg-white/12 transition-colors">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Pricing 2-card — drama no destaque */}
          <ScrollReveal className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-brand-mint text-[11px] font-bold uppercase tracking-[0.28em] mb-3">Investimento</p>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark leading-tight">Simples e <span className="italic text-brand-mint">transparente</span>.</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group bg-white border border-gray-100 rounded-3xl p-10 text-center transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="w-14 h-14 bg-brand-mint/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-brand-dark/40 text-[10px] font-bold uppercase tracking-[0.32em] mb-3">Pagamento Único</p>
                <h4 className="font-serif text-2xl font-bold text-brand-dark mb-4">Taxa de Configuração</h4>
                <p className="text-brand-dark/60 text-sm leading-relaxed">
                  Setup inicial completo: todas as automações, chatbot IA treinado, CRM, pipeline, calendário e templates configurados do zero para sua empresa.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-brand-dark/40 text-xs uppercase tracking-wider">Entrega em 5-7 dias úteis</p>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-brand-dark via-[#0a1a16] to-brand-dark text-white rounded-3xl p-10 text-center border-2 border-brand-mint shadow-2xl shadow-brand-mint/20 transition-all hover:-translate-y-1 hover:shadow-brand-mint/30">
                {/* Glow effect */}
                <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-brand-mint/15 blur-3xl pointer-events-none" />

                <div className="relative">
                  <div className="w-14 h-14 bg-brand-mint/20 rounded-full flex items-center justify-center mx-auto mb-5 border border-brand-mint/40">
                    <svg className="w-7 h-7 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <p className="text-brand-mint text-[10px] font-bold uppercase tracking-[0.32em] mb-3">Recorrente</p>
                  <h4 className="font-serif text-2xl font-bold mb-4">Mensalidade</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Manutenção contínua: ajustes nas automações, atualizações do chatbot, suporte técnico, otimizações e novas funcionalidades conforme necessário.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-brand-mint/80 text-xs uppercase tracking-wider">Suporte prioritário incluso</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="https://wa.me/5531982948067?text=Olá! Quero saber mais sobre a sub-conta GoHighLevel para minha empresa"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-brand-mint hover:bg-brand-mint/90 text-white font-bold text-lg px-10 py-5 rounded-full transition-all hover:scale-[1.03] shadow-2xl shadow-brand-mint/30"
              >
                Quero minha sub-conta GHL
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <p className="text-brand-dark/40 text-sm mt-4">Vamos conversar sobre valores e escopo para sua empresa</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* JORNADA DO CLIENTE — exemplo prático com timeline             */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-brand-bg relative overflow-hidden">
        <div className="container-main max-w-5xl relative">
          <ScrollReveal className="text-center mb-16">
            <p className="text-brand-mint text-[11px] font-bold uppercase tracking-[0.28em] mb-3">Na prática</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-dark leading-tight mb-4">
              Como funciona <span className="italic text-brand-mint">para sua empresa</span>.
            </h2>
            <p className="text-brand-dark/60 text-base md:text-lg">Exemplo real de automação rodando para empresas de serviços</p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xl shadow-gray-100/50">
              <div className="p-8 md:p-12">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-brand-mint/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brand-dark leading-tight">Jornada completa do cliente</h3>
                    <p className="text-brand-dark/50 text-sm mt-0.5">Do primeiro contato ao retorno — tudo automatizado</p>
                  </div>
                  <span className="sm:ml-auto bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">Automatizado</span>
                </div>

                {/* Timeline com linha conectora */}
                <div className="relative">
                  <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-blue-300 via-purple-300 to-brand-mint hidden sm:block" />
                  <div className="space-y-3">
                    {[
                      { step: '1', titulo: 'Cliente manda mensagem no WhatsApp', desc: 'Chatbot IA responde instantaneamente, tira dúvidas sobre serviços e preços.', cor: 'bg-blue-500' },
                      { step: '2', titulo: 'Chatbot qualifica e agenda', desc: 'Identifica o serviço desejado, verifica horários disponíveis e agenda automaticamente.', cor: 'bg-purple-500' },
                      { step: '3', titulo: 'Lembretes automáticos', desc: '24h e 1h antes do serviço, o cliente recebe lembrete no WhatsApp. Anti-no-show.', cor: 'bg-orange-500' },
                      { step: '4', titulo: 'Pós-serviço', desc: 'Follow-up automático: como foi a experiência? Solicita avaliação no Google.', cor: 'bg-pink-500' },
                      { step: '5', titulo: 'Reativação', desc: 'Cliente não volta há 60 dias? Mensagem automática com oferta especial de retorno.', cor: 'bg-brand-mint' },
                    ].map((item, i) => (
                      <div key={i} className="relative flex items-start gap-4 bg-brand-bg/60 rounded-2xl p-5 hover:bg-brand-bg transition-colors">
                        <div className={`w-9 h-9 ${item.cor} rounded-full flex items-center justify-center text-white font-serif font-bold text-base flex-shrink-0 shadow-md z-10`}>
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <p className="text-brand-dark font-bold text-base leading-tight">{item.titulo}</p>
                          <p className="text-brand-dark/55 text-sm mt-1.5 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-10 pt-10 border-t border-gray-100">
                  <div className="text-center">
                    <p className="font-serif text-4xl md:text-5xl font-bold text-brand-dark leading-none">24/7</p>
                    <p className="text-brand-dark/50 text-xs mt-2 uppercase tracking-[0.16em]">Atendimento automático</p>
                  </div>
                  <div className="text-center md:border-x md:border-gray-100">
                    <p className="font-serif text-4xl md:text-5xl font-bold text-brand-dark leading-none">−70%</p>
                    <p className="text-brand-dark/50 text-xs mt-2 uppercase tracking-[0.16em]">Redução de no-shows</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-4xl md:text-5xl font-bold text-brand-dark leading-none">+40%</p>
                    <p className="text-brand-dark/50 text-xs mt-2 uppercase tracking-[0.16em]">Clientes reativados</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* OFERTA 2 · FREELANCER PARA AGÊNCIAS                            */}
      {/* ═══════════════════════════════════════════════════════════ */}

      <section id="agencias" className="section-padding bg-brand-dark text-white scroll-mt-20 relative overflow-hidden">
        {/* Decorative number */}
        <div className="absolute top-12 right-8 md:right-16 font-serif text-[12rem] md:text-[18rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none">02</div>

        {/* Mint glow */}
        <div className="absolute top-0 left-1/4 w-[700px] h-[500px] rounded-full bg-brand-mint/8 blur-3xl pointer-events-none" />

        <div className="container-main relative">
          <ScrollReveal className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-brand-mint/15 border border-brand-mint/30 rounded-full px-4 py-2 mb-5">
              <span className="w-1.5 h-1.5 bg-brand-mint rounded-full animate-pulse" />
              <span className="text-brand-mint text-[11px] font-bold uppercase tracking-[0.22em]">Para agências com GoHighLevel</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Sua agência vende o GHL.
              <br />
              <span className="italic font-normal text-brand-mint">Eu implemento.</span>
            </h2>
            <p className="text-white/65 text-lg md:text-xl leading-relaxed">
              Você já tem GoHighLevel e revende para clientes, mas precisa de alguém para o operacional? Eu entro como sua freelancer: configuro automações, treino chatbots, monto sub-accounts — tudo white-label, como parte da sua equipe.
            </p>
          </ScrollReveal>

          {/* Pain Points — Agência */}
          <ScrollReveal className="mb-20">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 md:p-12 max-w-5xl mx-auto backdrop-blur-sm">
              <p className="text-red-400/90 text-[11px] font-bold uppercase tracking-[0.32em] mb-6 text-center">Isso parece familiar?</p>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl mx-auto">
                {[
                  'Comprou o white-label mas não tem tempo de configurar',
                  'Perde horas assistindo tutoriais em inglês',
                  'Clientes reclamam que o sistema está mal configurado',
                  'Não tem equipe técnica para automações complexas',
                  'Workflows quebrados que ninguém sabe consertar',
                  'Chatbot respondendo errado ou não respondendo',
                  'Funis que não convertem porque faltam automações',
                  'Paga o GHL todo mês mas usa 10% das funcionalidades',
                ].map((dor, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-red-400/60 font-serif text-2xl leading-none mt-0.5 flex-shrink-0">×</span>
                    <p className="text-white/75 text-[15px] leading-relaxed">{dor}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Serviços Freelancer */}
          <ScrollReveal className="text-center mb-10">
            <p className="text-brand-mint text-[11px] font-bold uppercase tracking-[0.28em] mb-3">Serviços que ofereço</p>
            <h3 className="font-serif text-3xl md:text-4xl font-bold leading-tight">Para sua <span className="italic text-brand-mint">agência</span>.</h3>
            <p className="text-white/45 mt-3">Contrate por projeto, pacote mensal ou sob demanda</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-20">
            {freelancerServices.map((servico, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="group relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl p-7 h-full backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-mint/30 hover:bg-white/[0.08]">
                  {/* Accent line top */}
                  <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-brand-mint/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <h4 className="font-serif text-xl font-bold text-brand-mint mb-3 leading-tight">{servico.titulo}</h4>
                  <p className="text-white/55 text-sm leading-relaxed mb-5">{servico.desc}</p>
                  <ul className="space-y-2.5">
                    {servico.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-xs text-white/55">
                        <svg className="w-3.5 h-3.5 text-brand-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Modelos de contratação — 3 tiers */}
          <ScrollReveal className="max-w-5xl mx-auto mb-16">
            <div className="text-center mb-12">
              <p className="text-brand-mint text-[11px] font-bold uppercase tracking-[0.28em] mb-3">Como contratar</p>
              <h3 className="font-serif text-3xl md:text-4xl font-bold leading-tight">3 <span className="italic text-brand-mint">modelos</span>.</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-5 items-stretch">
              {[
                {
                  titulo: 'Setup Único',
                  desc: 'Configuração completa de um sub-account do zero. Ideal para onboarding de novo cliente.',
                  items: ['Sub-account completo', 'Automações + CRM + Chatbot', 'Vídeo-walkthrough', 'Entrega em 5-7 dias'],
                  cta: 'Solicitar Setup',
                },
                {
                  titulo: 'Pacote Mensal',
                  desc: 'Manutenção e implementações contínuas. Para agências com volume constante.',
                  items: ['X sub-accounts/mês', 'Ajustes e otimizações', 'Suporte prioritário', 'Reunião de alinhamento'],
                  cta: 'Ver Pacotes',
                  destaque: true,
                },
                {
                  titulo: 'Sob Demanda',
                  desc: 'Tarefas pontuais: consertar workflow, criar automação, treinar chatbot.',
                  items: ['Tarefas avulsas', 'Preço por hora/tarefa', 'Sem compromisso mensal', 'Entrega rápida'],
                  cta: 'Enviar Tarefa',
                },
              ].map((modelo, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div
                    className={`relative rounded-3xl p-7 md:p-9 h-full flex flex-col transition-all hover:-translate-y-1 ${
                      modelo.destaque
                        ? 'bg-gradient-to-br from-brand-mint via-brand-mint to-emerald-500 text-white shadow-2xl shadow-brand-mint/40 md:scale-105'
                        : 'bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
                    }`}
                  >
                    {modelo.destaque && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-brand-dark text-[10px] font-bold uppercase tracking-[0.22em] px-4 py-1.5 rounded-full shadow-lg">
                        Mais escolhido
                      </span>
                    )}
                    <h4 className="font-serif text-2xl font-bold mb-3 leading-tight">{modelo.titulo}</h4>
                    <p className={`text-sm mb-7 leading-relaxed ${modelo.destaque ? 'text-white/85' : 'text-white/55'}`}>{modelo.desc}</p>
                    <ul className="space-y-2.5 mb-9 flex-1">
                      {modelo.items.map((item, j) => (
                        <li key={j} className={`flex items-center gap-2.5 text-sm ${modelo.destaque ? 'text-white/95' : 'text-white/65'}`}>
                          <svg className={`w-4 h-4 flex-shrink-0 ${modelo.destaque ? 'text-white' : 'text-brand-mint'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://wa.me/5531982948067?text=Olá, sou de uma agência e quero saber sobre o modelo de contratação"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/btn text-center font-bold py-3.5 rounded-full transition-all text-sm inline-flex items-center justify-center gap-2 ${
                        modelo.destaque ? 'bg-white text-brand-dark hover:bg-white/95 shadow-lg' : 'border border-white/20 text-white hover:bg-white/10'
                      }`}
                    >
                      {modelo.cta}
                      <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Como funciona (4 steps) */}
          <ScrollReveal className="max-w-3xl mx-auto">
            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
              <p className="text-brand-mint text-[11px] font-bold uppercase tracking-[0.28em] mb-3 text-center">Como funciona</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-center mb-10 leading-tight">Quatro <span className="italic text-brand-mint">passos</span>.</h3>
              <div className="relative space-y-5">
                <div className="absolute left-4 top-5 bottom-5 w-px bg-gradient-to-b from-brand-mint/60 via-brand-mint/40 to-brand-mint/20" />
                {[
                  { step: '1', title: 'Você me envia o briefing', desc: 'O que o cliente precisa: nicho, serviços, fluxos de atendimento.' },
                  { step: '2', title: 'Eu configuro tudo no GHL', desc: 'Sub-account, automações, funis, chatbot, CRM — tudo pronto.' },
                  { step: '3', title: 'Entrego documentado', desc: 'Vídeo-walkthrough + documento com tudo que foi feito.' },
                  { step: '4', title: 'Seu cliente usa e você escala', desc: 'O cliente vê resultado, você fatura mais, sem equipe fixa.' },
                ].map((item) => (
                  <div key={item.step} className="relative flex items-start gap-5">
                    <div className="w-9 h-9 bg-brand-mint rounded-full flex items-center justify-center text-white font-serif font-bold flex-shrink-0 z-10 shadow-lg shadow-brand-mint/30">
                      {item.step}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-white font-bold text-base leading-tight">{item.title}</p>
                      <p className="text-white/55 text-sm mt-1.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PortfolioSites />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* PORTFOLIO DE AUTOMAÇÕES                                       */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-brand-mint text-[11px] font-bold uppercase tracking-[0.28em] mb-3">Automações reais em produção</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-dark leading-tight mb-4">
              Exemplos do <span className="italic text-brand-mint">que eu construo</span>.
            </h2>
            <p className="text-brand-dark/55 text-base md:text-lg leading-relaxed">
              Workflows reais rodando em produção. Automações completas que funcionam 24/7 sem intervenção humana.
            </p>
          </ScrollReveal>

          <div className="space-y-10 max-w-5xl mx-auto">
            {/* Workflow GHL */}
            <ScrollReveal>
              <div className="bg-gradient-to-br from-white to-brand-bg border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-brand-mint/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-dark leading-tight">Automação Completa — Empresa de Serviços</h3>
                      <p className="text-brand-dark/45 text-xs mt-1">GoHighLevel · Chatbot IA + Agendamento + Follow-up + CRM</p>
                    </div>
                    <span className="sm:ml-auto bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">Em produção</span>
                  </div>

                  <p className="text-brand-dark/60 text-sm md:text-base leading-relaxed mb-7">
                    Sistema completo configurado dentro do GHL: chatbot IA no WhatsApp qualifica o cliente, agenda serviço automaticamente, envia lembretes, faz follow-up pós-serviço e reativa clientes inativos. Pipeline CRM com movimentação automática entre etapas.
                  </p>

                  <div className="bg-white rounded-2xl border border-gray-100 p-7">
                    <div className="grid md:grid-cols-2 gap-x-7 gap-y-4">
                      {[
                        { titulo: 'Chatbot IA WhatsApp', desc: 'Atende, qualifica e agenda automaticamente' },
                        { titulo: 'Pipeline CRM', desc: '6 etapas com movimentação automática' },
                        { titulo: 'Follow-up sequencial', desc: 'Dia 1, 3, 7, 14 e 30 após contato' },
                        { titulo: 'Anti no-show', desc: 'Lembretes 24h e 1h antes + reengajamento' },
                        { titulo: 'Reativação', desc: 'Workflow para clientes inativos há 60+ dias' },
                        { titulo: 'Relatórios', desc: 'Dashboard com métricas de conversão e agendamento' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <svg className="w-4 h-4 text-brand-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <p className="text-brand-dark font-bold text-sm">{item.titulo}</p>
                            <p className="text-brand-dark/45 text-xs mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Workflow n8n */}
            <ScrollReveal delay={100}>
              <div className="bg-gradient-to-br from-white to-brand-bg border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#FF6D5A]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#FF6D5A]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-dark leading-tight">Auto Publicação de Notícias com IA</h3>
                      <p className="text-brand-dark/45 text-xs mt-1">n8n + IA + Unsplash + GoHighLevel + GitHub</p>
                    </div>
                    <span className="sm:ml-auto bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">Em produção</span>
                  </div>

                  <p className="text-brand-dark/60 text-sm md:text-base leading-relaxed mb-7">
                    Workflow completo que roda automaticamente: coleta notícias de 4+ fontes RSS, filtra e pontua por relevância, gera legendas com IA, busca imagens no Unsplash, monta o design do post, publica automaticamente no social media via GHL e também gera artigos completos para o blog do site via GitHub. Tudo sem intervenção humana.
                  </p>

                  <div className="bg-white rounded-2xl border border-gray-100 p-6 overflow-x-auto">
                    <div className="flex items-center gap-2 flex-wrap justify-center min-w-[600px]">
                      {[
                        { label: 'Schedule Trigger', cor: 'bg-green-500' },
                        { label: 'RSS Feeds (4+)', cor: 'bg-orange-400' },
                        { label: 'Merge + Pontuar', cor: 'bg-purple-400' },
                        { label: 'Filtrar Top 3', cor: 'bg-blue-400' },
                        { label: 'Google Sheets', cor: 'bg-green-400' },
                        { label: 'IA Gerar Legenda', cor: 'bg-pink-400' },
                        { label: 'Unsplash Imagem', cor: 'bg-teal-400' },
                        { label: 'Design HTML', cor: 'bg-indigo-400' },
                        { label: 'Gerar Post', cor: 'bg-yellow-500' },
                        { label: 'Publicar GHL', cor: 'bg-brand-mint' },
                      ].map((step, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="flex flex-col items-center">
                            <div className={`w-3 h-3 ${step.cor} rounded-full shadow-md`} />
                            <span className="text-[10px] text-brand-dark/55 mt-1.5 whitespace-nowrap font-medium">{step.label}</span>
                          </div>
                          {i < 9 && (
                            <svg className="w-4 h-4 text-brand-dark/15 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 pt-5 border-t border-gray-50 flex items-center justify-center gap-6 text-xs text-brand-dark/40 italic">
                      <span>Ramo alternativo: Sem notícias → Gerar artigo HTML → GitHub → Publicar no site</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-7">
                    <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
                      <p className="font-serif text-3xl font-bold text-brand-dark">177k+</p>
                      <p className="text-brand-dark/45 text-xs mt-1 uppercase tracking-[0.16em]">Execuções</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
                      <p className="font-serif text-3xl font-bold text-brand-dark">24/7</p>
                      <p className="text-brand-dark/45 text-xs mt-1 uppercase tracking-[0.16em]">Rodando</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
                      <p className="font-serif text-3xl font-bold text-brand-dark">0</p>
                      <p className="text-brand-dark/45 text-xs mt-1 uppercase tracking-[0.16em]">Intervenção humana</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* TRIGGERS & AUTOMAÇÕES GHL                                      */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brand-mint/8 blur-3xl pointer-events-none" />
        <div className="container-main relative">
          <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-brand-mint text-[11px] font-bold uppercase tracking-[0.28em] mb-3">100+ gatilhos disponíveis</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4 tracking-tight">
              Todos os <span className="italic text-brand-mint">triggers</span> do GHL.
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed">
              Cada automação começa com um gatilho. Abaixo estão todos os triggers que configuro nos workflows — organizados por categoria.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {[
              {
                cat: 'Contatos & CRM',
                triggers: ['Contact Created', 'Contact Changed', 'Contact Tag', 'Contact DND', 'Contact Engagement Score', 'Note Added', 'Note Changed', 'Task Added', 'Task Reminder', 'Task Completed', 'Birthday Reminder', 'Custom Date Reminder', 'Number Validation'],
              },
              {
                cat: 'Comunicação & Respostas',
                triggers: ['Customer Replied', 'Email Events', 'Messaging Error - SMS', 'Conversation AI Trigger', 'Trigger Link Clicked', 'Inbound Webhook', 'Custom Trigger'],
              },
              {
                cat: 'Formulários & Captura',
                triggers: ['Form Submitted', 'Survey Submitted', 'Quiz Submitted', 'Facebook Lead Form Submitted', 'TikTok Form Submitted', 'LinkedIn Lead Form Submitted', 'Google Lead Form Submitted', 'Click to WhatsApp Ads'],
              },
              {
                cat: 'Agendamento & Calendário',
                triggers: ['Customer Booked Appointment', 'Appointment Status', 'Service Booking', 'Rental Booking', 'Scheduler'],
              },
              {
                cat: 'Pipeline & Oportunidades',
                triggers: ['Opportunity Created', 'Opportunity Changed', 'Opportunity Status Changed', 'Pipeline Stage Changed', 'Stale Opportunities', 'Prospect Generated'],
              },
              {
                cat: 'Pagamentos & E-commerce',
                triggers: ['Payment Received', 'Invoice', 'Order Form Submission', 'Order Submitted', 'Order Fulfilled', 'Subscription', 'Refund', 'Coupon Code Applied', 'Coupon Redemption Limit Reached', 'Coupon Code Expired', 'Coupon Code Redeemed', 'Abandoned Checkout'],
              },
              {
                cat: 'Cursos & Memberships',
                triggers: ['New Signup', 'User Login', 'Offer Access Granted', 'Offer Access Removed', 'Product Access Granted', 'Product Access Removed', 'Product Started', 'Product Completed', 'Category Started', 'Category Completed', 'Lesson Started', 'Lesson Completed', 'Lead Created', 'Certificates Issued'],
              },
              {
                cat: 'Redes Sociais',
                triggers: ['Facebook - Comments on a Post', 'Instagram - Comments on a Post', 'TikTok - Comments on a Video', 'External Tracking Event', 'Video Tracking'],
              },
              {
                cat: 'Afiliados & Comunidade',
                triggers: ['Affiliate Created', 'New Affiliate Sales', 'Affiliate enrolled in campaign', 'Group Access Granted', 'Group Access Revoked', 'Private Channel Access Granted', 'Private Channel Access Revoked', 'Community Group Member Leaderboard Level Changed'],
              },
              {
                cat: 'Telefonia & IVR',
                triggers: ['Call Details', 'Start IVR Trigger', 'Transcript Generated'],
              },
              {
                cat: 'Funis & Sites',
                triggers: ['Funnel/Website PageView', 'Product Review Submitted', 'Shopify Order Placed'],
              },
              {
                cat: 'Documentos & Contratos',
                triggers: ['Documents & Contracts', 'Estimates', 'New Review Received'],
              },
            ].map((grupo, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <div className="group bg-white/[0.04] border border-white/10 rounded-2xl p-6 h-full backdrop-blur-sm hover:bg-white/[0.06] hover:border-brand-mint/20 transition-all">
                  <h3 className="font-serif text-lg font-bold text-brand-mint mb-4 leading-tight pb-3 border-b border-white/10">{grupo.cat}</h3>
                  <ul className="space-y-2">
                    {grupo.triggers.map((t, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-white/55">
                        <span className="w-1 h-1 bg-brand-mint/60 rounded-full flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-14">
            <p className="text-white/40 text-sm mb-6 max-w-2xl mx-auto leading-relaxed">
              Cada trigger pode ser combinado com condições, filtros, delays e ações para criar workflows complexos e personalizados.
            </p>
            <a
              href="https://wa.me/5531982948067?text=Olá, preciso configurar automações no GoHighLevel"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-brand-mint hover:bg-brand-mint/90 text-white font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-[1.03] shadow-2xl shadow-brand-mint/30"
            >
              Quero configurar minhas automações
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* QUEM SOU EU                                                    */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-brand-dark text-white relative overflow-hidden border-t border-white/5">
        <div className="container-main max-w-5xl">
          <div className="grid md:grid-cols-[240px_1fr] gap-10 md:gap-12 items-center">
            <ScrollReveal>
              <div className="relative w-56 h-56 mx-auto md:mx-0 rounded-3xl overflow-hidden">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-brand-mint/40 to-transparent blur-sm" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-brand-mint/30">
                  <Image
                    src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67d859c95106d5e512376e8e.jpeg"
                    alt="Rhaideline Calazans — Especialista GoHighLevel"
                    width={224}
                    height={224}
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-brand-mint text-[11px] font-bold uppercase tracking-[0.28em] mb-3">Quem vai implementar</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5 leading-tight">
                Rhaideline <span className="italic text-brand-mint">Calazans</span>.
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-4">
                Trabalho com GoHighLevel desde 2022. Já configurei dezenas de sub-accounts para agências e empresas de diversos nichos nos EUA e no Brasil — construction, clínicas, energia solar, pintura, serviços em geral. Minha especialidade é pegar um GHL zerado e entregar um sistema completo funcionando: automações, chatbot IA, funis, CRM, WhatsApp, calendário — tudo integrado e documentado.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                Além de GHL, domino marketing digital, IA aplicada e automação. Isso me permite criar soluções que vão além do básico — integrando sites de alta performance, chatbots inteligentes e estratégias de conversão reais.
              </p>
              <div className="flex flex-wrap gap-2">
                {['GoHighLevel', 'Automações', 'Chatbot IA', 'WhatsApp API', 'CRM', 'Funis', 'Web Development'].map((tag) => (
                  <span key={tag} className="bg-white/[0.06] border border-white/10 rounded-full px-3.5 py-1.5 text-xs text-white/65 hover:bg-white/10 hover:text-white transition-colors">{tag}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* FAQ                                                            */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-3xl">
          <ScrollReveal className="text-center mb-14">
            <p className="text-brand-mint text-[11px] font-bold uppercase tracking-[0.28em] mb-3">Perguntas Frequentes</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight">
              Tira sua <span className="italic text-brand-mint">dúvida</span>.
            </h2>
          </ScrollReveal>
          <div className="space-y-3">
            {[
              { p: 'O que está incluso na sub-conta GHL?', r: 'A sub-conta vem pronta com: chatbot IA no WhatsApp, follow-up automático, CRM com pipeline de vendas, calendário de agendamento com lembretes, campanhas de email/SMS e dashboard de métricas. Funciona para qualquer nicho — clínicas, construction, energia solar, pintura etc. Funis e landing pages podem ser adicionados a critério do cliente.' },
              { p: 'Como funciona o pagamento da sub-conta?', r: 'O pagamento é dividido em duas partes: uma taxa única de configuração (setup inicial com todas as automações) e uma mensalidade para manutenção, suporte e atualizações contínuas.' },
              { p: 'Posso adicionar funis de vendas à minha sub-conta?', r: 'Sim! Os funis e landing pages são opcionais e podem ser adicionados a qualquer momento conforme sua necessidade. Construo funis otimizados para conversão com formulários multi-step e integração com pagamento.' },
              { p: 'Você trabalha como freelancer para agências que já têm GHL?', r: 'Sim! Ofereço serviços operacionais para agências que já possuem GoHighLevel: configuração de automações, treinamento de chatbot IA, setup de sub-accounts, funis, CRM e integrações. Trabalho como white-label da sua agência.' },
              { p: 'Você trabalha com qual versão do GHL?', r: 'Trabalho com todas as versões: Agency Pro, Agency Starter e SaaS Mode. Também configuro sub-accounts em white-label de outras agências.' },
              { p: 'Quanto tempo leva um setup completo?', r: 'Um sub-account completo (CRM + automações + chatbot + agendamento) leva em média 5-7 dias úteis. Tarefas pontuais como criar um workflow ou template, 1-2 dias.' },
              { p: 'Preciso dar acesso admin ao meu GHL?', r: 'Não. Trabalho diretamente no sub-account do cliente. Você cria um acesso de usuário para mim com as permissões necessárias e eu configuro tudo lá dentro.' },
              { p: 'E se o workflow quebrar depois?', r: 'Ofereço 7 dias de suporte gratuito após a entrega de cada setup. Para manutenção contínua, temos o modelo de pacote mensal com suporte prioritário.' },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <div className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-brand-mint/30 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-brand-mint/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-brand-mint font-serif font-bold text-sm">?</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-brand-dark text-base mb-2 leading-tight">{faq.p}</h3>
                      <p className="text-brand-dark/60 text-sm leading-relaxed">{faq.r}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* CTA FINAL                                                      */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-brand-dark text-white text-center overflow-hidden">
        {/* Layered backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#0a1a16] to-brand-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-brand-mint/15 blur-3xl pointer-events-none" />
        <div className="absolute top-12 left-[10%] text-brand-mint/30 text-3xl font-serif select-none">✦</div>
        <div className="absolute bottom-16 right-[12%] text-brand-mint/20 text-2xl font-serif select-none">✦</div>

        <div className="container-main max-w-3xl relative">
          <ScrollReveal>
            <p className="text-brand-mint text-[11px] font-bold uppercase tracking-[0.32em] mb-5">Pronta?</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Vamos <span className="italic font-normal text-brand-mint">automatizar</span>
              <br />
              sua empresa ou agência.
            </h2>
            <p className="text-white/55 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Seja uma sub-conta GHL completa para sua empresa ou serviços de freelancer para sua agência — eu cuido de toda a parte técnica.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/5531982948067?text=Olá! Quero saber mais sobre GoHighLevel para minha clínica/agência"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-brand-mint hover:bg-brand-mint/90 text-white font-bold text-lg px-10 py-5 rounded-full transition-all hover:scale-[1.03] shadow-2xl shadow-brand-mint/40"
              >
                Falar pelo WhatsApp
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 hover:bg-white/5 text-white px-7 py-5 rounded-full text-base font-medium transition-all"
              >
                Solicitar orçamento
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTAForm />
    </>
  )
}
