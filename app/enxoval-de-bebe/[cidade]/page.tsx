import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { capitaisBR, getCapitalBRBySlug } from '@/data/capitais-br'
import { cidadesBrasil, getCidadeBRBySlug } from '@/data/cidades-brasil'
import { categoriasInfo, produtosPorCategoria } from '@/data/enxoval-produtos'

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

  const title = `Enxoval de Bebê em ${cidade.nome}, ${cidade.siglaEstado} — Lista Completa 2026 + Onde Comprar`
  const description = `Guia de enxoval de bebê para mamães em ${cidade.nome}, ${cidade.siglaEstado}. Lista com produtos, preços e marcas. Roupinhas, berço, fraldas, banho e passeio com entrega para ${cidade.nome}.`

  return {
    title,
    description,
    alternates: { canonical: `${BASE}/enxoval-de-bebe/${slug}` },
    openGraph: {
      title: `Enxoval de Bebê em ${cidade.nome}, ${cidade.siglaEstado} — Lista 2026`,
      description: `Guia completo de enxoval de bebê para ${cidade.nome}. Produtos selecionados com preços, descontos e entrega para a região.`,
      url: `${BASE}/enxoval-de-bebe/${slug}`,
      type: 'website',
      locale: 'pt_BR',
    },
    robots: { index: true, follow: true },
  }
}

