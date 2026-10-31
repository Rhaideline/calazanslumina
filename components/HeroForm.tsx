import GhlForm from './GhlForm'

/**
 * Formulario do topo das paginas. So o form do GHL, do jeito que ele vem:
 * a caixa com titulo e texto que ficava por cima saiu (pedido dela, 31/out).
 * `titulo` continua aceito para nao quebrar quem chama, mas nao aparece.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function HeroForm({ titulo }: { titulo?: string }) {
  return (
    <div className="rounded-[2rem] bg-white/10 p-2 ring-1 ring-white/15">
      <div className="rounded-[calc(2rem-0.5rem)] bg-white p-3 md:p-4">
        <GhlForm height={520} />
      </div>
    </div>
  )
}
