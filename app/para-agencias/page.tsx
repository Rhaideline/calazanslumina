import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumb from '@/components/Breadcrumb'
import CTAForm from '@/components/CTAForm'

export const metadata: Metadata = {
  title: 'Freelancer GoHighLevel para Agencias | Setup, Automacao & IA — Calazans Lumina',
  description: 'Especialista GoHighLevel para agencias white-label. Configuro automacoes, chatbots IA no WhatsApp, funis, CRM, pipelines, templates de mensagens e follow-up. Sua agencia vende, eu implemento.',
  alternates: { canonical: 'https://calazanslumina.com.br/para-agencias' },
  openGraph: {
    title: 'Freelancer GoHighLevel para Agencias | Calazans Lumina',
    description: 'Especialista GHL para agencias white-label. Automacoes, chatbots IA, funis, CRM e muito mais.',
    url: 'https://calazanslumina.com.br/para-agencias',
    type: 'website',
  },
}

const servicos = [
  {
    icone: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    titulo: 'Templates de Mensagens WhatsApp',
    desc: 'Crio templates de mensagens personalizados para cada etapa do funil: boas-vindas, follow-up, lembrete de agendamento, pos-venda e reativacao de leads inativos.',
    escopo: [
      'Mapeamento da jornada do cliente (awareness > decisao > pos-venda)',
      'Criacao de 10-20 templates por fluxo (texto + variaveis dinamicas)',
      'Mensagens com botoes de resposta rapida e listas interativas',
      'Templates de follow-up sequencial (dia 1, 3, 7, 14, 30)',
      'Mensagens de reativacao para leads frios',
      'Personalizacao com campos customizados (nome, cidade, servico)',
    ],
  },
  {
    icone: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    titulo: 'Automacao de Follow-Up',
    desc: 'Configuro workflows completos de follow-up automatizado que acompanham o lead em cada etapa, garantindo que nenhuma oportunidade seja perdida.',
    escopo: [
      'Workflow de nurturing: sequencia de 5-10 mensagens automaticas',
      'Triggers baseados em acoes (formulario, clique, resposta, tag)',
      'Condicoes if/else para personalizar caminhos do lead',
      'Delays inteligentes entre mensagens (horas, dias, semanas)',
      'Integracao com pipeline: mover lead de etapa automaticamente',
      'Notificacao para o vendedor quando lead responde ou engaja',
      'Workflow de no-show: reengajar quem nao compareceu ao agendamento',
    ],
  },
  {
    icone: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    titulo: 'Chatbot & Agente IA no WhatsApp',
    desc: 'Configuro o robo de atendimento com IA dentro do GHL que responde leads 24h, qualifica, agenda reunioes e transfere para humano quando necessario.',
    escopo: [
      'Configuracao do bot de conversacao com fluxos condicionais',
      'Integracao com IA (OpenAI/ChatGPT) para respostas inteligentes',
      'Treinamento do agente IA com base de conhecimento do cliente',
      'Qualificacao automatica de leads (perguntas-filtro)',
      'Agendamento automatico via bot (conecta ao calendario GHL)',
      'Transferencia para atendente humano com contexto da conversa',
      'Respostas fora do horario comercial com coleta de dados',
      'Relatorio de conversas e taxa de resolucao do bot',
    ],
  },
  {
    icone: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    titulo: 'CRM & Pipeline de Vendas',
    desc: 'Estruturo todo o CRM: pipelines, etapas, automacoes de movimentacao, campos customizados e dashboards para a agencia e seus clientes acompanharem.',
    escopo: [
      'Criacao de pipelines customizados por tipo de servico/produto',
      'Definicao de etapas (novo lead > qualificado > proposta > fechado)',
      'Campos customizados para cada tipo de negocio',
      'Automacao de movimentacao entre etapas (baseado em acoes)',
      'Tags automaticas para segmentacao de leads',
      'Configuracao de tarefas automaticas para a equipe de vendas',
      'Dashboard com metricas: leads, conversoes, valor do pipeline',
    ],
  },
  {
    icone: 'M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12',
    titulo: 'Funis de Vendas & Landing Pages',
    desc: 'Construo funis completos dentro do GHL: landing pages, paginas de obrigado, upsell, downsell e integracao com pagamento e automacoes.',
    escopo: [
      'Landing page otimizada para conversao (formulario + CTA)',
      'Pagina de obrigado com proximos passos + pixel de conversao',
      'Funil de upsell/downsell para maximizar ticket medio',
      'A/B testing de headlines e CTAs',
      'Integracao com Stripe/PayPal para pagamento direto',
      'Formularios multi-step para qualificacao progressiva',
      'Pop-ups de saida e captura de leads',
    ],
  },
  {
    icone: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    titulo: 'Calendario & Agendamento',
    desc: 'Configuro o sistema de agendamento do GHL com disponibilidade, lembretes automaticos, confirmacao e anti-no-show.',
    escopo: [
      'Calendario com horarios disponiveis configurados',
      'Pagina de agendamento com branding do cliente',
      'Lembretes automaticos por WhatsApp e email (24h, 1h antes)',
      'Confirmacao de presenca automatica',
      'Workflow anti-no-show (reengajamento automatico)',
      'Round-robin para distribuir agendamentos entre equipe',
      'Integracao com Google Calendar',
    ],
  },
  {
    icone: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
    titulo: 'Relatorios & Dashboards',
    desc: 'Configuro dashboards customizados para a agencia e seus clientes acompanharem metricas de leads, conversoes, agendamentos e ROI.',
    escopo: [
      'Dashboard da agencia com visao geral de todos os sub-accounts',
      'Dashboard por cliente com metricas especificas do negocio',
      'Relatorio de leads: origem, status, tempo de resposta',
      'Relatorio de conversao: taxa de fechamento por etapa',
      'Relatorio de agendamentos: realizados vs no-shows',
      'Relatorio de campanhas: email, SMS e WhatsApp',
      'Exportacao automatica semanal/mensal por email',
    ],
  },
  {
    icone: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    titulo: 'Campanhas de Email & SMS',
    desc: 'Crio campanhas de email marketing e SMS dentro do GHL com segmentacao, automacao e testes A/B.',
    escopo: [
      'Templates de email responsivos com branding do cliente',
      'Sequencias de email automatizadas (welcome, nurture, venda)',
      'Segmentacao de listas por tags, pipeline e comportamento',
      'Campanhas de SMS para lembretes e ofertas rapidas',
      'Testes A/B de assunto e conteudo',
      'Configuracao de dominio de envio e aquecimento',
      'Relatorio de entregabilidade, aberturas e cliques',
    ],
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
    name: 'Freelancer GoHighLevel para Agencias',
    description: 'Especialista GoHighLevel para agencias white-label. Setup, automacoes, chatbots IA, funis e CRM.',
    provider: {
      '@type': 'Organization',
      name: 'Calazans Lumina',
      url: 'https://calazanslumina.com.br',
    },
    areaServed: { '@type': 'Country', name: 'Brazil' },
    serviceType: 'GoHighLevel Implementation',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* === HERO === */}
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b435a20c0357f3208c418.jpeg"
          alt="Freelancer GoHighLevel para Agencias — Calazans Lumina"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/90" />
        <div className="container-main section-padding relative z-10">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Para Agencias' },
          ]} />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-brand-mint/20 border border-brand-mint/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-brand-mint rounded-full animate-pulse" />
                <span className="text-brand-mint text-sm font-medium">Freelancer Especialista GoHighLevel</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Sua agencia vende o GHL.<br />
                <span className="text-brand-mint">Eu implemento.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8">
                Voce comprou o white-label do GoHighLevel, revende para clientes, mas nao tem tempo (ou equipe) para configurar tudo.
                Eu entro como sua implementadora: configuro automacoes, chatbots IA, funis, CRM, WhatsApp, pipelines — tudo pronto para o cliente usar.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/5531982948067?text=Olá, sou de uma agência e preciso de ajuda com GoHighLevel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Falar pelo WhatsApp
                </a>
                <Link
                  href="/contato"
                  className="border border-white/20 text-white hover:bg-white/10 px-6 py-4 rounded-full text-base font-medium transition-colors inline-flex items-center gap-2"
                >
                  Solicitar Orcamento
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="font-serif text-xl font-bold text-center mb-6">Como funciona</h2>
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

      {/* === DOR DA AGENCIA === */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <p className="text-red-500 text-sm font-bold uppercase tracking-wider mb-3">Isso parece familiar?</p>
            <h2 className="heading-2 text-brand-dark mb-4">Os problemas de toda agencia que revende GHL</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Comprou o white-label mas nao sabe configurar direito',
              'Perde horas assistindo tutoriais em ingles para cada funcao',
              'Clientes reclamam que o sistema esta mal configurado',
              'Nao tem equipe tecnica para implementar automacoes',
              'Workflows quebrados que ninguem sabe consertar',
              'Chatbot respondendo errado ou nao respondendo',
              'Funis que nao convertem porque faltam automacoes',
              'Paga o GHL todo mes mas usa 10% das funcionalidades',
            ].map((dor, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-start gap-4 bg-red-50 border border-red-100 rounded-xl p-5">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-brand-dark/80 text-sm font-medium">{dor}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === SERVICOS COM ESCOPO DETALHADO === */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <p className="text-brand-mint text-sm font-bold uppercase tracking-wider mb-3">Escopo completo</p>
            <h2 className="heading-2 text-brand-dark mb-4">Tudo que eu configuro dentro do GoHighLevel</h2>
            <p className="text-brand-dark/50 max-w-2xl mx-auto">
              Cada servico abaixo pode ser contratado individualmente ou em pacote completo.
              Tudo e feito diretamente no sub-account do seu cliente.
            </p>
          </ScrollReveal>

          <div className="space-y-8 max-w-5xl mx-auto">
            {servicos.map((servico, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="flex items-start gap-4 p-6 md:p-8 border-b border-gray-50">
                    <div className="w-12 h-12 bg-brand-mint/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={servico.icone} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">{servico.titulo}</h3>
                      <p className="text-brand-dark/60 text-sm leading-relaxed">{servico.desc}</p>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-brand-dark/40 text-xs font-bold uppercase tracking-wider mb-4">O que esta incluso:</p>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {servico.escopo.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-brand-dark/70">
                          <svg className="w-4 h-4 text-brand-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
                Trabalho com GoHighLevel desde 2022. Ja configurei dezenas de sub-accounts para agencias nos EUA e no Brasil.
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

      {/* === COMO CONTRATAR === */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Modelos de contratacao</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                titulo: 'Setup Unico',
                desc: 'Configuracao completa de um sub-account do zero. Ideal para onboarding de novo cliente.',
                items: ['Sub-account completo', 'Automacoes + CRM', 'Funil + Chatbot', 'Video-walkthrough', 'Entrega em 5-7 dias'],
                cta: 'Solicitar Setup',
              },
              {
                titulo: 'Pacote Mensal',
                desc: 'Manutencao e melhorias continuas. Para agencias com volume constante de clientes.',
                items: ['X sub-accounts/mes', 'Ajustes e otimizacoes', 'Suporte prioritario', 'Relatorios mensais', 'Reuniao de alinhamento'],
                cta: 'Ver Pacotes',
                destaque: true,
              },
              {
                titulo: 'Sob Demanda',
                desc: 'Tarefas pontuais: consertar workflow, criar automacao, configurar chatbot.',
                items: ['Tarefas avulsas', 'Preco por hora/tarefa', 'Sem compromisso mensal', 'Entrega rapida', 'Ideal para urgencias'],
                cta: 'Enviar Tarefa',
              },
            ].map((modelo, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`rounded-2xl p-6 md:p-8 h-full flex flex-col ${modelo.destaque ? 'bg-brand-dark text-white border-2 border-brand-mint' : 'bg-brand-bg border border-gray-100'}`}>
                  <h3 className="font-serif text-xl font-bold mb-2">{modelo.titulo}</h3>
                  <p className={`text-sm mb-6 ${modelo.destaque ? 'text-white/60' : 'text-brand-dark/60'}`}>{modelo.desc}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {modelo.items.map((item, j) => (
                      <li key={j} className={`flex items-center gap-2 text-sm ${modelo.destaque ? 'text-white/70' : 'text-brand-dark/70'}`}>
                        <svg className="w-4 h-4 text-brand-mint flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    className={`text-center font-bold py-3 rounded-full transition-all text-sm ${modelo.destaque ? 'btn-primary' : 'border border-brand-dark/20 text-brand-dark hover:bg-brand-dark hover:text-white'}`}
                  >
                    {modelo.cta}
                  </a>
                </div>
              </ScrollReveal>
            ))}
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
              { p: 'Voce trabalha com qual versao do GHL?', r: 'Trabalho com todas as versoes: Agency Pro, Agency Starter e SaaS Mode. Tambem configuro sub-accounts em white-label de outras agencias.' },
              { p: 'Preciso dar acesso admin ao meu GHL?', r: 'Nao. Trabalho diretamente no sub-account do cliente. Voce cria um acesso de usuario para mim com as permissoes necessarias e eu configuro tudo la dentro.' },
              { p: 'Quanto tempo leva um setup completo?', r: 'Um sub-account completo (CRM + automacoes + chatbot + funil) leva em media 5-7 dias uteis. Tarefas pontuais como criar um workflow ou template, 1-2 dias.' },
              { p: 'Voce faz reuniao com o cliente final da agencia?', r: 'Posso fazer se necessario, como white-label da sua agencia (apareco como sua equipe). Ou entrego tudo documentado com video-walkthrough para voce apresentar.' },
              { p: 'E se o workflow quebrar depois?', r: 'Ofereco 7 dias de suporte gratuito apos a entrega de cada setup. Para manutencao continua, temos o modelo de pacote mensal.' },
              { p: 'Trabalha com integracao via API/Webhook?', r: 'Sim. Integro GHL com ferramentas externas via webhooks, API, Zapier ou Make. Exemplos: integrar com ERP, CRM externo, plataformas de pagamento, etc.' },
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
            <h2 className="heading-2 mb-4">Pare de perder tempo configurando GHL.</h2>
            <p className="text-white/50 mb-8 text-lg">
              Foque em vender e prospectar novos clientes. Eu cuido de toda a parte tecnica do GoHighLevel para sua agencia.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/5531982948067?text=Olá, sou de uma agência e preciso de ajuda com GoHighLevel"
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
