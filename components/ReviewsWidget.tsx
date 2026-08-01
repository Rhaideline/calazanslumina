import ScrollReveal from '@/components/ScrollReveal'

const avaliacoes = [
  {
    nome: 'Fernanda Oliveira',
    cidade: 'Framingham, MA',
    texto: 'A Rhaideline fez o site da minha empresa de limpeza e em menos de 2 semanas eu já estava recebendo ligações pelo Google. Ela entende a realidade do brasileiro aqui nos EUA e faz tudo em português. Super recomendo!',
    servico: 'Site + Google Business',
    data: 'fev/2026',
  },
  {
    nome: 'Carlos Eduardo Santos',
    cidade: 'Marlborough, MA',
    texto: 'Eu tentei fazer meu site sozinho por meses e não conseguia resultado nenhum. A Calazans Lumina criou tudo profissional, rápido e com um preço justo. Hoje meu negócio de framing aparece em primeiro no Google Maps da região.',
    servico: 'Site + SEO Local',
    data: 'jan/2026',
  },
  {
    nome: 'Ana Paula Mendes',
    cidade: 'São Paulo, SP',
    texto: 'Contratei o pacote de redes sociais e funil de vendas. Em 3 meses minha clínica de estética triplicou o número de agendamentos. A automação pelo WhatsApp é incrível, responde os clientes na hora!',
    servico: 'Redes Sociais + Funil GHL',
    data: 'fev/2026',
  },
  {
    nome: 'Roberto Almeida',
    cidade: 'Hudson, MA',
    texto: 'Melhor investimento que fiz pro meu negócio de painting. O site ficou lindo, carrega rápido e os clientes americanos elogiam. Já recebi mais de 30 leads só pelo formulário do site. Vale cada centavo.',
    servico: 'Site Profissional',
    data: 'jan/2026',
  },
  {
    nome: 'Juliana Costa',
    cidade: 'Belo Horizonte, MG',
    texto: 'Fiz o curso de IA e ChatGPT e mudou minha forma de trabalhar. Agora crio conteúdo para as redes sociais em metade do tempo. A Rhai explica de um jeito simples que qualquer pessoa entende.',
    servico: 'Curso IA & ChatGPT',
    data: 'fev/2026',
  },
  {
    nome: 'Marcos Vinícius Lima',
    cidade: 'Worcester, MA',
    texto: 'A Rhai configurou todo meu Google Meu Negócio e me ensinou a pedir avaliações dos clientes. Passei de 3 avaliações para 47 em 4 meses. Meu telefone não para de tocar! Atendimento nota 10.',
    servico: 'Google Business Profile',
    data: 'fev/2026',
  },
]

export default function ReviewsWidget() {
  return (
    <section className="section-padding bg-brand-bg" id="avaliacoes">
      <div className="container-main">
        <ScrollReveal className="text-center mb-12">
          <h2 className="heading-2 text-brand-dark mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
            Resultados reais de empreendedores brasileiros nos EUA e no Brasil que
            transformaram seus negócios com a Calazans Lumina.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-brand-dark font-bold text-lg">5.0 no Google</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {avaliacoes.map((review, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p className="text-brand-dark/70 text-sm leading-relaxed flex-1 mb-4">
                  &ldquo;{review.texto}&rdquo;
                </p>

                {/* Service tag */}
                <p className="text-brand-mint text-xs font-bold mb-3">{review.servico}</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-gray-50">
                  <div className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {review.nome.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <p className="text-brand-dark font-semibold text-sm">{review.nome}</p>
                    <p className="text-brand-dark/40 text-xs">{review.cidade} · {review.data}</p>
                  </div>
                  {/* Google icon */}
                  <svg className="w-5 h-5 ml-auto text-brand-dark/20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-10">
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
