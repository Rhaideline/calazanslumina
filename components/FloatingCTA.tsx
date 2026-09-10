'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface FloatingCTAProps {
  gratuito: boolean
  preco: number
  slug: string
  linkPagamento?: string
}

export default function FloatingCTA({ gratuito, preco, slug, linkPagamento }: FloatingCTAProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-t border-white/10 py-3 px-4 animate-slide-up">
      <div className="container-main flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          {gratuito ? (
            <p className="text-white font-bold text-sm">Curso 100% Gratuito <span className="text-brand-mint">— Acesso Imediato</span></p>
          ) : (
            <p className="text-white font-bold text-sm">
              <span className="text-white/40 line-through text-xs mr-2">R$ 197</span>
              R$ {preco},00 <span className="text-brand-mint">— Pagamento Único</span>
            </p>
          )}
        </div>
        {gratuito ? (
          <Link href={`/cursos/${slug}/aprender`} className="btn-primary text-sm px-6 py-2.5 whitespace-nowrap">
            Acessar Grátis Agora
          </Link>
        ) : (
          <a
            href={linkPagamento || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-6 py-2.5 whitespace-nowrap"
          >
            Garantir por R$ {preco},00
          </a>
        )}
      </div>
    </div>
  )
}
