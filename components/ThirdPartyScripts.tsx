'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function ThirdPartyScripts() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://reputationhub.site/reputation/assets/review-widget.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://beta.leadconnectorhq.com/loader.js"
        data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="67f098808e2d431c7fc8ec81"
        strategy="lazyOnload"
      />
    </>
  )
}
