import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.cdn.filesafe.space',
        pathname: '/MR3yMqtdBa4732pi4ZCw/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/**',
      },
    ],
  },
  async redirects() {
    return [
      // CANONICAL: forca www → non-www (301 permanente)
      // Resolve duplicate-content do Google Search Console:
      // antes Google indexava 50% das URLs como www.calazanslumina.com.br
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.calazanslumina.com.br' }],
        destination: 'https://calazanslumina.com.br/:path*',
        permanent: true,
      },
      {
        source: '/blog/robo-whatsapp-automacao-atendimento',
        destination: '/blog/robo-de-whatsapp-como-automatizar-seu-atendimento-sem-perder-o-lado-humano',
        permanent: true,
      },
      {
        source: '/blog/brasileiros-massachusetts-presenca-digital',
        destination: '/blog/como-brasileiros-em-massachusetts-estao-perdendo-clientes-por-falta-de-presenca-digital',
        permanent: true,
      },
      {
        source: '/blog/seo-local-brasileiros-eua',
        destination: '/blog/seo-local-para-brasileiros-nos-eua-como-aparecer-no-google-da-sua-cidade',
        permanent: true,
      },
      {
        source: '/projetos',
        destination: '/cases',
        permanent: true,
      },
      {
        source: '/ferramentas',
        destination: '/cursos',
        permanent: true,
      },
      {
        source: '/enxoval-de-bebe',
        destination: '/',
        permanent: true,
      },
      {
        source: '/itens-para-casa',
        destination: '/',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

export default nextConfig
