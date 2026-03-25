import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTAForm from '@/components/CTAForm'

export const metadata: Metadata = {
  title: 'Cases de Sucesso | Resultados Reais de SEO, GHL e Marketing Digital — Calazans Lumina',
  description: 'Veja resultados reais: +24.500% impressoes, pagina 1 do Google, 18 leads organicos em 28 dias, chatbot IA qualificando 24/7. Cases de SEO, AEO, GEO e GoHighLevel.',
  alternates: { canonical: 'https://calazanslumina.com.br/cases' },
}

const cases = [
  {
    slug: 'wolfs-siding',
    cliente: "Wolf's Siding Inc.",
    nicho: 'Siding Contractor',
    local: 'Northborough, MA',
    bandeira: '🇺🇸',
    site: 'https://wolfs-siding.com',
    servicos: ['SEO', 'AEO', 'GEO', 'GoHighLevel', 'Chatbot IA', 'IVR'],
    cor: 'from-red-600 to-red-800',
    corBadge: 'bg-red-100 text-red-700',
    antes: {
      periodo: 'Dezembro 2025',
      impressoes: '14.500',
      cliques: '16',
      posicao: '26.8',
    },
    depois: {
      periodo: 'Março 2026 (28 dias)',
      impressoes: '47.900',
      cliques: '129',
      posicao: '15.5',
    },
    crescimento: {
      impressoes: '+230%',
      cliques: '+706%',
      posicao: 'Subiu 11 posições',
    },
    leads: '18 form submissions em fev-mar (100% orgânico)',
    destaques: [
      '"siding contractors near me" — posição 8.8 (página 1)',
      '"vinyl siding contractor" — posição 6.5 (página 1)',
      '"siding companies near me" — posição 9.2 (página 1)',
      '50+ páginas por cidade indexadas no Google',
      'Chatbot IA qualificando leads 24/7 (GPT 4.1)',
      'Sistema IVR com roteamento inteligente de chamadas',
      'Pipeline CRM com movimentação automática',
      'Voicemail com transcrição automática + SMS equipe',
      'Widget de reputação: 5.0 ⭐ (20+ reviews)',
    ],
    oQueFiz: [
      'Site com 800+ páginas (cidade × serviço)',
      'Schema markup LocalBusiness + FAQ por cidade',
      'Chatbot IA treinado com FAQ do negócio',
      'Workflow de formulário: SMS + Email + Follow-up',
      'IVR: Welcome → Collect Input → Connect Call / Voicemail / Calendar',
      'Templates WhatsApp para coleta de avaliações',
      'Phone system A2P 10DLC compliant',
    ],
  },
  {
    slug: 'rs-development',
    cliente: 'RS Development Group',
    nicho: 'General Contractor',
    local: 'Massachusetts',
    bandeira: '🇺🇸',
    site: 'https://rs-developmentgroup.com',
    servicos: ['SEO', 'AEO', 'GEO'],
    cor: 'from-blue-700 to-blue-900',
    corBadge: 'bg-blue-100 text-blue-700',
    antes: {
      periodo: 'Novembro 2025',
      impressoes: '358',
      cliques: '13',
      posicao: '18.4',
    },
    depois: {
      periodo: 'Março 2026 (28 dias)',
      impressoes: '88.103',
      cliques: '155',
      posicao: '18.9',
    },
    crescimento: {
      impressoes: '+24.500%',
      cliques: '+1.092%',
      posicao: 'Top 10 em 15+ keywords',
    },
    leads: '8 leads orgânicos em fev-mar (100% orgânico)',
    destaques: [
      '"somerville deck contractor" — posição 6.6 (página 1)',
      '"lynn porch builder" — posição 6.1 (página 1)',
      '"somerville porch builder" — posição 7.9 (página 1)',
      '"roofing services stoneham" — posição 9.4 (página 1)',
      '"kitchen remodeling medford" — posição 9.3 (página 1)',
      '100+ páginas por cidade indexadas',
      'De 358 → 88.103 impressões em 4 meses',
      '97% do tráfego dos Estados Unidos',
    ],
    oQueFiz: [
      'Estrutura de páginas cidade × serviço (100+ páginas)',
      'Schema markup LocalBusiness + FAQPage por cidade',
      'SEO técnico completo',
      'Otimização AEO para visibilidade em IAs',
      'GEO — geotargeting por cidade de Massachusetts',
      'Internal linking entre todas as páginas',
      'Crescimento 100% orgânico — zero ads',
    ],
  },
  {
    slug: 'jh-painting',
    cliente: 'JH Painting Services',
    nicho: 'Painting Contractor',
    local: 'Marlborough, MA',
    bandeira: '🇺🇸',
    site: 'https://jhpaintingservices.com',
    servicos: ['GoHighLevel', 'Chatbot IA', 'CRM', 'IVR', 'Reputação'],
    cor: 'from-amber-600 to-amber-800',
    corBadge: 'bg-amber-100 text-amber-700',
    antes: {
      periodo: 'Antes do GHL',
      impressoes: 'Manual',
      cliques: '0 automação',
      posicao: 'Sem CRM',
    },
    depois: {
      periodo: 'Março 2026',
      impressoes: 'Automatizado',
      cliques: 'Bot 24/7',
      posicao: '5.0 ⭐ Google',
    },
    crescimento: {
      impressoes: 'Automação completa',
      cliques: 'Bot qualifica 24/7',
      posicao: '5.0 ⭐ (20 reviews)',
    },
    leads: 'Leads qualificados automaticamente pelo chatbot IA',
    destaques: [
      'Chatbot IA (GPT 4.1) qualificando leads 24/7',
      'Bot treinado como secretária virtual personalizada',
      'Qualificação em 6 passos automáticos',
      'Pipeline CRM: Novo Orçamento → Em Contato → Interessado → Fechou',
      'IVR inteligente com roteamento de chamadas',
      'Sistema de voicemail com transcrição automática',
      'Widget de reputação: 5.0 ⭐ (20 reviews Google)',
      '4 templates WhatsApp para coleta de avaliações',
    ],
    oQueFiz: [
      'Chatbot IA com personalidade (GPT 4.1, Auto Pilot)',
      'Fontes de conhecimento: Web Crawler + 8 FAQs + Texto rico + Tabelas',
      'Pipeline CRM com 5 etapas e movimentação automática',
      'Workflow IVR: Welcome → Collect Input → Connect/Voicemail/Calendar',
      'Workflow Voicemail: transcrição → routing por tags → SMS equipe',
      'Workflow formulário: Create Opportunity → SMS → Email → Follow-up',
      'Sistema de reputação automatizado',
      'Phone system A2P 10DLC compliant',
    ],
  },
  {
    slug: 'hbm-solar',
    cliente: 'HBM Solar',
    nicho: 'Energia Solar',
    local: 'Brasil',
    bandeira: '🇧🇷',
    site: '',
    servicos: ['GoHighLevel', 'Chatbot IA', 'WhatsApp Automation'],
    cor: 'from-yellow-500 to-orange-600',
    corBadge: 'bg-yellow-100 text-yellow-700',
    antes: {
      periodo: 'Antes',
      impressoes: 'Manual',
      cliques: 'WhatsApp manual',
      posicao: 'Sem qualificação',
    },
    depois: {
      periodo: 'Depois',
      impressoes: 'Automatizado',
      cliques: 'Bot IA 24/7',
      posicao: 'Qualificação automática',
    },
    crescimento: {
      impressoes: 'Automação WhatsApp',
      cliques: 'Bot qualifica leads',
      posicao: 'Follow-up automático',
    },
    leads: 'Qualificação automática de leads para orçamento solar',
    destaques: [
      'Workflow WhatsApp com 3 branches inteligentes',
      'Branch 1: "Já sou cliente" → Assign to user',
      'Branch 2: "Quero orçamento" → Conversation AI qualifica',
      'Branch 3: "Outros assuntos" → Atendente',
      'Chatbot IA treinado para coletar dados de orçamento solar',
      'Follow-up automático + transferência para humano',
      'Tags automáticas: "cliente ativo"',
      'Notificação interna HBM para equipe',
    ],
    oQueFiz: [
      'Workflow completo de WhatsApp com roteamento inteligente',
      'Conversation AI treinada para qualificar leads de energia solar',
      'Coleta automática de informações para orçamento',
      'Sistema de follow-up com transferência para atendente',
      'Tags e notificações internas automáticas',
    ],
  },
  {
    slug: 'fisio-movimento',
    cliente: 'Fisio & Movimento',
    nicho: 'Clínica de Fisioterapia',
    local: 'Brasil',
    bandeira: '🇧🇷',
    site: '',
    servicos: ['GoHighLevel', 'Chatbot IA', 'Reputação'],
    cor: 'from-teal-500 to-teal-700',
    corBadge: 'bg-teal-100 text-teal-700',
    antes: {
      periodo: 'Antes',
      impressoes: 'Manual',
      cliques: 'Sem bot',
      posicao: 'Sem automação',
    },
    depois: {
      periodo: 'Depois',
      impressoes: 'Bot IA 24/7',
      cliques: 'Reviews automáticos',
      posicao: 'Reputação gerenciada',
    },
    crescimento: {
      impressoes: 'Atendimento 24/7',
      cliques: 'Reviews automáticos',
      posicao: 'Reputação gerenciada',
    },
    leads: 'Automação de reputação + atendimento 24/7',
    destaques: [
      'Assistente virtual IA — secretária profissional 24h',
      'Personalidade: educada, objetiva, acolhedora',
      '4 templates WhatsApp de avaliação ativos',
      'Coleta de avaliação pós-atendimento automática',
      'Feedback positivo → pedido de review no Google',
      'Feedback negativo → mensagem de recuperação',
    ],
    oQueFiz: [
      'Bot IA como Assistente Virtual (secretária profissional)',
      'Template: coleta de avaliação pós-atendimento',
      'Template: feedback médio (melhoria)',
      'Template: feedback ruim (recuperação)',
      'Template: pedido de avaliação Google (5 estrelas)',
      'Automação completa de reputação online',
    ],
  },
]

