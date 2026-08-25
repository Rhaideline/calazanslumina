import type { Metadata } from 'next'
import Link from 'next/link'
import CapturaEmail from '@/components/CapturaEmail'
import {
  partes,
  preparacao,
  erros,
  faq,
  checklistFinal,
  totalPassos,
} from '@/data/guia-google-meu-negocio'

/**
 * Guia gratuito "Como criar o Google Meu Negocio do zero".
 *
 * POR QUE ESTA PAGINA EXISTE
 * "como criar google meu negocio" e uma das buscas mais repetidas do publico
 * que este site atende: dono de negocio local, sem agencia, que vai fazer
 * sozinho. O site ja tinha o curso em /cursos/google-meu-negocio-do-zero, mas
 * curso e pagina de produto — quem esta buscando o passo a passo quer o passo
 * a passo na tela, nao uma vitrine.
 *
 * A REGRA AQUI E: ENTREGAR ANTES DE PEDIR
 * Os 18 passos aparecem inteiros nesta pagina, de graca, sem
 * cadastro. Esconder o conteudo atras do formulario derruba justamente o
 * ranqueamento que traz a pessoa. O PDF e um formato melhor (imprime, marca,
 * leva no celular sem internet) e por isso vale o clique — nao porque e a
 * unica forma de ler.
 *
 * O DOWNLOAD NAO E BLOQUEADO DE PROPOSITO
 * O botao baixa o PDF direto. A captura de e-mail fica ao lado, como opcao.
 * Quem so quer o arquivo pega o arquivo; quem quiser receber o resto entra na
 * lista por vontade propria — e essa lista converte melhor que a forcada.
 *
 * O conteudo mora em data/guia-google-meu-negocio.ts, o mesmo arquivo que
 * gera o PDF. Nao duplique texto aqui.
 */

const PDF = '/guia-google-meu-negocio-passo-a-passo.pdf'
const URL = 'https://calazanslumina.com.br/como-criar-google-meu-negocio'

const TITULO = 'Como criar o Google Meu Negócio do zero — guia passo a passo (PDF grátis)'
const DESC =
  'O passo a passo completo para criar, verificar e otimizar seu Perfil da Empresa no Google. ' +
  `${totalPassos} passos com as palavras que aparecem na tela, textos prontos para copiar e um PDF de 34 páginas para baixar de graça.`

export const metadata: Metadata = {
  title: TITULO,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    title: TITULO,
    description: DESC,
    url: URL,
    type: 'article',
  },
}

const todosPassos = partes.flatMap((p) => p.passos)

/* Setinha do caminho de clique. Inline porque sao dezenas na pagina e um
   componente por seta so adiciona ruido. */
