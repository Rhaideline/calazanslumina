import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'
import { capitaisBR, getCapitalBRBySlug } from '@/data/capitais-br'
import { cidadesBrasil, getCidadeBRBySlug } from '@/data/cidades-brasil'

const BASE = 'https://calazanslumina.com.br'

const allCidades = [...capitaisBR, ...cidadesBrasil]

export async function generateStaticParams() {
  return allCidades.map((c) => ({ cidade: c.slug }))
}

type Props = { params: Promise<{ cidade: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cidade: slug } = await params
  const cidade = getCapitalBRBySlug(slug) || getCidadeBRBySlug(slug)
  if (!cidade) return {}

  const title = `Enxoval de Bebe em ${cidade.nome}, ${cidade.siglaEstado} — Checklist Completo 2026 + PDF Gratis`
  const description = `Lista completa de enxoval de bebe para mamaes em ${cidade.nome}, ${cidade.siglaEstado}. Checklist com quantidades, roupinhas 100% algodao, berco, fraldas, higiene e passeio. Baixe o PDF gratis com dicas de especialistas e melhores precos na Shopee.`

  return {
    title,
    description,
    keywords: [
      `enxoval de bebe ${cidade.nome}`, `enxoval de bebe em ${cidade.nome}`,
      `lista enxoval bebe ${cidade.nome}`, `enxoval recem nascido ${cidade.nome}`,
      `loja de bebe ${cidade.nome}`, `roupinha de bebe ${cidade.nome}`,
      `enxoval de bebe ${cidade.siglaEstado}`, 'checklist enxoval bebe 2026',
      'enxoval de bebe completo', 'roupinha 100% algodao bebe',
      'berco portatil', 'mamadeira anti colica', 'bebe conforto INMETRO',
      `enxoval barato ${cidade.nome}`, `produtos para bebe ${cidade.nome}`,
    ],
    alternates: { canonical: `${BASE}/enxoval-de-bebe/${slug}` },
    openGraph: {
      title: `Enxoval de Bebe em ${cidade.nome} — Checklist 2026 + PDF`,
      description: `Guia completo de enxoval de bebe para ${cidade.nome}, ${cidade.siglaEstado}. ${cidade.populacao}. Checklist, dicas e melhores precos.`,
      url: `${BASE}/enxoval-de-bebe/${slug}`,
      type: 'website',
      siteName: 'Calazans Lumina',
      locale: 'pt_BR',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Enxoval de Bebe em ${cidade.nome} — Checklist + PDF`,
      description: `Lista completa de enxoval de bebe em ${cidade.nome}. Roupinhas 100% algodao, berco, fraldas e passeio.`,
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large' as const,
      'max-video-preview': -1,
    },
  }
}

function getDorEnxoval(cidade: { nome: string; siglaEstado: string; populacao: string; descricao: string; doresEspecificas: string }) {
  const dores: Record<string, { titulo: string; problema: string; solucao: string }> = {
    SP: {
      titulo: `Enxoval de Bebe em ${cidade.nome}: Onde Comprar com Economia`,
      problema: `Em ${cidade.nome}, com ${cidade.populacao}, o custo de vida elevado torna o enxoval de bebe um desafio financeiro. Lojas fisicas cobram precos altos, e a correria do dia a dia dificulta pesquisar e comparar precos em diferentes estabelecimentos.`,
      solucao: `Nosso guia reune os melhores produtos com precos ate 58% mais baratos que lojas fisicas. Mamaes em ${cidade.nome} podem montar o enxoval completo online, com entrega em casa, economizando tempo e dinheiro.`,
    },
    MG: {
      titulo: `Enxoval de Bebe em ${cidade.nome}: Guia para Mamaes Mineiras`,
      problema: `Em ${cidade.nome}, ${cidade.siglaEstado}, com ${cidade.populacao}, muitas gestantes enfrentam dificuldade para encontrar variedade de produtos para bebe, especialmente roupinhas 100% algodao e marcas especificas como MAM e Burigotto. As opcoes locais sao limitadas e os precos mais altos que nas capitais.`,
      solucao: `Com nosso checklist completo, mamaes em ${cidade.nome} tem acesso aos mesmos produtos das grandes capitais, com precos de Shopee e entrega em todo o Brasil. Economize ate 58% comparado com lojas fisicas da regiao.`,
    },
    RJ: {
      titulo: `Enxoval de Bebe em ${cidade.nome}: Lista Completa com Precos`,
      problema: `O calor do Rio torna essencial escolher roupinhas leves e 100% algodao para o bebe. Em ${cidade.nome}, com ${cidade.populacao}, o custo de vida alto e as lojas de bebe com precos elevados complicam o orcamento das futuras mamaes.`,
      solucao: `Nosso guia prioriza pecas leves e respiraveias, perfeitas para o clima carioca. Com precos de Shopee, mamaes em ${cidade.nome} economizam significativamente no enxoval sem abrir mao da qualidade.`,
    },
    RS: {
      titulo: `Enxoval de Bebe em ${cidade.nome}: Preparando para o Frio Gaucho`,
      problema: `O inverno rigido no Sul exige enxoval reforçado: macacoes de moletom, mantas grossas e roupinhas de frio que custam mais caro. Em ${cidade.nome}, com ${cidade.populacao}, encontrar boas opcoes com preco justo e um desafio constante para gestantes.`,
      solucao: `Selecionamos pecas de inverno como moletom peluciado, macacoes e mantas de qualidade com precos imbativeis. Mamaes em ${cidade.nome} montam o enxoval de inverno completo gastando ate 50% menos.`,
    },
    PR: {
      titulo: `Enxoval de Bebe em ${cidade.nome}: Checklist para Mamaes Paranaenses`,
      problema: `${cidade.nome} tem clima variavel — pode fazer calor e frio no mesmo dia. Isso exige um enxoval versatil com pecas para todas as temperaturas. Muitas mamaes acabam comprando demais ou de menos por nao ter orientacao adequada.`,
      solucao: `Nosso checklist com quantidades exatas evita desperdicio. Com dicas de especialistas sobre cada estacao, mamaes em ${cidade.nome} compram apenas o necessario, priorizando pecas versateis e 100% algodao.`,
    },
    SC: {
      titulo: `Enxoval de Bebe em ${cidade.nome}: Guia Completo para o Sul`,
      problema: `Em ${cidade.nome}, o clima frio exige pecas quentes e de qualidade para o bebe. As lojas locais nem sempre tem a variedade necessaria, e os precos de roupas de inverno para bebe sao consideravelmente mais altos.`,
      solucao: `Encontre macacoes, moletom peluciado e mantas com qualidade e preco justo na Shopee. Nosso guia mostra exatamente o que comprar para o enxoval de inverno em ${cidade.nome}.`,
    },
    BA: {
      titulo: `Enxoval de Bebe em ${cidade.nome}: Para o Calor Baiano`,
      problema: `O calor constante na Bahia exige cuidado redobrado com o enxoval: roupas leves, tecidos que respiram e produtos de higiene que nao irritem a pele do bebe com o suor. Em ${cidade.nome}, nem sempre e facil encontrar roupinhas 100% algodao de qualidade.`,
      solucao: `Priorizamos bodies de manga curta, conjuntos leves e vestidos em algodao puro — perfeitos para o clima de ${cidade.nome}. Com precos acessiveis e entrega em todo o Nordeste.`,
    },
    PE: {
      titulo: `Enxoval de Bebe em ${cidade.nome}: Dicas para Mamaes Pernambucanas`,
      problema: `Em ${cidade.nome}, o calor e a umidade pedem roupinhas especificas para o bebe. Muitas gestantes gastam mais do que precisam em lojas fisicas por falta de um guia confiavel com quantidades e prioridades.`,
      solucao: `Com nosso checklist em PDF, mamaes em ${cidade.nome} sabem exatamente o que comprar, em que quantidade, e encontram tudo com precos ate 58% menores que lojas fisicas.`,
    },
    CE: {
      titulo: `Enxoval de Bebe em ${cidade.nome}: Lista Essencial para o Nordeste`,
      problema: `O clima quente do Ceara exige atencao especial ao enxoval: tecidos sinteticos podem causar brotoejas e irritacoes na pele do bebe. Em ${cidade.nome}, encontrar roupinhas genuinamente 100% algodao a precos acessiveis nao e facil.`,
      solucao: `Todos os produtos de roupa do nosso guia sao selecionados priorizando algodao puro, ideais para o clima de ${cidade.nome}. Compre online com seguranca e economize.`,
    },
    GO: {
      titulo: `Enxoval de Bebe em ${cidade.nome}: Guia para Mamaes Goianas`,
      problema: `Em ${cidade.nome}, o clima seco e quente pede cuidados especiais com a pele do bebe. O ar seco agrava irritacoes causadas por tecidos sinteticos. Lojas locais nem sempre oferecem a variedade e precos competitivos que as gestantes precisam.`,
      solucao: `Selecionamos produtos hipoalergenicos e roupinhas 100% algodao ideais para o clima de ${cidade.nome}. Hidratantes, lencos umedecidos suaves e roupas respiraves a precos de Shopee.`,
    },
  }

  const dorEstado = dores[cidade.siglaEstado]
  if (dorEstado) return dorEstado

  return {
    titulo: `Enxoval de Bebe em ${cidade.nome}, ${cidade.siglaEstado}: Checklist Completo`,
    problema: `Em ${cidade.nome}, com ${cidade.populacao}, montar o enxoval de bebe pode ser desafiador. Os precos em lojas fisicas sao mais altos, a variedade e limitada e muitas gestantes de primeira viagem nao sabem por onde comecar ou quantas pecas comprar.`,
    solucao: `Nosso guia gratuito com checklist em PDF resolve todos esses problemas. Mamaes em ${cidade.nome} tem acesso a uma curadoria com 45+ produtos de qualidade, precos ate 58% menores e dicas de especialistas sobre cada item do enxoval.`,
  }
}

const checklistItems = [
  { categoria: 'Roupinhas (100% Algodao)', itens: ['6-8 bodies manga curta', '6-8 bodies manga longa', '6-8 calcas com pe', '4-6 macacoes', '4-6 conjuntos', '6-8 pares de meias', '3-4 pares de luvas', '2-3 toucas', '2-3 casaquinhos'] },
  { categoria: 'Berco & Quarto', itens: ['1 berco com selo INMETRO', '1 colchao firme (D18-D23)', '3-4 lencois com elastico', '2 protetores de colchao', '4-6 cueiros/swaddle', '2-3 mantas leves', '1 baba eletronica'] },
  { categoria: 'Higiene & Banho', itens: ['2-4 pacotes fraldas RN', '10-15 pacotes fraldas P', '10+ pacotes lencos umedecidos', '2-3 tubos pomada assadura', '2 sabonetes liquidos neutros', '1 termometro digital', '1 aspirador nasal'] },
  { categoria: 'Alimentacao', itens: ['3-4 mamadeiras anti-colica', '1 bomba tira-leite', '6-10 potes para leite', '1 almofada amamentacao', '6-8 babadores', '8-10 paninhos de boca'] },
  { categoria: 'Passeio & Transporte', itens: ['1 bebe conforto (OBRIGATORIO)', '1 carrinho de bebe', '1 bolsa maternidade', '1 canguru/sling', '1 trocador portatil'] },
]

export default async function EnxovalCidadePage({ params }: Props) {
  const { cidade: slug } = await params
  const cidade = getCapitalBRBySlug(slug) || getCidadeBRBySlug(slug)
  if (!cidade) notFound()

  const dor = getDorEnxoval(cidade)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Onde comprar enxoval de bebe em ${cidade.nome}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Voce pode comprar o enxoval de bebe em ${cidade.nome} tanto em lojas fisicas quanto online. Nossa recomendacao e comprar pela Shopee, onde encontra produtos com avaliacao 4.7+ e precos ate 58% mais baratos que lojas fisicas, com entrega para ${cidade.nome}, ${cidade.siglaEstado}. Confira nosso guia completo com 45+ produtos selecionados.` },
      },
      {
        '@type': 'Question',
        name: `Quanto custa montar um enxoval de bebe em ${cidade.nome}?`,
        acceptedAnswer: { '@type': 'Answer', text: `O custo do enxoval de bebe em ${cidade.nome} varia de R$2.000 a R$8.000 dependendo das escolhas. Com nosso guia e links de Shopee, e possivel montar um enxoval completo e de qualidade gastando entre R$2.000 e R$3.500, economizando significativamente em relacao as lojas fisicas da cidade.` },
      },
      {
        '@type': 'Question',
        name: 'O que nao pode faltar no enxoval do bebe?',
        acceptedAnswer: { '@type': 'Answer', text: 'O enxoval essencial inclui: 6-8 bodies 100% algodao (manga curta e longa), 6-8 calcas, 4-6 macacoes, fraldas (RN, P e M), lencos umedecidos, pomada contra assaduras, berco com selo INMETRO, colchao firme, mamadeiras anti-colica, bebe conforto obrigatorio para carro e bolsa maternidade.' },
      },
      {
        '@type': 'Question',
        name: 'Quando comecar a montar o enxoval do bebe?',
        acceptedAnswer: { '@type': 'Answer', text: 'O ideal e comecar a montar o enxoval a partir da 20a semana de gestacao (5o mes). Isso da tempo para pesquisar precos, aproveitar promocoes e organizar tudo com calma. A bolsa maternidade deve estar pronta na 36a semana (9o mes).' },
      },
      {
        '@type': 'Question',
        name: `Entrega de Shopee chega em ${cidade.nome}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Sim! A Shopee entrega em ${cidade.nome}, ${cidade.siglaEstado} e em todo o Brasil. Muitos produtos tem frete gratis e prazo de entrega de 3 a 10 dias uteis, dependendo do vendedor e da sua localizacao.` },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Enxoval de Bebe', item: `${BASE}/enxoval-de-bebe` },
      { '@type': 'ListItem', position: 3, name: `${cidade.nome}, ${cidade.siglaEstado}`, item: `${BASE}/enxoval-de-bebe/${slug}` },
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calazans Lumina',
    description: `Guia de enxoval de bebe para mamaes em ${cidade.nome}, ${cidade.siglaEstado}. Checklist completo com produtos selecionados e dicas de especialistas.`,
    url: `${BASE}/enxoval-de-bebe/${slug}`,
    telephone: '+5531982948067',
    areaServed: {
      '@type': 'City',
      name: cidade.nome,
      containedInPlace: { '@type': 'State', name: cidade.estado },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* === HERO === */}
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-500 rounded-full blur-[150px]" />
        </div>
        <div className="container-main section-padding relative z-10">
          <ScrollReveal>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/enxoval-de-bebe" className="hover:text-white/70 transition-colors">Enxoval de Bebe</Link>
              <span>/</span>
              <span className="text-pink-400">{cidade.nome}, {cidade.siglaEstado}</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
              <span className="text-pink-300 text-sm font-medium">{cidade.nome}, {cidade.siglaEstado} — {cidade.populacao}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Enxoval de Bebe em<br />
              <span className="text-pink-400">{cidade.nome}, {cidade.siglaEstado}.</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
              {dor.problema}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/checklist-enxoval-bebe-2026.pdf"
                download
                className="inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 shadow-lg shadow-pink-500/25"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Baixar Checklist PDF Gratis
              </a>
              <Link
                href="/enxoval-de-bebe"
                className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full text-lg transition-all duration-200"
              >
                Ver Todos os Produtos
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === SOLUCAO === */}
      <section className="section-padding bg-gradient-to-b from-pink-50 to-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">{dor.titulo}</h2>
            <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto leading-relaxed">
              {dor.solucao}
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icone: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', titulo: '100% Algodao', desc: `Roupinhas seguras e hipoalergenicas para bebes em ${cidade.nome}. Priorizamos tecidos puros que protegem a pele sensivel.` },
              { icone: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', titulo: 'Ate 58% Economia', desc: `Precos de Shopee com entrega em ${cidade.nome}. Economize centenas de reais comparado com lojas fisicas da regiao.` },
              { icone: 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', titulo: 'PDF Gratis', desc: 'Checklist de 9 paginas com quantidades, dicas de pediatras e tudo que voce precisa. Baixe e imprima!' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100 text-center h-full">
                  <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icone} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-brand-dark mb-2">{item.titulo}</h3>
                  <p className="text-brand-dark/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === CHECKLIST VISUAL === */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Checklist do Enxoval para {cidade.nome}</h2>
            <p className="text-brand-dark/50">Tudo que voce precisa, com quantidades recomendadas por pediatras</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {checklistItems.map((cat, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100 h-full">
                  <h3 className="font-bold text-pink-700 mb-4 text-lg">{cat.categoria}</h3>
                  <ul className="space-y-2">
                    {cat.itens.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-brand-dark/70 text-sm">
                        <svg className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="text-center mt-10">
              <a
                href="/checklist-enxoval-bebe-2026.pdf"
                download
                className="inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Baixar Checklist Completo em PDF
              </a>
              <p className="text-brand-dark/40 text-sm mt-3">9 paginas | Gratuito | Pronto para imprimir</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === DICAS REGIONAIS === */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Dicas Essenciais para Mamaes em {cidade.nome}</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: 'Tecido 100% Algodao e Essencial', desc: `A pele do bebe e 5x mais fina que a do adulto. Em ${cidade.nome}, com o clima de ${cidade.siglaEstado}, escolher roupinhas de algodao puro e ainda mais importante para evitar irritacoes e alergias.` },
              { titulo: 'Comece na 20a Semana', desc: `Mamaes em ${cidade.nome} devem comecar o enxoval na 20a semana. Aproveite promocoes online e compare precos. Comprando pela Shopee, voce recebe tudo em casa.` },
              { titulo: 'Menos e Mais no Tamanho RN', desc: 'Compre poucas pecas no tamanho RN (recem-nascido). O bebe cresce muito rapido e pode ate nascer grande demais para RN. Invista mais nos tamanhos P e M.' },
              { titulo: 'Seguranca no Berco', desc: 'NUNCA coloque travesseiros, almofadas ou bichos de pelucia no berco. Use apenas lencol com elastico. O colchao deve ser firme (D18 a D23) e ter selo INMETRO.' },
              { titulo: 'Bebe Conforto e Lei', desc: `Em ${cidade.nome} e em todo o Brasil, o bebe conforto e obrigatorio por lei no carro. Deve ter selo INMETRO e ser instalado de costas ate pelo menos 2 anos.` },
              { titulo: 'Bolsa Maternidade Pronta na 36a Semana', desc: 'Monte a bolsa com roupas do bebe, roupas da mamae e documentos em sacolas separadas. Lave tudo com sabao neutro antes.' },
            ].map((dica, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-pink-100">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-500 font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">{dica.titulo}</h3>
                    <p className="text-brand-dark/50 text-sm leading-relaxed">{dica.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Perguntas Frequentes — Enxoval em {cidade.nome}</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              { q: `Onde comprar enxoval de bebe em ${cidade.nome}?`, a: `Voce pode comprar o enxoval em lojas fisicas de ${cidade.nome} ou online pela Shopee com precos ate 58% menores. Nosso guia reune 45+ produtos com avaliacao 4.7+ e entrega para ${cidade.nome}, ${cidade.siglaEstado}.` },
              { q: `Quanto custa o enxoval de bebe em ${cidade.nome}?`, a: `O custo varia de R$2.000 a R$8.000. Com nosso guia e precos de Shopee, e possivel montar o enxoval completo entre R$2.000 e R$3.500, economizando muito em relacao as lojas fisicas.` },
              { q: 'O que nao pode faltar no enxoval?', a: 'Bodies 100% algodao, calcas, macacoes, fraldas (RN, P e M), lencos umedecidos, pomada para assadura, berco INMETRO, colchao firme, mamadeiras anti-colica e bebe conforto.' },
              { q: 'Quando comecar a montar o enxoval?', a: 'A partir da 20a semana de gestacao. Bolsa maternidade pronta na 36a semana.' },
              { q: `A Shopee entrega em ${cidade.nome}?`, a: `Sim! A Shopee entrega em ${cidade.nome}, ${cidade.siglaEstado} e em todo o Brasil. Muitos produtos tem frete gratis e prazo de 3 a 10 dias uteis.` },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <details className="group bg-brand-bg rounded-2xl border border-gray-100 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-bold text-brand-dark text-left pr-4">{faq.q}</h3>
                    <svg className="w-5 h-5 text-pink-500 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-brand-dark/60 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA VER PRODUTOS === */}
      <section className="section-padding bg-brand-dark text-white text-center">
        <div className="container-main max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-2 mb-4">Veja os 45+ Produtos Selecionados</h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Todos com avaliacao 4.7+ estrelas, precos imbativeis e entrega para {cidade.nome}.
              Roupinhas 100% algodao, bercos, mamadeiras MAM, carrinhos e muito mais.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/enxoval-de-bebe"
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-colors"
              >
                Ver Todos os Produtos
              </Link>
              <a
                href="/checklist-enxoval-bebe-2026.pdf"
                download
                className="border border-white/20 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full text-lg transition-colors"
              >
                Baixar PDF Gratis
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === DISCLAIMER === */}
      <section className="py-8 bg-brand-bg border-y border-gray-100">
        <div className="container-main max-w-3xl">
          <div className="flex items-start gap-4 text-sm text-brand-dark/50">
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-dark/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-medium text-brand-dark/70 mb-1">Transparencia</p>
              <p className="leading-relaxed">
                Esta pagina contem links de afiliado da Shopee. Quando voce compra atraves desses links,
                recebemos uma pequena comissao — sem nenhum custo adicional para voce.
                Precos e disponibilidade podem variar. Entrega disponivel para {cidade.nome}, {cidade.siglaEstado}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAForm />
    </>
  )
}
