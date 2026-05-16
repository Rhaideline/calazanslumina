'use client'

import { useEffect, useState } from 'react'

export default function StickyBuyBar({ link }: { link: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      } md:hidden`}
    >
      <div className="bg-[#0a0a0a]/95 backdrop-blur-md border-t border-red-500/30 px-4 py-3 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-white/55 text-[10px] tracking-[0.28em] uppercase font-bold">IA Completo · 95 pgs</p>
            <p className="text-white font-bold leading-tight">
              <span className="text-2xl">R$ 10</span>
              <span className="text-white/30 line-through ml-2 text-sm">R$ 297</span>
            </p>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 text-white font-bold text-sm px-5 py-3 rounded-full flex-shrink-0 inline-flex items-center gap-2 transition-colors"
          >
            Comprar
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
