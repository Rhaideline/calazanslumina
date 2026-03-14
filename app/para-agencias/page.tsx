import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTAForm from '@/components/CTAForm'

export const metadata: Metadata = {
  title: 'GoHighLevel para Empresas & Agencias | Sub-contas Prontas + Freelancer GHL — Calazans Lumina',
  description: 'Sub-contas GoHighLevel prontas para qualquer tipo de empresa (clinicas, construction, energia solar, pintura e mais) com automacoes, chatbot IA e CRM. Tambem ofereço servicos de freelancer GHL para agencias.',
  alternates: { canonical: 'https://calazanslumina.com.br/para-agencias' },
  openGraph: {
    title: 'GoHighLevel para Empresas & Agencias | Calazans Lumina',
    description: 'Sub-contas GHL prontas para qualquer empresa + freelancer operacional para agencias.',
    url: 'https://calazanslumina.com.br/para-agencias',
    type: 'website',
  },
}

const subAccountFeatures = [
  {
    icone: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    titulo: 'Chatbot IA no WhatsApp',
    desc: 'Robo de atendimento com IA que responde clientes 24h, agenda servicos e tira duvidas automaticamente — funciona para qualquer nicho.',
  },
  {
    icone: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    titulo: 'Follow-up Automatico',
    desc: 'Sequencias de mensagens automaticas pos-servico, lembretes de retorno e reativacao de clientes inativos.',
  },
  {
    icone: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    titulo: 'CRM & Pipeline de Vendas',
    desc: 'Pipeline completo: novo lead > orcamento > fechou > em execucao > finalizado. Tags automaticas por tipo de servico.',
  },
  {
    icone: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    titulo: 'Calendario & Agendamento',
    desc: 'Sistema de agendamento online com lembretes automaticos por WhatsApp (24h e 1h antes) e anti-no-show.',
  },
  {
    icone: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    titulo: 'Campanhas de Email & SMS',
    desc: 'Sequencias automatizadas de email e SMS para promocoes, datas comemorativas e lembretes de retorno.',
  },
  {
    icone: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
    titulo: 'Dashboard & Relatorios',
    desc: 'Painel visual com metricas de leads, agendamentos, taxa de no-show, conversao e faturamento.',
  },
]

const freelancerServices = [
  {
    titulo: 'Configuracao de Automacoes',
    desc: 'Crio workflows completos dentro do GHL: follow-up, nurturing, onboarding, anti-no-show, reativacao de leads e qualquer fluxo customizado.',
    items: ['Workflows com triggers, condicoes e acoes', 'Sequencias multi-canal (WhatsApp, email, SMS)', 'Delays inteligentes e condicoes if/else', 'Integracao com pipeline e tags automaticas'],
  },
  {
    titulo: 'Treinamento de Chatbot IA',
    desc: 'Configuro e treino o agente IA do GHL com a base de conhecimento do seu cliente para atendimento automatizado inteligente.',
    items: ['Setup do bot de conversacao com IA', 'Treinamento com FAQ e info do negocio', 'Qualificacao automatica de leads', 'Transferencia para humano com contexto'],
  },
  {
    titulo: 'Setup de Sub-accounts',
    desc: 'Configuro sub-accounts do zero para novos clientes da sua agencia: CRM, pipeline, automacoes, chatbot, calendario.',
    items: ['Sub-account completo pronto para uso', 'Pipeline e campos customizados', 'Templates de mensagem WhatsApp', 'Video-walkthrough de entrega'],
  },
  {
    titulo: 'Funis & Landing Pages',
    desc: 'Construo funis completos dentro do GHL: landing pages, paginas de obrigado, formularios multi-step e integracao com pagamento.',
    items: ['Landing pages otimizadas para conversao', 'Formularios multi-step de qualificacao', 'Integracao com Stripe/PayPal', 'A/B testing de headlines e CTAs'],
  },
  {
    titulo: 'CRM, Pipeline & Relatorios',
    desc: 'Estruturo o CRM completo: pipelines por servico, etapas de venda, automacao de movimentacao e dashboards.',
    items: ['Pipelines customizados por nicho', 'Movimentacao automatica entre etapas', 'Dashboard com metricas de conversao', 'Relatorios automatizados semanais/mensais'],
  },
  {
    titulo: 'Calendario & Integrações',
    desc: 'Configuro agendamento, lembretes anti-no-show, round-robin, webhooks e integracoes com ferramentas externas.',
    items: ['Calendario com disponibilidade configurada', 'Lembretes automaticos (24h, 1h antes)', 'Integracoes via API/Webhook/Zapier/Make', 'Round-robin para equipes'],
  },
]

