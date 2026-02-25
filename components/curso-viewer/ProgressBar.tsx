'use client'

interface ProgressBarProps {
  currentIndex: number
  totalSlides: number
  moduleTitle: string
  onToggleSidebar: () => void
}

export default function ProgressBar({
  currentIndex,
  totalSlides,
  moduleTitle,
  onToggleSidebar,
}: ProgressBarProps) {
  const percent = totalSlides > 0 ? ((currentIndex + 1) / totalSlides) * 100 : 0

  return (
    <div className="bg-white border-b border-gray-100 sticky top-0 z-30">
      {/* Thin progress line */}
      <div className="h-1 bg-gray-100">
        <div
          className="h-full bg-brand-mint transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        {/* Hamburger menu for mobile */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Abrir menu de navegacao"
        >
          <svg className="w-5 h-5 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Module title */}
        <p className="text-sm font-medium text-brand-dark truncate flex-1 mx-3">
          {moduleTitle}
        </p>

        {/* Slide counter */}
        <span className="text-xs text-brand-dark/50 whitespace-nowrap">
          {currentIndex + 1} / {totalSlides}
        </span>
      </div>
    </div>
  )
}
