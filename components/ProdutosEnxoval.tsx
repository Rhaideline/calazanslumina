import type { ProdutoEnxoval } from '@/data/enxoval'

function formatBRL(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

/** Vitrine de produtos Shopee para um item do checklist. Só renderiza se houver produto. */
export default function ProdutosEnxoval({ produtos }: { produtos?: ProdutoEnxoval[] }) {
  if (!produtos || produtos.length === 0) return null
  const exibidos = produtos.slice(0, 2)

  return (
    <div className="mt-3 flex flex-wrap gap-3">
      {exibidos.map((p) => (
        <a
          key={p.id}
          href={p.link}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="flex items-center gap-3 w-full sm:w-[calc(50%-0.375rem)] p-2.5 rounded-xl border border-gray-100 hover:border-brand-mint/40 hover:shadow-sm transition-all bg-white"
        >
          <img
            src={p.img}
            alt={p.titulo}
            width={64}
            height={64}
            loading="lazy"
            decoding="async"
            className="w-16 h-16 rounded-lg object-cover shrink-0 bg-gray-50"
          />
          <div className="min-w-0">
            <p className="text-xs text-brand-dark/80 leading-snug line-clamp-2">{p.titulo}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-bold text-brand-dark">{formatBRL(p.preco)}</span>
              {p.precoDe && (
                <span className="text-xs text-brand-dark/40 line-through">{formatBRL(p.precoDe)}</span>
              )}
            </div>
            <span className="text-[11px] text-brand-mint font-semibold">
              ★ {p.nota.toFixed(1)} · Ver na Shopee
            </span>
          </div>
        </a>
      ))}
    </div>
  )
}
