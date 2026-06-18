import type { Metadata } from 'next'
import { categoriasInfo, produtosPorCategoria } from '@/data/enxoval-produtos'

const BASE = 'https://calazanslumina.com.br'

export const metadata: Metadata = {
  title: 'Enxoval de Bebê Completo 2026: Lista, Preços e Onde Comprar',
  description: 'Lista completa de enxoval de bebê 2026 com produtos selecionados: roupinhas, berço, fraldas, banho e passeio. Veja preços, descontos e melhores marcas. Guia gratuito para futuras mamães.',
  alternates: { canonical: `${BASE}/enxoval-de-bebe` },
  openGraph: {
    title: 'Enxoval de Bebê Completo 2026: Lista + Preços',
    description: 'Guia definitivo do enxoval do bebê. Veja produtos selecionados, preços e descontos por categoria.',
    url: `${BASE}/enxoval-de-bebe`,
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
}

export default function EnxovalHubPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Enxoval de Bebê Completo 2026',
    itemListElement: categoriasInfo.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.titulo,
      url: `${BASE}/enxoval-de-bebe#${c.id}`,
    })),
  }

  return (
    <main className="bg-stone-50 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Disclosure afiliado (topo) */}
      <div className="bg-amber-50 border-b border-amber-200 text-amber-900 text-xs py-2 px-4 text-center">
        Esta página contém links de afiliado Shopee. Compras via estes links podem gerar comissões para a Calazans Lumina — sem custo adicional para você.
      </div>

      {/* Hero */}
      <section className="container mx-auto max-w-6xl px-4 py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">
          Enxoval de Bebê Completo 2026
        </h1>
        <p className="text-stone-600 text-base md:text-lg max-w-2xl mx-auto">
          Guia com mais de {categoriasInfo.length * 10} produtos selecionados em 6 categorias: roupinhas, berço, fraldas, amamentação, banho e passeio. Veja preços, descontos e melhores marcas.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
          {categoriasInfo.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-full text-stone-700 hover:border-stone-400 transition-colors">
              <span>{c.icone}</span> {c.titulo}
            </a>
          ))}
        </div>
      </section>

      {/* Categorias */}
      {categoriasInfo.map((cat) => {
        const produtos = produtosPorCategoria(cat.id)
        if (produtos.length === 0) return null
        return (
          <section key={cat.id} id={cat.id} className="container mx-auto max-w-6xl px-4 py-10 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6 border-b border-stone-200 pb-3">
              <span className="text-3xl">{cat.icone}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-stone-900">{cat.titulo}</h2>
              <span className="text-stone-500 text-sm">({produtos.length} itens)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {produtos.map((p, i) => (
                <article key={`${cat.id}-${i}`} className="bg-white rounded-lg overflow-hidden border border-stone-200 hover:shadow-md transition-shadow">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    className="block"
                    aria-label={`Ver ${p.nome} na Shopee`}
                  >
                    <div className="relative aspect-square bg-stone-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.imagem}
                        alt={p.nome}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      {p.desconto > 0 && (
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          -{p.desconto}%
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-stone-900 line-clamp-2 mb-2 min-h-[2.5rem]">
                        {p.nome}
                      </h3>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-lg font-bold text-stone-900">
                          R$ {p.preco.toFixed(2).replace('.', ',')}
                        </span>
                        {p.precoOriginal > p.preco && (
                          <span className="text-xs text-stone-400 line-through">
                            R$ {p.precoOriginal.toFixed(2).replace('.', ',')}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between text-xs text-stone-500">
                        <span className="flex items-center gap-1">
                          <span className="text-amber-500">★</span> {p.rating.toFixed(2)}
                          <span className="text-stone-400">· {p.likes.toLocaleString('pt-BR')} likes</span>
                        </span>
                        <span className="text-orange-600 font-medium">Shopee →</span>
                      </div>
                      <p className="text-[10px] text-stone-400 mt-2 truncate">{p.shop}</p>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </section>
        )
      })}

      {/* FAQ + Bottom CTA */}
      <section className="container mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Como escolher o enxoval ideal</h2>
        <div className="text-stone-600 space-y-3 text-left text-sm md:text-base">
          <p><strong>Roupinhas RN:</strong> compre poucas peças tamanho RN — o bebê cresce rápido. Invista mais nos tamanhos P e M. Prefira aberturas frontais com botões de pressão.</p>
          <p><strong>Berço:</strong> certifique-se de que segue normas INMETRO. Espaço entre grades não deve exceder 6cm.</p>
          <p><strong>Fraldas:</strong> tamanhos mudam rápido. Compre poucas embalagens RN e estoque mais P/M.</p>
          <p><strong>Mamadeiras:</strong> bicos anticólica reduzem regurgitações. Pelo menos 2 mamadeiras de 240ml.</p>
        </div>
      </section>

      <footer className="bg-stone-100 py-8 text-center text-xs text-stone-500">
        <p>© Calazans Lumina · Conteúdo informativo · Os preços e disponibilidade são atualizados periodicamente via feed Shopee Brasil.</p>
      </footer>
    </main>
  )
}
