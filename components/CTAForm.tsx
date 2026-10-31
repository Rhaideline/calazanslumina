import FormSection from './cta/FormSection'

/** Bloco de formulario com o titulo da pagina (cidade e/ou servico). */
export default function CTAForm({ cidade, servico }: { cidade?: string; servico?: string }) {
  const titulo =
    cidade && servico
      ? `${servico} em ${cidade}: vamos conversar`
      : cidade
        ? `Vamos fazer o seu negócio em ${cidade} vender mais`
        : undefined
  return <FormSection titulo={titulo} />
}
