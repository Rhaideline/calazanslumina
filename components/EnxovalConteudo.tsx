import ProdutosEnxoval from '@/components/ProdutosEnxoval'
import { listaEnxoval, naoCompre, ordemCompra, produtosEnxoval } from '@/data/enxoval'
import type { BlocoEnxoval } from '@/lib/enxoval-local'

/**
 * O corpo da pagina de enxoval, compartilhado entre /enxoval-de-bebe e as
 * paginas por cidade. A cidade entra por `local`: sem ele a pagina e a
 * nacional, com ele os quatro blocos locais aparecem no topo.
 */
export default function EnxovalConteudo({ local }: { local?: BlocoEnxoval }) {
  // A lista em si muda por cidade: quantidade ajustada ao clima e item que
  // perde sentido no calor sai fora. Sem isso a pagina seria so troca de slug.
  const lista = listaEnxoval
    .filter((i) => !local?.itensOcultos.includes(i.nome))
    .map((i) => ({ ...i, qtd: local?.quantidades[i.nome] ?? i.qtd }))

  const porGrupo = lista.reduce<Record<string, typeof lista>>((acc, i) => {
    ;(acc[i.grupo] ||= []).push(i)
    return acc
  }, {})

  return (
    <>
      {local && (
        <section className="section-padding bg-brand-bg">
          <div className="container-main max-w-3xl">
            <p className="text-brand-dark/80 text-lg leading-relaxed mb-8">{local.abertura}</p>
            <div className="space-y-6">
              {[
                { t: 'O clima que seu bebê vai encontrar', c: local.clima },
                { t: 'Quanto tempo a encomenda leva até você', c: local.entrega },
                { t: 'O que dá para ver pessoalmente antes de comprar', c: local.local },
                { t: 'Vale procurar de segunda mão?', c: local.segundaMao },
              ].map((b) => (
                <div key={b.t} className="bg-white rounded-2xl p-6">
                  <p className="font-bold text-brand-dark mb-2">{b.t}</p>
                  <p className="text-brand-dark/70 leading-relaxed">{b.c}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pt-16 pb-4">
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
          <h2 className="heading-2 text-brand-dark mb-3">A lista, item por item</h2>
          <div className="w-14 h-1 bg-brand-mint mb-6" />
          <p className="text-brand-dark/60 mb-2">
            As quantidades não são chute. Recém-nascido troca de roupa 3 a 4 vezes por
            dia, e cresce rápido demais para justificar estoque de tamanho RN.
            {local && ' As desta página já vêm ajustadas ao clima da sua cidade.'}
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
              <ul className="space-y-8">
                {itens.map((i) => (
                  <li key={i.nome} className="flex gap-4">
                    <span className="shrink-0 w-4 h-4 mt-1 border border-gray-300 rounded-sm" />
                    <div className="min-w-0 flex-1">
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
            {local && ` Pelo prazo de entrega da sua região, feche o essencial no ${local.mesFechar}.`}
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

      {local && (
        <section className="section-padding">
          <div className="container-main max-w-3xl">
            <h2 className="heading-2 text-brand-dark mb-3">Perguntas de quem mora aqui</h2>
            <div className="w-14 h-1 bg-brand-mint mb-8" />
            <div className="space-y-6">
              {local.faq.map((f) => (
                <div key={f.q}>
                  <p className="font-bold text-brand-dark mb-1">{f.q}</p>
                  <p className="text-brand-dark/70 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
