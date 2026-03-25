import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const pacotes = [
  {
    nome: 'Site Básico',
    preco: 'R$ 500',
    periodo: 'a partir de',
    descricao: 'Sua presença digital profissional para começar a ser encontrado online',
    destaque: false,
    itens: [
      'Site profissional de 2 páginas (principal + obrigado)',
      'Design moderno e responsivo para celular',
      'Formulário de contato integrado',
      'Hospedagem + domínio + SSL incluso',
      'PageSpeed acima de 80',
      'Entrega em até 7 dias úteis',
    ],
    cta: 'Solicitar Orçamento',
  },
  {
    nome: 'Site + SEO',
    preco: null,
    periodo: '',
    descricao: 'Site completo com SEO para aparecer no Google e atrair clientes',
    destaque: true,
    itens: [
      'Tudo do Site Básico +',
      'Múltiplas páginas (serviços, blog, cidades)',
      'SEO completo (técnico, local e on-page)',
      'Blog com artigos otimizados para Google',
      'Google Business Profile configurado',
      'Integração com Google Analytics',
      'Páginas otimizadas por cidade e serviço',
      'Ranking real no Google comprovado',
    ],
    cta: 'Solicitar Orçamento',
  },
  {
    nome: 'Solução Completa',
    preco: null,
    periodo: '',
    descricao: 'Site + SEO + automação + IA — tudo que seu negócio precisa para vender mais',
    destaque: false,
    itens: [
      'Tudo do Site + SEO +',
      'Funil de vendas completo (GoHighLevel)',
      'CRM com pipeline de vendas configurado',
      'IA conversacional no WhatsApp 24h',
      'Automações de follow-up automático',
      'Gestão de redes sociais (conteúdo + posts)',
      'Gestão de reputação e avaliações',
      'Relatórios mensais de performance',
      'Suporte prioritário + consultoria',
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

const pricingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AggregateOffer',
  '@id': 'https://calazanslumina.com.br/#pricing',
  lowPrice: '500',
  highPrice: '5000',
  priceCurrency: 'BRL',
  offerCount: 3,
  offers: [
    {
      '@type': 'Offer',
      name: 'Site Básico',
      price: '500',
      priceCurrency: 'BRL',
      description: 'Site profissional de 2 páginas com design responsivo e formulário integrado',
    },
    {
      '@type': 'Offer',
      name: 'Site + SEO',
      description: 'Site completo com SEO técnico, blog, Google Business Profile e páginas por cidade',
    },
    {
      '@type': 'Offer',
      name: 'Solução Completa',
      description: 'Site + SEO + funil GoHighLevel + CRM + IA no WhatsApp + gestão de redes sociais',
    },
  ],
}

export default function PricingTable() {
  return (
    <section className="section-padding bg-brand-dark text-white" id="pacotes">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">
            Investimento
          </p>
          <h2 className="heading-2 mb-4">
            Pacotes que cabem no seu <span className="text-brand-mint">bolso</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Soluções completas de marketing digital — do site simples ao funil automatizado com IA.
            Também atendemos agências como freelancer.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pacotes.map((pkg, i) => (
            <ScrollReveal key={pkg.nome} delay={i * 150}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                  pkg.destaque
                    ? 'bg-brand-mint text-white shadow-2xl shadow-black/20 scale-[1.02]'
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
                  {pkg.preco ? (
                    <>
                      <p className={`text-xs uppercase tracking-wider ${pkg.destaque ? 'text-white/50' : 'text-white/30'}`}>
                        {pkg.periodo}
                      </p>
                      <p className="font-serif text-4xl font-bold mt-1">{pkg.preco}</p>
                    </>
                  ) : (
                    <p className="font-serif text-3xl font-bold mt-4">Sob consulta</p>
                  )}
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
