import type { Metadata } from 'next'
import Link from 'next/link'
import { videos, videosDestaque, videosPorCategoria } from '@/data/videos'
import { cursos } from '@/data/cursos'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Vídeos · Curso de IA, Reels e Aulas Gratuitas',
  description:
    'Assista grátis: aulas completas de IA do zero ao avançado, reels educacionais e conteúdos virais. Tudo da Calazans Lumina.',
  alternates: { canonical: 'https://calazanslumina.com.br/videos' },
  openGraph: {
    title: 'Vídeos · IA, Reels e Aulas Grátis · Calazans Lumina',
    description: 'Aulas completas, reels educacionais e conteúdos sobre IA, marketing e crescimento.',
    type: 'website',
  },
}

function getCursoBySlug(slug?: string) {
  return slug ? cursos.find((c) => c.slug === slug) : undefined
}

function VideoCard({ v }: { v: (typeof videos)[number] }) {
  const curso = getCursoBySlug(v.cursoRelacionado)
  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-red-400/40 transition-colors">
      <div className="relative aspect-[9/16] md:aspect-video bg-black">
        <video
          src={v.url}
          poster={v.thumbnail}
          controls
          preload="none"
          playsInline
          className="w-full h-full object-cover"
        >
          Seu navegador não suporta vídeo HTML5.
        </video>
        <span className="absolute top-3 right-3 bg-black/70 backdrop-blur text-white text-xs font-bold px-2.5 py-1 rounded-full pointer-events-none">
          {v.duracao}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
              v.categoria === 'curso'
                ? 'bg-brand-mint/20 text-brand-mint'
                : v.categoria === 'viral'
                ? 'bg-red-500/20 text-red-300'
                : 'bg-white/10 text-white/70'
            }`}
          >
            {v.categoria === 'curso' ? 'Aula completa' : v.categoria === 'viral' ? 'Viral' : 'Reel'}
          </span>
        </div>
        <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">{v.titulo}</h3>
        <p className="text-white/55 text-sm leading-relaxed mb-4">{v.descricao}</p>
        {curso && (
          <Link
            href={`/cursos/${curso.slug}`}
            className="text-brand-mint text-sm font-medium hover:underline inline-flex items-center gap-1"
          >
            Curso relacionado: {curso.nome.split(' — ')[0]}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

const videoListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: videos.map((v, i) => ({
    '@type': 'VideoObject',
    position: i + 1,
    name: v.titulo,
    description: v.descricao,
    contentUrl: v.url,
    uploadDate: '2026-05-16',
    duration: v.duracao,
  })),
}

export default function VideosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoListSchema) }} />
      <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0405] to-[#0a0a0a] text-white">
        <div className="container-main py-12">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Vídeos' }]} />
        </div>

        {/* === HERO === */}
        <section className="container-main pb-12 pt-4 md:pt-8 text-center">
          <ScrollReveal>
            <span className="inline-block bg-red-500/15 border border-red-500/30 text-red-300 text-[11px] font-bold tracking-[0.32em] uppercase px-4 py-2 rounded-full mb-8">
              Conteúdo gratuito · {videos.length} vídeos
            </span>
            <h1 className="font-serif italic font-normal text-5xl md:text-7xl leading-[0.95] mb-6 max-w-3xl mx-auto">
              IA explicada do <span className="text-red-400">jeito certo</span>.
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Aulas completas, reels educacionais e cortes virais sobre IA, marketing e crescimento.
              Tudo grátis, direto ao ponto.
            </p>
          </ScrollReveal>
        </section>

        {/* === DESTAQUES === */}
        {videosDestaque.length > 0 && (
          <section className="container-main py-12">
            <ScrollReveal className="mb-10">
              <h2 className="font-serif italic text-3xl md:text-4xl">⭐ Mais assistidos</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              {videosDestaque.map((v) => (
                <ScrollReveal key={v.slug}>
                  <VideoCard v={v} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* === AULAS COMPLETAS === */}
        {videosPorCategoria.curso.length > 0 && (
          <section className="container-main py-12">
            <ScrollReveal className="mb-10">
              <p className="text-brand-mint text-xs font-bold tracking-[0.32em] uppercase mb-2">Curso · 10 minutos</p>
              <h2 className="font-serif italic text-3xl md:text-4xl">Aulas completas</h2>
              <p className="text-white/55 text-sm mt-3 max-w-xl">
                Aulas explicativas de 10 minutos cada. Resumo prático dos livros e cursos do site.
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              {videosPorCategoria.curso.map((v) => (
                <ScrollReveal key={v.slug}>
                  <VideoCard v={v} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* === REELS === */}
        {videosPorCategoria.reel.length > 0 && (
          <section className="container-main py-12">
            <ScrollReveal className="mb-10">
              <p className="text-brand-mint text-xs font-bold tracking-[0.32em] uppercase mb-2">Reels · 45–55 segundos</p>
              <h2 className="font-serif italic text-3xl md:text-4xl">Cortes rápidos do curso</h2>
              <p className="text-white/55 text-sm mt-3 max-w-xl">
                Os 7 conceitos principais do curso completo, em vídeos curtos pra você assistir entre uma pausa e outra.
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videosPorCategoria.reel.map((v) => (
                <ScrollReveal key={v.slug}>
                  <VideoCard v={v} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* === VIRAIS === */}
        {videosPorCategoria.viral.length > 0 && (
          <section className="container-main py-12">
            <ScrollReveal className="mb-10">
              <p className="text-red-300 text-xs font-bold tracking-[0.32em] uppercase mb-2">Viral</p>
              <h2 className="font-serif italic text-3xl md:text-4xl">Salva pra rever</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              {videosPorCategoria.viral.map((v) => (
                <ScrollReveal key={v.slug}>
                  <VideoCard v={v} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* === CTA FINAL === */}
        <section className="container-main py-20 text-center">
          <ScrollReveal>
            <h2 className="font-serif italic text-3xl md:text-5xl mb-5 max-w-2xl mx-auto">
              Curtiu os vídeos? Pega o <span className="text-red-400">livro completo</span>.
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              95 páginas, 10 IAs explicadas, 50 prompts prontos. Por R$ 9,90.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/ia-completo"
                className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold text-base py-4 px-10 rounded-full transition-colors"
              >
                Ver o livro · R$ 9,90
              </Link>
              <Link
                href="/ia-preview"
                className="inline-block border border-white/20 hover:bg-white/10 text-white font-bold text-base py-4 px-10 rounded-full transition-colors"
              >
                Baixar amostra grátis
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </>
  )
}
