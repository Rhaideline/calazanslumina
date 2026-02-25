'use client'

import { useParams } from 'next/navigation'
import { cursosInterativos } from '@/data/cursos-interativos'
import CourseViewer from '@/components/curso-viewer/CourseViewer'
import Link from 'next/link'

export default function AprenderPage() {
  const { slug } = useParams<{ slug: string }>()
  const curso = cursosInterativos.find((c) => c.slug === slug)

  if (!curso) {
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

  return <CourseViewer curso={curso} />
}
