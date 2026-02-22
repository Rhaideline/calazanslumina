import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { servicos, getServicoBySlug } from '@/data/servicos'
import { cidadesMA, getCidadeMABySlug } from '@/data/cidades-ma'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'
import ReviewsWidget from '@/components/ReviewsWidget'
import ConstellationBg from '@/components/ConstellationBg'

export async function generateStaticParams() {
  return cidadesMA.flatMap((cidade) =>
    servicos.map((servico) => ({
      cidade: cidade.slug,
      servico: servico.slug,
    }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cidade: string; servico: string }>
}): Promise<Metadata> {
  const { cidade: cidadeSlug, servico: servicoSlug } = await params
  const cidade = getCidadeMABySlug(cidadeSlug)
  const servico = getServicoBySlug(servicoSlug)
  if (!cidade || !servico) return {}

  return {
    title: `${servico.nome} para Brasileiros em ${cidade.nome}, MA`,
    description: `${servico.descricaoCurta} para empreendedores brasileiros em ${cidade.nome}, MA. Atendimento em português, resultados reais. Fale agora pelo WhatsApp.`,
    openGraph: {
      title: `${servico.nome} em ${cidade.nome}, MA | Calazans Lumina`,
      description: `${servico.descricaoCurta} em ${cidade.nome}, Massachusetts. Atendimento em português.`,
    },
  }
}

export default async function CidadeServicoPage({
  params,
}: {
  params: Promise<{ cidade: string; servico: string }>
}) {
  const { cidade: cidadeSlug, servico: servicoSlug } = await params
  const cidade = getCidadeMABySlug(cidadeSlug)
  const servico = getServicoBySlug(servicoSlug)
  if (!cidade || !servico) notFound()

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
                href={`/cidades/${cidade.slug}`}
                className="text-white/40 hover:text-white/60 text-sm transition-colors"
              >
                {cidade.nome}, MA
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-brand-mint text-sm">{servico.nome}</span>
            </div>
            <span className="text-6xl mb-6 block">{servico.icone}</span>
            <h1 className="heading-1 mb-6 max-w-4xl">
              {servico.nome} para Brasileiros em{' '}
              <span className="gradient-text">{cidade.nome}, MA</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mb-4">
              {servico.descricaoLonga} Em {cidade.nome}, Massachusetts, entendemos os desafios
              únicos de empreendedores brasileiros que precisam competir no mercado americano
              sem perder a conexão com a comunidade brasileira local.
            </p>
            <p className="text-white/50 text-base mb-8 max-w-3xl">
              {cidade.referencia}. {cidade.doresEspecificas}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/5531982948067?text=${encodeURIComponent(`Olá, sou de ${cidade.nome}, MA e tenho interesse em ${servico.nome}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {servico.cta} em {cidade.nome}
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
              Problemas comuns em {cidade.nome} que resolvemos
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
              Como funciona nosso serviço de {servico.nome} em{' '}
              <span className="gradient-text">{cidade.nome}</span>
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

      {/* Outros Serviços na Cidade */}
      <section className="section-padding bg-brand-dark">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 mb-4">
              Outros serviços em {cidade.nome}, MA
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outrosServicos.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 80}>
                <Link
                  href={`/cidades/${cidade.slug}/${s.slug}`}
                  className="card-premium block group"
                >
                  <span className="text-2xl mb-2 block">{s.icone}</span>
                  <h3 className="font-bold group-hover:text-brand-mint transition-colors text-sm">
                    {s.nome} em {cidade.nome}
                  </h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAForm cidade={cidade.nome} servico={servico.nome} />
    </>
  )
}