// Copy customizada por estado (mantida do template antigo aprovado)
function getDorEnxoval(cidade: { nome: string; siglaEstado: string; populacao: string }) {
  const dores: Record<string, { titulo: string; problema: string; solucao: string }> = {
    SP: {
      titulo: `Enxoval de Bebê em ${cidade.nome}: Onde Comprar com Economia`,
      problema: `Em ${cidade.nome} (${cidade.populacao}), o custo de vida elevado torna o enxoval de bebê um desafio. Lojas físicas cobram preços altos e a correria do dia a dia dificulta pesquisar e comparar preços.`,
      solucao: `Nosso guia reúne produtos com preços de até 60% menores que lojas físicas. Mamães em ${cidade.nome} podem montar o enxoval completo online, com entrega em casa, economizando tempo e dinheiro.`,
    },
    MG: {
      titulo: `Enxoval de Bebê em ${cidade.nome}: Guia para Mamães Mineiras`,
      problema: `Em ${cidade.nome}, ${cidade.siglaEstado} (${cidade.populacao}), muitas gestantes têm dificuldade pra encontrar variedade de produtos para bebê, especialmente roupinhas 100% algodão e marcas específicas como MAM e Burigotto. Opções locais são limitadas.`,
      solucao: `Com nosso guia, mamães em ${cidade.nome} têm acesso aos mesmos produtos das grandes capitais, com preços de Shopee e entrega em todo o Brasil.`,
    },
    RJ: {
      titulo: `Enxoval de Bebê em ${cidade.nome}: Lista Completa com Preços`,
      problema: `O calor do Rio torna essencial escolher roupinhas leves e 100% algodão. Em ${cidade.nome} (${cidade.populacao}), o custo de vida alto e as lojas de bebê com preços elevados complicam o orçamento das futuras mamães.`,
      solucao: `Nosso guia prioriza peças leves e respiráveis, perfeitas pro clima carioca. Com preços de Shopee, mamães em ${cidade.nome} economizam significativamente.`,
    },
    RS: {
      titulo: `Enxoval de Bebê em ${cidade.nome}: Preparando para o Frio Gaúcho`,
      problema: `O inverno rígido no Sul exige enxoval reforçado: macacões de moletom, mantas grossas e roupinhas de frio que custam mais caro. Em ${cidade.nome} (${cidade.populacao}), encontrar boas opções com preço justo é um desafio.`,
      solucao: `Selecionamos peças de inverno como moletom peluciado, macacões e mantas de qualidade com preços imbatíveis. Mamães em ${cidade.nome} montam o enxoval gastando até 50% menos.`,
    },
    PR: {
      titulo: `Enxoval de Bebê em ${cidade.nome}: Checklist para Mamães Paranaenses`,
      problema: `${cidade.nome} tem clima variável — pode fazer calor e frio no mesmo dia. Isso exige enxoval versátil com peças para todas as temperaturas. Muitas mamães acabam comprando demais ou de menos.`,
      solucao: `Nosso checklist com quantidades exatas evita desperdício. Com dicas de especialistas sobre cada estação, mamães em ${cidade.nome} compram apenas o necessário.`,
    },
    SC: {
      titulo: `Enxoval de Bebê em ${cidade.nome}: Guia Completo para o Sul`,
      problema: `Em ${cidade.nome}, o clima frio exige peças quentes e de qualidade. As lojas locais nem sempre têm a variedade necessária, e os preços de roupas de inverno são consideravelmente mais altos.`,
      solucao: `Encontre macacões, moletom peluciado e mantas com qualidade e preço justo na Shopee. Nosso guia mostra exatamente o que comprar para o enxoval de inverno em ${cidade.nome}.`,
    },
    BA: {
      titulo: `Enxoval de Bebê em ${cidade.nome}: Para o Calor Baiano`,
      problema: `O calor constante na Bahia exige cuidado redobrado: roupas leves, tecidos que respiram e produtos de higiene que não irritem a pele com o suor. Em ${cidade.nome}, nem sempre é fácil encontrar roupinhas 100% algodão de qualidade.`,
      solucao: `Priorizamos bodies de manga curta, conjuntos leves e vestidos em algodão puro — perfeitos pro clima de ${cidade.nome}. Com preços acessíveis e entrega em todo o Nordeste.`,
    },
    PE: {
      titulo: `Enxoval de Bebê em ${cidade.nome}: Dicas para Mamães Pernambucanas`,
      problema: `Em ${cidade.nome}, o calor e a umidade pedem roupinhas específicas. Muitas gestantes gastam mais do que precisam em lojas físicas por falta de um guia confiável com quantidades e prioridades.`,
      solucao: `Com nosso checklist, mamães em ${cidade.nome} sabem exatamente o que comprar e encontram tudo com preços até 60% menores que lojas físicas.`,
    },
    CE: {
      titulo: `Enxoval de Bebê em ${cidade.nome}: Lista Essencial para o Nordeste`,
      problema: `O clima quente do Ceará exige atenção especial: tecidos sintéticos podem causar brotoejas. Em ${cidade.nome}, encontrar roupinhas genuinamente 100% algodão a preços acessíveis não é fácil.`,
      solucao: `Todos os produtos de roupa do nosso guia priorizam algodão puro, ideais pro clima de ${cidade.nome}. Compre online com segurança e economize.`,
    },
    GO: {
      titulo: `Enxoval de Bebê em ${cidade.nome}: Guia para Mamães Goianas`,
      problema: `Em ${cidade.nome}, o clima seco e quente pede cuidados especiais. O ar seco agrava irritações causadas por tecidos sintéticos. Lojas locais nem sempre oferecem variedade.`,
      solucao: `Selecionamos produtos hipoalergênicos e roupinhas 100% algodão ideais pro clima de ${cidade.nome}. Hidratantes, lenços umedecidos suaves e roupas respiráveis a preços de Shopee.`,
    },
  }

  return dores[cidade.siglaEstado] || {
    titulo: `Enxoval de Bebê em ${cidade.nome}, ${cidade.siglaEstado}: Lista Completa`,
    problema: `Em ${cidade.nome} (${cidade.populacao}), montar o enxoval pode ser desafiador. Preços em lojas físicas são mais altos, a variedade é limitada e muitas gestantes de primeira viagem não sabem por onde começar.`,
    solucao: `Nosso guia gratuito resolve isso. Mamães em ${cidade.nome} têm acesso a uma curadoria com 60+ produtos de qualidade, com preços de Shopee.`,
  }
}

const checklistItems = [
  { categoria: 'Roupinhas (100% Algodão)', itens: ['6-8 bodies manga curta', '6-8 bodies manga longa', '6-8 calças com pé', '4-6 macacões', '4-6 conjuntos', '6-8 pares de meias', '2-3 toucas', '2-3 casaquinhos'] },
  { categoria: 'Berço & Quarto', itens: ['1 berço com selo INMETRO', '1 colchão firme (D18-D23)', '3-4 lençóis com elástico', '2 protetores de colchão', '4-6 cueiros/swaddle', '2-3 mantas leves'] },
  { categoria: 'Higiene & Banho', itens: ['2-4 pacotes fraldas RN', '10-15 pacotes fraldas P', '10+ pacotes lenços umedecidos', '2-3 tubos pomada assadura', '2 sabonetes líquidos neutros', '1 termômetro digital'] },
  { categoria: 'Alimentação', itens: ['3-4 mamadeiras anti-cólica', '1 bomba tira-leite', '6-10 potes para leite', '1 almofada amamentação', '6-8 babadores'] },
  { categoria: 'Passeio & Transporte', itens: ['1 bebê conforto (OBRIGATÓRIO)', '1 carrinho de bebê', '1 bolsa maternidade', '1 canguru/sling'] },
]

