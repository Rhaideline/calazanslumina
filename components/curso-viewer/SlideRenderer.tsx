'use client'

import type { Slide } from './types'
import QuizSlide from './QuizSlide'
import ChecklistSlide from './ChecklistSlide'

interface SlideRendererProps {
  slide: Slide
  slideIndex: number
  onComplete: () => void
  checklistState?: boolean[]
  onChecklistChange: (items: boolean[]) => void
}

export default function SlideRenderer({
  slide,
  slideIndex,
  onComplete,
  checklistState,
  onChecklistChange,
}: SlideRendererProps) {
  if (slide.type === 'quiz') {
    return (
      <QuizSlide
        key={slideIndex}
        slide={slide}
        onComplete={onComplete}
      />
    )
  }

  if (slide.type === 'checklist') {
    return (
      <ChecklistSlide
        key={slideIndex}
        slide={slide}
        savedState={checklistState}
        onStateChange={onChecklistChange}
        onComplete={onComplete}
      />
    )
  }

  if (slide.type === 'summary') {
    return (
      <div className="max-w-2xl mx-auto animate-fade-in">
        {/* Summary icon */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-full bg-brand-mint/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <span className="text-xs font-medium text-brand-mint uppercase tracking-wide">Resumo do Modulo</span>
        </div>

        <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark mb-8 leading-tight">
          {slide.title}
        </h2>

        <div className="space-y-3">
          {slide.points.map((point, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-brand-bg rounded-xl">
              <div className="w-6 h-6 rounded-full bg-brand-mint text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <p className="text-sm text-brand-dark/80 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Content slide
  const paragraphs = slide.body.split('\n\n')

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark mb-6 leading-tight">
        {slide.title}
      </h2>

      <div className="space-y-4 mb-6">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="text-brand-dark/70 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {slide.tip && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
          <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <div>
            <p className="text-amber-800 font-semibold text-sm mb-1">Dica</p>
            <p className="text-amber-700 text-sm">{slide.tip}</p>
          </div>
        </div>
      )}

      {slide.image && (
        <div className="mt-6 rounded-xl overflow-hidden border border-gray-100">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      )}
    </div>
  )
}
