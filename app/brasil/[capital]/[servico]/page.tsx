import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { servicos, getServicoBySlug } from '@/data/servicos'
import { capitaisBR, getCapitalBRBySlug } from '@/data/capitais-br'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'
import ReviewsWidget from '@/components/ReviewsWidget'
import ConstellationBg from '@/components/ConstellationBg'

export async function generateStaticParams() {
  return capitaisBR.flatMap((capital) =>
    servicos.map((servico) => ({
      capital: capital.slug,
      servico: servico.slug,
    }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ capital: string; servico: string }>
}): Promise<Metadata> {
  const { capital: capitalSlug, servico: servicoSlug } = await params
  const capital = getCapitalBRBySlug(capitalSlug)
  const servico = getServicoBySlug(servicoSlug)
  if (!capital || !servico) return {}

  const titleMap: Record<string, string> = {
    'sites-landing-pages': `Sites Profissionais em ${capital.nome} | Criação de Sites`,
    'funis-automacao-ghl': `Funis de Vendas em ${capital.nome} | Automação GHL`,
    'crm-ia-whatsapp': `CRM com IA em ${capital.nome} | WhatsApp Automatizado`,
    'trafego-pago-performance': `Tráfego Pago em ${capital.nome} | Google e Meta Ads`,
    'gestao-redes-sociais': `Gestão de Redes Sociais em ${capital.nome} | Instagram e Facebook`,
    'google-meu-negocio': `Google Meu Negócio em ${capital.nome} | Criação e Otimização`,
  }

  return {
    title: titleMap[servico.slug] || `${servico.nome} em ${capital.nome}`,
    description: `${servico.descricaoCurta} para negócios em ${capital.nome}, ${capital.siglaEstado}. Resultados reais e mensuráveis. Fale agora pelo WhatsApp. Calazans Lumina.`,
    openGraph: {
      title: `${servico.nome} em ${capital.nome} | Calazans Lumina`,
      description: `${servico.descricaoCurta} em ${capital.nome}.`,
    },
  }
}

export default async function CapitalServicoPage({
  params,
}: {
  params: Promise<{ capital: string; servico: string }>
}) {
  const { capital: capitalSlug, servico: servicoSlug } = await params
  const capital = getCapitalBRBySlug(capitalSlug)
  const servico = getServicoBySlug(servicoSlug)
  if (!capital || !servico) notFound()

  const outrosServicos = servicos.filter((s) => s.slug !== servicoSlug)

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-brand-dark relative overflow-hidden">
        <ConstellationBg />
        <div className="container-main relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-6">
              <Link
                href={`/brasil/${capital.slug}`}
                className="text-white/40 hover:text-white/60 text-sm transition-colors"
              >
                {capital.nome}, {capital.siglaEstado}
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-brand-mint text-sm">{servico.nome}</span>
            </div>
            <span className="text-6xl mb-6 block">{servico.icone}</span>
            <h1 className="heading-1 mb-6 max-w-4xl">
              {servico.nome} em{' '}
              <span className="gradient-text">{capital.nome}</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mb-4">
              {servico.descricaoLonga} Em {capital.nome}, o mercado digital é competitivo e exige
              estratégias profissionais para se destacar. A Calazans Lumina entrega resultados
              mensuráveis com tecnologia de ponta e atendimento personalizado.
            </p>
            <p className="text-white/50 text-base mb-8 max-w-3xl">
              {capital.referencia}. {capital.doresEspecificas}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/5531982948067?text=${encodeURIComponent(`Olá, sou de ${capital.nome} e tenho interesse em ${servico.nome}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {servico.cta} em {capital.nome}
              </a>
              <Link href={`/servicos/${servico.slug}`} className="btn-secondary">
                Saiba mais sobre {servico.nome}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Dores */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">
              Problemas que resolvemos em {capital.nome}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {servico.dores.map((dor, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-red-400/50">
                  <p className="text-brand-dark/70 text-sm">{dor}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="section-padding bg-brand-dark">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 mb-4">
              Como funciona em{' '}
              <span className="gradient-text">{capital.nome}</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              {servico.solucao}
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {servico.diferenciais.map((d, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-premium flex items-start gap-4">
                  <svg className="w-6 h-6 text-brand-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-sm">{d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsWidget />

      {/* Outros Serviços */}
      <section className="section-padding bg-brand-dark">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 mb-4">
              Outros serviços em {capital.nome}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outrosServicos.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 80}>
                <Link
                  href={`/brasil/${capital.slug}/${s.slug}`}
                  className="card-premium block group"
                >
                  <span className="text-2xl mb-2 block">{s.icone}</span>
                  <h3 className="font-bold group-hover:text-brand-mint transition-colors text-sm">
                    {s.nome} em {capital.nome}
                  </h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAForm cidade={capital.nome} servico={servico.nome} />
    </>
  )
}
