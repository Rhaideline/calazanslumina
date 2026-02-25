'use client'

import { useParams } from 'next/navigation'
import { cursos } from '@/data/cursos'
import { cursosInterativos } from '@/data/cursos-interativos'
import CourseViewer from '@/components/curso-viewer/CourseViewer'
import Link from 'next/link'

export default function AprenderPage() {
  const { slug } = useParams<{ slug: string }>()
  const cursoInfo = cursos.find((c) => c.slug === slug)
  const cursoInterativo = cursosInterativos.find((c) => c.slug === slug)

  // Curso pago — bloquear acesso, redirecionar para compra
  if (cursoInfo && !cursoInfo.gratuito) {
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
            R$ {cursoInfo.preco},00 <span className="text-sm font-normal text-brand-dark/40">pagamento unico</span>
          </p>

          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <a
              href={`https://wa.me/5531982948067?text=Ol%C3%A1!%20Quero%20comprar%20o%20curso%20${encodeURIComponent(cursoInfo.nome)}%20por%20R$${cursoInfo.preco}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm justify-center inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Comprar por R$ {cursoInfo.preco},00
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
