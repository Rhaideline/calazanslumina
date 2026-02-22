'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="font-serif text-2xl font-bold text-brand-dark mb-4">
          Algo deu errado
        </h2>
        <p className="text-brand-dark/60 mb-8">
          Ocorreu um erro ao carregar esta página. Tente novamente.
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  )
}
