import Link from 'next/link'
import { tituloAngulo, anguloLongo } from '@/lib/angulo-servico-br'
import type { CapitalBR } from '@/data/capitais-br'
import type { CidadeBR } from '@/data/cidades-brasil'

/**
 * O BLOCO QUE SUBSTITUI PricingTable + ReviewsWidget + CoursesSection NA
 * MALHA DE CIDADE BRASILEIRA.
 *
 * ⚠️ POR QUE ELES SAIRAM (medicao de 20/set/2026, `_blocos.py`)
 * Quebrando a pagina de cidade em secoes e comparando irma por irma:
 *
 *     #4 Investimento / Pacotes        268 palavras   IGUAL em todas
 *     #6 O que nossos clientes dizem   337            IGUAL em todas
 *     #5 Cursos de Marketing Digital   224            IGUAL em todas
 *     #7 Servicos Disponiveis           35            IGUAL em todas
 *     ------------------------------------------------------------
 *                                      864 de 1.205 palavras = 72%
 *
 * Sobreposicao entre irmas: 81,4% em /brasil/<cidade> e 68,1% em
 * /brasil/<cidade>/<servico>. O veredito do Google nessas paginas era
 * "Rastreada, mas nao indexada no momento".
 *
 * No `.com` a mesma doenca era menor (465 palavras repetidas) e trocar so
 * esses blocos derrubou a sobreposicao de 55% para 34%.
 *
 * ⚠️ E POR QUE ESTE BLOCO E BRASILEIRO, E NAO UMA TRADUCAO DO `.com`
 * Os dois sites vendem o mesmo servico, e por isso precisam falar de coisas
 * diferentes — senao competem entre si na mesma busca. A divisao e por
 * MERCADO, nao por texto:
 *
 *     .com     brasileiro nos Estados Unidos: comunidade local, Google
 *              Business Profile, WhatsApp Business API, licenca de oficio,
 *              inverno e temporada.
 *     .com.br  empresa no Brasil: concorrencia local, Pix e parcelamento,
 *              MEI e CNPJ, Google Meu Negocio, WhatsApp como canal
 *              principal, Instagram, sazonalidade brasileira.
 *
 * Nada aqui e uma promessa: sem preco fixo, sem prazo, sem "resultado
 * garantido", sem numero sem origem. O que varia de verdade — a dor da
 * cidade e a referencia dela — vem do dado, escrito pela pesquisa.
 */

type Cidade = CapitalBR | CidadeBR

export default function CtaLocalBR({
  cidade,
  servico,
}: {
  cidade: Cidade
  /** slug do servico quando a pagina e de um servico so */
  servico?: { slug: string; nome: string }
}) {
  const nome = cidade.nome
  const uf = cidade.siglaEstado
  const titulo = servico ? tituloAngulo(servico.slug) : ''
  const paragrafo = servico ? anguloLongo(servico.slug, nome) : ''

  const whats = `https://wa.me/5531982948067?text=${encodeURIComponent(
    servico
      ? `Oi! Sou de ${nome}, ${uf}. Quero falar sobre ${servico.nome}.`
      : `Oi! Sou de ${nome}, ${uf}. Quero falar sobre marketing digital para o meu negócio.`
  )}`

  return (
    <section className="section-padding bg-brand-bg">
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* o que e verdade sobre ESTA cidade — vem do dado, varia sempre */}
          <div className="lg:col-span-7">
            <h2 className="heading-2 text-brand-dark max-w-xl">
              {titulo || `O que trava quem vende serviço em ${nome}`}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-brand-dark/75">
              {cidade.doresEspecificas}
            </p>

            {paragrafo && (
              <p className="mt-5 leading-relaxed text-brand-dark/60">{paragrafo}</p>
            )}

            <div className="mt-8 border-t border-brand-dark/10 pt-6">
              <p className="text-sm leading-relaxed text-brand-dark/55">
                <span className="font-semibold text-brand-dark">
                  {nome}, {uf}
                </span>{' '}
                · {cidade.referencia}
              </p>
            </div>
          </div>

          {/* como comeca — sem preco de tabela e sem promessa de prazo */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-brand-dark/10 bg-white p-7">
              <h3 className="font-serif text-xl font-bold text-brand-dark">
                Como começa
              </h3>
              <ol className="mt-5 space-y-4 text-sm leading-relaxed text-brand-dark/65">
                <li className="flex gap-3">
                  <span className="font-serif text-lg font-bold text-brand-mint tabular-nums">1</span>
                  <span>
                    Você conta o que vende em {nome} e como o cliente chega hoje.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-serif text-lg font-bold text-brand-dark/30 tabular-nums">2</span>
                  <span>
                    Eu digo o que faria primeiro e o que não vale a pena agora —
                    mesmo quando isso é menos trabalho para mim.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-serif text-lg font-bold text-brand-dark/30 tabular-nums">3</span>
                  <span>
                    Escopo, prazo e valor saem em proposta. Conta de clínica não
                    é conta de prestador de serviço, então não existe preço de
                    tabela honesto.
                  </span>
                </li>
              </ol>

              <a
                href={whats}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 block rounded-full bg-brand-dark px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-mint"
              >
                Falar no WhatsApp
              </a>
              <p className="mt-3 text-center text-xs text-brand-dark/40">
                A mensagem já vai escrita. É só enviar.
              </p>

              {!servico && (
                <p className="mt-6 border-t border-brand-dark/10 pt-5 text-xs leading-relaxed text-brand-dark/45">
                  Prefere entender o serviço antes?{' '}
                  <Link href="/servicos" className="underline underline-offset-4">
                    Ver o que entra em cada um
                  </Link>
                  .
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
