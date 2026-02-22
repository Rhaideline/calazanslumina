'use client'

import { useState } from 'react'

interface FAQ {
  pergunta: string
  resposta: string
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
            openIndex === i
              ? 'border-brand-mint/40 bg-white shadow-lg'
              : 'border-gray-200 bg-white hover:border-brand-mint/20'
          }`}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
          >
            <span className="font-semibold text-brand-dark pr-4">{faq.pergunta}</span>
            <svg
              className={`w-5 h-5 text-brand-mint flex-shrink-0 transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="px-6 pb-5 text-brand-dark/60 leading-relaxed">{faq.resposta}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
