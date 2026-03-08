import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumb from '@/components/Breadcrumb'
import CTAForm from '@/components/CTAForm'

export const metadata: Metadata = {
  title: 'Sistema para Clinicas Medicas | Agenda, Prontuario, Financeiro & Telemedicina — Calazans Lumina',
  description: 'Sistema completo para gestao de clinicas medicas: agenda inteligente, prontuario eletronico (SOAP + CID-10), financeiro, telemedicina, multi-usuarios e LGPD. Tudo em uma unica plataforma.',
  alternates: { canonical: 'https://calazanslumina.com.br/para-clinicas' },
  openGraph: {
    title: 'MedSaaS — Sistema para Clinicas Medicas | Calazans Lumina',
    description: 'Agenda, prontuario eletronico, financeiro, telemedicina e muito mais. Sistema web completo para clinicas.',
    url: 'https://calazanslumina.com.br/para-clinicas',
    type: 'website',
  },
}

const modulos = [
  {
    icone: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    titulo: 'Agenda Inteligente',
    desc: 'Agendamento completo com visao diaria, semanal e mensal. Controle de horarios por profissional, status do atendimento e lembretes automaticos.',
    funcionalidades: [
      'Visao dia, semana e mes',
      'Agendamento por profissional com horarios disponiveis',
      'Status: agendado, confirmado, em atendimento, concluido, cancelado, no-show',
      'Suporte a consultas presenciais e telemedicina',
      'Duracao personalizada por tipo de consulta',
      'Bloqueio de horarios e intervalos',
    ],
  },
  {
    icone: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    titulo: 'Prontuario Eletronico',
    desc: 'Registros medicos estruturados no formato SOAP com suporte a CID-10, assinatura digital e historico completo do paciente.',
    funcionalidades: [
      'Formato SOAP: queixa, anamnese, exame fisico, conduta',
      'Codigos CID-10 para diagnostico e hipoteses',
      'Assinatura digital do profissional',
      'Status rascunho e finalizado',
      'Historico completo por paciente',
      'Busca e filtros avancados',
    ],
  },
  {
    icone: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    titulo: 'Gestao de Pacientes',
    desc: 'Cadastro completo de pacientes com dados pessoais, convenio, contato de emergencia e historico de atendimentos.',
    funcionalidades: [
      'Ficha completa: dados pessoais, CPF, RG, convenio',
      'Contato de emergencia',
      'Status ativo/inativo',
      'Historico de consultas e prontuarios',
      'Busca rapida e filtros',
      'Criptografia de dados sensiveis',
    ],
  },
  {
    icone: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    titulo: 'Telemedicina',
    desc: 'Consultas por video integradas ao sistema. Agende, gere o link da sala e atenda o paciente sem sair da plataforma.',
    funcionalidades: [
      'Integracao com Jitsi Meet (video gratuito)',
      'Geracao automatica de link da sala',
      'Compartilhamento do link com paciente',
      'Historico de teleconsultas',
      'Controle de consultas em andamento',
      'Funciona em qualquer dispositivo',
    ],
  },
  {
    icone: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    titulo: 'Financeiro Completo',
    desc: 'Controle de receitas e despesas, fluxo de caixa, metodos de pagamento e relatorios financeiros mensais.',
    funcionalidades: [
      'Receitas: consultas, procedimentos, exames, retornos',
      'Despesas: aluguel, salarios, materiais, equipamentos',
      'Metodos: dinheiro, cartao credito/debito, PIX, convenio, transferencia',
      'Status: pendente, pago, cancelado, vencido',
      'Resumo financeiro mensal com saldo',
      'Vinculo de transacoes a pacientes e consultas',
    ],
  },
  {
    icone: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
    titulo: 'Dashboard & Relatorios',
    desc: 'Visao geral da clinica com metricas de atendimento, financeiro e pacientes. Relatorios mensais automaticos.',
    funcionalidades: [
      'Resumo diario de consultas',
      'Estatisticas mensais (atendimentos, faturamento)',
      'Contagem de pacientes e prontuarios',
      'Tendencias e comparativos',
      'Insights de aquisicao de pacientes',
      'Acoes rapidas para os modulos principais',
    ],
  },
  {
    icone: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    titulo: 'Prescricoes Medicas',
    desc: 'Receituario digital com lista de medicamentos, posologia, duracao do tratamento e vinculo ao prontuario.',
    funcionalidades: [
      'Prescricao digital completa',
      'Lista de medicamentos com posologia',
      'Duracao e instrucoes de uso',
      'Vinculada ao prontuario do paciente',
      'Historico de prescricoes',
      'Impressao formatada',
    ],
  },
  {
    icone: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    titulo: 'Seguranca & LGPD',
    desc: 'Conformidade com a Lei Geral de Protecao de Dados. Isolamento de dados por clinica, logs de auditoria e controle de acesso.',
    funcionalidades: [
      'Isolamento multi-tenant (dados por clinica)',
      'Row Level Security no banco de dados',
      'Controle de acesso por perfil (admin, medico, recepcionista)',
      'Logs de auditoria de todas as acoes',
      'Campo DPO (encarregado de dados) na clinica',
      'Criptografia de dados sensiveis (CPF, RG)',
    ],
  },
]

const diferenciais = [
  { num: '8', label: 'Modulos integrados' },
  { num: '100%', label: 'Web — acesse de qualquer lugar' },
  { num: 'LGPD', label: 'Conformidade garantida' },
  { num: '24/7', label: 'Sistema disponivel' },
]