export default async function EnxovalCidadePage({ params }: Props) {
  const { cidade: slug } = await params
  const cidade = getCapitalBRBySlug(slug) || getCidadeBRBySlug(slug)
  if (!cidade) notFound()

  const dor = getDorEnxoval(cidade)

  // Pegar 3 produtos destaque por categoria (18 total) — balanced sample
  const produtosDestaque = categoriasInfo.flatMap((cat) =>
    produtosPorCategoria(cat.id).slice(0, 3)
  )

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: dor.titulo,
    description: dor.problema,
    author: { '@type': 'Organization', name: 'Calazans Lumina' },
    publisher: { '@type': 'Organization', name: 'Calazans Lumina' },
    mainEntityOfPage: `${BASE}/enxoval-de-bebe/${slug}`,
  }

  return (
    <main className="bg-stone-50 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Disclosure afiliado */}
      <div className="bg-amber-50 border-b border-amber-200 text-amber-900 text-xs py-2 px-4 text-center">
        Esta página contém links de afiliado Shopee. Compras via estes links podem gerar comissões — sem custo adicional para você.
      </div>

      {/* Hero customizado por estado */}
      <section className="container mx-auto max-w-4xl px-4 py-12">
        <p className="text-sm text-stone-500 mb-2">
          <Link href="/enxoval-de-bebe" className="hover:text-stone-700 transition-colors">← Enxoval de Bebê</Link>
          <span className="mx-2">/</span>
          <span>{cidade.nome}, {cidade.siglaEstado}</span>
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          {dor.titulo}
        </h1>
        <p className="text-stone-700 leading-relaxed mb-3">{dor.problema}</p>
        <p className="text-stone-700 leading-relaxed">{dor.solucao}</p>
      </section>

      {/* Checklist */}
      <section className="container mx-auto max-w-4xl px-4 py-8">
        <h2 className="text-2xl font-bold text-stone-900 mb-6">Checklist Essencial do Enxoval</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {checklistItems.map((c) => (
            <div key={c.categoria} className="bg-white border border-stone-200 rounded-lg p-5">
              <h3 className="font-semibold text-stone-900 mb-3">{c.categoria}</h3>
              <ul className="text-sm text-stone-600 space-y-1">
                {c.itens.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Produtos destaque */}
      <section className="container mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold text-stone-900 mb-2">
          Produtos Selecionados para {cidade.nome}
        </h2>
        <p className="text-stone-600 text-sm mb-6">
          Produtos com entrega para {cidade.nome}, {cidade.siglaEstado}. Os preços e estoque podem variar.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {produtosDestaque.map((p, i) => (
            <article key={i} className="bg-white rounded-lg overflow-hidden border border-stone-200 hover:shadow-md transition-shadow">
              <a
                href={p.link}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="block"
                aria-label={`Ver ${p.nome} na Shopee`}
              >
                <div className="relative aspect-square bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.imagem} alt={p.nome} loading="lazy" className="w-full h-full object-cover" />
                  {p.desconto > 0 && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                      -{p.desconto}%
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-semibold text-stone-900 line-clamp-2 mb-2 min-h-[2.2rem]">
                    {p.nome}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-base font-bold text-stone-900">
                      R$ {p.preco.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-stone-500">
                    <span className="text-amber-500">★</span> {p.rating.toFixed(2)} · {p.likes.toLocaleString('pt-BR')}
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/enxoval-de-bebe"
            className="inline-block px-6 py-3 bg-stone-900 text-white rounded-lg font-medium hover:bg-stone-800 transition-colors"
          >
            Ver guia completo com 60+ produtos →
          </Link>
        </div>
      </section>

      <footer className="bg-stone-100 py-8 text-center text-xs text-stone-500 px-4">
        <p>© Calazans Lumina · Conteúdo informativo para mamães em {cidade.nome}, {cidade.siglaEstado} · Preços atualizados via feed Shopee Brasil.</p>
      </footer>
    </main>
  )
}
