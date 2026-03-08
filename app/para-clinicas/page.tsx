'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumb from '@/components/Breadcrumb'
import CTAForm from '@/components/CTAForm'

const servicos = [
  {
    icone: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    titulo: 'Agendamento Online 24/7',
    desc: 'Seus pacientes marcam consultas a qualquer hora, sem precisar ligar. Você controla a disponibilidade e recebe confirmações automáticas.',
    escopo: [
      'Página de agendamento com branding da clínica',
      'Integração com seu calendário (Google Calendar, Outlook)',
      'Lembretes automáticos por WhatsApp e email (24h, 1h antes)',
      'Confirmação de presença automatizada',
      'Anti no-show: reengajamento automático para quem falta',
      'Sincronização em tempo real entre médicos',
      'Bloqueios de horário, períodos de férias e pausas',
    ],
  },
  {
    icone: 'M9 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    titulo: 'Prontuário Digital Seguro',
    desc: 'Histórico completo de cada paciente: consultas, exames, prescrições, anotações e documentos. Tudo seguro e em conformidade com a LGPD.',
    escopo: [
      'Ficha do paciente com dados pessoais e histórico médico',
      'Registro de consultas com notas, diagnósticos e prescrições',
      'Upload de exames, laudos e documentos',
      'Histórico de medicações e alergias',
      'Anotações privadas do médico',
      'Criptografia de ponta a ponta',
      'Backup automático na nuvem',
      'Acesso seguro com autenticação de dois fatores',
    ],
  },
  {
    icone: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    titulo: 'Telemedicina Integrada',
    desc: 'Consultas por vídeo direto no app. Seus pacientes não precisam sair de casa, e você economiza espaço no consultório.',
    escopo: [
      'Videochamada integrada no app (sem app externo)',
      'Compartilhamento de tela para mostrar exames',
      'Gravação de consultas (com consentimento)',
      'Chat de texto durante a consulta',
      'Prescrição digital enviada automaticamente',
      'Integração com prontuário eletrônico',
      'Suporte a múltiplas câmeras e microfones',
    ],
  },
  {
    icone: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
    titulo: 'Relatórios & Dashboards',
    desc: 'Acompanhe métricas em tempo real: pacientes, agendamentos, receita, taxa de no-show e tendências de atendimento.',
    escopo: [
      'Dashboard com visão geral da clínica',
      'Gráficos de agendamentos por período',
      'Análise de receita e ticket médio',
      'Taxa de no-show e cancelamentos',
      'Pacientes por especialidade',
      'Tendências de crescimento',
      'Exportação de relatórios em PDF/Excel',
      'Alertas automáticos para anomalias',
    ],
  },
  {
    icone: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    titulo: 'Automação de Follow-Up',
    desc: 'Workflows que acompanham o paciente: lembretes de consulta, follow-up pós-consulta, reativação de pacientes inativos.',
    escopo: [
      'Lembretes automáticos por WhatsApp e email',
      'Follow-up pós-consulta com questionário de satisfação',
      'Reativação de pacientes sem consultas há 60+ dias',
      'Workflow de agendamento de retorno',
      'Notificações para resultado de exames',
      'Sequências personalizadas por especialidade',
      'Triggers baseados em ações do paciente',
    ],
  },
  {
    icone: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
    titulo: 'Chatbot IA no WhatsApp',
    desc: 'Robo inteligente que responde pacientes 24h, qualifica, agenda consultas e transfere para humano quando necessário.',
    escopo: [
      'Chatbot com IA conversacional',
      'Respostas inteligentes baseadas em contexto',
      'Agendamento automático via bot',
      'Qualificação de pacientes',
      'Transferência para atendente humano com contexto',
      'Respostas fora do horário comercial',
      'Suporte a múltiplos idiomas',
      'Análise de sentimento do paciente',
    ],
  },
]

const diferenciais = [
  { num: '200+', label: 'Clínicas e consultórios' },
  { num: '50k+', label: 'Pacientes atendidos' },
  { num: '99.9%', label: 'Uptime garantido' },
  { num: '24h', label: 'Suporte dedicado' },
]

