'use client'

import { useState, useCallback } from 'react'
import type { QuizSlide as QuizSlideType } from './types'

interface QuizSlideProps {
  slide: QuizSlideType
  onComplete: () => void
}

export default function QuizSlide({ slide, onComplete }: QuizSlideProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [confirmed, setConfirmed] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleConfirm = useCallback(() => {
    if (selectedIndex === null) return
    setConfirmed(true)
    const correct = selectedIndex === slide.correctIndex
    setIsCorrect(correct)
    if (correct) {
      onComplete()
    }
  }, [selectedIndex, slide.correctIndex, onComplete])

  const handleRetry = useCallback(() => {
    setSelectedIndex(null)
    setConfirmed(false)
    setIsCorrect(false)
  }, [])

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      {/* Quiz icon */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-full bg-brand-mint/10 flex items-center justify-center">
          <svg className="w-4 h-4 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <span className="text-xs font-medium text-brand-mint uppercase tracking-wide">Quiz</span>
      </div>

      {/* Question */}
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark mb-8 leading-tight">
        {slide.question}
      </h2>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {slide.options.map((option, index) => {
          let optionStyle = 'border-gray-200 hover:border-brand-mint/50 hover:bg-brand-bg'

          if (confirmed) {
            if (index === slide.correctIndex) {
              optionStyle = 'border-green-500 bg-green-50'
            } else if (index === selectedIndex && !isCorrect) {
              optionStyle = 'border-red-500 bg-red-50'
            } else {
              optionStyle = 'border-gray-100 opacity-50'
            }
          } else if (selectedIndex === index) {
            optionStyle = 'border-brand-mint bg-brand-mint/5'
          }

          return (
            <button
              key={index}
              onClick={() => !confirmed && setSelectedIndex(index)}
              disabled={confirmed}
              className={`w-full text-left p-4 rounded-xl border-2 transition-[transform,box-shadow,background-color,color] duration-200 ${optionStyle}`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  confirmed && index === slide.correctIndex
                    ? 'border-green-500 bg-green-500'
                    : confirmed && index === selectedIndex && !isCorrect
                    ? 'border-red-500 bg-red-500'
                    : selectedIndex === index && !confirmed
                    ? 'border-brand-mint bg-brand-mint'
                    : 'border-gray-300'
                }`}>
                  {confirmed && index === slide.correctIndex && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {confirmed && index === selectedIndex && !isCorrect && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  {!confirmed && selectedIndex === index && (
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  )}
                </div>
                <span className={`text-sm ${
                  confirmed && index === slide.correctIndex
                    ? 'text-green-700 font-medium'
                    : confirmed && index === selectedIndex && !isCorrect
                    ? 'text-red-700'
                    : 'text-brand-dark/80'
                }`}>
                  {option}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Confirm / Feedback */}
      {!confirmed && (
        <button
          onClick={handleConfirm}
          disabled={selectedIndex === null}
          className={`w-full py-3 rounded-xl text-sm font-semibold transition-[transform,box-shadow,background-color,color] duration-200 ${
            selectedIndex === null
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-brand-mint text-white hover:bg-brand-light'
          }`}
        >
          Confirmar Resposta
        </button>
      )}

      {confirmed && (
        <div className={`p-4 rounded-xl ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <>
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-green-700 font-semibold text-sm">Correto!</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-700 font-semibold text-sm">Incorreto</span>
              </>
            )}
          </div>
          <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {slide.explanation}
          </p>
          {!isCorrect && (
            <button
              onClick={handleRetry}
              className="mt-3 text-sm font-medium text-red-600 hover:text-red-800 underline"
            >
              Tentar novamente
            </button>
          )}
        </div>
      )}
    </div>
  )
}
