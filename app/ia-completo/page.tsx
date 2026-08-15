import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { cursos } from '@/data/cursos'
import StickyBuyBar from '@/components/StickyBuyBar'
import CountdownBar from '@/components/CountdownBar'
import TrackedCheckoutLink from '@/components/TrackedCheckoutLink'
import CourseViewTracker from '@/components/CourseViewTracker'
import { videos } from '@/data/videos'

export const metadata: Metadata = {
  title: 'IA do Zero ao Avançado · Curso Completo · R$ 9,90 (era R$ 297)',
  description:
    'A bíblia da IA pra brasileiro. 95 páginas. 10 IAs detalhadas (ChatGPT, Claude, Gemini, Midjourney, Canva, ElevenLabs, Suno e mais). 50 templates de prompt. 9 planos por profissão. De R$ 297 por R$ 9,90. Acesso vitalício.',
  // Esta LP renderiza o MESMO curso de /cursos/ia-chatgpt-completo (ver
  // cursos.find abaixo), com layout de venda e checkout proprio p/ trafego
  // pago. Mantida no ar, mas o canonical aponta p/ a pagina de curso: sao duas
  // URLs indexaveis do mesmo produto, e antes cada uma se declarava canonica.
  alternates: { canonical: 'https://calazanslumina.com.br/cursos/ia-chatgpt-completo' },
  openGraph: {
    title: 'IA do Zero ao Avançado · A Bíblia da IA pra Brasileiro · R$ 9,90',
    description: '95 páginas. 10 IAs. 50 templates. 9 planos por profissão. R$ 297 → R$ 9,90 (lançamento).',
    url: 'https://calazanslumina.com.br/ia-completo',
    type: 'website',
  },
}

const curso = cursos.find((c) => c.slug === 'ia-chatgpt-completo')!
const link = curso.linkPagamento || '#'
const heroVideo = videos.find((v) => v.slug === 'reel-3x-resultados')

