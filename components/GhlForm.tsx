'use client'

import { useId } from 'react'
import Script from 'next/script'

export const GHL_FORM_ID = 'ncofzws1iEKhN6iFEA6H'

/**
 * Formulario do GoHighLevel exatamente como o GHL entrega: sem pre-formulario,
 * sem caixa de titulo por cima, sem gate de clique. (Pedido dela, 31/out/2026.)
 *
 * O form_embed.js oficial e o que ajusta o iframe a altura real do formulario;
 * sem ele o form corta quando um campo e adicionado no builder. Entra com
 * lazyOnload para nao disputar o carregamento da pagina.
 *
 * Id unico por instancia: a home tem dois formularios, e o form_embed.js
 * redimensiona pelo id — dois iframes com o mesmo id faziam um deles ficar
 * com a altura do outro.
 */
export default function GhlForm({ height = 560, title = 'Formulário de orçamento' }: { height?: number; title?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const iframeId = `inline-${GHL_FORM_ID}-${uid}`
  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`}
        id={iframeId}
        title={title}
        loading="lazy"
        style={{ width: '100%', height: `${height}px`, border: 'none', borderRadius: '3px' }}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-form-id={GHL_FORM_ID}
        data-form-name="Form 2"
        data-height={String(height)}
        data-layout-iframe-id={iframeId}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  )
}
