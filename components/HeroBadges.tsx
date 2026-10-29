/**
 * Distintivos do heroi.
 *
 * O QUE SAIU DAQUI
 * Um bloco com cinco estrelas amarelas e o texto "5.0 (avaliacoes)". Nao
 * havia avaliacao por tras — e a mesma afirmacao que foi removida do
 * ReviewsWidget e do schema das paginas de curso.
 * "Tudo em portugues" tambem saiu (29/10): quem contrata atende americano.
 *
 * O QUE FICA
 * So a cidade, quando a pagina tem uma — informacao util e verdadeira.
 */
export default function HeroBadges({ cidade }: { cidade?: string }) {
  if (!cidade) return null
  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      <span className="inline-flex items-center gap-2 bg-brand-mint text-white text-sm font-bold px-4 py-2 rounded-full">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Atendendo {cidade}
      </span>
    </div>
  )
}
