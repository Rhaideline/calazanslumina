import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
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

export const metadata: Metadata = {
  metadataBase: new URL('https://calazanslumina.com'),
  title: {
    default: 'Calazans Lumina | Marketing Digital para Brasileiros nos EUA e Brasil',
    template: '%s | Calazans Lumina',
  },
  description:
    'Agência de marketing digital especializada em sites Next.js, funis GHL, CRM com IA, redes sociais, tráfego pago e Google Business Profile para brasileiros nos EUA (Massachusetts) e Brasil. Atendimento em português.',
  keywords: [
    'marketing digital para brasileiros',
    'agência de marketing Massachusetts',
    'marketing digital Brasil',
    'sites para brasileiros nos EUA',
    'GoHighLevel',
    'funis de vendas',
    'CRM WhatsApp',
    'tráfego pago',
    'gestão de redes sociais',
    'Google Meu Negócio',
    'Calazans Lumina',
    'Rhaideline Calazans',
  ],
  authors: [{ name: 'Rhaideline Calazans' }],
  creator: 'Calazans Lumina',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://calazanslumina.com',
    siteName: 'Calazans Lumina',
    title: 'Calazans Lumina | Marketing Digital para Brasileiros nos EUA e Brasil',
    description:
      'Sites, funis GHL, CRM com IA, redes sociais e Google Maps para empreendedores brasileiros. Atendimento em português.',
    images: [
      {
        url: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3c6855d8bc9a8c44fb4d.png',
        width: 1200,
        height: 630,
        alt: 'Calazans Lumina — Agência de Marketing Digital',
      },
    ],
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Calazans Lumina',
              founder: {
                '@type': 'Person',
                name: 'Rhaideline Calazans',
              },
              description:
                'Agência de marketing digital especializada em sites Next.js, automações GHL, CRM com IA, gestão de redes sociais, tráfego pago e Google Business Profile para brasileiros nos EUA e Brasil.',
              telephone: '+5531982948067',
              url: 'https://calazanslumina.com',
              sameAs: [
                'https://www.instagram.com/calazanslumina/',
                'https://share.google/n2TRtwjKEMy65uSx7',
                'https://maps.app.goo.gl/umLNmLYMyhbVx4HQ6',
              ],
              areaServed: ['Massachusetts, USA', 'Brasil'],
              knowsLanguage: ['pt-BR', 'en-US'],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Serviços Calazans Lumina',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sites & Landing Pages' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Funis & Automação GHL' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM & IA Conversacional' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tráfego Pago & Performance' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestão de Redes Sociais' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Business Profile' } },
                ],
              },
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Script
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://reputationhub.site/reputation/assets/review-widget.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://beta.leadconnectorhq.com/loader.js"
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="67f098808e2d431c7fc8ec81"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
