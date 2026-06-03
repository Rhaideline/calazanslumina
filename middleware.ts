import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// URLs claramente off-topic (enxoval/maternidade/bebe) — retornam 410 Gone
// pra Google desindexar rapido, ao inves de 308 (que sinaliza 'movido' e
// nao desindexa). Vale so para conteudo que NUNCA mais voltara ao site.
const GONE_PATTERNS: RegExp[] = [
  /^\/enxoval-de-bebe(\/|$)/,
  /^\/itens-para-casa(\/|$)/,
  /^\/maternidade(\/|$)/,
  /^\/blog\/(recem-nascido|amamentacao|rotina-de-sono|colica|bebe|gravidez)-/,
  /^\/checklist-enxoval-bebe-.+\.pdf$/,
]

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (GONE_PATTERNS.some((p) => p.test(pathname))) {
    return new NextResponse('Gone — content removed permanently.', {
      status: 410,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Robots-Tag': 'noindex' },
    })
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|api/|favicon|sitemap\\.xml|robots\\.txt|.*\\.(?:png|jpg|jpeg|gif|svg|webp|mp4|webm|woff2?|ttf|css|js|ico|xml|txt)).*)',
  ],
}
