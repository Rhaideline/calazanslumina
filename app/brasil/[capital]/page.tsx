import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { servicos } from '@/data/servicos'
import { capitaisBR, getCapitalBRBySlug } from '@/data/capitais-br'
import { cidadesBrasil, getCidadeBRBySlug } from '@/data/cidades-brasil'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'
import ReviewsWidget from '@/components/ReviewsWidget'
import HeroForm from '@/components/HeroForm'
import HeroBadges from '@/components/HeroBadges'
import Breadcrumb from '@/components/Breadcrumb'
import PricingTable from '@/components/PricingTable'
import ServiceIcon from '@/components/ServiceIcon'
import CoursesSection from '@/components/CoursesSection'
import CtaLocalBR from '@/components/CtaLocalBR'

export async function generateStaticParams() {
  const allCidades = [...capitaisBR, ...cidadesBrasil]
  return allCidades.map((c) => ({ capital: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ capital: string }> }): Promise<Metadata> {
  const { capital: capitalSlug } = await params
  const capital = getCapitalBRBySlug(capitalSlug) || getCidadeBRBySlug(capitalSlug)
  if (!capital) return {}
  return {
    title: { absolute: `Marketing Digital em ${capital.nome}, ${capital.siglaEstado}` },
    description: `Marketing digital em ${capital.nome}, ${capital.siglaEstado}. Sites com PageSpeed 95+, funis que respondem o lead na hora, CRM com IA no WhatsApp e Google Meu Negócio. Orçamento gratuito →`,
    alternates: { canonical: `https://calazanslumina.com.br/brasil/${capitalSlug}` },
    openGraph: {
      title: `Marketing Digital em ${capital.nome} | Calazans Lumina`,
      description: `Sites, funis GHL, CRM com IA e Google Maps para negócios em ${capital.nome}.`,
      url: `https://calazanslumina.com.br/brasil/${capitalSlug}`,
      type: 'website',
    },
  }
}

export default async function CapitalPage({ params }: { params: Promise<{ capital: string }> }) {
  const { capital: capitalSlug } = await params
  const capital = getCapitalBRBySlug(capitalSlug) || getCidadeBRBySlug(capitalSlug)
  if (!capital) notFound()

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Calazans Lumina — Marketing Digital em ${capital.nome}, ${capital.siglaEstado}`,
    description: `Agencia de marketing digital em ${capital.nome}, ${capital.siglaEstado}. Sites profissionais, funis GoHighLevel, CRM com IA no WhatsApp e Google Meu Negócio.`,
    url: `https://calazanslumina.com.br/brasil/${capitalSlug}`,
    telephone: '+55-31-98294-8067',
    email: 'calazanslumina@gmail.com',
    address: { '@type': 'PostalAddress', addressLocality: capital.nome, addressRegion: capital.siglaEstado, addressCountry: 'BR' },
    areaServed: { '@type': 'City', name: capital.nome },
    serviceType: ['Marketing Digital', 'Criacao de Sites', 'SEO', 'Google Meu Negócio', 'GoHighLevel CRM', 'Gestao de Redes Sociais'],
    availableLanguage: ['Portuguese'],
    priceRange: '$$',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `Qual a melhor agencia de marketing digital em ${capital.nome}?`, acceptedAnswer: { '@type': 'Answer', text: `A Calazans Lumina oferece servicos completos de marketing digital em ${capital.nome}, ${capital.siglaEstado}: sites profissionais com PageSpeed 95+, funis GoHighLevel, CRM com IA no WhatsApp, Google Meu Negócio e gestao de redes sociais. Mais de 100 projetos entregues.` } },
      { '@type': 'Question', name: `Quanto custa criar um site profissional em ${capital.nome}?`, acceptedAnswer: { '@type': 'Answer', text: `Sites profissionais para empresas em ${capital.nome} com precos acessiveis. Inclui design premium, SEO tecnico, PageSpeed 95+, versao mobile e integracao com Google Meu Negócio. Solicite um orcamento gratuito.` } },
      { '@type': 'Question', name: `A Calazans Lumina atende empresas em ${capital.nome}, ${capital.siglaEstado}?`, acceptedAnswer: { '@type': 'Answer', text: `Sim! Atendemos empresas de todos os segmentos em ${capital.nome}: clinicas, energia solar, construction, pintura, servicos em geral. Atendimento remoto com resultados comprovados em mais de 200 cidades brasileiras.` } },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
              {/* ⚠️ `doresEspecificas` saiu do hero: ele aparecia AQUI e de novo
                  em <CtaLocalBR>, na mesma pagina. O dado unico da cidade e
                  escasso (cerca de 90 palavras por cidade entre descricao,
                  dores e referencia) — gasta-lo duas vezes e desperdicio. */}

              <a
                href={`https://wa.me/5531982948067?text=${encodeURIComponent(`Olá, moro em ${capital.nome} e quero saber mais sobre os serviços da Calazans Lumina`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Atendo em {capital.nome} — Fale Comigo
              </a>
            </div>
            <div className="lg:col-span-2">
              <HeroForm titulo={`Orçamento Gratuito em ${capital.nome}`} />
            </div>
          </div>
        </div>
      </section>

      {/* ⚠️ O bloco "Desafios de empreendedores" saiu daqui.
          Eram seis frases genericas, iguais nas 209 cidades (54 palavras, 76%
          de semelhanca entre irmas), e das seis so duas citavam a cidade.
          A dor real desta cidade — escrita pela pesquisa, uma por uma — ja
          aparece em <CtaLocalBR>, que le `doresEspecificas` do dado. Manter as
          duas era repetir generico e especifico na mesma pagina. */}

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
                  {/* ⚠️ AQUI NAO ENTRA DESCRICAO DE SERVICO, E ISSO E DELIBERADO.
                      Primeiro havia `servico.descricaoCurta`: a mesma frase nas
                      209 cidades, 80% de semelhanca entre irmas. Troquei por uma
                      frase que citava a cidade — e nao adiantou quase nada
                      (76%), porque texto que muda SO O NOME PROPRIO nao e texto
                      diferente: o trigrama continua identico.
                      A pagina de cidade fala da CIDADE e LINKA o servico. Quem
                      descreve o servico e a pagina do servico. */}
                  <span className="text-brand-mint text-sm font-medium">{servico.cta} em {capital.nome} →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ⚠️ Aqui ficavam PricingTable (268 palavras), CoursesSection (224) e
          ReviewsWidget (337): 829 palavras IDENTICAS nas 209 cidades. Era 72%
          da pagina repetida, e o Google respondia "Rastreada, mas nao
          indexada". Ver components/CtaLocalBR.tsx. */}
      <CtaLocalBR cidade={capital} />

      {/* Cross-Links */}
      {/* O bloco "Servicos Disponiveis" saiu: 35 palavras 100% identicas
          nas 209 cidades, e redundante — a secao acima ja lista os mesmos
          cinco servicos, com link. */}

      <CTAForm cidade={capital.nome} />
    </>
  )
}
