import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cases de Sucesso | Resultados Reais de SEO, GHL e Marketing Digital — Calazans Lumina',
  description: 'Veja resultados reais: +24.500% impressoes, pagina 1 do Google, 18 leads organicos em 28 dias, chatbot IA qualificando 24/7. Cases de SEO, AEO, GEO e GoHighLevel.',
  alternates: { canonical: 'https://calazanslumina.com.br/cases' },
  openGraph: {
    title: 'Cases de Sucesso | Calazans Lumina',
    description: 'Resultados reais: +24.500% impressoes, +706% cliques, chatbot IA 24/7. Cases comprovados com dados do Google Search Console.',
    url: 'https://calazanslumina.com.br/cases',
    type: 'website',
  },
}

export default function CasesLayout({ children }: { children: React.ReactNode }) {
  return children
}