export default function ParaClinicasPage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MedSaaS — Sistema para Clinicas',
    description: 'Sistema SaaS completo para gestao de clinicas medicas: agenda, prontuario eletronico, financeiro, telemedicina e muito mais.',
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
          alt="Sistema para Clinicas Medicas — MedSaaS by Calazans Lumina"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/90" />
        <div className="container-main section-padding relative z-10">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Para Clinicas' },
          ]} />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-brand-mint/20 border border-brand-mint/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-brand-mint rounded-full animate-pulse" />
                <span className="text-brand-mint text-sm font-medium">Sistema Web para Clinicas Medicas</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Agenda, prontuario e financeiro.<br />
                <span className="text-brand-mint">Tudo em um so lugar.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8">
                Sistema completo para gestao de clinicas: agendamento inteligente, prontuario eletronico no formato SOAP com CID-10,
                controle financeiro, telemedicina, prescricoes digitais e conformidade LGPD.
                Acesse de qualquer dispositivo, a qualquer hora.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                {[
                  { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', label: 'Agenda' },
                  { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', label: 'Prontuario' },
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
                  Solicitar Demonstracao
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="font-serif text-xl font-bold text-center mb-6">O que voce ganha</h2>
                <ul className="space-y-4">
                  {[
                    'Agenda com controle total de horarios e profissionais',
                    'Prontuario eletronico SOAP com CID-10',
                    'Financeiro: receitas, despesas e fluxo de caixa',
                    'Telemedicina com video integrado (Jitsi)',
                    'Prescricoes digitais com historico',
                    'Multi-usuarios: admin, medico, recepcionista',
                    'Dashboard com metricas da clinica',
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

      {/* === DOR DA CLINICA === */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <p className="text-red-500 text-sm font-bold uppercase tracking-wider mb-3">Sua clinica passa por isso?</p>
            <h2 className="heading-2 text-brand-dark mb-4">Os problemas de quem ainda gerencia no papel ou em planilhas</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Agenda no caderno ou no Google Calendar sem controle real',
              'Prontuarios em papel que se perdem e nao tem busca',
              'Financeiro na planilha do Excel sem visao de fluxo de caixa',
              'Sem historico rapido do paciente na hora da consulta',
              'Recepcionista nao sabe os horarios disponiveis em tempo real',
              'Nao consegue fazer teleconsulta de forma profissional',
              'Medo de multa da LGPD por dados de pacientes desprotegidos',
              'Paga por 3 sistemas separados que nao conversam entre si',
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

      {/* === MODULOS DO SISTEMA === */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <p className="text-brand-mint text-sm font-bold uppercase tracking-wider mb-3">Modulos do sistema</p>
            <h2 className="heading-2 text-brand-dark mb-4">Tudo que sua clinica precisa em uma plataforma</h2>
            <p className="text-brand-dark/50 max-w-2xl mx-auto">
              8 modulos integrados que substituem planilhas, cadernos e sistemas avulsos. Tudo conectado, tudo em tempo real.
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

      {/* === STACK TECNICA === */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <p className="text-brand-mint text-sm font-bold uppercase tracking-wider mb-3">Tecnologia por tras</p>
            <h2 className="heading-2 mb-4">Construido com tecnologia moderna e segura</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { titulo: 'Next.js + React', desc: 'Interface rapida e responsiva com renderizacao otimizada' },
              { titulo: 'Supabase (PostgreSQL)', desc: 'Banco de dados robusto com autenticacao e real-time' },
              { titulo: 'TypeScript', desc: 'Codigo tipado para seguranca e manutencao' },
              { titulo: 'Row Level Security', desc: 'Isolamento de dados por clinica no nivel do banco' },
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
            <h2 className="heading-2 text-brand-dark mb-4">Para quem e o MedSaaS?</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Clinicas medicas de qualquer especialidade',
              'Consultorios individuais de medicos e dentistas',
              'Clinicas de fisioterapia e reabilitacao',
              'Clinicas de estetica e dermatologia',
              'Clinicas de psicologia e psiquiatria',
              'Policlinicas com multiplos profissionais',
              'Clinicas de nutricao e fonoaudiologia',
              'Qualquer profissional de saude que precisa de organizacao',
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
              { p: 'Preciso instalar alguma coisa?', r: 'Nao. O sistema e 100% web. Voce acessa pelo navegador do computador, tablet ou celular. Nao precisa instalar nada.' },
              { p: 'Meus dados ficam seguros?', r: 'Sim. Usamos Supabase com PostgreSQL, Row Level Security para isolamento de dados por clinica, criptografia de dados sensiveis e logs de auditoria. Tudo em conformidade com a LGPD.' },
              { p: 'Quantos profissionais podem usar?', r: 'O sistema suporta multiplos usuarios com perfis diferentes: administrador, medico, recepcionista. Cada um ve apenas o que precisa.' },
              { p: 'Funciona para teleconsulta?', r: 'Sim. O modulo de telemedicina usa Jitsi Meet (gratuito e seguro) para videochamadas. Voce agenda a teleconsulta e o sistema gera o link automaticamente.' },
              { p: 'Posso migrar meus dados de outro sistema?', r: 'Sim. Fazemos a migracao de dados de planilhas ou outros sistemas. O processo e acompanhado pela nossa equipe.' },
              { p: 'Tem contrato de fidelidade?', r: 'Nao. Voce pode cancelar a qualquer momento. Sem multa, sem burocracia.' },
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
            <h2 className="heading-2 mb-4">Sua clinica merece um sistema de verdade.</h2>
            <p className="text-white/50 mb-8 text-lg">
              Pare de usar planilha, caderno e WhatsApp para gerenciar sua clinica.
              Tenha tudo integrado em uma unica plataforma profissional.
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
                Solicitar Demonstracao
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTAForm />
    </>
  )
}
