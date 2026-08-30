import type { Metadata } from 'next'
import Link from 'next/link'
import BaixarPdf from '@/components/BaixarPdf'
import EnxovalConteudo from '@/components/EnxovalConteudo'
import { capitaisBR } from '@/data/capitais-br'
import { listaEnxoval } from '@/data/enxoval'

const TITULO = 'Enxoval de Bebê 2026: a lista completa, com preço e o que não comprar'
const DESC =
  'A lista de enxoval sem os 200 itens inúteis: o que você realmente usa, quanto ' +
  'comprar de cada coisa, quanto custa hoje e os 10 itens que são desperdício de dinheiro.'

export const metadata: Metadata = {
  title: TITULO,
  description: DESC,
  alternates: { canonical: 'https://calazanslumina.com.br/enxoval-de-bebe' },
  openGraph: {
    title: TITULO,
    description: DESC,
    url: 'https://calazanslumina.com.br/enxoval-de-bebe',
    type: 'article',
  },
}

const faq = [
  {
    q: 'Quantos body de recém-nascido comprar?',
    a: 'Seis de manga curta e seis de manga longa. O bebê troca de roupa 3 a 4 vezes por dia — golfada, xixi que vaza, cocô que escapa. Com seis de cada você não lava todo dia.',
  },
  {
    q: 'Compro roupa tamanho RN ou P?',
    a: 'P. Metade dos bebês nasce com mais de 3,3 kg e nunca chega a vestir o RN. Duas peças de RN por garantia, o resto no P.',
  },
  {
    q: 'Quantas fraldas de recém-nascido comprar?',
    a: 'UM pacote. Estoque de fralda RN é o desperdício número um do enxoval — muitos bebês pulam direto para o tamanho P.',
  },
  {
    q: 'Quando devo começar a montar o enxoval?',
    a: 'O essencial no sétimo mês se você mora no Norte ou Nordeste, onde a entrega demora mais; no oitavo nas outras regiões. Berço e bebê conforto primeiro, porque são os que não dá para improvisar.',
  },
  {
    q: 'Quanto custa um enxoval de bebê completo?',
    a: 'Depende quase inteiramente de dois itens: berço e carrinho com bebê conforto respondem pela maior parte do valor. O restante da lista — roupa, higiene, banho — cabe em uma fração disso se você comprar as quantidades certas em vez das listas de 200 itens.',
  },
  {
    q: 'O que não vale a pena comprar no enxoval?',
    a: 'Sapatinho, estoque de roupa RN, kit com doze mamadeiras, esterilizador elétrico, trocador caro, babá eletrônica com vídeo e berço com dossel. A lista completa, com o porquê de cada um, está nesta página.',
  },
]

export default function EnxovalPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-3xl">
          <p className="text-brand-mint text-xs font-bold tracking-[0.22em] uppercase mb-4">
            Guia completo
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6">
            Enxoval de bebê: a lista sem os 200 itens que você não vai usar
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-4">
            A maioria das listas de enxoval tem 200 itens. Não é generosidade: é que
            quem escreve ganha por item. Você compra tudo, chega em casa com sapatinho
            que não serve e doze mamadeiras que nunca abriu.
          </p>
          <p className="text-white/70 text-lg leading-relaxed">
            Esta tem {listaEnxoval.length} itens, diz quanto comprar de cada um, mostra
            preço de hoje e traz uma lista do que{' '}
            <strong className="text-white">não</strong> comprar.
          </p>
        </div>
      </section>

      <EnxovalConteudo />

      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <h2 className="heading-2 text-brand-dark mb-3">Perguntas que toda gestante faz</h2>
          <div className="w-14 h-1 bg-brand-mint mb-8" />
          <div className="space-y-6">
            {faq.map((f) => (
              <div key={f.q}>
                <p className="font-bold text-brand-dark mb-1">{f.q}</p>
                <p className="text-brand-dark/70 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-3xl">
          <h2 className="heading-2 text-brand-dark mb-3">Enxoval na sua cidade</h2>
          <div className="w-14 h-1 bg-brand-mint mb-6" />
          <p className="text-brand-dark/60 mb-6">
            O clima e o prazo de entrega mudam o que você compra e quando fecha o
            enxoval. Veja a lista ajustada para onde você mora.
          </p>
          <div className="flex flex-wrap gap-2">
            {capitaisBR.map((c) => (
              <Link
                key={c.slug}
                href={`/enxoval-de-bebe/${c.slug}`}
                className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-brand-dark/70 hover:border-brand-mint hover:text-brand-mint transition-colors"
              >
                {c.nome}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 pt-16">
        <div className="container-main max-w-3xl">
          <BaixarPdf
            variante="escuro"
            titulo="Leve a lista com você"
            descricao="O PDF tem tudo isto em 8 páginas, com caixinha para marcar. Sem cadastro: baixe e leve no celular ou impresso."
          />
        </div>
      </section>
    </>
  )
}
