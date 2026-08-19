/**
 * Distintivos do heroi.
 *
 * O QUE SAIU DAQUI
 * Um bloco com cinco estrelas amarelas e o texto "5.0 (avaliacoes)". Nao
 * havia avaliacao por tras — e a mesma afirmacao que foi removida do
 * ReviewsWidget e do schema das paginas de curso, so que esta ficou para tras
 * e continuava no heroi da home.
 *
 * O QUE ENTRA
 * Um fato que se verifica sozinho: o atendimento em portugues. E, quando a
 * pagina tem cidade, a propria cidade — que e informacao util e verdadeira.
 */
export default function HeroBadges({ cidade }: { cidade?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      {cidade && (
        <span className="inline-flex items-center gap-2 bg-brand-mint text-white text-sm font-bold px-4 py-2 rounded-full">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Atendendo {cidade}
        </span>
      )}
      <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full border border-white/10">
        <svg className="w-4 h-4 text-brand-mint" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        Tudo em português
      </span>
    </div>
  )
}
