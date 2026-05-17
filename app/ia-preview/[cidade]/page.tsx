import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { todasCidades, getCidadeBySlug } from '@/data/todas-cidades'
import PreviewFormCidade from './PreviewFormCidade'

export async function generateStaticParams() {
  return todasCidades.map((c) => ({ cidade: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ cidade: string }> }): Promise<Metadata> {
  const { cidade } = await params
  const c = getCidadeBySlug(cidade)
  if (!c) return {}
  const localLabel = c.pais === 'BR' ? `${c.nome}, ${c.siglaEstado}` : `${c.nome}, ${c.siglaEstado} (EUA)`
  return {
    title: `IA Grátis · Preview do Curso · ${localLabel}`,
    description: `Curso completo de IA pra quem mora em ${c.nome}. Baixe grátis 8 páginas de amostra agora — sem cartão, sem cadastro chato.`,
    alternates: { canonical: `https://calazanslumina.com.br/ia-preview/${cidade}` },
    robots: { index: true, follow: true },
  }
}

export default async function IAPreviewCidadePage({ params }: { params: Promise<{ cidade: string }> }) {
  const { cidade } = await params
  const c = getCidadeBySlug(cidade)
  if (!c) notFound()

  const localLabel = c.pais === 'BR' ? `${c.nome}, ${c.siglaEstado}` : `${c.nome}, MA`
  const moraEm = c.pais === 'BR' ? `em ${c.nome}` : `em ${c.nome}, Massachusetts`

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0405] to-[#0a0a0a] text-white">
      <section className="container-main py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block bg-red-500/15 border border-red-500/30 text-red-300 text-[11px] font-bold tracking-[0.32em] uppercase px-4 py-2 rounded-full mb-8">
            {localLabel} · Amostra grátis · sem cartão
          </span>
          <h1 className="font-serif italic font-normal text-4xl md:text-6xl leading-[0.95] mb-6">
            Pra quem mora {moraEm}.<br />
            <span className="text-red-400">8 páginas grátis</span> antes de pagar.
          </h1>
          <p className="text-white/75 text-lg md:text-xl leading-relaxed">
            Preview oficial do livro <em>IA do Zero ao Avançado</em>. Capa, sumário, primeiro capítulo + CTA final.{' '}
            <strong className="text-white">Recebe agora pelo WhatsApp.</strong>
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <PreviewFormCidade cidadeNome={c.nome} cidadeSlug={c.slug} pais={c.pais} />

          <div className="mt-8 grid grid-cols-3 gap-3 text-center">
            <div className="bg-white/[0.04] border border-white/10 rounded-xl py-4">
              <p className="font-serif italic text-3xl text-red-400">9</p>
              <p className="text-[9px] tracking-[0.28em] uppercase text-white/40 mt-1">páginas</p>
            </div>
            <div className="bg-white/[0.04] border border-white/10 rounded-xl py-4">
              <p className="font-serif italic text-3xl text-red-400">PDF</p>
              <p className="text-[9px] tracking-[0.28em] uppercase text-white/40 mt-1">imediato</p>
            </div>
            <div className="bg-white/[0.04] border border-white/10 rounded-xl py-4">
              <p className="font-serif italic text-3xl text-red-400">R$ 0</p>
              <p className="text-[9px] tracking-[0.28em] uppercase text-white/40 mt-1">grátis</p>
            </div>
          </div>

          <p className="text-center text-white/45 text-xs mt-8 leading-relaxed">
            Ao baixar, você concorda em receber dicas de IA por WhatsApp (1× por semana). Pode descadastrar a qualquer momento.{' '}
            <strong className="text-white/65">Sem spam.</strong>
          </p>
        </div>

        {/* === Por que em sua cidade === */}
        <div className="max-w-3xl mx-auto mt-20 bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10">
          <h2 className="font-serif italic text-3xl md:text-4xl mb-5">
            Por que IA importa <span className="text-red-400">{moraEm}</span>?
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">{c.comunidade}</p>
          <p className="text-white/70 leading-relaxed">{c.doresEspecificas}</p>
        </div>

        {/* === CTA pro curso completo === */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-white/55 text-sm mb-4">Já leu a amostra? Pega o curso completo:</p>
          <Link
            href="/ia-completo"
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold text-base py-4 px-8 rounded-full transition-colors"
          >
            Ver o livro completo · R$ 10
          </Link>
        </div>
      </section>
    </main>
  )
}
