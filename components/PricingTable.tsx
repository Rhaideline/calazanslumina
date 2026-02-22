import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const pacotes = [
  {
    nome: 'Essencial',
    preco: 'R$ 500',
    periodo: 'a partir de',
    descricao: 'Ideal para quem precisa de presença digital profissional',
    destaque: false,
    itens: [
      'Site profissional Next.js',
      'Design responsivo (mobile-first)',
      'SEO técnico básico',
      'Formulário de contato integrado',
      'Hospedagem + domínio configurado',
      'Entrega em até 7 dias',
    ],
    cta: 'Solicitar Orçamento',
  },
  {
    nome: 'Profissional',
    preco: 'R$ 1.200',
    periodo: 'a partir de',
    descricao: 'Para quem quer automatizar e escalar vendas',
    destaque: true,
    itens: [
      'Tudo do Essencial +',
      'Funil de vendas no GoHighLevel',
      'Automação de WhatsApp + Email',
      'CRM configurado com pipeline',
      'Até 5 páginas otimizadas',
      'Follow-up automático de leads',
      'Dashboard de métricas',
    ],
    cta: 'Quero Automatizar',
  },
  {
    nome: 'Premium',
    preco: 'Sob consulta',
    periodo: 'personalizado',
    descricao: 'Solução completa para dominar seu mercado',
    destaque: false,
    itens: [
      'Tudo do Profissional +',
      'IA conversacional no WhatsApp 24h',
      'Gestão de redes sociais',
      'Tráfego pago (Google + Meta)',
      'Google Business Profile otimizado',
      'Relatórios mensais de performance',
      'Suporte prioritário',
    ],
    cta: 'Falar com Especialista',
  },
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
            Soluções para todo tamanho de negócio. Também atendemos agências como freelancer.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pacotes.map((pkg, i) => (
            <ScrollReveal key={pkg.nome} delay={i * 150}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                  pkg.destaque
                    ? 'bg-brand-mint text-brand-dark shadow-2xl shadow-brand-mint/20 scale-[1.02]'
                    : 'bg-white/5 border border-white/10 hover:border-brand-mint/30'
                }`}
              >
                {pkg.destaque && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-dark text-brand-mint text-xs font-bold px-4 py-1.5 rounded-full">
                    Mais Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-serif text-xl font-bold mb-1">{pkg.nome}</h3>
                  <p className={`text-sm mb-4 ${pkg.destaque ? 'text-brand-dark/60' : 'text-white/40'}`}>
                    {pkg.descricao}
                  </p>
                  <p className={`text-xs uppercase tracking-wider ${pkg.destaque ? 'text-brand-dark/50' : 'text-white/30'}`}>
                    {pkg.periodo}
                  </p>
                  <p className="font-serif text-4xl font-bold mt-1">{pkg.preco}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.itens.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.destaque ? 'text-brand-dark' : 'text-brand-mint'}`}
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
                      ? 'bg-brand-dark text-brand-mint hover:bg-brand-dark/90'
                      : 'bg-brand-mint text-brand-dark hover:bg-brand-light'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <p className="text-white/40 text-sm">
            Freelancer para agências? <a href="https://wa.me/5531982948067?text=Olá, sou de uma agência e quero saber sobre parceria freelancer" target="_blank" rel="noopener noreferrer" className="text-brand-mint hover:underline font-medium">Entre em contato para parceria</a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
