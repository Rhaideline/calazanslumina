export default function HeroForm({ titulo }: { titulo?: string }) {
  return (
    <div className="bg-brand-dark/90 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8">
      <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-2">
        {titulo || 'Solicite seu Orçamento Gratuito'}
      </h3>
      <p className="text-white/50 text-sm mb-6">
        Preencha o formulário e retornamos em até 24 horas
      </p>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/ncofzws1iEKhN6iFEA6H"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
        id="inline-ncofzws1iEKhN6iFEA6H"
        data-layout={"{'id':'INLINE'}"}
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 2"
        data-height="493"
        data-layout-iframe-id="inline-ncofzws1iEKhN6iFEA6H"
        data-form-id="ncofzws1iEKhN6iFEA6H"
        title="Form 2"
        className="min-h-[480px]"
      />
    </div>
  )
}
