'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { formatPreco } from '@/lib/formatters'
import { trackInitiateCheckout } from '@/lib/analytics'
import { buildUtm } from '@/lib/utm-builder'
import { cursos } from '@/data/cursos'

interface FloatingCTAProps {
  gratuito: boolean
  preco: number
  precoOriginal?: number
  slug: string
  linkPagamento?: string
}

export default function FloatingCTA({ gratuito, preco, precoOriginal, slug, linkPagamento }: FloatingCTAProps) {
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
              {precoOriginal && (
                <span className="text-white/40 line-through text-xs mr-2">R$ {formatPreco(precoOriginal)}</span>
              )}
              R$ {formatPreco(preco)} <span className="text-brand-mint">— Pagamento Único</span>
            </p>
          )}
        </div>
        {gratuito ? (
          <Link href={`/cursos/${slug}/aprender`} className="btn-primary text-sm px-6 py-2.5 whitespace-nowrap">
            Acessar Grátis Agora
          </Link>
        ) : (
          <a
            href={buildUtm(linkPagamento || '#', { source: 'site', medium: 'floating-cta', campaign: slug, content: slug })}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              const c = cursos.find((x) => x.slug === slug)
              trackInitiateCheckout({ courseSlug: slug, courseName: c?.nome || slug, preco })
            }}
            className="btn-primary text-sm px-6 py-3 whitespace-nowrap min-h-[48px] inline-flex items-center"
          >
            Garantir por R$ {formatPreco(preco)}
          </a>
        )}
      </div>
    </div>
  )
}
