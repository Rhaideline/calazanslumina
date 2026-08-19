'use client'

interface SlideNavigationProps {
  currentIndex: number
  totalSlides: number
  onPrev: () => void
  onNext: () => void
}

export default function SlideNavigation({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
}: SlideNavigationProps) {
  const isFirst = currentIndex === 0
  const isLast = currentIndex === totalSlides - 1

  return (
    <div className="bg-white border-t border-gray-100 px-4 py-3 flex items-center justify-between">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-[transform,box-shadow,background-color,color] duration-200 ${
          isFirst
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-brand-dark hover:bg-gray-100'
        }`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Anterior
      </button>

      <button
        onClick={onNext}
        disabled={isLast}
        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-[transform,box-shadow,background-color,color] duration-200 ${
          isLast
            ? 'text-gray-300 cursor-not-allowed'
            : 'bg-brand-mint text-white hover:bg-brand-light'
        }`}
      >
        {isLast ? 'Fim do Curso' : 'Proximo'}
        {!isLast && (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </button>
    </div>
  )
}
