import GhlForm from './GhlForm'

export default function CTAForm({ cidade, servico }: { cidade?: string; servico?: string }) {
  const title = cidade && servico
    ? `Solicite um orçamento de ${servico} em ${cidade}`
    : cidade
    ? `Fale conosco em ${cidade}`
    : 'Solicite seu orçamento gratuito'

  return (
    <section className="section-padding bg-brand-dark" id="contato-form">
      <div className="container-main">
        <div className="max-w-4xl mx-auto text-center mb-10 text-white">
          <h2 className="heading-2 mb-4">{title}</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Preencha o formulário abaixo e receba um diagnóstico gratuito do seu marketing digital.
            Resposta em até 24 horas.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10">
          <GhlForm
            formId="ncofzws1iEKhN6iFEA6H"
            title="Form 2"
            className="min-h-[500px]"
            height="500px"
          />
        </div>
      </div>
    </section>
  )
}
