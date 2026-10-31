import {
  videos as todos,
  videosDoServico,
  INSTAGRAM,
  arquivoVideo,
  arquivoPoster,
  duracaoISO,
  duracaoRelogio,
} from '@/data/videos'

// A prova de que existe uma pessoa atrás do site.
//
// ⚠️ O CARROSSEL NÃO TEM UMA LINHA DE JAVASCRIPT
// Carrossel costuma ser a desculpa para trazer uma biblioteca de 40 KB que
// roda no carregamento e derruba o PageSpeed. Aqui é `scroll-snap` do CSS:
// a faixa rola com dedo, com trackpad, com a roda do mouse e com Tab, e cada
// cartão encaixa sozinho. O navegador já sabe fazer isso desde sempre.
//
// ⚠️ CINCO VÍDEOS E ZERO BYTE DE VÍDEO NO CARREGAMENTO
// Cada <video> tem preload="none". O que a página baixa é o pôster WebP de
// cada um, ~20 KB, e mesmo assim só quando ele chega perto da tela, porque
// o pôster de vídeo é tratado como imagem adiada. Nenhum MP4 é tocado até
// alguém apertar o play. Sem autoplay: ela fala, e som que começa sozinho
// faz a pessoa fechar a aba.
//
// ⚠️ SANGRIA NA BORDA É PROPOSITAL
// No celular a faixa vaza até a beirada da tela e o quinto cartão aparece
// pela metade. É o que avisa que dá para arrastar — seta desenhada exigiria
// JavaScript e metade das pessoas não clica nela mesmo.

function Instagrama({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .48 1.4.9.43.42.7.82.92 1.4.17.42.37 1.05.42 2.23.06 1.28.07 1.66.07 4.88s-.01 3.6-.07 4.88c-.05 1.18-.25 1.8-.42 2.23-.22.58-.49.98-.91 1.4-.42.42-.82.68-1.4.9-.42.17-1.05.37-2.23.42-1.27.06-1.65.07-4.88.07s-3.6 0-4.88-.07c-1.18-.05-1.8-.25-2.23-.42-.58-.22-.98-.48-1.4-.9-.42-.42-.69-.82-.91-1.4-.17-.42-.37-1.05-.42-2.23C2.11 15.6 2.1 15.22 2.1 12s.01-3.6.07-4.88c.05-1.18.25-1.8.42-2.23.22-.58.49-.98.91-1.4.42-.42.82-.68 1.4-.9.42-.17 1.05-.37 2.23-.42C8.4 2.2 8.78 2.2 12 2.2Zm0 1.98c-3.17 0-3.54.01-4.79.07-.9.04-1.39.2-1.72.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.82-.32 1.72-.06 1.25-.07 1.62-.07 4.79s.01 3.54.07 4.79c.04.9.2 1.39.32 1.72.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.82.28 1.72.32 1.25.06 1.62.07 4.79.07s3.54-.01 4.79-.07c.9-.04 1.39-.2 1.72-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.82.32-1.72.06-1.25.07-1.62.07-4.79s-.01-3.54-.07-4.79c-.04-.9-.2-1.39-.32-1.72a2.86 2.86 0 0 0-.69-1.06 2.86 2.86 0 0 0-1.06-.69c-.33-.13-.82-.28-1.72-.32-1.25-.06-1.62-.07-4.79-.07Zm0 3.37a4.45 4.45 0 1 1 0 8.9 4.45 4.45 0 0 1 0-8.9Zm0 7.34a2.89 2.89 0 1 0 0-5.78 2.89 2.89 0 0 0 0 5.78Zm5.67-7.54a1.04 1.04 0 1 1-2.08 0 1.04 1.04 0 0 1 2.08 0Z" />
    </svg>
  )
}

export function BotaoSeguir({ escuro = false }: { escuro?: boolean }) {
  return (
    <a
      href={INSTAGRAM}
      target="_blank"
      rel="noopener noreferrer"
      className={
        'inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold transition-colors ' +
        (escuro
          ? 'bg-white text-brand-dark hover:bg-white/85'
          : 'bg-brand-dark text-white hover:bg-brand-mint')
      }
    >
      <Instagrama className="h-[1.15rem] w-[1.15rem]" />
      Seguir @calazanslumina
    </a>
  )
}

