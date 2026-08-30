/**
 * Download direto do PDF, sem pedir e-mail.
 *
 * A decisao (30/ago/2026): o checklist volta a ser download livre. Enquanto
 * ele ficou atras do formulario, a pessoa que chegava pela busca de "lista de
 * enxoval pdf" batia num cadastro — e quem so queria o PDF ia embora sem ler
 * a pagina e sem clicar em produto nenhum. A monetizacao aqui e o link de
 * afiliado da vitrine, nao a lista de e-mail; entao vale mais deixar a pessoa
 * entrar, baixar e navegar.
 */
export default function BaixarPdf({
  arquivo = 'checklist-enxoval-bebe-2026.pdf',
  titulo = 'Baixe a lista em PDF',
  descricao = 'Para imprimir e levar na loja, com caixinha para marcar cada item. Sem cadastro: é só clicar.',
  variante = 'claro',
}: {
  arquivo?: string
  titulo?: string
  descricao?: string
  variante?: 'claro' | 'escuro'
}) {
  const escuro = variante === 'escuro'

  return (
    <div
      className={`rounded-2xl p-8 ${
        escuro ? 'bg-brand-dark text-white' : 'bg-brand-bg text-brand-dark'
      }`}
    >
      <p className="font-serif text-2xl font-bold mb-2">{titulo}</p>
      <p className={`mb-6 leading-relaxed ${escuro ? 'text-white/70' : 'text-brand-dark/70'}`}>
        {descricao}
      </p>
      <a
        href={`/${arquivo}`}
        download
        className="inline-flex items-center gap-2 bg-brand-mint text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Baixar o PDF grátis
      </a>
    </div>
  )
}
