import Link from 'next/link'
import { capitaisBR } from '@/data/capitais-br'
import { cidadesBrasil } from '@/data/cidades-brasil'

/**
 * A LISTA QUE FALTAVA — o defeito mais caro da auditoria de 20/set/2026.
 *
 * O sitemap promete 4.673 URLs. Andando pelos links a partir da home, cheguei
 * a 330. Por secao:
 *
 *     /cursos             17 linkadas de 2.513   (0,7%)
 *     /enxoval-de-bebe     1 linkada  de   210   (0,5%)
 *     /brasil             84 linkadas de 1.254   (6,7%)
 *
 * A API de Inspecao de URL do Google confirmou na pagina que mais rendia do
 * site inteiro (1.903 impressoes):
 *
 *     "Rastreada, mas nao indexada no momento"
 *     ultimo rastreio: 22 de ABRIL
 *     links de entrada: NENHUM CONHECIDO
 *
 * ⚠️ SITEMAP E SUGESTAO. LINK INTERNO E VOTO.
 * Pagina que so existe no sitemap e, para o buscador, pagina que o proprio
 * dono nao achou importante o bastante para citar. E a primeira a ser
 * descartada quando ele precisa economizar rastreio.
 *
 * ⚠️ TODAS AS CIDADES, SEM "VER MAIS".
 * Link que so aparece depois de um clique nao e link para o rastreador. Por
 * isso nada aqui fica escondido atras de JavaScript.
 *
 * Agrupado por estado porque 209 links soltos sao uma parede; agrupados,
 * viram uma lista que a pessoa tambem consegue usar.
 */
export default function ListaCidadesBR({
  /** monta o destino de cada cidade a partir do slug dela */
  href,
  titulo,
  apoio,
  rodape,
  fundo = 'bg-brand-bg',
}: {
  href: (slug: string) => string
  titulo: string
  apoio: string
  rodape?: string
  fundo?: string
}) {
  const todas = [...capitaisBR, ...cidadesBrasil]

  const porEstado = new Map<string, { nome: string; slug: string }[]>()
  for (const c of todas) {
    if (!porEstado.has(c.siglaEstado)) porEstado.set(c.siglaEstado, [])
    porEstado.get(c.siglaEstado)!.push({ nome: c.nome, slug: c.slug })
  }
  const estados = [...porEstado.entries()].sort((a, b) => a[0].localeCompare(b[0]))
  for (const [, lista] of estados) lista.sort((a, b) => a.nome.localeCompare(b.nome))

  return (
    <section className={'section-padding ' + fundo}>
      <div className="container-main">
        <div className="mb-10 grid gap-4 md:grid-cols-12 md:items-end">
          <h2 className="heading-2 text-brand-dark md:col-span-7">{titulo}</h2>
          <p className="text-brand-dark/55 md:col-span-5 md:pb-1 leading-relaxed">
            {apoio}
          </p>
        </div>

        <div className="border-t border-brand-dark/10">
          {estados.map(([sigla, cidades]) => (
            <div
              key={sigla}
              className="grid gap-2 border-b border-brand-dark/10 py-5 md:grid-cols-12 md:gap-6"
            >
              <div className="md:col-span-2">
                <span className="font-serif text-lg font-bold text-brand-dark">
                  {sigla}
                </span>
                <span className="ml-2 text-xs tabular-nums text-brand-dark/35">
                  {cidades.length}
                </span>
              </div>
              <div className="md:col-span-10">
                <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {cidades.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={href(c.slug)}
                        className="text-sm text-brand-dark/70 underline-offset-4 hover:text-brand-dark hover:underline"
                      >
                        {c.nome}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-brand-dark/40">
          {todas.length} cidades{rodape ? ' · ' + rodape : ''}
        </p>
      </div>
    </section>
  )
}