function Seta() {
  return (
    <svg className="w-3.5 h-3.5 mt-1 shrink-0 text-brand-mint" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BotaoPdf() {
  return (
    <a
      href={PDF}
      download="Guia Google Meu Negocio do Zero - Calazans Lumina.pdf"
      className="btn-primary text-sm inline-flex items-center gap-2"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Baixar o PDF de 34 páginas
    </a>
  )
}

export default function ComoCriarGoogleMeuNegocioPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Como criar o Google Meu Negócio (Perfil da Empresa no Google) do zero',
    description: DESC,
    totalTime: 'PT1H30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'BRL', value: '0' },
    supply: preparacao.map((p) => ({ '@type': 'HowToSupply', name: p.item })),
    step: todosPassos.map((p) => ({
      '@type': 'HowToStep',
      position: p.n,
      name: p.titulo,
      text: p.objetivo,
      url: `${URL}#passo-${p.n}`,
      itemListElement: p.ondeClicar.map((c) => ({ '@type': 'HowToDirection', text: c })),
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ---------------------------------------------------------- hero -- */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-4xl">
          <p className="text-brand-mint text-xs font-bold tracking-[0.22em] uppercase mb-4">
            Guia gratuito · edição 2026
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Como criar seu Google Meu Negócio do zero
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-4 max-w-2xl">
            Todo tutorial diz &quot;acesse as configurações&quot; e não diz onde fica. Este aqui diz
            o que está escrito no botão, na ordem em que aparece na tela.
          </p>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl">
            São <strong className="text-white">{totalPassos} passos</strong>, do cadastro até a
            verificação por vídeo. Feito para quem nunca fez, tem medo de clicar errado e vai fazer
            sozinho.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <BotaoPdf />
            <a
              href="#passo-1"
              className="border border-white/25 text-white hover:bg-white/10 px-6 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Ler o guia aqui na página
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-10 border-t border-white/10">
            {[
              { n: `${totalPassos}`, t: 'passos numerados' },
              { n: '34', t: 'páginas no PDF' },
              { n: '1h30', t: 'do zero ao ar' },
              { n: 'R$ 0', t: 'é grátis, sempre' },
            ].map((c) => (
              <div key={c.t}>
                <p className="font-serif text-3xl text-white">{c.n}</p>
                <p className="text-white/45 text-xs uppercase tracking-[0.12em] mt-1">{c.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ o golpe -- */}
      <section className="bg-brand-mint/5 border-y border-brand-mint/15">
        <div className="container-main max-w-4xl py-8">
          <p className="text-brand-dark/80 text-sm leading-relaxed">
            <strong className="text-brand-mint">Antes de tudo, um aviso que vale dinheiro:</strong>{' '}
            criar, verificar e manter o perfil é gratuito, para sempre. O Google nunca liga cobrando
            taxa de ativação. É comum receber esse tipo de ligação logo depois que o telefone fica
            público — é golpe. Não pague e não passe código para ninguém por telefone.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------- preparacao -- */}
      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <h2 className="heading-2 text-brand-dark mb-3">O que ter em mãos antes de começar</h2>
          <div className="w-14 h-1 bg-brand-mint mb-6" />
          <p className="text-brand-dark/60 mb-10 max-w-2xl">
            Separe estas seis coisas agora. Quem começa sem elas trava no meio do cadastro, sai para
            procurar, e volta com o formulário expirado.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {preparacao.map((p, i) => (
              <div key={p.item} className="bg-brand-bg rounded-2xl p-6">
                <p className="text-brand-mint text-xs font-bold tracking-[0.16em] uppercase mb-2">
                  Item {i + 1}
                </p>
                <p className="font-bold text-brand-dark mb-2 leading-snug">{p.item}</p>
                <p className="text-brand-dark/65 text-sm leading-relaxed">{p.porque}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- passos -- */}
      {partes.map((parte) => (
        <section key={parte.numero} className="section-padding border-t border-gray-100">
          <div className="container-main max-w-4xl">
            <div className="mb-12">
              <p className="text-brand-mint text-xs font-bold tracking-[0.22em] uppercase mb-3">
                Parte {parte.numero} de {partes.length}
              </p>
              <h2 className="heading-2 text-brand-dark mb-4">{parte.titulo}</h2>
              <div className="w-14 h-1 bg-brand-mint mb-6" />
              <p className="text-brand-dark/60 max-w-2xl leading-relaxed">{parte.resumo}</p>
            </div>

            <div className="space-y-14">
              {parte.passos.map((passo) => (
                <article key={passo.n} id={`passo-${passo.n}`} className="scroll-mt-24">
                  <div className="flex gap-5 items-start mb-6">
                    <div className="shrink-0 w-14 h-14 bg-brand-mint text-white rounded-xl flex flex-col items-center justify-center leading-none">
                      <span className="text-[8px] tracking-[0.14em] uppercase opacity-80">Passo</span>
                      <span className="font-serif text-2xl">{passo.n}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                        {passo.titulo}
                      </h3>
                      <p className="text-brand-dark/45 text-xs uppercase tracking-[0.12em] mt-2">
                        {passo.tempo}
                      </p>
                    </div>
                  </div>

                  <div className="bg-brand-dark text-white rounded-2xl p-5 mb-6">
                    <p className="text-white/45 text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5">
                      Ao final deste passo
                    </p>
                    <p className="text-white/90 leading-relaxed">{passo.objetivo}</p>
                  </div>

                  <p className="text-brand-mint text-xs font-bold tracking-[0.18em] uppercase mb-3">
                    Onde clicar
                  </p>
                  <ol className="bg-brand-bg border-l-4 border-brand-mint rounded-r-2xl px-6 py-2 mb-6">
                    {passo.ondeClicar.map((c, i) => (
                      <li
                        key={c}
                        className={`flex gap-3 py-3 text-brand-dark/85 leading-relaxed ${
                          i > 0 ? 'border-t border-gray-200' : ''
                        }`}
                      >
                        <Seta />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ol>

                  <p className="text-brand-mint text-xs font-bold tracking-[0.18em] uppercase mb-3">
                    Por que isso importa
                  </p>
                  <p className="text-brand-dark/75 leading-relaxed">{passo.detalhe}</p>

                  {passo.copiar && (
                    <div className="mt-6 border border-dashed border-gray-300 rounded-2xl p-5 bg-gray-50/60">
                      <p className="text-brand-dark/50 text-[10px] font-bold tracking-[0.16em] uppercase mb-3">
                        {passo.copiar.titulo}
                      </p>
                      <pre className="whitespace-pre-wrap font-sans text-sm text-brand-dark/85 leading-relaxed">
                        {passo.copiar.texto}
                      </pre>
                    </div>
                  )}

                  {passo.dica && (
                    <div className="mt-5 bg-brand-mint/[0.07] rounded-2xl p-5">
                      <p className="text-brand-mint text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5">
                        Dica
                      </p>
                      <p className="text-brand-dark/80 text-sm leading-relaxed">{passo.dica}</p>
                    </div>
                  )}

                  {passo.atencao && (
                    <div className="mt-5 bg-brand-dark rounded-2xl p-5">
                      <p className="text-brand-light text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5">
                        Atenção
                      </p>
                      <p className="text-white/80 text-sm leading-relaxed">{passo.atencao}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* -------------------------------------------------- captura pdf -- */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-3xl">
          <CapturaEmail
            origem="guia-google-meu-negocio"
            isca="guia-google-meu-negocio-passo-a-passo.pdf"
            titulo="Prefere levar o guia impresso?"
            descricao="O PDF tem os 18 passos em 34 páginas, com checklist para marcar e os textos prontos para copiar. Deixe seu e-mail e ele chega agora — ou baixe direto no botão abaixo, sem cadastro."
          />
          <div className="text-center mt-8">
            <BotaoPdf />
            <p className="text-brand-dark/40 text-xs mt-3">
              Download direto, sem cadastro · 34 páginas A4, feito para imprimir
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- erros -- */}
      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <h2 className="heading-2 text-brand-dark mb-3">Os 10 erros que derrubam um perfil</h2>
          <div className="w-14 h-1 bg-brand-mint mb-6" />
          <p className="text-brand-dark/60 mb-10 max-w-2xl">
            Nenhum destes é teoria. São os motivos reais pelos quais um perfil some da busca, é
            suspenso, ou fica no ar sem trazer ninguém.
          </p>

          <div className="space-y-4">
            {erros.map((e, i) => (
              <div key={e.erro} className="border border-gray-100 rounded-2xl p-6 flex gap-5">
                <div className="shrink-0 w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-1.5 leading-snug">
                    {i + 1}. {e.erro}
                  </h3>
                  <p className="text-brand-dark/55 text-sm leading-relaxed">{e.porque}</p>
                  <p className="text-brand-dark/85 text-sm leading-relaxed mt-2">
                    <strong className="text-brand-mint">O que fazer:</strong> {e.solucao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- faq -- */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-3xl">
          <h2 className="heading-2 text-brand-dark mb-3">Perguntas que todo mundo faz</h2>
          <div className="w-14 h-1 bg-brand-mint mb-8" />
          <div className="space-y-7">
            {faq.map((f) => (
              <div key={f.q}>
                <p className="font-bold text-brand-dark mb-1.5 leading-snug">{f.q}</p>
                <p className="text-brand-dark/70 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- checklist -- */}
      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <h2 className="heading-2 text-brand-dark mb-3">Checklist para conferir no fim</h2>
          <div className="w-14 h-1 bg-brand-mint mb-6" />
          <p className="text-brand-dark/60 mb-10">
            O que sobrar sem marcar é exatamente o que está segurando seu perfil. No PDF esta lista
            vem com quadradinho para marcar à caneta.
          </p>

          {checklistFinal.map((g) => (
            <div key={g.grupo} className="mb-10">
              <p className="text-brand-mint text-xs font-bold tracking-[0.18em] uppercase mb-4 pb-2 border-b border-gray-100">
                {g.grupo}
              </p>
              <ul className="space-y-4">
                {g.itens.map((i) => (
                  <li key={i} className="flex gap-4">
                    <span className="shrink-0 w-4 h-4 mt-1 border border-gray-300 rounded-sm" />
                    <span className="text-brand-dark/80 leading-relaxed">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- fim -- */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Fez os {totalPassos} passos? Agora é rotina.
          </h2>
          <p className="text-white/65 leading-relaxed mb-8">
            O que separa um perfil que traz cliente de um perfil parado são 15 minutos por semana,
            sempre no mesmo dia. O PDF tem essa rotina resumida na última página, para imprimir e
            pendurar.
          </p>
          <div className="flex flex-wrap gap-4">
            <BotaoPdf />
            <Link
              href="/cursos/google-meu-negocio-do-zero"
              className="border border-white/25 text-white hover:bg-white/10 px-6 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Ver o curso completo (grátis)
            </Link>
            <a
              href="https://wa.me/5531982948067?text=Oi!%20Baixei%20o%20guia%20do%20Google%20Meu%20Neg%C3%B3cio%20e%20quero%20ajuda%20para%20configurar%20o%20meu"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/25 text-white hover:bg-white/10 px-6 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Prefere que a gente faça? Chame no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
