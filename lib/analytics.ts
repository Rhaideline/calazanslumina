// Helpers de tracking — Meta Pixel + GA4
// Loaded via ThirdPartyScripts (afterInteractive), so NÃO impactam LCP/FCP.
// Os 2 IDs vêm de env: NEXT_PUBLIC_META_PIXEL_ID + NEXT_PUBLIC_GA4_ID
// Se um env estiver vazio, a função vira no-op silencioso (zero erro).

declare global {
  interface Window {
    fbq?: (action: string, eventName: string, params?: Record<string, unknown>) => void
    gtag?: (action: string, eventName: string, params?: Record<string, unknown>) => void
    dataLayer?: unknown[]
  }
}

type EventParams = Record<string, unknown>

function safeMeta(eventName: string, params?: EventParams) {
  if (typeof window === 'undefined' || !window.fbq) return
  try { window.fbq('track', eventName, params) } catch {}
}

function safeGtag(eventName: string, params?: EventParams) {
  if (typeof window === 'undefined' || !window.gtag) return
  try { window.gtag('event', eventName, params) } catch {}
}

// Lead capture (form submit) — usado em HeroForm, CTAForm, PreviewForm
export function trackLead(opts: {
  source: string
  value?: number
  currency?: string
  content_name?: string
}) {
  safeMeta('Lead', {
    content_name: opts.content_name,
    value: opts.value,
    currency: opts.currency || 'BRL',
    source: opts.source,
  })
  safeGtag('generate_lead', {
    currency: opts.currency || 'BRL',
    value: opts.value,
    content_name: opts.content_name,
    source: opts.source,
  })
}

// Clique no botão de compra (antes do redirect pra Fastpay)
export function trackInitiateCheckout(opts: {
  courseSlug: string
  courseName: string
  preco: number
}) {
  safeMeta('InitiateCheckout', {
    content_ids: [opts.courseSlug],
    content_name: opts.courseName,
    content_type: 'product',
    value: opts.preco,
    currency: 'BRL',
  })
  safeGtag('begin_checkout', {
    currency: 'BRL',
    value: opts.preco,
    items: [{
      item_id: opts.courseSlug,
      item_name: opts.courseName,
      price: opts.preco,
      quantity: 1,
    }],
  })
}

// Visualização de detalhe do curso (page view qualificada)
export function trackViewContent(opts: {
  courseSlug: string
  courseName: string
  preco: number
}) {
  safeMeta('ViewContent', {
    content_ids: [opts.courseSlug],
    content_name: opts.courseName,
    content_type: 'product',
    value: opts.preco,
    currency: 'BRL',
  })
  safeGtag('view_item', {
    currency: 'BRL',
    value: opts.preco,
    items: [{
      item_id: opts.courseSlug,
      item_name: opts.courseName,
      price: opts.preco,
    }],
  })
}

// Search / busca interna
export function trackSearch(query: string) {
  safeMeta('Search', { search_string: query })
  safeGtag('search', { search_term: query })
}

// Custom: scroll deep / engagement
export function trackEngagement(event: string, params?: EventParams) {
  safeGtag(event, params)
}
