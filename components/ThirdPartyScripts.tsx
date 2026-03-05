'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function ThirdPartyScripts() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Only load third-party scripts after user interaction or 5s idle
    let loaded = false
    const load = () => {
      if (!loaded) {
        loaded = true
        setShouldLoad(true)
      }
    }

    const timer = setTimeout(load, 12000)

    const events = ['scroll', 'touchstart', 'click', 'mousemove'] as const
    const handler = () => load()
    events.forEach((e) => window.addEventListener(e, handler, { once: true, passive: true }))

    return () => {
      clearTimeout(timer)
      events.forEach((e) => window.removeEventListener(e, handler))
    }
  }, [])

  if (!shouldLoad) return null

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
