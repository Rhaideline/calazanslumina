'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'topbar-dismissed-v1'

export default function TopOfferBar() {
  const [dismissed, setDismissed] = useState(true) // start hidden, render only after mount

  useEffect(() => {
    setDismissed(localStorage.getItem(STORAGE_KEY) === '1')
  }, [])

  if (dismissed) return null

  return (
    <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white text-sm relative">
      <div className="container-main py-2.5 flex items-center justify-center gap-3 flex-wrap text-center">
        <span className="inline-block bg-white/15 px-2.5 py-0.5 rounded-full text-[10px] tracking-[0.32em] uppercase font-bold flex-shrink-0">
          🔥 Lançamento
        </span>
        <span className="font-medium">
          <strong>IA do Zero ao Avançado</strong> — Edição Completa · 95 págs ·{' '}
          <span className="line-through opacity-60">R$ 297</span>{' '}
          por <strong className="text-base">R$ 9,90</strong>
        </span>
        <Link
          href="/cursos/ia-chatgpt-completo"
          className="bg-white text-red-600 font-bold text-xs px-4 py-1.5 rounded-full hover:bg-amber-50 transition-colors uppercase tracking-wider flex-shrink-0"
        >
          Garantir agora →
        </Link>
        <button
          onClick={() => {
            localStorage.setItem(STORAGE_KEY, '1')
            setDismissed(true)
          }}
          aria-label="Fechar"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-xl leading-none w-7 h-7 flex items-center justify-center"
        >
          ×
        </button>
      </div>
    </div>
  )
}
