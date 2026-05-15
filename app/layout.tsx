import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ThirdPartyScripts from '@/components/ThirdPartyScripts'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://calazanslumina.com.br'),
  title: {
    default: 'Calazans Lumina | Agencia de Marketing Digital #1 para Brasileiros nos EUA e Brasil (2026)',
    template: '%s | Calazans Lumina',
  },
  description:
    'Agencia de marketing digital para brasileiros nos EUA e Brasil. Sites profissionais, funis GHL, CRM com IA no WhatsApp, redes sociais e Google Maps. 100+ projetos. Atendimento 100% em portugues. Orcamento gratis →',
  keywords: [
    'marketing digital para brasileiros',
    'agência de marketing Massachusetts',
    'marketing digital Brasil',
    'sites para brasileiros nos EUA',
    'GoHighLevel',
    'funis de vendas',
    'CRM WhatsApp',
    'gestão de redes sociais',
    'Google Meu Negócio',
    'Calazans Lumina',
    'Rhaideline Calazans',
  ],
  icons: {
    icon: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699cdc6da0830220a0c3e452.png',
    apple: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699cdc6da0830220a0c3e452.png',
  },
  authors: [{ name: 'Rhaideline Calazans' }],
  creator: 'Calazans Lumina',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://calazanslumina.com.br',
    siteName: 'Calazans Lumina',
    title: 'Calazans Lumina | Marketing Digital para Brasileiros nos EUA e Brasil',
    description:
      'Sites, funis GHL, CRM com IA, redes sociais e Google Maps para empreendedores brasileiros. Atendimento em português.',
    images: [
      {
        url: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699cdc6d8ea4c91ee3015cbc.png',
        width: 1200,
        height: 630,
        alt: 'Calazans Lumina — Agência de Marketing Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calazans Lumina | Marketing Digital para Brasileiros nos EUA e Brasil',
    description:
      'Sites, funis GHL, CRM com IA, redes sociais e Google Maps para empreendedores brasileiros. Atendimento em português.',
    images: ['https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699cdc6d8ea4c91ee3015cbc.png'],
    creator: '@calazanslumina',
  },
  alternates: {
    canonical: 'https://calazanslumina.com.br',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'US-MA',
    'geo.placename': 'Framingham, Massachusetts',
    'geo.position': '42.2793;-71.4162',
    'ICBM': '42.2793, -71.4162',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://calazanslumina.com.br/#website',
  name: 'Calazans Lumina',
  url: 'https://calazanslumina.com.br',
  description:
    'Agência de marketing digital para brasileiros nos EUA e Brasil. Sites Profissionais, funis GoHighLevel, CRM com IA, Google Maps.',
  publisher: { '@id': 'https://calazanslumina.com.br/#organization' },
  inLanguage: 'pt-BR',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://calazanslumina.com.br/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://calazanslumina.com.br/#organization',
  name: 'Calazans Lumina',
  url: 'https://calazanslumina.com.br',
  logo: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699cdc6da0830220a0c3e452.png',
  description:
    'Agência de marketing digital especializada em brasileiros nos EUA (Massachusetts) e Brasil. Sites Profissionais, funis GoHighLevel, CRM com IA, gestão de redes sociais e Google Business Profile.',
  foundingDate: '2024',
  founder: {
    '@type': 'Person',
    name: 'Rhaideline Calazans',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+55-31-98294-8067',
      contactType: 'customer service',
      availableLanguage: ['Portuguese', 'English'],
      areaServed: ['BR', 'US'],
    },
  ],
  sameAs: [
    'https://www.instagram.com/calazanslumina',
    'https://www.facebook.com/calazanslumina',
    'https://www.linkedin.com/company/calazanslumina',
    'https://www.youtube.com/@calazanslumina',
  ],
  areaServed: [
    {
      '@type': 'State',
      name: 'Massachusetts',
      containedInPlace: { '@type': 'Country', name: 'United States' },
    },
    { '@type': 'Country', name: 'Brazil' },
  ],
  knowsAbout: [
    'Marketing Digital',
    'Web Development',
    'GoHighLevel',
    'SEO',
    'Google Business Profile',
    'Inteligência Artificial',
    'ChatGPT',
    'Funis de Vendas',
    'CRM',
    'Automação de Marketing',
    'Gestão de Redes Sociais',
    'Google Ads',
    'Meta Ads',
    'WhatsApp Business',
    'IA Conversacional',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Marketing Digital',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sites & Landing Pages Profissionais' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Funis de Vendas GoHighLevel' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM & Automação' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IA Conversacional no WhatsApp' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestão de Redes Sociais' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Business Profile' } },
    ],
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://calazanslumina.com.br/#rhaideline',
  name: 'Rhaideline Calazans',
  givenName: 'Rhaideline',
  familyName: 'Calazans',
  jobTitle: 'Founder & CEO',
  worksFor: { '@id': 'https://calazanslumina.com.br/#organization' },
  url: 'https://calazanslumina.com.br/sobre',
  sameAs: [
    'https://www.instagram.com/calazanslumina',
    'https://www.linkedin.com/in/rhaideline-calazans',
  ],
  knowsAbout: [
    'GoHighLevel',
    'Marketing Digital',
    'SEO Local',
    'Answer Engine Optimization',
    'CRM Automation',
    'WhatsApp Business API',
    'Google Business Profile',
    'Marketing para Brasileiros nos Estados Unidos',
  ],
  alumniOf: 'Marketing Digital — Autodidata',
  award: ['8+ anos de experiência em marketing digital', '+50 sub-contas GoHighLevel ativas'],
  homeLocation: {
    '@type': 'Place',
    address: { '@type': 'PostalAddress', addressLocality: 'Framingham', addressRegion: 'MA', addressCountry: 'US' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://assets.cdn.filesafe.space" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://stcdn.leadconnectorhq.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* <WhatsAppButton /> */}
        <ThirdPartyScripts />
      </body>
    </html>
  )
}
