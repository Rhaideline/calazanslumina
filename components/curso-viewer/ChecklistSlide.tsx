'use client'

import { useState, useEffect } from 'react'
import type { ChecklistSlide as ChecklistSlideType } from './types'

interface ChecklistSlideProps {
  slide: ChecklistSlideType
  savedState?: boolean[]
  onStateChange: (items: boolean[]) => void
  onComplete: () => void
}

export default function ChecklistSlide({
  slide,
  savedState,
  onStateChange,
  onComplete,
}: ChecklistSlideProps) {
  const [checked, setChecked] = useState<boolean[]>(
    savedState || new Array(slide.items.length).fill(false)
  )

  useEffect(() => {
    if (savedState) {
      setChecked(savedState)
    }
  }, [savedState])

  const toggleItem = (index: number) => {
    const newChecked = [...checked]
    newChecked[index] = !newChecked[index]
    setChecked(newChecked)
    onStateChange(newChecked)

    // Mark complete when all items are checked
    if (newChecked.every(Boolean)) {
      onComplete()
    }
  }

  const completedCount = checked.filter(Boolean).length
  const totalCount = slide.items.length

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      {/* Checklist icon */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-full bg-brand-mint/10 flex items-center justify-center">
          <svg className="w-4 h-4 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <span className="text-xs font-medium text-brand-mint uppercase tracking-wide">Checklist</span>
      </div>

      {/* Title */}
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark mb-3 leading-tight">
        {slide.title}
      </h2>

      {slide.description && (
        <p className="text-brand-dark/60 text-sm mb-6">{slide.description}</p>
      )}

      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 transition-[transform,box-shadow,background-color,color] duration-300 rounded-full"
            style={{ width: `${(completedCount / totalCount) * 100}%` }}
          />
        </div>
        <span className="text-xs text-brand-dark/50 whitespace-nowrap">
          {completedCount}/{totalCount}
        </span>
      </div>

      {/* Items */}
      <div className="space-y-2">
        {slide.items.map((item, index) => (
          <button
            key={index}
            onClick={() => toggleItem(index)}
            className={`w-full flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-[transform,box-shadow,background-color,color] duration-200 ${
              checked[index]
                ? 'border-green-200 bg-green-50'
                : 'border-gray-100 hover:border-brand-mint/30 hover:bg-brand-bg'
            }`}
          >
            <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-[transform,box-shadow,background-color,color] ${
              checked[index]
                ? 'bg-green-500'
                : 'border-2 border-gray-300'
            }`}>
              {checked[index] && (
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className={`text-sm ${
              checked[index] ? 'text-green-700 line-through' : 'text-brand-dark/80'
            }`}>
              {item}
            </span>
          </button>
        ))}
      </div>

      {completedCount === totalCount && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-center">
          <p className="text-green-700 font-medium text-sm">
            Parabens! Todos os itens foram concluidos.
          </p>
        </div>
      )}
    </div>
  )
}
