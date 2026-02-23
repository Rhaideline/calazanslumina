'use client'

import { cursos } from '@/data/cursos'
import { notFound, useParams } from 'next/navigation'

export default function DownloadCursoPage() {
  const { slug } = useParams<{ slug: string }>()
  const curso = cursos.find((c) => c.slug === slug)
  if (!curso) notFound()

  const totalAulas = curso.modulos.reduce((acc, m) => acc + m.aulas.length, 0)

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print-break { page-break-before: always; }
        }
      `}</style>

      {/* Download bar */}
      <div className="no-print sticky top-0 z-50 bg-brand-dark border-b border-white/10 py-4">
        <div className="container-main flex items-center justify-between gap-4">
          <p className="text-white text-sm truncate">
            <strong className="text-brand-mint">{curso.nome}</strong> — {curso.modulos.length} módulos · {totalAulas} aulas
          </p>
          <button
            onClick={() => window.print()}
            className="btn-primary text-sm whitespace-nowrap flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Baixar PDF
          </button>
        </div>
      </div>

      {/* Course content */}
      <div className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Cover */}
          <div className="text-center mb-16 pb-12 border-b-2 border-brand-mint/30">
            <p className="text-brand-mint text-sm font-bold uppercase tracking-widest mb-4">Calazans Lumina</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
              {curso.nome}
            </h1>
            <p className="text-brand-dark/60 text-lg max-w-xl mx-auto leading-relaxed">
              {curso.descricaoLonga}
            </p>
            <div className="flex justify-center gap-8 mt-8">
              <div>
                <p className="text-brand-mint font-bold text-2xl">{curso.modulos.length}</p>
                <p className="text-brand-dark/40 text-xs">Módulos</p>
              </div>
              <div>
                <p className="text-brand-mint font-bold text-2xl">{totalAulas}</p>
                <p className="text-brand-dark/40 text-xs">Aulas</p>
              </div>
              {curso.gratuito && (
                <div>
                  <p className="text-green-600 font-bold text-2xl">GRÁTIS</p>
                  <p className="text-brand-dark/40 text-xs">Acesso livre</p>
                </div>
              )}
            </div>
          </div>

          {/* Para quem */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">Para quem é este curso?</h2>
            <ul className="space-y-3">
              {curso.paraQuem.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-brand-mint/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-brand-dark/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* O que vai aprender */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">O que você vai aprender</h2>
            <ul className="space-y-3">
              {curso.oQueVaiAprender.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-brand-mint rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-brand-dark/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Módulos */}
          {curso.modulos.map((modulo, i) => (
            <div key={i} className={`mb-10 ${i > 0 ? 'print-break' : ''}`}>
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-brand-mint rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold text-brand-dark">{modulo.titulo}</h2>
                  <p className="text-brand-dark/40 text-sm">{modulo.aulas.length} aulas</p>
                </div>
              </div>

              <ul className="space-y-4 pl-14">
                {modulo.aulas.map((aula, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="w-6 h-6 border border-brand-mint/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-brand-mint text-xs font-medium">
                      {j + 1}
                    </span>
                    <span className="text-brand-dark/70 leading-relaxed">{aula}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Footer */}
          <div className="mt-16 pt-8 border-t-2 border-brand-mint/30 text-center">
            <p className="text-brand-mint font-bold text-sm uppercase tracking-widest mb-2">Calazans Lumina</p>
            <p className="text-brand-dark/40 text-sm">
              Marketing Digital para Brasileiros nos EUA e Brasil
            </p>
            <p className="text-brand-dark/30 text-xs mt-2">
              calazanslumina.com · @calazanslumina · trafegocalazans@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="no-print bg-brand-dark text-white text-center py-12">
        <div className="container-main max-w-2xl">
          <h3 className="font-serif text-2xl font-bold mb-3">Gostou do conteúdo?</h3>
          <p className="text-white/50 mb-6">Conheça nossos outros cursos e serviços de marketing digital.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/cursos" className="btn-primary text-sm">Ver Todos os Cursos</a>
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
