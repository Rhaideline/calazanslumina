'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { trackEngagement } from '@/lib/analytics'

const STORAGE_KEY = 'exit-popup-shown-v1'

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Não mostra se já viu nesta sessão
    if (sessionStorage.getItem(STORAGE_KEY) === '1') return

    // Não mostra na própria página /ia-preview (sem redundância)
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/ia-preview')) return
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/ia-completo')) return

    let triggered = false
    const onMouseLeave = (e: MouseEvent) => {
      if (triggered) return
      // Detecta cursor saindo pelo topo
      if (e.clientY <= 0 || e.clientY < 5) {
        triggered = true
        setOpen(true)
        sessionStorage.setItem(STORAGE_KEY, '1')
        trackEngagement('exit_intent_shown', { source: 'desktop' })
      }
    }

    // Mobile fallback — abre depois de 25s se não scrollou pra baixo
    let mobileTimer: number | null = null
    if (window.matchMedia('(max-width: 768px)').matches) {
      mobileTimer = window.setTimeout(() => {
        if (!triggered) {
          triggered = true
          setOpen(true)
          sessionStorage.setItem(STORAGE_KEY, '1')
        }
      }, 25000) // 25s
    } else {
      // Desktop: ouve mouseleave após 5s de delay (não dispara imediato)
      const delayTimer = window.setTimeout(() => {
        document.addEventListener('mouseleave', onMouseLeave)
      }, 5000)
      return () => {
        window.clearTimeout(delayTimer)
        document.removeEventListener('mouseleave', onMouseLeave)
      }
    }

    return () => {
      if (mobileTimer) window.clearTimeout(mobileTimer)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* modal */}
      <div className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a0405] to-[#0a0a0a] border-2 border-red-500/40 rounded-3xl max-w-lg w-full p-8 md:p-10 text-white shadow-2xl shadow-red-500/30">
        <button
          onClick={() => setOpen(false)}
          aria-label="Fechar"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white text-2xl leading-none transition-colors"
        >
          ×
        </button>

        <div className="text-center">
          <span className="inline-block bg-red-500/15 border border-red-500/30 text-red-300 text-[10px] font-bold tracking-[0.32em] uppercase px-3 py-1.5 rounded-full mb-5">
            Antes de sair...
          </span>

          <h2 className="font-serif italic font-normal text-3xl md:text-4xl leading-tight mb-4">
            Leva <span className="text-red-400">8 páginas</span> grátis.
          </h2>

          <p className="text-white/70 text-base md:text-lg mb-7 leading-relaxed">
            Preview oficial do livro <em>IA do Zero ao Avançado</em>.
            Sumário, capítulo 1 completo, e CTA final. <strong className="text-white">Sem custo.</strong>
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="/ia-preview?utm_source=site&utm_medium=exit-intent&utm_campaign=ia-zero-avancado"
              onClick={() => {
                trackEngagement('exit_intent_click', { source: 'popup', action: 'accept' })
                setOpen(false)
              }}
              className="bg-red-500 hover:bg-red-600 text-white font-bold text-base py-4 rounded-full transition-all hover:scale-[1.02] shadow-lg shadow-red-500/30 inline-flex items-center justify-center gap-2"
            >
              Quero o preview grátis
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="text-white/45 hover:text-white/70 text-sm transition-colors"
            >
              Não, vou sair mesmo assim
            </button>
          </div>

          <p className="text-white/40 text-xs mt-6">
            Sem spam · sem cartão · PDF imediato
          </p>
        </div>
      </div>
    </div>
  )
}