type Props = {
  /** recorta para os videos de um servico. Sem isto, mostra todos. */
  servico?: string
  rotulo?: string
  titulo?: string
  apoio?: string
}

export default function VideosCarrossel({
  servico,
  rotulo = 'Quem está do outro lado',
  titulo = 'Tem uma pessoa aqui. Ela fala, e você decide.',
  apoio = 'Cinco vídeos do perfil dela, sem edição de agência. Se fizer sentido para você, o resto sai toda semana por lá.',
}: Props) {
  const videos = servico ? videosDoServico(servico) : todos
  if (videos.length === 0) return null

  return (
    <section data-videos="" className="section-padding bg-brand-bg overflow-hidden">
      <div className="container-main">
        {/* Um ItemList de VideoObject: é assim que o Google entende que a
            página tem cinco vídeos, e o que a IA lê para resumir cada um. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Rhaideline Calazans explica',
              itemListElement: videos.map((v, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                item: {
                  '@type': 'VideoObject',
                  name: v.titulo,
                  description: v.resumo,
                  thumbnailUrl: ['https://calazanslumina.com.br' + arquivoPoster(v.slug)],
                  contentUrl: 'https://calazanslumina.com.br' + arquivoVideo(v.slug),
                  uploadDate: v.publicado,
                  duration: duracaoISO(v.duracao),
                  inLanguage: 'pt-BR',
                  publisher: {
                    '@type': 'Organization',
                    name: 'Calazans Lumina',
                    url: 'https://calazanslumina.com.br',
                  },
                },
              })),
            }),
          }}
        />

        {/* cabeçalho, à esquerda (regra 1) com o apoio numa coluna deslocada */}
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark/40">
              {rotulo}
            </p>
            <h2 className="heading-2 text-brand-dark mt-3">{titulo}</h2>
          </div>
          <div className="md:col-span-5 md:pb-1">
            <p className="text-brand-dark/55 leading-relaxed">{apoio}</p>
            <div className="mt-5">
              <BotaoSeguir />
            </div>
          </div>
        </div>

        {/* a faixa. -mx-* devolve a sangria até a beirada da tela no celular */}
        <div
          role="region"
          aria-label="Vídeos de Rhaideline Calazans"
          tabIndex={0}
          className="mt-10 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-5
                     md:-mx-8 md:scroll-px-8 md:px-8
                     [scrollbar-width:thin]
                     [&::-webkit-scrollbar]:h-1.5
                     [&::-webkit-scrollbar-thumb]:rounded-full
                     [&::-webkit-scrollbar-thumb]:bg-brand-dark/20
                     [&::-webkit-scrollbar-track]:bg-brand-dark/5"
        >
          {videos.map((v) => (
            <article
              key={v.slug}
              className="w-[248px] shrink-0 snap-start sm:w-[268px]"
            >
              <div className="overflow-hidden rounded-2xl bg-brand-dark ring-1 ring-black/[0.08] shadow-sm">
                <video
                  className="block aspect-[608/1080] h-auto w-full"
                  controls
                  playsInline
                  preload="none"
                  poster={arquivoPoster(v.slug)}
                  width={608}
                  height={1080}
                >
                  <source src={arquivoVideo(v.slug)} type="video/mp4" />
                  Seu navegador não abre vídeo. O resumo está logo abaixo.
                </video>
              </div>

              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-base font-bold leading-snug text-brand-dark">
                  {v.titulo}
                </h3>
                <span className="shrink-0 text-xs tabular-nums text-brand-dark/40">
                  {duracaoRelogio(v.duracao)}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-brand-dark/55">
                {v.resumo}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-1 text-xs text-brand-dark/35">
          {videos.length > 1 ? 'Arraste para o lado · ' : ''}
          {videos.length > 1
            ? 'publicados no Instagram entre 23 e 28 de agosto de 2026'
            : 'publicado no Instagram em agosto de 2026'}
        </p>
      </div>
    </section>
  )
}

export { Instagrama }
