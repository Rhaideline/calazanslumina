import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const pacotes = [
  {
    nome: 'Essencial',
    preco: 'R$ 500',
    periodo: 'a partir de',
    descricao: 'Presença digital profissional para começar a ser encontrado',
    destaque: false,
    itens: [
      'Site profissional Next.js (PageSpeed 95+)',
      'Design responsivo mobile-first',
      'SEO técnico + Schema Markup',
      'Formulário integrado com CRM',
      'Google Analytics 4 configurado',
      'Hospedagem + domínio + SSL',
      'Entrega em até 7 dias úteis',
    ],
    cta: 'Solicitar Orçamento',
  },
  {
    nome: 'Profissional',
    preco: 'R$ 1.200',
    periodo: 'a partir de',
    descricao: 'Automatize seu funil de vendas e pare de perder leads',
    destaque: true,
    itens: [
      'Tudo do Essencial +',
      'Funil de vendas completo (GoHighLevel)',
      'CRM com pipeline de vendas configurado',
      'Inbox unificada: WhatsApp, SMS, Email, DMs',
      'Automações de follow-up (workflow visual)',
      'Calendário de agendamento integrado',
      'Até 5 páginas otimizadas para SEO',
      'Dashboard de métricas e conversões',
      'Formulários e pesquisas de captura',
    ],
    cta: 'Quero Automatizar',
  },
  {
    nome: 'Premium',
    preco: 'Sob consulta',
    periodo: 'personalizado',
    descricao: 'Solução completa para dominar seu mercado digital',
    destaque: false,
    itens: [
      'Tudo do Profissional +',
      'IA conversacional no WhatsApp 24h',
      'Gestão de redes sociais (conteúdo + posts)',
      'Campanhas estratégicas de marketing digital',
      'Google Business Profile otimizado',
      'Gestão de reputação e reviews',
      'Email marketing + campanhas SMS',
      'Relatórios mensais de performance',
      'Suporte prioritário + consultoria mensal',
    ],
    cta: 'Falar com Especialista',
  },
]

const ferramentasGHL = [
  { nome: 'CRM & Pipelines', desc: 'Contatos, negócios e tarefas em um só lugar' },
  { nome: 'Funis de Vendas', desc: 'Landing pages de alta conversão' },
  { nome: 'Inbox Unificada', desc: 'WhatsApp, SMS, email e DMs numa tela' },
  { nome: 'Automações', desc: 'Workflows visuais no piloto automático' },
  { nome: 'Calendário', desc: 'Agendamento com lembretes automáticos' },
  { nome: 'IA Conversacional', desc: 'Chatbot que atende e qualifica leads' },
]

export default function PricingTable() {
  return (
    <section className="section-padding bg-brand-dark text-white" id="pacotes">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">
            Investimento
          </p>
          <h2 className="heading-2 mb-4">
            Pacotes que cabem no seu <span className="text-brand-mint">bolso</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Soluções completas de marketing digital com tecnologia GoHighLevel — do site ao funil automatizado.
            Também atendemos agências como freelancer.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pacotes.map((pkg, i) => (
            <ScrollReveal key={pkg.nome} delay={i * 150}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                  pkg.destaque
                    ? 'bg-brand-mint text-white shadow-2xl shadow-brand-mint/20 scale-[1.02]'
                    : 'bg-white/5 border border-white/10 hover:border-brand-mint/30'
                }`}
              >
                {pkg.destaque && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-brand-mint text-xs font-bold px-4 py-1.5 rounded-full">
                    Mais Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-serif text-xl font-bold mb-1">{pkg.nome}</h3>
                  <p className={`text-sm mb-4 ${pkg.destaque ? 'text-white/70' : 'text-white/40'}`}>
                    {pkg.descricao}
                  </p>
                  <p className={`text-xs uppercase tracking-wider ${pkg.destaque ? 'text-white/50' : 'text-white/30'}`}>
                    {pkg.periodo}
                  </p>
                  <p className="font-serif text-4xl font-bold mt-1">{pkg.preco}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.itens.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.destaque ? 'text-white' : 'text-brand-mint'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={pkg.destaque ? '' : 'text-white/70'}>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`https://wa.me/5531982948067?text=${encodeURIComponent(`Olá! Tenho interesse no pacote ${pkg.nome} da Calazans Lumina`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center font-bold py-4 rounded-full transition-all duration-300 hover:scale-105 block ${
                    pkg.destaque
                      ? 'bg-white text-brand-mint hover:bg-white/90'
                      : 'bg-brand-mint text-white hover:bg-brand-light'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* GHL Tools Strip */}
        <ScrollReveal className="mt-16">
          <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-6">Ferramentas incluídas via GoHighLevel</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {ferramentasGHL.map((tool) => (
              <div key={tool.nome} className="text-center bg-white/5 rounded-xl p-4 border border-white/5 hover:border-brand-mint/20 transition-colors">
                <p className="text-brand-mint font-bold text-sm mb-1">{tool.nome}</p>
                <p className="text-white/40 text-xs leading-snug">{tool.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="text-center mt-12">
          <p className="text-white/40 text-sm">
            Freelancer para agências? <a href="https://wa.me/5531982948067?text=Olá, sou de uma agência e quero saber sobre parceria freelancer" target="_blank" rel="noopener noreferrer" className="text-brand-mint hover:underline font-medium">Entre em contato para parceria</a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
