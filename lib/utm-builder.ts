// Helper para anexar UTM params em CTAs de pagamento e formulários.
// Padrão Google Analytics: utm_source / utm_medium / utm_campaign / utm_content / utm_term

interface UtmParams {
  source: string
  medium: string
  campaign?: string
  content?: string
  term?: string
}

export function buildUtm(baseUrl: string, utm: UtmParams): string {
  if (!baseUrl || baseUrl === '#') return baseUrl
  try {
    const url = new URL(baseUrl)
    url.searchParams.set('utm_source', utm.source)
    url.searchParams.set('utm_medium', utm.medium)
    if (utm.campaign) url.searchParams.set('utm_campaign', utm.campaign)
    if (utm.content) url.searchParams.set('utm_content', utm.content)
    if (utm.term) url.searchParams.set('utm_term', utm.term)
    return url.toString()
  } catch {
    return baseUrl
  }
}

// Presets comuns
export const UTM_PRESETS = {
  topbar: { source: 'site', medium: 'topbar', campaign: 'ia-zero-avancado' },
  floatingCta: { source: 'site', medium: 'floating-cta', campaign: 'ia-zero-avancado' },
  exitIntent: { source: 'site', medium: 'exit-intent', campaign: 'ia-zero-avancado' },
  stickyMobile: { source: 'site', medium: 'sticky-mobile', campaign: 'ia-zero-avancado' },
  heroVsl: { source: 'site', medium: 'hero-vsl', campaign: 'ia-zero-avancado' },
  socialProof: { source: 'site', medium: 'social-proof', campaign: 'ia-zero-avancado' },
  bonusStack: { source: 'site', medium: 'bonus-stack', campaign: 'ia-zero-avancado' },
  cursoPage: { source: 'site', medium: 'curso-page', campaign: 'cursos' },
  heroCursos: { source: 'site', medium: 'hero-cursos', campaign: 'cursos' },
} as const
