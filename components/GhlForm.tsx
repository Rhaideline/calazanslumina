'use client'

import Script from 'next/script'

interface GhlFormProps {
  /** ID do formulario no GHL (o mesmo que aparece na URL do widget) */
  formId: string
  title: string
  className?: string
  height?: string
}

/**
 * Embed oficial do formulario do GoHighLevel — renderizado direto, sem gate de
 * clique e sem placeholder na frente. O form aparece exatamente como o GHL o
 * entrega.
 *
 * O form_embed.js e o script oficial do GHL: e ele que faz o iframe se ajustar
 * a altura real do formulario. Sem ele o form corta quando novos campos sao
 * adicionados no builder. Carregado com lazyOnload p/ sair do caminho critico
 * de renderizacao — e o unico ajuste de performance aqui, e nao muda o que o
 * usuario ve.
 */
export default function GhlForm({ formId, title, className, height = '500px' }: GhlFormProps) {
  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        id={`inline-${formId}`}
        title={title}
        className={className}
        style={{ width: '100%', height, border: 'none', borderRadius: '3px' }}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-form-id={formId}
        data-form-name={title}
        data-height={height.replace('px', '')}
        data-layout-iframe-id={`inline-${formId}`}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  )
}
