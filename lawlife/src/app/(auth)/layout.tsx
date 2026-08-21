import { Scale } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex">
      {/* Marca */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
        <div className="relative z-10 flex flex-col justify-center items-center w-full p-12 text-primary-foreground">
          <Scale className="h-16 w-16 mb-6" />
          <h1 className="text-4xl font-bold mb-4">Law Life</h1>
          <p className="text-xl text-primary-foreground/80 text-center max-w-md">
            Clientes, processos e prazos em um lugar so — com a captacao
            conversando direto com o seu GoHighLevel.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary-foreground/50" />
              Controle de prazos
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary-foreground/50" />
              Funil de captacao
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary-foreground/50" />
              Integracao GoHighLevel
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary-foreground/50" />
              LGPD e sigilo profissional
            </div>
          </div>
        </div>
      </div>

      {/* Formularios */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  )
}
