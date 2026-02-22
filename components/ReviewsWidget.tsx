export default function ReviewsWidget() {
  return (
    <section className="section-padding bg-brand-bg" id="avaliacoes">
      <div className="container-main">
        <div className="text-center mb-10">
          <h2 className="heading-2 text-brand-dark mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
            Resultados reais de empreendedores brasileiros nos EUA e no Brasil que
            transformaram seus negócios com a Calazans Lumina.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <iframe
            className="lc_reviews_widget"
            src="https://reputationhub.site/reputation/widgets/review_widget/MR3yMqtdBa4732pi4ZCw"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: '100%', width: '100%', minHeight: '400px' }}
          />
        </div>
        <div className="text-center mt-8">
          <a
            href="https://share.google/n2TRtwjKEMy65uSx7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-dark font-semibold hover:text-brand-mint transition-colors"
          >
            Deixe sua avaliação no Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
