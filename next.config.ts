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
      {
        protocol: 'https',
        hostname: 'cf.shopee.com.br',
        pathname: '/file/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/robo-whatsapp-automacao-atendimento',
        destination: '/blog/robo-de-whatsapp-como-automatizar-seu-atendimento-sem-perder-o-lado-humano',
        permanent: true,
      },
      {
        source: '/itens-para-casa',
        destination: '/enxoval-de-bebe',
        permanent: true,
      },

      // ---- recuperacao de URLs que ficaram 404 (auditoria de 20/set/2026) ----

      // /cursos-em/<cidade> deixou de existir em algum restore. Ela somava 200
      // impressoes no Search Console e hoje devolve 404. Redirecionar devolve
      // ao indice de cursos o que a URL antiga ainda carrega.
      {
        source: '/cursos-em/:cidade',
        destination: '/cursos',
        permanent: true,
      },
      {
        source: '/cursos-em',
        destination: '/cursos',
        permanent: true,
      },

      // A home linkava estes dois slugs encurtados, que nunca existiram: os
      // artigos reais tem o slug longo. O link foi corrigido na home (agora le
      // de blogPosts), mas o Google pode ter as URLs curtas na fila — entao
      // elas apontam para o artigo certo em vez de morrer em 404.
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
