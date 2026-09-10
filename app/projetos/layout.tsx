import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projetos & Portfólio | Sites, Funis e Automações',
  description:
    'Veja nosso portfólio de sites profissionais, landing pages, funis de vendas, automações GHL e resultados de performance. Calazans Lumina.',
}

export default function ProjetosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
