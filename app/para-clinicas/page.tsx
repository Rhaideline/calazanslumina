import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumb from '@/components/Breadcrumb'
import CTAForm from '@/components/CTAForm'

export const metadata: Metadata = {
  title: 'Sistema para Clínicas Médicas | Agenda, Prontuário, Financeiro & Telemedicina — Calazans Lumina',
  description: 'Sistema completo para gestão de clínicas médicas: agenda inteligente, prontuário eletrônico (SOAP + CID-10), financeiro, telemedicina, multi-usuários e LGPD. Tudo em uma única plataforma.',
  alternates: { canonical: 'https://calazanslumina.com.br/para-clinicas' },
  openGraph: {
    title: 'MedSaaS — Sistema para Clínicas Médicas | Calazans Lumina',
    description: 'Agenda, prontuário eletrônico, financeiro, telemedicina e muito mais. Sistema web completo para clínicas.',
    url: 'https://calazanslumina.com.br/para-clinicas',
    type: 'website',
  },
}

const modulos = [
  {
    icone: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    titulo: 'Agenda Inteligente',
    desc: 'Agendamento completo com visão diária, semanal e mensal. Controle de horários por profissional, status do atendimento e lembretes automáticos.',
    funcionalidades: [
      'Visão dia, semana e mês',
      'Agendamento por profissional com horários disponíveis',
      'Status: agendado, confirmado, em atendimento, concluído, cancelado, no-show',
      'Suporte a consultas presenciais e telemedicina',
      'Duração personalizada por tipo de consulta',
      'Bloqueio de horários e intervalos',
    ],
  },
  {
    icone: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    titulo: 'Prontuário Eletrônico',
    desc: 'Registros médicos estruturados no formato SOAP com suporte a CID-10, assinatura digital e histórico completo do paciente.',
    funcionalidades: [
      'Formato SOAP: queixa, anamnese, exame físico, conduta',
      'Códigos CID-10 para diagnóstico e hipóteses',
      'Assinatura digital do profissional',
      'Status rascunho e finalizado',
      'Histórico completo por paciente',
      'Busca e filtros avançados',
    ],
  },
  {
    icone: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    titulo: 'Gestão de Pacientes',
    desc: 'Cadastro completo de pacientes com dados pessoais, convênio, contato de emergência e histórico de atendimentos.',
    funcionalidades: [
      'Ficha completa: dados pessoais, CPF, RG, convênio',
      'Contato de emergência',
      'Status ativo/inativo',
      'Histórico de consultas e prontuários',
      'Busca rápida e filtros',
      'Criptografia de dados sensíveis',
    ],
  },
  {
    icone: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    titulo: 'Telemedicina',
    desc: 'Consultas por vídeo integradas ao sistema. Agende, gere o link da sala e atenda o paciente sem sair da plataforma.',
    funcionalidades: [
      'Integração com Jitsi Meet (vídeo gratuito)',
      'Geração automática de link da sala',
      'Compartilhamento do link com paciente',
      'Histórico de teleconsultas',
      'Controle de consultas em andamento',
      'Funciona em qualquer dispositivo',
    ],
  },
  {
    icone: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    titulo: 'Financeiro Completo',
    desc: 'Controle de receitas e despesas, fluxo de caixa, métodos de pagamento e relatórios financeiros mensais.',
    funcionalidades: [
      'Receitas: consultas, procedimentos, exames, retornos',
      'Despesas: aluguel, salários, materiais, equipamentos',
      'Métodos: dinheiro, cartão crédito/débito, PIX, convênio, transferência',
      'Status: pendente, pago, cancelado, vencido',
      'Resumo financeiro mensal com saldo',
      'Vínculo de transações a pacientes e consultas',
    ],
  },
  {
    icone: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
    titulo: 'Dashboard & Relatórios',
    desc: 'Visão geral da clínica com métricas de atendimento, financeiro e pacientes. Relatórios mensais automáticos.',
    funcionalidades: [
      'Resumo diário de consultas',
      'Estatísticas mensais (atendimentos, faturamento)',
      'Contagem de pacientes e prontuários',
      'Tendências e comparativos',
      'Insights de aquisição de pacientes',
      'Ações rápidas para os módulos principais',
    ],
  },
  {
    icone: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    titulo: 'Prescrições Médicas',
    desc: 'Receituário digital com lista de medicamentos, posologia, duração do tratamento e vínculo ao prontuário.',
    funcionalidades: [
      'Prescrição digital completa',
      'Lista de medicamentos com posologia',
      'Duração e instruções de uso',
      'Vinculada ao prontuário do paciente',
      'Histórico de prescrições',
      'Impressão formatada',
    ],
  },
  {
    icone: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    titulo: 'Segurança & LGPD',
    desc: 'Conformidade com a Lei Geral de Proteção de Dados. Isolamento de dados por clínica, logs de auditoria e controle de acesso.',
    funcionalidades: [
      'Isolamento multi-tenant (dados por clínica)',
      'Row Level Security no banco de dados',
      'Controle de acesso por perfil (admin, médico, recepcionista)',
      'Logs de auditoria de todas as ações',
      'Campo DPO (encarregado de dados) na clínica',
      'Criptografia de dados sensíveis (CPF, RG)',
    ],
  },
]

