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
  // O checklist NAO esta mais nesta lista. Ele era a pagina que mais trazia
  // trafego do site inteiro, e "lista enxoval de bebe completo pdf 2026" e a
  // consulta que mais perdeu clique depois que ele saiu com 410 — confirmado
  // pela API do Search Console em 19/ago/2026.
  // Voltou como isca de e-mail: o PDF fica em /public e a pagina
  // /checklist-enxoval-bebe entrega o download depois do cadastro.
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