export default function CasesPage() {
  const casesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Cases de Sucesso — Calazans Lumina',
    description: 'Resultados reais de SEO, AEO, GEO e GoHighLevel para empresas nos EUA e Brasil.',
    url: 'https://calazanslumina.com.br/cases',
    provider: {
      '@type': 'Organization',
      name: 'Calazans Lumina',
      url: 'https://calazanslumina.com.br',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(casesSchema) }} />
      <Breadcrumbs items={[{ name: 'Cases de Sucesso' }]} />

      {/* HERO */}
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-mint/10" />
        <div className="container-main section-padding relative z-10">
          <ScrollReveal className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-brand-mint/20 border border-brand-mint/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-brand-mint rounded-full animate-pulse" />
              <span className="text-brand-mint text-sm font-medium">Resultados Reais — Zero Teoria</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Cases de <span className="text-brand-mint">Sucesso</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-8">
              Dados reais do Google Search Console. Leads reais no CRM. Bots funcionando 24/7.
              Sem prints editados, sem promessas vazias — só resultados.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <p className="font-serif text-3xl md:text-4xl font-bold text-brand-mint">+24.500%</p>
                <p className="text-white/40 text-sm mt-1">Impressões (RS Dev)</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl md:text-4xl font-bold text-brand-mint">+706%</p>
                <p className="text-white/40 text-sm mt-1">Cliques (Wolf&apos;s)</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl md:text-4xl font-bold text-brand-mint">24/7</p>
                <p className="text-white/40 text-sm mt-1">Chatbot IA (JH)</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl md:text-4xl font-bold text-brand-mint">100%</p>
                <p className="text-white/40 text-sm mt-1">Orgânico</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CASES */}
      {cases.map((c, idx) => (
        <section key={c.slug} id={c.slug} className={`section-padding ${idx % 2 === 0 ? 'bg-white' : 'bg-brand-bg'} scroll-mt-20`}>
          <div className="container-main max-w-5xl">
            <ScrollReveal>
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{c.bandeira}</span>
                    <span className={`${c.corBadge} text-xs font-bold px-3 py-1 rounded-full`}>{c.nicho}</span>
                    {c.servicos.map((s) => (
                      <span key={s} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full hidden md:inline">{s}</span>
                    ))}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark">{c.cliente}</h2>
                  <p className="text-brand-dark/40 text-sm mt-1">{c.local}</p>
                </div>
                {c.site && (
                  <a href={c.site} target="_blank" rel="noopener noreferrer" className="text-brand-mint text-sm font-medium hover:underline flex items-center gap-1">
                    Visitar site
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                )}
              </div>

              {/* Before/After */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6">
                  <p className="text-red-500 text-xs font-bold uppercase tracking-wider mb-3">Antes — {c.antes.periodo}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between"><span className="text-brand-dark/60 text-sm">Impressões</span><span className="text-brand-dark font-bold">{c.antes.impressoes}</span></div>
                    <div className="flex justify-between"><span className="text-brand-dark/60 text-sm">Cliques</span><span className="text-brand-dark font-bold">{c.antes.cliques}</span></div>
                    <div className="flex justify-between"><span className="text-brand-dark/60 text-sm">Posição / Status</span><span className="text-brand-dark font-bold">{c.antes.posicao}</span></div>
                  </div>
                </div>
                <div className="bg-green-50/50 border border-green-200 rounded-2xl p-6">
                  <p className="text-green-600 text-xs font-bold uppercase tracking-wider mb-3">Depois — {c.depois.periodo}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between"><span className="text-brand-dark/60 text-sm">Impressões</span><span className="text-green-700 font-bold">{c.depois.impressoes}</span></div>
                    <div className="flex justify-between"><span className="text-brand-dark/60 text-sm">Cliques</span><span className="text-green-700 font-bold">{c.depois.cliques}</span></div>
                    <div className="flex justify-between"><span className="text-brand-dark/60 text-sm">Posição / Status</span><span className="text-green-700 font-bold">{c.depois.posicao}</span></div>
                  </div>
                </div>
              </div>

              {/* Growth badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-brand-mint/10 text-brand-mint border border-brand-mint/20 rounded-full px-4 py-2 text-sm font-bold">Impressões: {c.crescimento.impressoes}</span>
                <span className="bg-brand-mint/10 text-brand-mint border border-brand-mint/20 rounded-full px-4 py-2 text-sm font-bold">Cliques: {c.crescimento.cliques}</span>
                <span className="bg-brand-mint/10 text-brand-mint border border-brand-mint/20 rounded-full px-4 py-2 text-sm font-bold">{c.crescimento.posicao}</span>
              </div>

              {/* Leads callout */}
              <div className={`bg-gradient-to-r ${c.cor} rounded-2xl p-6 text-white mb-8`}>
                <p className="text-white/70 text-xs font-bold uppercase tracking-wider mb-1">Leads Gerados</p>
                <p className="font-serif text-xl font-bold">{c.leads}</p>
              </div>

              {/* Destaques */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-dark mb-4">Resultados</h3>
                  <div className="space-y-2">
                    {c.destaques.map((d, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <p className="text-brand-dark/70 text-sm">{d}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-dark mb-4">O que foi implementado</h3>
                  <div className="space-y-2">
                    {c.oQueFiz.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-brand-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <p className="text-brand-dark/70 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {idx < cases.length - 1 && <hr className="border-gray-200" />}
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="heading-2 mb-4">Quer resultados assim para sua empresa?</h2>
            <p className="text-white/60 text-lg mb-8">
              SEO, AEO, GEO, GoHighLevel, Chatbot IA — tudo configurado e funcionando.
              100% orgânico. Resultados reais com dados do Google Search Console.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/5531982948067?text=Olá! Vi os cases no site e quero resultados assim para minha empresa" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
                Quero resultados assim
              </a>
              <Link href="/para-agencias" className="border border-white/20 text-white hover:bg-white/10 px-6 py-4 rounded-full text-base font-medium transition-colors">
                Sou agência / freelancer
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTAForm />
    </>
  )
}
