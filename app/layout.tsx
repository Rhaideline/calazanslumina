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
    default: 'Calazans Lumina | Marketing Digital para Brasileiros nos EUA e Brasil',
    template: '%s | Calazans Lumina',
  },
  description:
    'Agência de marketing digital especializada em sites Next.js, funis GHL, CRM com IA, redes sociais e Google Business Profile para brasileiros nos EUA (Massachusetts) e Brasil. Atendimento em português.',
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
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ThirdPartyScripts />
      </body>
    </html>
  )
}