const diferenciais = [
  { num: '8', label: 'Módulos integrados' },
  { num: '100%', label: 'Web — acesse de qualquer lugar' },
  { num: 'LGPD', label: 'Conformidade garantida' },
  { num: '24/7', label: 'Sistema disponível' },
]

export default function ParaClinicasPage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MedSaaS — Sistema para Clínicas',
    description: 'Sistema SaaS completo para gestão de clínicas médicas: agenda, prontuário eletrônico, financeiro, telemedicina e muito mais.',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web Browser',
    provider: {
      '@type': 'Organization',
      name: 'Calazans Lumina',
      url: 'https://calazanslumina.com.br',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* === HERO === */}
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b435a20c0357f3208c418.jpeg"
          alt="Sistema para Clínicas Médicas — MedSaaS by Calazans Lumina"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/90" />
        <div className="container-main section-padding relative z-10">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Para Clínicas' },
          ]} />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-brand-mint/20 border border-brand-mint/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-brand-mint rounded-full animate-pulse" />
                <span className="text-brand-mint text-sm font-medium">Sistema Web para Clínicas Médicas</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Agenda, prontuário e financeiro.<br />
                <span className="text-brand-mint">Tudo em um só lugar.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8">
                Sistema completo para gestão de clínicas: agendamento inteligente, prontuário eletrônico no formato SOAP com CID-10,
                controle financeiro, telemedicina, prescrições digitais e conformidade LGPD.
                Acesse de qualquer dispositivo, a qualquer hora.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                {[
                  { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', label: 'Agenda' },
                  { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', label: 'Prontuário' },
                  { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Financeiro' },
                  { icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z', label: 'Telemedicina' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    <span className="text-white/60 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/5531982948067?text=Olá, tenho uma clínica e quero saber mais sobre o sistema MedSaaS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Quero Conhecer o Sistema
                </a>
                <Link
                  href="/contato"
                  className="border border-white/20 text-white hover:bg-white/10 px-6 py-4 rounded-full text-base font-medium transition-colors inline-flex items-center gap-2"
                >
                  Solicitar Demonstração
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="font-serif text-xl font-bold text-center mb-6">O que você ganha</h2>
                <ul className="space-y-4">
                  {[
                    'Agenda com controle total de horários e profissionais',
                    'Prontuário eletrônico SOAP com CID-10',
                    'Financeiro: receitas, despesas e fluxo de caixa',
                    'Telemedicina com vídeo integrado (Jitsi)',
                    'Prescrições digitais com histórico',
                    'Multi-usuários: admin, médico, recepcionista',
                    'Dashboard com métricas da clínica',
                    'Conformidade LGPD + logs de auditoria',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                      <svg className="w-5 h-5 text-brand-mint flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
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

      {/* === DOR DA CLÍNICA === */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <p className="text-red-500 text-sm font-bold uppercase tracking-wider mb-3">Sua clínica passa por isso?</p>
            <h2 className="heading-2 text-brand-dark mb-4">Os problemas de quem ainda gerencia no papel ou em planilhas</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Agenda no caderno ou no Google Calendar sem controle real',
              'Prontuários em papel que se perdem e não têm busca',
              'Financeiro na planilha do Excel sem visão de fluxo de caixa',
              'Sem histórico rápido do paciente na hora da consulta',
              'Recepcionista não sabe os horários disponíveis em tempo real',
              'Não consegue fazer teleconsulta de forma profissional',
              'Medo de multa da LGPD por dados de pacientes desprotegidos',
              'Paga por 3 sistemas separados que não conversam entre si',
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

      {/* === MÓDULOS DO SISTEMA === */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <p className="text-brand-mint text-sm font-bold uppercase tracking-wider mb-3">Módulos do sistema</p>
            <h2 className="heading-2 text-brand-dark mb-4">Tudo que sua clínica precisa em uma plataforma</h2>
            <p className="text-brand-dark/50 max-w-2xl mx-auto">
              8 módulos integrados que substituem planilhas, cadernos e sistemas avulsos. Tudo conectado, tudo em tempo real.
            </p>
          </ScrollReveal>

          <div className="space-y-8 max-w-5xl mx-auto">
            {modulos.map((modulo, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="flex items-start gap-4 p-6 md:p-8 border-b border-gray-50">
                    <div className="w-12 h-12 bg-brand-mint/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={modulo.icone} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">{modulo.titulo}</h3>
                      <p className="text-brand-dark/60 text-sm leading-relaxed">{modulo.desc}</p>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-brand-dark/40 text-xs font-bold uppercase tracking-wider mb-4">Funcionalidades:</p>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {modulo.funcionalidades.map((item, j) => (
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

      {/* === CASOS DE USO === */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <p className="text-brand-mint text-sm font-bold uppercase tracking-wider mb-3">Casos de Uso</p>
            <h2 className="heading-2 text-brand-dark mb-4">Automações que transformam sua clínica</h2>
            <p className="text-brand-dark/60 max-w-2xl mx-auto">
              Veja como o sistema automatiza processos manuais e aumenta a eficiência da sua clínica.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                titulo: 'Confirmação Automática de Consulta',
                desc: 'Assim que o paciente agenda, recebe confirmação no WhatsApp com link para confirmar presença.',
                passos: [
                  'Trigger: Appointment Booked',
                  'Ação: Envio imediato de WhatsApp com detalhes',
                  'Ação: Link para confirmar presença',
                  'Ação: Notificação para a clínica',
                  'Wait: 24h antes > Lembrete automático'
                ],
                icone: 'M13 10V3L4 14h7v7l9-11h-7z'
              },
              {
                titulo: 'Triagem com IA no WhatsApp',
                desc: 'Chatbot conversa com o paciente, coleta informações preliminares e prepara o médico.',
                passos: [
                  'Trigger: Novo paciente inicia conversa',
                  'Ação: IA faz perguntas de triagem',
                  'Ação: Coleta sintomas e histórico',
                  'Ação: Transferência para atendente (se necessário)',
                  'Ação: Resumo salvo no prontuário'
                ],
                icone: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
              },
              {
                titulo: 'Follow-up Pós-Consulta',
                desc: 'Após a consulta, paciente recebe questionário de satisfação e lembretes de retorno.',
                passos: [
                  'Trigger: Consulta concluída',
                  'Ação: Envio de questionário de satisfação',
                  'Ação: Prescrição digital no WhatsApp',
                  'Ação: Agendamento de retorno (se necessário)',
                  'Ação: Follow-up em 7 dias'
                ],
                icone: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                titulo: 'Reativação de Pacientes Inativos',
                desc: 'Sistema identifica pacientes sem consultas há 60+ dias e inicia campanha de reengajamento.',
                passos: [
                  'Trigger: Paciente inativo há 60 dias',
                  'Ação: Envio de mensagem personalizada',
                  'Ação: Oferta de desconto ou promoção',
                  'Ação: Link direto para agendar',
                  'Ação: Sequência de 3 mensagens'
                ],
                icone: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              }
            ].map((ex, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-brand-bg rounded-2xl p-8 border border-gray-100 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-brand-mint/10 rounded-xl flex items-center justify-center mb-6 text-brand-mint">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={ex.icone} />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">{ex.titulo}</h3>
                  <p className="text-brand-dark/60 text-sm mb-6 flex-1">{ex.desc}</p>
                  <div className="bg-white rounded-xl p-5 border border-gray-50">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-dark/40 mb-3">Fluxo da Automação:</p>
                    <ul className="space-y-2">
                      {ex.passos.map((p, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-brand-dark/70">
                          <span className="text-brand-mint font-bold">•</span>
                          {p}
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

      {/* === STACK TÉCNICA === */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <p className="text-brand-mint text-sm font-bold uppercase tracking-wider mb-3">Tecnologia por trás</p>
            <h2 className="heading-2 mb-4">Construído com tecnologia moderna e segura</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { titulo: 'Next.js + React', desc: 'Interface rápida e responsiva com renderização otimizada' },
              { titulo: 'Supabase (PostgreSQL)', desc: 'Banco de dados robusto com autenticação e real-time' },
              { titulo: 'TypeScript', desc: 'Código tipado para segurança e manutenção' },
              { titulo: 'Row Level Security', desc: 'Isolamento de dados por clínica no nível do banco' },
              { titulo: 'Tailwind CSS + shadcn/ui', desc: 'Design moderno com componentes profissionais' },
              { titulo: 'Jitsi Meet', desc: 'Videochamadas gratuitas integradas para telemedicina' },
            ].map((tech, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-bold text-white text-sm mb-2">{tech.titulo}</h3>
                  <p className="text-white/50 text-xs">{tech.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === PARA QUEM === */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Para quem é o MedSaaS?</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Clínicas médicas de qualquer especialidade',
              'Consultórios individuais de médicos e dentistas',
              'Clínicas de fisioterapia e reabilitação',
              'Clínicas de estética e dermatologia',
              'Clínicas de psicologia e psiquiatria',
              'Policlínicas com múltiplos profissionais',
              'Clínicas de nutrição e fonoaudiologia',
              'Qualquer profissional de saúde que precisa de organização',
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-center gap-4 bg-brand-bg rounded-xl p-5">
                  <div className="w-10 h-10 bg-brand-mint rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-brand-dark font-medium text-sm">{item}</p>
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
              { p: 'Preciso instalar alguma coisa?', r: 'Não. O sistema é 100% web. Você acessa pelo navegador do computador, tablet ou celular. Não precisa instalar nada.' },
              { p: 'Meus dados ficam seguros?', r: 'Sim. Usamos Supabase com PostgreSQL, Row Level Security para isolamento de dados por clínica, criptografia de dados sensíveis e logs de auditoria. Tudo em conformidade com a LGPD.' },
              { p: 'Quantos profissionais podem usar?', r: 'O sistema suporta múltiplos usuários com perfis diferentes: administrador, médico, recepcionista. Cada um vê apenas o que precisa.' },
              { p: 'Funciona para teleconsulta?', r: 'Sim. O módulo de telemedicina usa Jitsi Meet (gratuito e seguro) para videochamadas. Você agenda a teleconsulta e o sistema gera o link automaticamente.' },
              { p: 'Posso migrar meus dados de outro sistema?', r: 'Sim. Fazemos a migração de dados de planilhas ou outros sistemas. O processo é acompanhado pela nossa equipe.' },
              { p: 'Tem contrato de fidelidade?', r: 'Não. Você pode cancelar a qualquer momento. Sem multa, sem burocracia.' },
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
            <h2 className="heading-2 mb-4">Sua clínica merece um sistema de verdade.</h2>
            <p className="text-white/50 mb-8 text-lg">
              Pare de usar planilha, caderno e WhatsApp para gerenciar sua clínica.
              Tenha tudo integrado em uma única plataforma profissional.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/5531982948067?text=Olá, tenho uma clínica e quero conhecer o sistema MedSaaS"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4"
              >
                Quero Conhecer o Sistema
              </a>
              <Link
                href="/contato"
                className="border border-white/20 text-white hover:bg-white/10 px-6 py-4 rounded-full text-base font-medium transition-colors inline-flex items-center gap-2"
              >
                Solicitar Demonstração
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTAForm />
    </>
  )
}