export default function ParaClinicasPage() {
  return (
    <>
      {/* === HERO === */}
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b435a20c0357f3208c418.jpeg"
          alt="Solução Completa para Clínicas — Calazans Lumina"
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
                <span className="text-brand-mint text-sm font-medium">Solução Completa para Clínicas</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Sua clínica no <br />
                <span className="text-brand-mint">século XXI</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8">
                Agendamento online, prontuário digital, telemedicina, automação com WhatsApp e relatórios em tempo real.
                Tudo integrado em uma única plataforma. Seus pacientes mais satisfeitos, você com mais tempo e receita.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/5531982948067?text=Olá, sou de uma clínica e gostaria de conhecer a solução"
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
                  Solicitar Demo
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="font-serif text-xl font-bold text-center mb-6">Como funciona</h2>
                <div className="space-y-6">
                  {[
                    { step: '1', title: 'Você se cadastra', desc: 'Cria sua conta e configura os dados da clínica em 5 minutos.' },
                    { step: '2', title: 'Seus pacientes agendam', desc: 'Eles marcam consultas online, 24/7, sem ligar.' },
                    { step: '3', title: 'Você atende e documenta', desc: 'Consulta presencial ou por vídeo, tudo registrado no prontuário.' },
                    { step: '4', title: 'Sistema automatiza o resto', desc: 'Lembretes, follow-up, relatórios — tudo automático.' },
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

      {/* === PROBLEMAS DA CLÍNICA === */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <p className="text-red-500 text-sm font-bold uppercase tracking-wider mb-3">Isso parece familiar?</p>
            <h2 className="heading-2 text-brand-dark mb-4">Os desafios de toda clínica que quer crescer</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Pacientes ligando toda hora para agendar',
              'Muitos no-shows e cancelamentos de última hora',
              'Difícil manter histórico de cada paciente',
              'Não consegue fazer follow-up com todos',
              'Perde pacientes que não retornam',
              'Gasta tempo com tarefas administrativas',
              'Não tem visão clara da receita e agendamentos',
              'Dificuldade em oferecer telemedicina',
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
            <p className="text-brand-mint text-sm font-bold uppercase tracking-wider mb-3">Funcionalidades Completas</p>
            <h2 className="heading-2 text-brand-dark mb-4">Tudo que sua clínica precisa para crescer</h2>
            <p className="text-brand-dark/50 max-w-2xl mx-auto">
              Cada funcionalidade abaixo foi desenvolvida especificamente para clínicas e consultórios.
              Tudo integrado em uma única plataforma fácil de usar.
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
                    <p className="text-brand-dark/40 text-xs font-bold uppercase tracking-wider mb-4">O que está incluído:</p>
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

      {/* === CASOS DE USO === */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <p className="text-brand-mint text-sm font-bold uppercase tracking-wider mb-3">Casos de Uso</p>
            <h2 className="heading-2 text-brand-dark mb-4">4 Exemplos de Automações para Clínicas</h2>
            <p className="text-brand-dark/60 max-w-2xl mx-auto">
              Veja como transformamos processos manuais em máquinas de eficiência para sua clínica.
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
                <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-brand-mint/10 rounded-xl flex items-center justify-center mb-6 text-brand-mint">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={ex.icone} />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">{ex.titulo}</h3>
                  <p className="text-brand-dark/60 text-sm mb-6 flex-1">{ex.desc}</p>
                  <div className="bg-brand-bg rounded-xl p-5 border border-gray-50">
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

      {/* === PLANOS === */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <p className="text-brand-mint text-sm font-bold uppercase tracking-wider mb-3">Preços Simples</p>
            <h2 className="heading-2 text-brand-dark mb-4">Escolha o plano ideal para sua clínica</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                nome: 'Plano Essencial',
                preco: 'R$ 99',
                periodo: '/mês',
                desc: 'Perfeito para começar',
                features: [
                  'Até 100 pacientes',
                  'Agendamento online',
                  'Prontuário digital básico',
                  'Lembretes automáticos',
                  'Suporte por email',
                ],
                cta: 'Começar Grátis',
                destaque: false,
              },
              {
                nome: 'Plano Profissional',
                preco: 'R$ 299',
                periodo: '/mês',
                desc: 'Mais popular',
                features: [
                  'Pacientes ilimitados',
                  'Agendamento avançado',
                  'Prontuário digital completo',
                  'Telemedicina integrada',
                  'Chatbot IA no WhatsApp',
                  'Relatórios avançados',
                  'Suporte prioritário 24/7',
                ],
                cta: 'Começar Teste Grátis',
                destaque: true,
              },
            ].map((plano, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`rounded-2xl border-2 p-8 relative ${
                  plano.destaque
                    ? 'border-brand-mint bg-brand-mint/5'
                    : 'border-gray-100 bg-white'
                }`}>
                  {plano.destaque && (
                    <div className="absolute -top-4 left-6 bg-brand-mint text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </div>
                  )}
                  <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">{plano.nome}</h3>
                  <p className="text-brand-dark/60 text-sm mb-6">{plano.desc}</p>
                  <div className="mb-8">
                    <span className="font-serif text-4xl font-bold text-brand-dark">{plano.preco}</span>
                    <span className="text-brand-dark/60">{plano.periodo}</span>
                  </div>
                  <button className={`w-full py-3 rounded-lg font-semibold mb-8 transition-colors ${
                    plano.destaque
                      ? 'bg-brand-mint text-white hover:bg-brand-mint/90'
                      : 'bg-brand-bg border border-gray-200 text-brand-dark hover:bg-gray-50'
                  }`}>
                    {plano.cta}
                  </button>
                  <ul className="space-y-3">
                    {plano.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-brand-dark/70">
                        <svg className="w-4 h-4 text-brand-mint flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA FINAL COM FORMULARIO === */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-3xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Pronto para transformar sua clínica?
            </h2>
            <p className="text-white/70 text-lg">
              Comece com 30 dias grátis. Sem cartão de crédito. Sem compromisso.
            </p>
          </ScrollReveal>

          <CTAForm />
        </div>
      </section>
    </>
  )
}
