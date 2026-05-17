'use client'

import { cursos } from '@/data/cursos'
import { notFound, useParams, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useEffect } from 'react'

export default function DownloadCursoPage() {
  const { slug } = useParams<{ slug: string }>()
  const searchParams = useSearchParams()
  const curso = cursos.find((c) => c.slug === slug)
  if (!curso) notFound()

  const totalAulas = curso.modulos.reduce((acc, m) => acc + m.aulas.length, 0)
  const pdfUrl = `/pdfs/${slug}.pdf`

  // Auto-start download SOMENTE para cursos GRATUITOS
  // Cursos pagos: PDF é entregue por email/WhatsApp pós-compra — não fica em /public/
  useEffect(() => {
    if (!curso.gratuito) return
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `${curso.nome}.pdf`
    link.click()
  }, [pdfUrl, curso.nome, curso.gratuito])

  // Curso pago — direcionar pra compra ou WhatsApp (se já comprou)
  if (!curso.gratuito) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-xl px-6">
          <div className="w-20 h-20 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-brand-dark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="font-serif text-3xl font-bold text-brand-dark mb-3">
            PDF entregue por e-mail apos a compra
          </h1>
          <p className="text-brand-dark/60 mb-2 leading-relaxed">
            O PDF do curso <strong className="text-brand-dark">{curso.nome}</strong> e enviado por e-mail e WhatsApp imediatamente apos o pagamento.
          </p>
          <p className="text-brand-dark/80 text-2xl font-serif font-bold mb-2 mt-6">
            R$ {curso.preco},00
          </p>
          <p className="text-brand-dark/40 text-sm mb-8">pagamento unico · acesso vitalicio</p>

          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <a
              href={curso.linkPagamento || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm justify-center inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Comprar por R$ {curso.preco},00
            </a>
            <a
              href="https://wa.me/5531982948067?text=Oi%21%20Comprei%20o%20curso%20mas%20n%C3%A3o%20recebi%20o%20PDF"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand-dark/20 text-brand-dark hover:bg-brand-bg text-sm py-3 rounded-full text-center font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Ja comprei · WhatsApp
            </a>
            <Link href={`/cursos/${slug}`} className="text-brand-dark/50 hover:text-brand-dark text-sm transition-colors">
              Ver detalhes do curso
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Curso gratuito — liberar download
  return (
    <>
      {/* Download bar */}
      <div className="sticky top-0 z-50 bg-brand-dark border-b border-white/10 py-4">
        <div className="container-main flex items-center justify-between gap-4">
          <p className="text-white text-sm truncate">
            <strong className="text-brand-mint">{curso.nome}</strong> — {curso.modulos.length} modulos · {totalAulas} aulas
          </p>
          <a
            href={pdfUrl}
            download={`${curso.nome}.pdf`}
            className="btn-primary text-sm whitespace-nowrap flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Baixar PDF
          </a>
        </div>
      </div>

      {/* Success message */}
      <div className="bg-white min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-lg px-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl font-bold text-brand-dark mb-4">
            Seu PDF esta sendo baixado!
          </h2>
          <p className="text-brand-dark/60 mb-2">
            O download do curso <strong className="text-brand-dark">{curso.nome}</strong> deve comecar automaticamente.
          </p>
          <p className="text-brand-dark/40 text-sm mb-8">
            {curso.modulos.length} modulos · {totalAulas} aulas · Conteudo completo
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={pdfUrl}
              download={`${curso.nome}.pdf`}
              className="btn-primary text-sm inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Baixar Novamente
            </a>
            <Link href={`/cursos/${slug}/aprender`} className="border border-brand-dark/20 text-brand-dark hover:bg-brand-bg px-6 py-3 rounded-full text-sm font-medium transition-colors text-center inline-flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Fazer Curso Online
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-brand-dark text-white text-center py-12">
        <div className="container-main max-w-2xl">
          <h3 className="font-serif text-2xl font-bold mb-3">Gostou do conteudo?</h3>
          <p className="text-white/50 mb-6">Conheca nossos outros cursos e servicos de marketing digital.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cursos" className="btn-primary text-sm">Ver Todos os Cursos</Link>
            <a
              href="https://wa.me/5531982948067?text=Olá! Baixei o curso gratuito e quero saber mais sobre os serviços da Calazans Lumina"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
