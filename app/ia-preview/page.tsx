import type { Metadata } from 'next'
import PreviewForm from './PreviewForm'

export const metadata: Metadata = {
  title: 'Preview Grátis · 8 Páginas do Curso Completo de IA',
  description:
    'Baixe grátis o preview de 8 páginas do livro "IA do Zero ao Avançado". Capa, sumário, primeiro capítulo + CTA final. Veja antes de comprar.',
  alternates: { canonical: 'https://calazanslumina.com.br/ia-preview' },
  robots: { index: true, follow: true },
}

export default function IAPreviewPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0405] to-[#0a0a0a] text-white">
      <section className="container-main py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block bg-red-500/15 border border-red-500/30 text-red-300 text-[11px] font-bold tracking-[0.32em] uppercase px-4 py-2 rounded-full mb-8">
            Amostra grátis · sem cartão
          </span>
          <h1 className="font-serif italic font-normal text-5xl md:text-7xl leading-[0.95] mb-6">
            Antes de pagar,<br/>
            <span className="text-red-400">leia 8 páginas</span> grátis.
          </h1>
          <p className="text-white/75 text-lg md:text-xl leading-relaxed">
            Preview oficial do livro <em>IA do Zero ao Avançado</em>. Mostra a capa, sumário completo,
            carta da autora, primeiro capítulo, e ainda o CTA final do livro. <strong className="text-white">Recebe agora pelo WhatsApp.</strong>
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <PreviewForm />

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
            Ao baixar, você concorda em receber dicas de IA por WhatsApp (1× por semana).
            Pode descadastrar a qualquer momento. <strong className="text-white/65">Sem spam.</strong>
          </p>
        </div>
      </section>
    </main>
  )
}
