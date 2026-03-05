import LazyIframe from './LazyIframe'

export default function HeroForm({ titulo }: { titulo?: string }) {
  return (
    <div className="bg-brand-dark/90 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8">
      <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-2">
        {titulo || 'Solicite seu Orçamento Gratuito'}
      </h3>
      <p className="text-white/50 text-sm mb-6">
        Preencha o formulário e retornamos em até 24 horas
      </p>
      <LazyIframe
        src="https://api.leadconnectorhq.com/widget/form/ncofzws1iEKhN6iFEA6H"
        title="Form 2"
        id="inline-ncofzws1iEKhN6iFEA6H"
        className="min-h-[480px]"
        height="480px"
        trigger="click"
      />
    </div>
  )
}
