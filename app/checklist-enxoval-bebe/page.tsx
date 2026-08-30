import type { Metadata } from 'next'
import BaixarPdf from '@/components/BaixarPdf'
import ProdutosEnxoval from '@/components/ProdutosEnxoval'
import { listaEnxoval, naoCompre, ordemCompra, produtosEnxoval } from '@/data/enxoval'

/**
 * Pagina do checklist de enxoval.
 *
 * POR QUE ELA EXISTE
 * /checklist-enxoval-bebe-2026.pdf era a pagina que mais trazia trafego do site
 * inteiro. Saiu do ar com 410 e "lista enxoval de bebe completo pdf 2026" virou
 * a consulta que mais perdeu clique — confirmado pela API do Search Console em
 * 19/ago/2026.
 *
 * O QUE MUDA
 * Antes era so o PDF solto. Agora o PDF e ISCA: a pessoa deixa o e-mail e
 * recebe. Resolve de uma vez o problema de o site nao ter lista nenhuma, que e
 * o motivo de a queda de trafego ter zerado a receita — nao havia para quem
 * mandar nada.
 *
 * A pagina tambem entrega valor sem exigir cadastro: a lista aparece inteira
 * aqui. Quem quiser o PDF para imprimir e levar na loja, deixa o e-mail.
 * Esconder tudo atras do formulario derruba o ranqueamento que trouxe a pessoa.
 */

const TITULO = 'Checklist de Enxoval de Bebê 2026 — a lista enxuta (PDF grátis)'
const DESC =
  'A lista de enxoval sem os 200 itens inúteis: o que você realmente usa, ' +
  'quanto comprar de cada coisa, e os 10 itens que são desperdício de dinheiro. ' +
  'PDF para imprimir e levar na loja.'

export const metadata: Metadata = {
  title: TITULO,
  description: DESC,
  alternates: { canonical: 'https://calazanslumina.com.br/checklist-enxoval-bebe' },
  openGraph: {
    title: TITULO,
    description: DESC,
    url: 'https://calazanslumina.com.br/checklist-enxoval-bebe',
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
    q: 'O que não vale a pena comprar no enxoval?',
    a: 'Sapatinho, estoque de roupa RN, kit com doze mamadeiras, esterilizador elétrico, trocador caro, babá eletrônica com vídeo e berço com dossel. A lista completa, com o porquê de cada um, está no PDF.',
  },
]

export default function ChecklistEnxovalPage() {
  const porGrupo = listaEnxoval.reduce<Record<string, typeof listaEnxoval>>((acc, i) => {
    ;(acc[i.grupo] ||= []).push(i)
    return acc
  }, {})

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
            Checklist gratuito
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6">
            A lista de enxoval sem os 200 itens que você não vai usar
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-4">
            A maioria das listas de enxoval tem 200 itens. Não é generosidade: é que
            quem escreve ganha por item. Você compra tudo, chega em casa com sapatinho
            que não serve e doze mamadeiras que nunca abriu.
          </p>
          <p className="text-white/70 text-lg leading-relaxed">
            Esta tem {listaEnxoval.length} itens, diz quanto comprar de cada um, e
            traz uma lista do que <strong className="text-white">não</strong> comprar.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <BaixarPdf
            titulo="Quer o PDF para imprimir e levar na loja?"
            descricao="São 8 páginas com caixinha para marcar cada item. Sem cadastro: é só clicar. A lista completa também está aqui embaixo."
          />
        </div>
      </section>

      <section className="pb-4">
        <div className="container-main max-w-3xl">
          <h2 className="heading-2 text-brand-dark mb-3">Comece por aqui: o que não comprar</h2>
          <div className="w-14 h-1 bg-brand-mint mb-6" />
          <p className="text-brand-dark/60 mb-8">
            Cada item abaixo aparece em quase toda lista da internet. Nenhum vale o
            dinheiro nas primeiras semanas.
          </p>
          <ul className="space-y-5">
            {naoCompre.map((n) => (
              <li key={n.item}>
                <p className="font-bold text-brand-mint">{n.item}</p>
                <p className="text-brand-dark/70 text-sm leading-relaxed mt-1">{n.porque}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <h2 className="heading-2 text-brand-dark mb-3">A lista</h2>
          <div className="w-14 h-1 bg-brand-mint mb-6" />
          <p className="text-brand-dark/60 mb-2">
            As quantidades não são chute. Recém-nascido troca de roupa 3 a 4 vezes por
            dia, e cresce rápido demais para justificar estoque de tamanho RN.
          </p>
          <p className="text-brand-dark/40 text-xs mb-8">
            Os produtos sugeridos usam link de afiliado: se você comprar por eles, a
            Calazans Lumina pode ganhar uma comissão, sem custo extra para você.
          </p>

          {Object.entries(porGrupo).map(([grupo, itens]) => (
            <div key={grupo} className="mb-10">
              <p className="text-brand-mint text-xs font-bold tracking-[0.18em] uppercase mb-4 pb-2 border-b border-gray-100">
                {grupo}
              </p>
              <ul className="space-y-5">
                {itens.map((i) => (
                  <li key={i.nome} className="flex gap-4">
                    <span className="shrink-0 w-4 h-4 mt-1 border border-gray-300 rounded-sm" />
                    <div>
                      <p className="font-bold text-brand-dark">
                        {i.nome} <span className="text-brand-dark/40">— {i.qtd}</span>
                      </p>
                      <p className="text-brand-dark/70 text-sm leading-relaxed mt-1">{i.porque}</p>
                      {i.dica && (
                        <p className="text-brand-mint text-sm italic leading-relaxed mt-1">{i.dica}</p>
                      )}
                      {i.chave && <ProdutosEnxoval produtos={produtosEnxoval[i.chave]} />}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-3xl">
          <h2 className="heading-2 text-brand-dark mb-3">Em que ordem comprar</h2>
          <div className="w-14 h-1 bg-brand-mint mb-6" />
          <p className="text-brand-dark/60 mb-8">
            Comprar tudo de uma vez é o que estoura o orçamento e enche a casa de coisa
            que você ainda não sabe se vai usar.
          </p>
          <div className="space-y-6">
            {ordemCompra.map((o) => (
              <div key={o.fase} className="bg-white rounded-2xl p-6">
                <p className="font-bold text-brand-dark mb-2">
                  {o.fase}. {o.quando}
                </p>
                <p className="text-brand-dark/70 text-sm mb-2">{o.itens.join(' · ')}</p>
                <p className="text-brand-dark/50 text-sm italic leading-relaxed">{o.nota}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="pb-24">
        <div className="container-main max-w-3xl">
          <BaixarPdf
            variante="escuro"
            titulo="Leve a lista com você"
            descricao="O PDF tem tudo isto em 8 páginas, com caixinha para marcar. Baixe e leve no celular ou impresso."
          />
        </div>
      </section>
    </>
  )
}
