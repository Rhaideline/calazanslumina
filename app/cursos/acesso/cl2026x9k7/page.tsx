import Link from 'next/link'

export const metadata = {
  title: 'Obrigado pela Compra! | Calazans Lumina',
  description: 'Seu pagamento foi confirmado. O curso foi enviado para seu email.',
  robots: 'noindex, nofollow',
}

export default function ObrigadoCompraPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-xl w-full px-6 py-20">

        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-[scale-in_0.4s_ease-out]">
            <svg className="w-14 h-14 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-serif text-4xl font-bold text-brand-dark mb-3">
            Obrigado pela compra!
          </h1>
          <p className="text-brand-dark/50 text-lg leading-relaxed">
            Seu pagamento foi confirmado com sucesso.
          </p>
        </div>

        {/* Email notification card */}
        <div className="bg-brand-bg border border-brand-dark/5 rounded-2xl p-8 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-brand-mint/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-brand-dark mb-2">
                Verifique seu email
              </h2>
              <p className="text-brand-dark/50 text-sm leading-relaxed">
                Enviamos o <strong className="text-brand-dark">PDF completo do curso</strong> para o email cadastrado no pagamento. Confira sua caixa de entrada e também a pasta de spam.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-bg transition-colors">
            <div className="w-9 h-9 bg-brand-mint rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
              1
            </div>
            <div>
              <p className="text-brand-dark font-semibold text-sm">Abra seu email</p>
              <p className="text-brand-dark/40 text-xs mt-0.5">Procure por um email de <strong>Calazans Lumina</strong></p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-bg transition-colors">
            <div className="w-9 h-9 bg-brand-mint rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
              2
            </div>
            <div>
              <p className="text-brand-dark font-semibold text-sm">Baixe o PDF anexado</p>
              <p className="text-brand-dark/40 text-xs mt-0.5">O curso completo esta anexado no email</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-bg transition-colors">
            <div className="w-9 h-9 bg-brand-mint rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
              3
            </div>
            <div>
              <p className="text-brand-dark font-semibold text-sm">Salve e estude</p>
              <p className="text-brand-dark/40 text-xs mt-0.5">Salve no celular ou computador e estude no seu ritmo</p>
            </div>
          </div>
        </div>

        {/* Help box */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <p className="text-amber-800 text-sm font-semibold mb-1">
            Nao recebeu o email?
          </p>
          <p className="text-amber-700 text-xs leading-relaxed mb-3">
            Verifique a pasta de spam ou lixo eletronico. Se mesmo assim nao encontrar, entre em contato com a gente:
          </p>
          <a
            href="https://wa.me/5531982948067?text=Ola! Fiz a compra do curso mas nao recebi o email com o PDF."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2.5 px-4 rounded-full transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>
        </div>

        {/* Back links */}
        <div className="text-center space-y-3">
          <Link href="/cursos" className="btn-primary text-sm inline-flex items-center gap-2">
            Ver mais cursos
          </Link>
          <div>
            <Link href="/" className="text-brand-dark/30 hover:text-brand-dark text-xs transition-colors">
              Voltar para o inicio
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
