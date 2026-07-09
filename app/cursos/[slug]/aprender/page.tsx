'use client'

import { useParams, useSearchParams } from 'next/navigation'
import { cursos } from '@/data/cursos'
import { formatPreco } from '@/lib/formatters'
import { cursosInterativos } from '@/data/cursos-interativos'
import CourseViewer from '@/components/curso-viewer/CourseViewer'
import Link from 'next/link'

export default function AprenderPage() {
  const { slug } = useParams<{ slug: string }>()
  const searchParams = useSearchParams()
  const cursoInfo = cursos.find((c) => c.slug === slug)
  const cursoInterativo = cursosInterativos.find((c) => c.slug === slug)
  const hasAccess = searchParams.get('access') === 'pago'

  // Curso pago — bloquear acesso (exceto se veio do link de pagamento)
  if (cursoInfo && !cursoInfo.gratuito && !hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-lg px-6">
          <div className="w-20 h-20 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-brand-dark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="font-serif text-3xl font-bold text-brand-dark mb-3">
            Curso Premium
          </h1>
          <p className="text-brand-dark/50 mb-2">
            O curso <strong className="text-brand-dark">{cursoInfo.nome}</strong> requer pagamento para acesso completo.
          </p>
          <p className="text-brand-dark/80 text-2xl font-serif font-bold mb-6">
            R$ {formatPreco(cursoInfo.preco)} <span className="text-sm font-normal text-brand-dark/40">pagamento unico</span>
          </p>

          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <a
              href={cursoInfo.linkPagamento || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm justify-center inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Comprar por R$ {formatPreco(cursoInfo.preco)}
            </a>
            <Link href={`/cursos/${slug}`} className="text-brand-dark/50 hover:text-brand-dark text-sm transition-colors">
              Ver detalhes do curso
            </Link>
            <Link href="/cursos" className="text-brand-dark/50 hover:text-brand-dark text-sm transition-colors">
              Ver todos os cursos
            </Link>
          </div>

          <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-xl">
            <p className="text-green-800 text-sm font-medium mb-1">Cursos gratuitos disponíveis!</p>
            <p className="text-green-700 text-xs">
              Temos cursos 100% gratuitos que você pode fazer agora mesmo, sem pagar nada.
            </p>
            <Link href="/cursos" className="text-green-600 text-xs font-bold hover:underline mt-2 inline-block">
              Ver cursos gratuitos →
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Curso gratuito sem dados interativos
  if (!cursoInterativo) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md px-6">
          <div className="w-16 h-16 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-brand-dark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="font-serif text-2xl font-bold text-brand-dark mb-3">
            Curso interativo em breve
          </h1>
          <p className="text-brand-dark/50 mb-6">
            A versao interativa deste curso ainda esta sendo preparada. Por enquanto, voce pode baixar o PDF completo.
          </p>
          <div className="flex flex-col gap-3">
            <Link href={`/cursos/${slug}`} className="btn-primary text-sm justify-center">
              Ver Curso
            </Link>
            <Link href="/cursos" className="text-brand-dark/50 hover:text-brand-dark text-sm transition-colors">
              Ver todos os cursos
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Curso gratuito com dados interativos — liberar
  return <CourseViewer curso={cursoInterativo} />
}
