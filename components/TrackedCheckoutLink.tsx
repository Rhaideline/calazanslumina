'use client'

import { trackInitiateCheckout } from '@/lib/analytics'
import { buildUtm } from '@/lib/utm-builder'
import type { ReactNode } from 'react'

interface Props {
  href: string
  courseSlug: string
  courseName: string
  preco: number
  utmMedium: string
  utmCampaign?: string
  className?: string
  children: ReactNode
}

/**
 * Botão de CTA pra link de pagamento (Fastpay) com tracking.
 * - Anexa UTM ao link (utm_source=site, utm_medium=X, utm_campaign=Y)
 * - Dispara InitiateCheckout (Meta Pixel) + begin_checkout (GA4) no click
 * - Server-component friendly (este é um wrapper client mínimo)
 */
export default function TrackedCheckoutLink({
  href,
  courseSlug,
  courseName,
  preco,
  utmMedium,
  utmCampaign = 'ia-zero-avancado',
  className,
  children,
}: Props) {
  const url = buildUtm(href, {
    source: 'site',
    medium: utmMedium,
    campaign: utmCampaign,
    content: courseSlug,
  })

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        trackInitiateCheckout({ courseSlug, courseName, preco })
      }}
    >
      {children}
    </a>
  )
}
