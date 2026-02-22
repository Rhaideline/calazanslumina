import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { servicos } from '@/data/servicos'
import { cidadesMA, getCidadeMABySlug } from '@/data/cidades-ma'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'
import ReviewsWidget from '@/components/ReviewsWidget'
import ConstellationBg from '@/components/ConstellationBg'

export async function generateStaticParams() {
  return cidadesMA.map((c) => ({ cidade: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cidade: string }>
}): Promise<Metadata> {
  const { cidade: cidadeSlug } = await params
  const cidade = getCidadeMABySlug(cidadeSlug)
  if (!cidade) return {}
  return {
    title: `Marketing Digital para Brasileiros em ${cidade.nome}, MA`,
    description: `Sites, funis GHL, redes sociais e Google Maps para empreendedores brasileiros em ${cidade.nome}, MA. Atendimento em português. Fale agora pelo WhatsApp.`,
    openGraph: {
      title: `Marketing Digital em ${cidade.nome}, MA | Calazans Lumina`,
      description: `Soluções completas de marketing digital para brasileiros em ${cidade.nome}, Massachusetts. Atendimento em português.`,
    },
  }
}

export default async function CidadePage({
  params,
}: {
  params: Promise<{ cidade: string }>
}) {
  const { cidade: cidadeSlug } = await params
  const cidade = getCidadeMABySlug(cidadeSlug)
  if (!cidade) notFound()

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-brand-dark relative overflow-hidden">
        <ConstellationBg />
        <div className="container-main relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-brand-mint/10 border border-brand-mint/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm">🇺🇸</span>
              <span className="text-brand-mint text-sm font-medium">
                {cidade.nome}, Massachusetts
              </span>
            </div>
            <h1 className="heading-1 mb-6 max-w-4xl">
              Marketing Digital para Brasileiros em{' '}
              <span className="gradient-text">{cidade.nome}, MA</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mb-4">
              Você é empreendedor brasileiro em {cidade.nome} e sente que seu negócio poderia
              estar crescendo mais? Com a Calazans Lumina, sua marca ganha presença digital
              profissional — sites de alta performance, funis automatizados, CRM com IA e
              posicionamento no Google Maps — tudo em português, pensado para a realidade
              de quem empreende em Massachusetts.
            </p>
            <p className="text-white/50 text-base mb-8 max-w-3xl">
              {cidade.comunidade}. {cidade.doresEspecificas}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/5531982948067?text=${encodeURIComponent(`Olá, sou de ${cidade.nome}, MA e quero saber mais sobre os serviços da Calazans Lumina`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Fale comigo — sou de {cidade.nome}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Dores locais */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">
              Desafios de empreendedores brasileiros em {cidade.nome}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              `Concorrer com empresas americanas estabelecidas em ${cidade.nome}`,
              `Não ser encontrado no Google quando alguém pesquisa serviços em ${cidade.nome}`,
              'Leads chegando pelo boca a boca, mas sem sistema para escalar',
              'Falta de presença digital profissional para atender americanos e brasileiros',
              `Google Meu Negócio incompleto perdendo clientes em ${cidade.nome}`,
              'Instagram sem estratégia, sem engajamento e sem conversão',
            ].map((dor, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-red-400/50">
                  <p className="text-brand-dark/70 text-sm">{dor}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços para a cidade */}
      <section className="section-padding bg-brand-dark">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 mb-4">
              Nossos serviços em{' '}
              <span className="gradient-text">{cidade.nome}, MA</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Soluções completas de marketing digital para seu negócio em {cidade.nome}.
              Tudo integrado, tudo mensurável, tudo em português.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico, i) => (
              <ScrollReveal key={servico.slug} delay={i * 100}>
                <Link
                  href={`/cidades/${cidade.slug}/${servico.slug}`}
                  className="card-premium block h-full group"
                >
                  <span className="text-3xl mb-3 block">{servico.icone}</span>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-brand-mint transition-colors">
                    {servico.nome}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">{servico.descricaoCurta}</p>
                  <span className="text-brand-mint text-sm font-medium">
                    {servico.cta} em {cidade.nome} →
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsWidget />

      {/* Por que Calazans Lumina */}
      <section className="section-padding bg-brand-dark">
        <div className="container-main max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="heading-2 mb-6">
              Por que brasileiros em {cidade.nome} escolhem a Calazans Lumina?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                { t: 'Atendimento 100% em português', d: `Entendemos sua realidade como empreendedor brasileiro em ${cidade.nome}. Sem barreira de idioma, sem ruído na comunicação.` },
                { t: 'Especialista em Google Maps local', d: `Colocamos seu negócio no topo das buscas locais em ${cidade.nome}, MA — onde seus clientes estão pesquisando agora.` },
                { t: 'Automação que funciona 24h', d: 'Robô de IA no WhatsApp, funis de vendas e CRM automatizado. Seu negócio capta leads enquanto você dorme.' },
                { t: '8+ anos de experiência real', d: 'Não é teoria. Rhaideline empreendeu, errou, aprendeu e hoje transforma negócios com resultados mensuráveis.' },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="card-premium h-full">
                    <h3 className="font-bold text-brand-mint mb-2">{item.t}</h3>
                    <p className="text-white/60 text-sm">{item.d}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <CTAForm cidade={cidade.nome} />
    </>
  )
}
