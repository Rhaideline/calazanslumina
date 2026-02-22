import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { servicos } from '@/data/servicos'
import { capitaisBR, getCapitalBRBySlug } from '@/data/capitais-br'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'
import ReviewsWidget from '@/components/ReviewsWidget'
import HeroForm from '@/components/HeroForm'
import HeroBadges from '@/components/HeroBadges'
import Breadcrumb from '@/components/Breadcrumb'
import PricingTable from '@/components/PricingTable'
import ServiceIcon from '@/components/ServiceIcon'

export async function generateStaticParams() {
  return capitaisBR.map((c) => ({ capital: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ capital: string }> }): Promise<Metadata> {
  const { capital: capitalSlug } = await params
  const capital = getCapitalBRBySlug(capitalSlug)
  if (!capital) return {}
  return {
    title: `Agência de Marketing Digital em ${capital.nome}`,
    description: `Sites Next.js, funis de vendas, CRM com IA, redes sociais e Google Meu Negócio para negócios em ${capital.nome}. Calazans Lumina.`,
  }
}

export default async function CapitalPage({ params }: { params: Promise<{ capital: string }> }) {
  const { capital: capitalSlug } = await params
  const capital = getCapitalBRBySlug(capitalSlug)
  if (!capital) notFound()

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center">
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67d74aa28b2801643ac3f117.jpeg"
          alt={`Marketing Digital em ${capital.nome} — Calazans Lumina`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/85" />

        <div className="container-main section-padding relative z-10 text-white">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <Breadcrumb items={[
                { label: 'Home', href: '/' },
                { label: 'Brasil' },
                { label: `${capital.nome}, ${capital.siglaEstado}` },
              ]} />

              <HeroBadges cidade={`${capital.nome}, ${capital.siglaEstado}`} />

              <h1 className="heading-1 mb-6">
                Agência de Marketing Digital em{' '}
                <span className="text-brand-mint">{capital.nome}</span>
              </h1>

              <p className="text-white/70 text-lg leading-relaxed mb-4 max-w-2xl">
                {capital.descricao}. Entregamos soluções completas de marketing digital para
                negócios em {capital.nome}: sites de alta performance, funis automatizados,
                CRM com IA e Google Meu Negócio otimizado.
              </p>
              <p className="text-white/50 text-base mb-8 max-w-2xl">{capital.doresEspecificas}.</p>

              <a
                href={`https://wa.me/5531982948067?text=${encodeURIComponent(`Olá, sou de ${capital.nome} e quero saber mais sobre os serviços da Calazans Lumina`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Fale comigo — sou de {capital.nome}
              </a>
            </div>
            <div className="lg:col-span-2">
              <HeroForm titulo={`Orçamento Gratuito em ${capital.nome}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Dores */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Desafios de empreendedores em {capital.nome}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              `Alta concorrência digital em ${capital.nome} — CPL cada vez mais caro`,
              'Sites antigos sem mobile, sem velocidade e sem SEO',
              'Perder leads no WhatsApp por falta de automação',
              'Campanhas sem estrutura — dinheiro jogado fora',
              'Instagram com seguidores que não compram',
              `Google Meu Negócio nunca configurado corretamente em ${capital.nome}`,
            ].map((dor, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-red-400/50 h-full">
                  <p className="text-brand-dark/70 text-sm">{dor}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Nossos serviços em <span className="text-brand-mint">{capital.nome}</span></h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico, i) => (
              <ScrollReveal key={servico.slug} delay={i * 100}>
                <Link href={`/brasil/${capital.slug}/${servico.slug}`} className="card-premium block h-full group">
                  <ServiceIcon name={servico.icone} className="w-8 h-8 text-brand-mint mb-3" />
                  <h3 className="text-lg font-bold mb-2 group-hover:text-brand-mint transition-colors">{servico.nome}</h3>
                  <p className="text-brand-dark/70 text-sm mb-4">{servico.descricaoCurta}</p>
                  <span className="text-brand-mint text-sm font-medium">{servico.cta} em {capital.nome} →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <PricingTable />
      <ReviewsWidget />
      <CTAForm cidade={capital.nome} />
    </>
  )
}