export default function IACompletoPage() {
  return (
    <>
      <StickyBuyBar link={link} />
      <CourseViewTracker courseSlug={curso.slug} courseName={curso.nome} preco={curso.preco} />

      <main className="bg-[#0a0a0a] text-white overflow-x-hidden">
        {/* ════ HERO ════ */}
        <section className="relative pt-12 md:pt-20 pb-20 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute -top-1/3 -right-1/4 w-[700px] h-[700px] bg-gradient-radial from-red-500/50 via-red-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute -bottom-1/3 -left-1/4 w-[500px] h-[500px] bg-gradient-radial from-amber-500/30 via-transparent to-transparent rounded-full blur-3xl" />
          </div>

          <div className="container-main relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 text-red-300 text-[11px] font-bold tracking-[0.32em] uppercase px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                Lançamento · maio 2026
              </span>

              <h1 className="font-serif italic font-normal text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8">
                A <span className="text-red-400">bíblia da IA</span><br />
                pra brasileiro.
              </h1>

              <p className="text-xl md:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
                95 páginas. 10 IAs detalhadas. 50 templates de prompt copiáveis. 9 planos por profissão.
                Tudo num único PDF — pra você dominar IA sem ser técnico.
              </p>

              {/* === VSL VIDEO (1 reel, lazy, sem autoplay) === */}
              {heroVideo && (
                <div className="max-w-md mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl shadow-red-500/20 border border-white/10 bg-black">
                  <video
                    src={heroVideo.url}
                    poster={heroVideo.thumbnail}
                    controls
                    playsInline
                    preload="none"
                    className="w-full aspect-[9/16] object-cover"
                  >
                    Seu navegador não suporta vídeo HTML5.
                  </video>
                </div>
              )}

              {/* === COUNTDOWN === */}
              <div className="mb-6">
                <CountdownBar variant="hero" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-4">
                <TrackedCheckoutLink
                  href={link}
                  courseSlug={curso.slug}
                  courseName={curso.nome}
                  preco={curso.preco}
                  utmMedium="hero-vsl"
                  className="group relative bg-red-500 hover:bg-red-600 text-white font-bold text-lg md:text-xl px-10 py-5 rounded-full inline-flex items-center gap-3 transition-all hover:scale-105 shadow-2xl shadow-red-500/40"
                >
                  Garantir por R$ 9,90
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </TrackedCheckoutLink>
                <p className="text-white/50 text-sm">
                  De <span className="line-through">R$ 297</span> · Acesso vitalício
                </p>
              </div>

              {/* Authority strip — quem escreveu */}
              <a href="/sobre" className="inline-flex items-center gap-3 bg-white/5 border border-white/10 hover:border-white/25 rounded-full pl-1 pr-5 py-1 mb-10 transition-all group">
                <Image
                  src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67d859c95106d5e512376e8e.jpeg"
                  alt="Rhaideline Calazans"
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <span className="text-white/65 text-xs md:text-sm">
                  Escrito por <strong className="text-white">Rhaideline Calazans</strong>
                </span>
              </a>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto pt-8 border-t border-white/10">
                <div>
                  <p className="font-serif italic text-3xl md:text-5xl text-red-400">95</p>
                  <p className="text-[9px] md:text-[10px] tracking-[0.28em] uppercase text-white/40 mt-1">páginas</p>
                </div>
                <div>
                  <p className="font-serif italic text-3xl md:text-5xl text-red-400">10</p>
                  <p className="text-[9px] md:text-[10px] tracking-[0.28em] uppercase text-white/40 mt-1">IAs</p>
                </div>
                <div>
                  <p className="font-serif italic text-3xl md:text-5xl text-red-400">50</p>
                  <p className="text-[9px] md:text-[10px] tracking-[0.28em] uppercase text-white/40 mt-1">prompts</p>
                </div>
                <div>
                  <p className="font-serif italic text-3xl md:text-5xl text-red-400">9</p>
                  <p className="text-[9px] md:text-[10px] tracking-[0.28em] uppercase text-white/40 mt-1">profissões</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════ PROBLEMA ════ */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#0a0a0a] to-[#141414]">
          <div className="container-main max-w-4xl">
            <p className="text-red-400 text-xs tracking-[0.4em] uppercase font-bold mb-4 text-center">O problema</p>
            <h2 className="font-serif italic font-normal text-4xl md:text-6xl leading-tight mb-12 text-center">
              Você sente que a IA<br/>
              <span className="text-red-400">está passando</span> por você?
            </h2>

            <div className="space-y-5 max-w-3xl mx-auto">
              {curso.vsl.problemas.map((p, i) => (
                <div key={i} className="flex gap-4 items-start bg-white/[0.03] border border-white/10 rounded-2xl p-5 md:p-6">
                  <span className="font-serif italic text-red-400 text-3xl md:text-4xl leading-none flex-shrink-0">×</span>
                  <p className="text-lg md:text-xl text-white/85 leading-relaxed">{p}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-white/55 text-lg md:text-xl mt-12 max-w-2xl mx-auto leading-relaxed font-serif italic">
              Não é falta de inteligência. É falta de um <span className="text-red-400">método claro</span>, em português, pra brasileiro.
            </p>
          </div>
        </section>

        {/* ════ TRANSFORMAÇÃO ════ */}
        <section className="py-20 md:py-28 bg-[#F7F2E8] text-[#0a0a0a]">
          <div className="container-main max-w-5xl">
            <div className="text-center mb-16">
              <p className="text-red-500 text-xs tracking-[0.4em] uppercase font-bold mb-4">A transformação</p>
              <h2 className="font-serif italic font-normal text-4xl md:text-6xl leading-tight mb-6">
                Em <span className="text-red-500">30 dias</span>, sua relação<br/>
                com tecnologia <span className="text-red-500">vira</span>.
              </h2>
              <p className="text-lg md:text-xl text-[#3D3527] max-w-3xl mx-auto leading-relaxed">{curso.vsl.transformacao}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-12">
              {curso.vsl.antesDepois.map((ad, i) => (
                <div key={i} className="grid grid-cols-2 gap-0 bg-white border border-[#0a0a0a]/10 rounded-2xl overflow-hidden">
                  <div className="p-5 bg-[#0a0a0a]/[0.03] border-r border-[#0a0a0a]/10">
                    <p className="text-[10px] tracking-[0.32em] uppercase font-bold text-red-500 mb-2">Antes</p>
                    <p className="text-[#3D3527] text-sm md:text-base leading-snug line-through opacity-70">{ad.antes}</p>
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] tracking-[0.32em] uppercase font-bold text-green-700 mb-2">Depois</p>
                    <p className="text-[#0a0a0a] text-sm md:text-base leading-snug font-medium">{ad.depois}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ O QUE TEM DENTRO ════ */}
        <section className="py-20 md:py-28 bg-[#0a0a0a]">
          <div className="container-main max-w-5xl">
            <div className="text-center mb-16">
              <p className="text-red-400 text-xs tracking-[0.4em] uppercase font-bold mb-4">O que tem dentro</p>
              <h2 className="font-serif italic font-normal text-4xl md:text-6xl leading-tight mb-4">
                <span className="text-red-400">6 partes</span>, 33 capítulos,<br/>
                95 páginas de conteúdo prático.
              </h2>
              <p className="text-white/55 text-lg max-w-2xl mx-auto">Estrutura pensada pra quem nunca usou IA — e pra quem já usa e quer evoluir.</p>
            </div>

            <div className="space-y-4">
              {curso.modulos.map((m, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-red-500/40 transition-colors">
                  <div className="flex items-start gap-5">
                    <span className="font-serif italic text-red-400 text-4xl md:text-5xl leading-none flex-shrink-0 w-12 text-center">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-serif italic font-normal text-2xl md:text-3xl mb-3">{m.titulo}</h3>
                      <ul className="text-white/65 space-y-1.5 text-sm md:text-base">
                        {m.aulas.slice(0, 5).map((a, j) => (
                          <li key={j} className="flex gap-2"><span className="text-red-400 flex-shrink-0">·</span><span>{a}</span></li>
                        ))}
                        {m.aulas.length > 5 && (
                          <li className="text-red-400 italic text-sm pt-1">+ {m.aulas.length - 5} subtópicos</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ 10 IAS COBERTAS ════ */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#0a0a0a] to-[#1a0405]">
          <div className="container-main max-w-6xl">
            <div className="text-center mb-16">
              <p className="text-red-400 text-xs tracking-[0.4em] uppercase font-bold mb-4">Catálogo completo</p>
              <h2 className="font-serif italic font-normal text-4xl md:text-6xl leading-tight mb-4">
                Cada uma das <span className="text-red-400">10 IAs</span>,<br />
                em <span className="text-red-400">4 páginas</span> dedicadas.
              </h2>
              <p className="text-white/55 text-lg max-w-2xl mx-auto">Não é menção rápida. É tutorial completo passo a passo de cada ferramenta.</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { name: 'ChatGPT', tag: 'OpenAI · texto', gradient: 'from-emerald-500 to-emerald-700' },
                { name: 'Claude', tag: 'Anthropic · análise', gradient: 'from-orange-500 to-orange-700' },
                { name: 'Gemini', tag: 'Google · pesquisa', gradient: 'from-blue-500 via-purple-500 to-amber-500' },
                { name: 'DALL-E', tag: 'OpenAI · imagem', gradient: 'from-zinc-700 to-zinc-900' },
                { name: 'Midjourney', tag: 'arte cinematográfica', gradient: 'from-zinc-800 to-black' },
                { name: 'Canva AI', tag: 'design rápido', gradient: 'from-cyan-500 to-purple-600' },
                { name: 'ElevenLabs', tag: 'voz humana', gradient: 'from-zinc-200 to-zinc-500' },
                { name: 'Suno', tag: 'música em 1 min', gradient: 'from-orange-500 to-pink-600' },
                { name: 'Runway', tag: 'vídeo com IA', gradient: 'from-zinc-800 to-zinc-900' },
                { name: 'Cursor', tag: 'código sem programar', gradient: 'from-zinc-900 to-black' },
              ].map((ia, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 hover:border-red-500/40 transition-colors group">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ia.gradient} mb-3 flex items-center justify-center font-serif italic text-2xl text-white group-hover:scale-110 transition-transform`}>
                    {ia.name[0]}
                  </div>
                  <p className="font-serif italic text-xl mb-1">{ia.name}</p>
                  <p className="text-white/45 text-xs">{ia.tag}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <TrackedCheckoutLink href={link} courseSlug={curso.slug} courseName={curso.nome} preco={curso.preco} utmMedium="ias-grid" className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold text-lg px-10 py-5 rounded-full transition-all hover:scale-105 shadow-xl shadow-red-500/30">
                Quero acesso por R$ 9,90
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </TrackedCheckoutLink>
            </div>
          </div>
        </section>

        {/* ════ PRA QUEM É ════ */}
        <section className="py-20 md:py-28 bg-[#F7F2E8] text-[#0a0a0a]">
          <div className="container-main max-w-5xl">
            <div className="text-center mb-16">
              <p className="text-red-500 text-xs tracking-[0.4em] uppercase font-bold mb-4">Pra quem é</p>
              <h2 className="font-serif italic font-normal text-4xl md:text-6xl leading-tight mb-4">
                Esse livro foi feito <span className="text-red-500">pra você</span> se..
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {curso.paraQuem.map((q, i) => (
                <div key={i} className="bg-white border border-[#0a0a0a]/10 rounded-2xl p-5 md:p-6 flex gap-4 items-start hover:border-red-500/40 transition-colors">
                  <span className="font-serif italic text-red-500 text-2xl md:text-3xl leading-none flex-shrink-0">✓</span>
                  <p className="text-[#3D3527] text-base md:text-lg leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ BÔNUS ════ */}
        {curso.bonus && (
          <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a1408] via-[#0a0a0a] to-[#1a1408]">
            <div className="container-main max-w-4xl">
              <div className="text-center mb-12">
                <p className="text-amber-400 text-xs tracking-[0.4em] uppercase font-bold mb-4">Bônus inclusos</p>
                <h2 className="font-serif italic font-normal text-4xl md:text-6xl leading-tight mb-4">
                  + <span className="text-amber-400">5 bônus</span> que sozinhos<br />
                  valem mais <span className="text-amber-400">R$ 265</span>.
                </h2>
              </div>

              <div className="space-y-3">
                {curso.bonus.map((b, i) => (
                  <div key={i} className="bg-amber-500/[0.08] border border-amber-500/30 rounded-2xl p-5 md:p-6 flex gap-4 items-start">
                    <span className="font-serif italic text-amber-400 text-3xl md:text-4xl leading-none flex-shrink-0">★</span>
                    <p className="text-white/90 text-base md:text-lg leading-relaxed flex-1">{b}</p>
                  </div>
                ))}
              </div>

              {/* === STACK VISUAL DE VALOR === */}
              <div className="mt-10 bg-gradient-to-br from-amber-500/[0.06] via-red-500/[0.04] to-amber-500/[0.06] border border-amber-500/40 rounded-3xl p-6 md:p-10">
                <p className="text-amber-300 text-xs tracking-[0.4em] uppercase font-bold text-center mb-6">A conta da economia</p>

                <div className="space-y-2.5 max-w-md mx-auto mb-6 font-mono text-sm md:text-base">
                  <div className="flex justify-between items-center text-white/85">
                    <span>📘 Livro IA do Zero ao Avançado (95 págs)</span>
                    <span className="text-white/40 line-through">R$ 297</span>
                  </div>
                  <div className="flex justify-between items-center text-white/85">
                    <span>⭐ Bônus 1 · 50 templates de prompt</span>
                    <span className="text-white/40 line-through">R$ 97</span>
                  </div>
                  <div className="flex justify-between items-center text-white/85">
                    <span>⭐ Bônus 2 · 9 planos por profissão</span>
                    <span className="text-white/40 line-through">R$ 47</span>
                  </div>
                  <div className="flex justify-between items-center text-white/85">
                    <span>⭐ Bônus 3 · Glossário 18 termos</span>
                    <span className="text-white/40 line-through">R$ 27</span>
                  </div>
                  <div className="flex justify-between items-center text-white/85">
                    <span>⭐ Bônus 4 · Plano de 30 dias</span>
                    <span className="text-white/40 line-through">R$ 47</span>
                  </div>
                  <div className="flex justify-between items-center text-white/85">
                    <span>⭐ Bônus 5 · Comparativo 10 IAs</span>
                    <span className="text-white/40 line-through">R$ 47</span>
                  </div>
                  <div className="border-t border-amber-500/30 pt-3 mt-3 flex justify-between items-center">
                    <span className="text-white/55 text-xs tracking-[0.28em] uppercase">Valor total</span>
                    <span className="text-white/55 line-through text-lg">R$ 562</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-2">
                    <span className="text-amber-300 text-xs tracking-[0.28em] uppercase font-bold">Você paga hoje</span>
                    <span className="font-serif italic text-amber-300 text-5xl md:text-6xl leading-none">R$ 9,90</span>
                  </div>
                  <p className="text-center text-green-400 font-bold text-sm pt-2">⚡ Economia de R$ 552,10 · 98% OFF</p>
                </div>

                <TrackedCheckoutLink
                  href={link}
                  courseSlug={curso.slug}
                  courseName={curso.nome}
                  preco={curso.preco}
                  utmMedium="bonus-stack"
                  className="block bg-red-500 hover:bg-red-600 text-white font-bold text-lg py-4 rounded-full text-center transition-all hover:scale-[1.02] shadow-xl shadow-red-500/30 max-w-md mx-auto"
                >
                  Garantir tudo por R$ 9,90 →
                </TrackedCheckoutLink>
                <p className="text-white/45 text-xs text-center mt-4"><CountdownBar /></p>
              </div>
            </div>
          </section>
        )}

        {/* ════ DEPOIMENTOS ════ */}
        <section className="py-20 md:py-28 bg-[#0a0a0a]">
          <div className="container-main max-w-5xl">
            {/* Antes: "Quem ja comprou — O que eles dizem", com depoimentos
                escritos a mao. Nao havia comprador nenhum por tras deles.
                Trocado pelo conteudo real do produto, que e verificavel. */}
            <div className="text-center mb-16">
              <p className="text-red-400 text-xs tracking-[0.4em] uppercase font-bold mb-4">O que tem dentro</p>
              <h2 className="font-serif italic font-normal text-4xl md:text-6xl leading-tight">
                Exatamente <span className="text-red-400">isto</span>.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {curso.oQueVaiAprender.map((item: string, i: number) => (
                <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 flex gap-5">
                  <p className="font-serif italic text-red-400 text-3xl leading-none shrink-0 w-10">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="text-white/85 text-base md:text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-white/40 text-sm text-center mt-10">
              {curso.numeroPaginas ? `${curso.numeroPaginas} páginas em PDF · ` : ''}
              entrega por e-mail assim que o pagamento for confirmado · acesso permanente
            </p>
          </div>
        </section>

        {/* ════ PREÇO + GARANTIA ════ */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#0a0a0a] via-[#1a0405] to-[#0a0a0a]">
          <div className="container-main max-w-3xl">
            <div className="text-center mb-12">
              <p className="text-red-400 text-xs tracking-[0.4em] uppercase font-bold mb-4">Preço de lançamento</p>
              <h2 className="font-serif italic font-normal text-4xl md:text-6xl leading-tight mb-6">
                Vale <span className="line-through text-white/30">R$ 297</span>.<br />
                Você paga <span className="text-red-400">R$ 9,90</span>.
              </h2>
              <p className="text-white/65 text-lg max-w-xl mx-auto">{curso.vsl.urgencia}</p>
            </div>

            <div className="bg-white/[0.04] border-2 border-red-500/40 rounded-3xl p-8 md:p-12 text-center">
              <div className="mb-6">
                <p className="text-white/40 text-sm tracking-[0.28em] uppercase mb-2">Investimento único</p>
                <div className="flex items-baseline justify-center gap-4 mb-2">
                  <span className="font-serif italic text-7xl md:text-9xl text-white">R$ 9,90</span>
                  <span className="font-serif italic text-3xl md:text-4xl text-white/30 line-through">R$ 297</span>
                </div>
                <p className="text-amber-300 text-sm">96% de desconto · acesso vitalício</p>
              </div>

              <TrackedCheckoutLink
                href={link}
                courseSlug={curso.slug}
                courseName={curso.nome}
                preco={curso.preco}
                utmMedium="oferta-section"
                className="block bg-red-500 hover:bg-red-600 text-white font-bold text-xl md:text-2xl py-5 md:py-6 rounded-full transition-all hover:scale-[1.02] shadow-2xl shadow-red-500/40 mb-6 text-center"
              >
                Garantir meu acesso vitalício →
              </TrackedCheckoutLink>

              <div className="grid sm:grid-cols-3 gap-3 text-sm">
                <div className="flex items-center justify-center gap-2 text-white/65">
                  <span className="text-green-400">✓</span>
                  PDF imediato no email
                </div>
                <div className="flex items-center justify-center gap-2 text-white/65">
                  <span className="text-green-400">✓</span>
                  Sem mensalidade
                </div>
                <div className="flex items-center justify-center gap-2 text-white/65">
                  <span className="text-green-400">✓</span>
                  Pagamento único
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-amber-400 text-xs tracking-[0.4em] uppercase font-bold mb-3">📩 Entrega &amp; Acesso</p>
              <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-xl mx-auto">{curso.vsl.garantia}</p>
            </div>
          </div>
        </section>

        {/* ════ FAQ ════ */}
        <section className="py-20 md:py-28 bg-[#0a0a0a]">
          <div className="container-main max-w-3xl">
            <div className="text-center mb-12">
              <p className="text-red-400 text-xs tracking-[0.4em] uppercase font-bold mb-4">Perguntas frequentes</p>
              <h2 className="font-serif italic font-normal text-4xl md:text-6xl leading-tight">
                Ainda tem <span className="text-red-400">dúvida?</span>
              </h2>
            </div>

            <div className="space-y-3">
              {curso.vsl.objecoes.map((o, i) => (
                <details key={i} className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
                  <summary className="cursor-pointer p-6 flex justify-between items-start gap-4 hover:bg-white/[0.05] transition-colors">
                    <span className="font-serif italic text-xl md:text-2xl">{o.pergunta}</span>
                    <span className="text-red-400 text-2xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-white/75 text-base md:text-lg leading-relaxed">{o.resposta}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ════ CTA FINAL ════ */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-red-900 via-[#0a0a0a] to-[#1a0405] relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-500/40 via-transparent to-transparent rounded-full blur-3xl" />
          </div>

          <div className="container-main max-w-3xl text-center relative z-10">
            <p className="text-red-300 text-xs tracking-[0.4em] uppercase font-bold mb-6">Última chamada</p>
            <h2 className="font-serif italic font-normal text-5xl md:text-7xl leading-[0.95] mb-8">
              Você fechou esse livro<br />
              <span className="text-red-400">sabendo</span> que precisa.
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
              R$ 9,90 não muda sua vida. Mas <em>aprender IA</em> em 2026 muda. Acessa, lê, aplica nessa semana mesmo.
            </p>

            <TrackedCheckoutLink
              href={link}
              courseSlug={curso.slug}
              courseName={curso.nome}
              preco={curso.preco}
              utmMedium="cta-final"
              className="inline-flex items-center gap-3 bg-white hover:bg-amber-50 text-red-600 font-bold text-xl md:text-2xl px-12 py-6 rounded-full transition-all hover:scale-105 shadow-2xl shadow-black/40"
            >
              Acessar por R$ 9,90
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </TrackedCheckoutLink>

            <p className="text-white/50 text-sm mt-6">95 páginas · 10 IAs · 50 templates · acesso vitalício</p>
          </div>
        </section>
      </main>
    </>
  )
}
