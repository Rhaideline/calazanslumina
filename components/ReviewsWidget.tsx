import ScrollReveal from '@/components/ScrollReveal'
import { projetos } from '@/data/portfolio'
import Link from 'next/link'

/**
 * Prova social do site.
 *
 * O QUE ESTAVA AQUI ANTES, E POR QUE SAIU
 * Seis depoimentos escritos a mao — "Fernanda Oliveira", "Carlos Eduardo
 * Santos", "Roberto Almeida" — com numeros especificos ("triplicou os
 * agendamentos", "mais de 30 leads", "de 3 para 47 avaliacoes"), exibidos com
 * cinco estrelas, o icone do Google em cada card e o texto "5.0 no Google".
 *
 * Nenhum deles veio do Google. O componente os apresentava como se viessem.
 * Isso e publicidade enganosa pelo CDC, viola a politica de avaliacoes do
 * proprio Google e aparecia em mais de 11 mil URLs — home, todas as paginas de
 * cidade e todas as de servico.
 *
 * O QUE ENTRA NO LUGAR
 * Os projetos reais do portfolio, com as metricas que ja estao documentadas e
 * o site do cliente no ar. Qualquer pessoa pode abrir rs-developmentgroup.com
 * e conferir. Prova verificavel convence mais que elogio anonimo — e nao
 * expoe o negocio.
 *
 * O convite para avaliar no Google continua: convidar e honesto, inventar nao.
 */

const GOOGLE_PERFIL = 'https://share.google/n2TRtwjKEMy65uSx7'

export default function ReviewsWidget() {
  // so os que tem site no ar: e o que o visitante consegue verificar sozinho
  const verificaveis = projetos.filter((p) => p.url).slice(0, 3)

  return (
    <section className="section-padding bg-brand-bg" id="avaliacoes">
      <div className="container-main">
        <ScrollReveal className="text-center mb-12">
          <h2 className="heading-2 text-brand-dark mb-4">Trabalhos no ar</h2>
          <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
            Cada site abaixo está publicado e pode ser aberto agora. Os números
            vêm do Search Console de cada projeto.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {verificaveis.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 100}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
                <p className="text-brand-mint text-xs font-bold uppercase tracking-wider mb-2">
                  {p.categoria}
                </p>
                <h3 className="text-brand-dark font-bold text-lg mb-1">{p.nome}</h3>
                <p className="text-brand-dark/40 text-xs mb-4">
                  {p.local} · {p.ano}
                </p>

                <p className="text-brand-dark/70 text-sm leading-relaxed flex-1 mb-4">
                  {p.resumo}
                </p>

                {p.metricas?.length > 0 && (
                  <div className="flex gap-4 pb-4 mb-4 border-b border-gray-50">
                    {p.metricas.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <p className="text-brand-dark font-bold text-xl leading-none">
                          {m.valor}
                        </p>
                        <p className="text-brand-dark/40 text-[11px] mt-1">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between gap-3">
                  <Link
                    href={`/portfolio/${p.slug}`}
                    className="text-brand-dark font-semibold text-sm hover:text-brand-mint transition-colors"
                  >
                    Ver o caso
                  </Link>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-dark/50 text-xs hover:text-brand-dark transition-colors"
                  >
                    abrir o site ↗
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-brand-dark font-semibold hover:text-brand-mint transition-colors"
          >
            Ver todos os trabalhos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <a
            href={GOOGLE_PERFIL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-dark/60 text-sm hover:text-brand-dark transition-colors"
          >
            É cliente? Deixe sua avaliação no Google
          </a>
        </div>
      </div>
    </section>
  )
}