const diferenciais = [
  { num: '50+', label: 'Sub-accounts configurados' },
  { num: '200+', label: 'Workflows criados' },
  { num: '100%', label: 'Remoto e assincrono' },
  { num: '24h', label: 'Tempo medio de resposta' },
]

export default function ParaAgenciasPage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'GoHighLevel para Empresas e Agencias',
    description: 'Sub-contas GoHighLevel prontas para qualquer tipo de empresa com automacoes e chatbot IA. Freelancer GHL para agencias.',
    provider: {
      '@type': 'Organization',
      name: 'Calazans Lumina',
      url: 'https://calazanslumina.com.br',
    },
    areaServed: { '@type': 'Country', name: 'Brazil' },
    serviceType: 'GoHighLevel Implementation',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicos GoHighLevel',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sub-conta GHL para Empresas',
            description: 'Sub-conta GoHighLevel pronta com automacoes, chatbot IA, CRM e agendamento para qualquer tipo de empresa.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Freelancer GHL para Agencias',
            description: 'Servicos operacionais de GoHighLevel para agencias: automacoes, treinamento de chatbot, setup de sub-accounts.',
          },
        },
      ],
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'O que esta incluso na sub-conta GHL?', acceptedAnswer: { '@type': 'Answer', text: 'A sub-conta vem pronta com: chatbot IA no WhatsApp, follow-up automatico, CRM com pipeline de vendas, calendario de agendamento com lembretes, campanhas de email/SMS e dashboard de metricas. Funciona para qualquer nicho: clinicas, construction, energia solar, pintura, servicos em geral. Funis e landing pages podem ser adicionados a criterio do cliente.' } },
      { '@type': 'Question', name: 'Como funciona o pagamento da sub-conta?', acceptedAnswer: { '@type': 'Answer', text: 'O pagamento e dividido em duas partes: uma taxa unica de configuracao (setup inicial com todas as automacoes) e uma mensalidade para manutencao, suporte e atualizacoes continuas.' } },
      { '@type': 'Question', name: 'Posso adicionar funis de vendas a minha sub-conta?', acceptedAnswer: { '@type': 'Answer', text: 'Sim! Os funis e landing pages sao opcionais e podem ser adicionados a qualquer momento conforme sua necessidade. Construo funis otimizados para conversao com formularios multi-step e integracao com pagamento.' } },
      { '@type': 'Question', name: 'Voce trabalha como freelancer para agencias que ja tem GHL?', acceptedAnswer: { '@type': 'Answer', text: 'Sim! Ofereço servicos operacionais para agencias que ja possuem GoHighLevel: configuracao de automacoes, treinamento de chatbot IA, setup de sub-accounts, funis, CRM e integracoes. Trabalho como white-label da sua agencia.' } },
      { '@type': 'Question', name: 'Qual versao do GHL voce trabalha?', acceptedAnswer: { '@type': 'Answer', text: 'Trabalho com todas as versoes: Agency Pro, Agency Starter e SaaS Mode. Tambem configuro sub-accounts em white-label de outras agencias.' } },
      { '@type': 'Question', name: 'Quanto tempo leva o setup de uma sub-conta?', acceptedAnswer: { '@type': 'Answer', text: 'Um sub-account completo (CRM + automacoes + chatbot + agendamento) leva em media 5-7 dias uteis. Tarefas pontuais como criar um workflow ou template, 1-2 dias.' } },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ name: 'Para Agências' }]} />

      {/* === HERO === */}
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b435a20c0357f3208c418.jpeg"
          alt="GoHighLevel para Empresas e Agencias — Calazans Lumina"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/90" />
        <div className="container-main section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-brand-mint/20 border border-brand-mint/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-brand-mint rounded-full animate-pulse" />
                <span className="text-brand-mint text-sm font-medium">Especialista GoHighLevel</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                GoHighLevel pronto<br />
                <span className="text-brand-mint">para sua empresa ou agencia.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-4">
                Sub-contas GHL completas para <strong className="text-white">qualquer tipo de empresa</strong> — clinicas, construction, energia solar, pintura, servicos e mais. Automacoes, chatbot IA e CRM prontos para usar.
              </p>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8">
                Tambem trabalho como <strong className="text-white">freelancer para agencias</strong> que ja tem GHL e precisam de operacional: automacoes, treinamento de robo, setup de sub-accounts.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#empresas"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Para Empresas
                </a>
                <a
                  href="#agencias"
                  className="border border-white/20 text-white hover:bg-white/10 px-6 py-4 rounded-full text-base font-medium transition-colors inline-flex items-center gap-2"
                >
                  Para Agencias com GHL
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="font-serif text-xl font-bold text-center mb-6">Dois caminhos, um objetivo</h2>
                <div className="space-y-6">
                  <div className="bg-brand-mint/10 border border-brand-mint/20 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-brand-mint rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                      <p className="text-white font-bold text-sm">Tem uma empresa?</p>
                    </div>
                    <p className="text-white/60 text-xs ml-11">Receba uma sub-conta GHL pronta com tudo configurado: chatbot IA, agendamento, follow-up, CRM. Qualquer nicho — clinicas, construction, energia solar, pintura etc. Pague configuracao + mensalidade.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                      <p className="text-white font-bold text-sm">Agencia com GHL?</p>
                    </div>
                    <p className="text-white/60 text-xs ml-11">Contrate meus servicos de freelancer: configuro automacoes, treino chatbots, monto sub-accounts para seus clientes. Trabalho white-label.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* === NUMBERS BAR === */}
      <section className="bg-brand-mint py-6">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {diferenciais.map((d, i) => (
              <div key={i}>
                <p className="font-serif text-3xl md:text-4xl font-bold text-white">{d.num}</p>
                <p className="text-white/80 text-sm mt-1">{d.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* === OFERTA 1: SUB-CONTAS PARA CLINICAS DE ESTETICA ========= */}
      {/* ============================================================ */}

      <section id="empresas" className="section-padding bg-white scroll-mt-20">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
              <span className="text-blue-600 text-sm font-medium">Para Empresas de Qualquer Nicho</span>
            </div>
            <h2 className="heading-2 text-brand-dark mb-4">Sub-conta GoHighLevel pronta para sua empresa</h2>
            <p className="text-brand-dark/60 max-w-3xl mx-auto text-lg">
              Voce recebe um sistema completo ja configurado: chatbot IA atendendo seus clientes no WhatsApp, agendamento automatico, follow-up pos-servico, CRM com pipeline de vendas e muito mais. Funciona para clinicas, construction, energia solar, pintura, e qualquer outro nicho.
            </p>
          </ScrollReveal>

          {/* Pain Points Empresa */}
          <ScrollReveal className="mb-16">
            <div className="bg-red-50/50 border border-red-100 rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-red-500 text-sm font-bold uppercase tracking-wider mb-4 text-center">Isso parece familiar?</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Clientes marcam e nao aparecem (no-show)',
                  'Respondendo WhatsApp manualmente o dia inteiro',
                  'Clientes somem depois do primeiro servico',
                  'Nao sabe quantos leads viraram clientes este mes',
                  'Perde tempo com agendamento por telefone',
                  'Nao faz follow-up pos-servico',
                ].map((dor, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-brand-dark/70 text-sm">{dor}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* O que vem na sub-conta */}
          <ScrollReveal className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-brand-dark">O que vem pronto na sua sub-conta</h3>
            <p className="text-brand-dark/50 mt-2">Tudo configurado e funcionando desde o dia 1</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {subAccountFeatures.map((feat, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-brand-bg rounded-2xl p-6 border border-gray-100 h-full hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-brand-mint/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={feat.icone} />
                    </svg>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-dark mb-2">{feat.titulo}</h4>
                  <p className="text-brand-dark/60 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Funis Opcionais */}
          <ScrollReveal className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-brand-dark to-brand-dark/95 rounded-2xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-mint/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold mb-2">Funis & Landing Pages <span className="text-brand-mint text-sm font-normal">(opcional)</span></h4>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    A criterio do cliente, posso criar funis de vendas e landing pages dentro do GHL para captar novos clientes.
                    Paginas otimizadas para conversao com formularios, integracao com pagamento e automacoes de follow-up.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Landing page de captacao', 'Formulario multi-step', 'Pagina de obrigado', 'Integracao Stripe/PayPal', 'A/B testing'].map((item) => (
                      <span key={item} className="bg-white/10 border border-white/10 rounded-full px-3 py-1 text-xs text-white/70">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Pricing Empresa */}
          <ScrollReveal className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">Como funciona o investimento</h3>
              <p className="text-brand-dark/50">Simples e transparente</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-brand-bg border border-gray-100 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-brand-mint/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-brand-dark/40 text-xs font-bold uppercase tracking-wider mb-2">Pagamento Unico</p>
                <h4 className="font-serif text-xl font-bold text-brand-dark mb-3">Taxa de Configuracao</h4>
                <p className="text-brand-dark/60 text-sm leading-relaxed">
                  Setup inicial completo: todas as automacoes, chatbot IA treinado, CRM, pipeline, calendario e templates configurados do zero para sua empresa.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-brand-dark/40 text-xs">Entrega em 5-7 dias uteis</p>
                </div>
              </div>

              <div className="bg-brand-dark text-white rounded-2xl p-8 text-center border-2 border-brand-mint">
                <div className="w-14 h-14 bg-brand-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <p className="text-brand-mint text-xs font-bold uppercase tracking-wider mb-2">Recorrente</p>
                <h4 className="font-serif text-xl font-bold mb-3">Mensalidade</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Manutencao continua: ajustes nas automacoes, atualizacoes do chatbot, suporte tecnico, otimizacoes e novas funcionalidades conforme necessario.
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white/40 text-xs">Suporte prioritario incluso</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://wa.me/5531982948067?text=Olá! Quero saber mais sobre a sub-conta GoHighLevel para minha empresa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4"
              >
                Quero minha sub-conta GHL
              </a>
              <p className="text-brand-dark/40 text-xs mt-3">Vamos conversar sobre valores e escopo para sua empresa</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === EXEMPLO: COMO FUNCIONA NA PRATICA === */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-5xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Na pratica: como funciona para sua empresa</h2>
            <p className="text-brand-dark/60">Exemplo real de automacao rodando para empresas de servicos</p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-brand-mint/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-brand-dark">Jornada Completa do Cliente</h3>
                    <p className="text-brand-dark/40 text-xs">Do primeiro contato ao retorno — tudo automatizado</p>
                  </div>
                  <span className="ml-auto bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Automatizado</span>
                </div>

                <div className="space-y-4">
                  {[
                    { step: '1', titulo: 'Cliente manda mensagem no WhatsApp', desc: 'Chatbot IA responde instantaneamente, tira duvidas sobre servicos e precos.', cor: 'bg-blue-500' },
                    { step: '2', titulo: 'Chatbot qualifica e agenda', desc: 'Identifica o servico desejado, verifica horarios disponiveis e agenda automaticamente.', cor: 'bg-purple-500' },
                    { step: '3', titulo: 'Lembretes automaticos', desc: '24h e 1h antes do servico, o cliente recebe lembrete no WhatsApp. Anti-no-show.', cor: 'bg-orange-500' },
                    { step: '4', titulo: 'Pos-servico', desc: 'Follow-up automatico: como foi a experiencia? Solicita avaliacao no Google.', cor: 'bg-pink-500' },
                    { step: '5', titulo: 'Reativacao', desc: 'Cliente nao volta ha 60 dias? Mensagem automatica com oferta especial de retorno.', cor: 'bg-brand-mint' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-brand-bg rounded-xl p-4">
                      <div className={`w-8 h-8 ${item.cor} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                        {item.step}
                      </div>
                      <div>
                        <p className="text-brand-dark font-medium text-sm">{item.titulo}</p>
                        <p className="text-brand-dark/50 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold text-brand-dark">24/7</p>
                    <p className="text-brand-dark/40 text-xs">Atendimento automatico</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold text-brand-dark">-70%</p>
                    <p className="text-brand-dark/40 text-xs">Reducao de no-shows</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold text-brand-dark">+40%</p>
                    <p className="text-brand-dark/40 text-xs">Clientes reativados</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* === OFERTA 2: FREELANCER PARA AGENCIAS ===================== */}
      {/* ============================================================ */}

      <section id="agencias" className="section-padding bg-brand-dark text-white scroll-mt-20">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-mint/20 border border-brand-mint/30 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-brand-mint rounded-full" />
              <span className="text-brand-mint text-sm font-medium">Para Agencias com GoHighLevel</span>
            </div>
            <h2 className="heading-2 mb-4">Sua agencia vende o GHL.<br /><span className="text-brand-mint">Eu implemento.</span></h2>
            <p className="text-white/60 max-w-3xl mx-auto text-lg">
              Voce ja tem GoHighLevel e revende para clientes, mas precisa de alguem para o operacional?
              Eu entro como sua freelancer: configuro automacoes, treino chatbots, monto sub-accounts — tudo white-label, como parte da sua equipe.
            </p>
          </ScrollReveal>

          {/* Pain Points Agencia */}
          <ScrollReveal className="mb-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-red-400 text-sm font-bold uppercase tracking-wider mb-4 text-center">Isso parece familiar?</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Comprou o white-label mas nao tem tempo de configurar',
                  'Perde horas assistindo tutoriais em ingles',
                  'Clientes reclamam que o sistema ta mal configurado',
                  'Nao tem equipe tecnica para automacoes complexas',
                  'Workflows quebrados que ninguem sabe consertar',
                  'Chatbot respondendo errado ou nao respondendo',
                  'Funis que nao convertem porque faltam automacoes',
                  'Paga o GHL todo mes mas usa 10% das funcionalidades',
                ].map((dor, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-white/70 text-sm">{dor}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Servicos Freelancer */}
          <ScrollReveal className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold">Servicos que ofereco para sua agencia</h3>
            <p className="text-white/40 mt-2">Contrate por projeto, pacote mensal ou sob demanda</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {freelancerServices.map((servico, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/[0.08] transition-colors">
                  <h4 className="font-serif text-lg font-bold text-brand-mint mb-2">{servico.titulo}</h4>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{servico.desc}</p>
                  <ul className="space-y-2">
                    {servico.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-white/50">
                        <svg className="w-3.5 h-3.5 text-brand-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Como Contratar — Agencia */}
          <ScrollReveal className="max-w-4xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl font-bold">Modelos de contratacao</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  titulo: 'Setup Unico',
                  desc: 'Configuracao completa de um sub-account do zero. Ideal para onboarding de novo cliente.',
                  items: ['Sub-account completo', 'Automacoes + CRM + Chatbot', 'Video-walkthrough', 'Entrega em 5-7 dias'],
                  cta: 'Solicitar Setup',
                },
                {
                  titulo: 'Pacote Mensal',
                  desc: 'Manutencao e implementacoes continuas. Para agencias com volume constante.',
                  items: ['X sub-accounts/mes', 'Ajustes e otimizacoes', 'Suporte prioritario', 'Reuniao de alinhamento'],
                  cta: 'Ver Pacotes',
                  destaque: true,
                },
                {
                  titulo: 'Sob Demanda',
                  desc: 'Tarefas pontuais: consertar workflow, criar automacao, treinar chatbot.',
                  items: ['Tarefas avulsas', 'Preco por hora/tarefa', 'Sem compromisso mensal', 'Entrega rapida'],
                  cta: 'Enviar Tarefa',
                },
              ].map((modelo, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className={`rounded-2xl p-6 md:p-8 h-full flex flex-col ${modelo.destaque ? 'bg-brand-mint text-white' : 'bg-white/5 border border-white/10'}`}>
                    <h4 className="font-serif text-xl font-bold mb-2">{modelo.titulo}</h4>
                    <p className={`text-sm mb-6 ${modelo.destaque ? 'text-white/80' : 'text-white/50'}`}>{modelo.desc}</p>
                    <ul className="space-y-2 mb-8 flex-1">
                      {modelo.items.map((item, j) => (
                        <li key={j} className={`flex items-center gap-2 text-sm ${modelo.destaque ? 'text-white/90' : 'text-white/60'}`}>
                          <svg className={`w-4 h-4 flex-shrink-0 ${modelo.destaque ? 'text-white' : 'text-brand-mint'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://wa.me/5531982948067?text=Olá, sou de uma agência e quero saber sobre o modelo de contratação"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-center font-bold py-3 rounded-full transition-all text-sm ${modelo.destaque ? 'bg-white text-brand-dark hover:bg-white/90' : 'border border-white/20 text-white hover:bg-white/10'}`}
                    >
                      {modelo.cta}
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Como funciona (steps) */}
          <ScrollReveal className="max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-center mb-6">Como funciona</h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Voce me envia o briefing', desc: 'O que o cliente precisa: nicho, servicos, fluxos de atendimento.' },
                  { step: '2', title: 'Eu configuro tudo no GHL', desc: 'Sub-account, automacoes, funis, chatbot, CRM — tudo pronto.' },
                  { step: '3', title: 'Entrego documentado', desc: 'Video-walkthrough + documento com tudo que foi feito.' },
                  { step: '4', title: 'Seu cliente usa e voce escala', desc: 'O cliente ve resultado, voce fatura mais, sem equipe fixa.' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-mint rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{item.title}</p>
                      <p className="text-white/50 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === PORTFOLIO DE AUTOMACOES === */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <p className="text-brand-mint text-sm font-bold uppercase tracking-wider mb-3">Automacoes reais em producao</p>
            <h2 className="heading-2 text-brand-dark mb-4">Exemplos do que eu construo</h2>
            <p className="text-brand-dark/50 max-w-2xl mx-auto">
              Workflows reais rodando em producao. Automacoes completas que funcionam 24/7 sem intervencao humana.
            </p>
          </ScrollReveal>

          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Workflow GHL — Automacao Empresa */}
            <ScrollReveal>
              <div className="bg-brand-bg border border-gray-100 rounded-2xl overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-mint/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-brand-dark">Automacao Completa — Empresa de Servicos</h3>
                      <p className="text-brand-dark/40 text-xs">GoHighLevel — Chatbot IA + Agendamento + Follow-up + CRM</p>
                    </div>
                    <span className="ml-auto bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Em producao</span>
                  </div>

                  <p className="text-brand-dark/60 text-sm leading-relaxed mb-6">
                    Sistema completo configurado dentro do GHL: chatbot IA no WhatsApp qualifica o cliente,
                    agenda servico automaticamente, envia lembretes, faz follow-up pos-servico e reativa clientes inativos.
                    Pipeline CRM com movimentacao automatica entre etapas.
                  </p>

                  <div className="bg-white rounded-xl border border-gray-100 p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { titulo: 'Chatbot IA WhatsApp', desc: 'Atende, qualifica e agenda automaticamente' },
                        { titulo: 'Pipeline CRM', desc: '6 etapas com movimentacao automatica' },
                        { titulo: 'Follow-up sequencial', desc: 'Dia 1, 3, 7, 14 e 30 apos contato' },
                        { titulo: 'Anti no-show', desc: 'Lembretes 24h e 1h antes + reengajamento' },
                        { titulo: 'Reativacao', desc: 'Workflow para clientes inativos ha 60+ dias' },
                        { titulo: 'Relatorios', desc: 'Dashboard com metricas de conversao e agendamento' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <svg className="w-4 h-4 text-brand-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <p className="text-brand-dark font-medium text-sm">{item.titulo}</p>
                            <p className="text-brand-dark/40 text-xs">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Workflow n8n — Auto Publicacao */}
            <ScrollReveal delay={100}>
              <div className="bg-brand-bg border border-gray-100 rounded-2xl overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#FF6D5A]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#FF6D5A]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-brand-dark">Auto Publicacao de Noticias com IA</h3>
                      <p className="text-brand-dark/40 text-xs">n8n + IA + Unsplash + GoHighLevel + GitHub</p>
                    </div>
                    <span className="ml-auto bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Em producao</span>
                  </div>

                  <p className="text-brand-dark/60 text-sm leading-relaxed mb-6">
                    Workflow completo que roda automaticamente: coleta noticias de 4+ fontes RSS, filtra e pontua por relevancia,
                    gera legendas com IA, busca imagens no Unsplash, monta o design do post, publica automaticamente no social media
                    via GHL e tambem gera artigos completos para o blog do site via GitHub. Tudo sem intervencao humana.
                  </p>

                  <div className="bg-white rounded-xl border border-gray-100 p-6 overflow-x-auto">
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
                            <div className={`w-3 h-3 ${step.cor} rounded-full`} />
                            <span className="text-[10px] text-brand-dark/50 mt-1 whitespace-nowrap">{step.label}</span>
                          </div>
                          {i < 9 && (
                            <svg className="w-4 h-4 text-brand-dark/20 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-center gap-6 text-xs text-brand-dark/40">
                      <span>Ramo alternativo: Sem noticias → Gerar artigo HTML → GitHub → Publicar no site</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white rounded-xl border border-gray-100 p-4 text-center">
                      <p className="font-serif text-2xl font-bold text-brand-dark">177k+</p>
                      <p className="text-brand-dark/40 text-xs">Execucoes realizadas</p>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 p-4 text-center">
                      <p className="font-serif text-2xl font-bold text-brand-dark">24/7</p>
                      <p className="text-brand-dark/40 text-xs">Rodando automaticamente</p>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 p-4 text-center">
                      <p className="font-serif text-2xl font-bold text-brand-dark">0</p>
                      <p className="text-brand-dark/40 text-xs">Intervencao humana</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* === TRIGGERS & AUTOMACOES GHL === */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <p className="text-brand-mint text-sm font-bold uppercase tracking-wider mb-3">100+ gatilhos disponiveis</p>
            <h2 className="heading-2 mb-4">Todos os triggers do GHL que eu domino</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Cada automacao comeca com um gatilho. Abaixo estao todos os triggers que configuro nos workflows — organizados por categoria.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                cat: 'Contatos & CRM',
                triggers: ['Contact Created', 'Contact Changed', 'Contact Tag', 'Contact DND', 'Contact Engagement Score', 'Note Added', 'Note Changed', 'Task Added', 'Task Reminder', 'Task Completed', 'Birthday Reminder', 'Custom Date Reminder', 'Number Validation'],
              },
              {
                cat: 'Comunicacao & Respostas',
                triggers: ['Customer Replied', 'Email Events', 'Messaging Error - SMS', 'Conversation AI Trigger', 'Trigger Link Clicked', 'Inbound Webhook', 'Custom Trigger'],
              },
              {
                cat: 'Formularios & Captura',
                triggers: ['Form Submitted', 'Survey Submitted', 'Quiz Submitted', 'Facebook Lead Form Submitted', 'TikTok Form Submitted', 'LinkedIn Lead Form Submitted', 'Google Lead Form Submitted', 'Click to WhatsApp Ads'],
              },
              {
                cat: 'Agendamento & Calendario',
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
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
                  <h3 className="font-serif text-base font-bold text-brand-mint mb-4">{grupo.cat}</h3>
                  <ul className="space-y-1.5">
                    {grupo.triggers.map((t, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-white/60">
                        <span className="w-1.5 h-1.5 bg-brand-mint/60 rounded-full flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <p className="text-white/40 text-sm mb-6">
              Cada trigger pode ser combinado com condicoes, filtros, delays e acoes para criar workflows complexos e personalizados.
            </p>
            <a
              href="https://wa.me/5531982948067?text=Olá, preciso configurar automações no GoHighLevel"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Quero configurar minhas automacoes
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* === QUEM SOU EU === */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
            <ScrollReveal>
              <div className="relative w-48 h-48 mx-auto md:mx-0 rounded-2xl overflow-hidden border-2 border-brand-mint/30">
                <Image
                  src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b435a20c0357f3208c418.jpeg"
                  alt="Rhaideline Calazans — Especialista GoHighLevel"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-brand-mint text-sm font-bold uppercase tracking-wider mb-2">Quem vai implementar</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Rhaideline Calazans</h2>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Trabalho com GoHighLevel desde 2022. Ja configurei dezenas de sub-accounts para agencias e empresas de diversos nichos nos EUA e no Brasil — construction, clinicas, energia solar, pintura, servicos em geral.
                Minha especialidade e pegar um GHL zerado e entregar um sistema completo funcionando: automacoes, chatbot IA,
                funis, CRM, WhatsApp, calendario — tudo integrado e documentado.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Alem de GHL, domino Next.js, marketing digital, IA aplicada e automacao. Isso me permite criar solucoes
                que vao alem do basico — integrando sites de alta performance, chatbots inteligentes e estrategias de conversao reais.
              </p>
              <div className="flex flex-wrap gap-3">
                {['GoHighLevel', 'Automacoes', 'Chatbot IA', 'WhatsApp API', 'CRM', 'Funis', 'Next.js'].map((tag) => (
                  <span key={tag} className="bg-white/10 border border-white/10 rounded-full px-3 py-1 text-xs text-white/60">{tag}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-3xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Perguntas Frequentes</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {[
              { p: 'O que esta incluso na sub-conta GHL?', r: 'A sub-conta vem pronta com: chatbot IA no WhatsApp, follow-up automatico, CRM com pipeline de vendas, calendario de agendamento com lembretes, campanhas de email/SMS e dashboard de metricas. Funciona para qualquer nicho — clinicas, construction, energia solar, pintura etc. Funis e landing pages podem ser adicionados a criterio do cliente.' },
              { p: 'Como funciona o pagamento da sub-conta?', r: 'O pagamento e dividido em duas partes: uma taxa unica de configuracao (setup inicial com todas as automacoes) e uma mensalidade para manutencao, suporte e atualizacoes continuas.' },
              { p: 'Posso adicionar funis de vendas a minha sub-conta?', r: 'Sim! Os funis e landing pages sao opcionais e podem ser adicionados a qualquer momento conforme sua necessidade. Construo funis otimizados para conversao com formularios multi-step e integracao com pagamento.' },
              { p: 'Voce trabalha como freelancer para agencias que ja tem GHL?', r: 'Sim! Ofereço servicos operacionais para agencias que ja possuem GoHighLevel: configuracao de automacoes, treinamento de chatbot IA, setup de sub-accounts, funis, CRM e integracoes. Trabalho como white-label da sua agencia.' },
              { p: 'Voce trabalha com qual versao do GHL?', r: 'Trabalho com todas as versoes: Agency Pro, Agency Starter e SaaS Mode. Tambem configuro sub-accounts em white-label de outras agencias.' },
              { p: 'Quanto tempo leva um setup completo?', r: 'Um sub-account completo (CRM + automacoes + chatbot + agendamento) leva em media 5-7 dias uteis. Tarefas pontuais como criar um workflow ou template, 1-2 dias.' },
              { p: 'Preciso dar acesso admin ao meu GHL?', r: 'Nao. Trabalho diretamente no sub-account do cliente. Voce cria um acesso de usuario para mim com as permissoes necessarias e eu configuro tudo la dentro.' },
              { p: 'E se o workflow quebrar depois?', r: 'Ofereco 7 dias de suporte gratuito apos a entrega de cada setup. Para manutencao continua, temos o modelo de pacote mensal com suporte prioritario.' },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-brand-dark mb-2">{faq.p}</h3>
                  <p className="text-brand-dark/60 text-sm leading-relaxed">{faq.r}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="section-padding bg-brand-dark text-white text-center">
        <div className="container-main max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-2 mb-4">Pronta para automatizar sua empresa ou agencia?</h2>
            <p className="text-white/50 mb-8 text-lg">
              Seja uma sub-conta GHL completa para sua empresa ou servicos de freelancer para sua agencia — eu cuido de toda a parte tecnica.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/5531982948067?text=Olá! Quero saber mais sobre GoHighLevel para minha clínica/agência"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4"
              >
                Falar pelo WhatsApp Agora
              </a>
              <Link
                href="/contato"
                className="border border-white/20 text-white hover:bg-white/10 px-6 py-4 rounded-full text-base font-medium transition-colors inline-flex items-center gap-2"
              >
                Solicitar Orcamento
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTAForm />
    </>
  )
}
