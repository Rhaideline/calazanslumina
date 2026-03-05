import Link from 'next/link'
import { cursos } from '@/data/cursos'

export const metadata = {
  title: 'Obrigado pela Compra! | Calazans Lumina',
  description: 'Seu pagamento foi confirmado. Acesse seus cursos agora.',
  robots: 'noindex, nofollow',
}

export default function AcessoCursosPage() {
  const cursosPagos = cursos.filter((c) => !c.gratuito)

  return (
    <div className="min-h-screen bg-white">
      <div className="container-main max-w-3xl py-20 px-6">
        {/* Success Icon */}
        <div className="text-center mb-10">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-serif text-4xl font-bold text-brand-dark mb-3">
            Obrigado pela compra!
          </h1>
          <p className="text-brand-dark/50 text-lg">
            Seu pagamento foi confirmado com sucesso. Agora voce tem acesso completo aos cursos abaixo.
          </p>
        </div>

        {/* Courses Access */}
        <div className="space-y-6">
          {cursosPagos.map((curso) => (
            <div
              key={curso.slug}
              className="bg-brand-bg border border-brand-dark/5 rounded-2xl p-6"
            >
              <h2 className="font-serif text-xl font-bold text-brand-dark mb-2">
                {curso.nome}
              </h2>
              <p className="text-brand-dark/50 text-sm mb-5">
                {curso.descricaoCurta}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/cursos/${curso.slug}/aprender?access=pago`}
                  className="btn-primary text-sm inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Fazer Curso Online
                </Link>
                <Link
                  href={`/cursos/${curso.slug}/download?access=pago`}
                  className="border border-brand-dark/20 text-brand-dark hover:bg-brand-dark hover:text-white text-sm py-2.5 px-5 rounded-full font-medium transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Baixar PDF
                </Link>
                <Link
                  href={`/cursos/${curso.slug}`}
                  className="text-brand-dark/40 hover:text-brand-dark text-sm py-2.5 px-4 transition-colors"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Info box */}
        <div className="mt-10 p-5 bg-blue-50 border border-blue-200 rounded-xl text-center">
          <p className="text-blue-800 text-sm font-medium mb-1">
            Salve esta pagina nos favoritos!
          </p>
          <p className="text-blue-700 text-xs">
            Voce pode acessar seus cursos a qualquer momento usando os links acima.
          </p>
        </div>

        {/* Back to home */}
        <div className="text-center mt-10">
          <Link href="/cursos" className="text-brand-dark/40 hover:text-brand-dark text-sm transition-colors">
            ← Voltar para todos os cursos
          </Link>
        </div>
      </div>
    </div>
  )
}
