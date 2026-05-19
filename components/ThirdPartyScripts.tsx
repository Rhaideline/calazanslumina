'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID

export default function ThirdPartyScripts() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Only load heavy third-party scripts (GHL chat widget, ReputationHub)
    // after user interaction or 12s idle. Mantém PageSpeed.
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

  return (
    <>
      {/* === Meta Pixel (loads afterInteractive, doesn't block LCP) === */}
      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){
            n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
            s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {/* === GA4 (gtag) === */}
      {GA4_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}', { send_page_view: true });
            `}
          </Script>
        </>
      )}

      {/* === Lazy 3P (GHL chat, ReputationHub) — 12s idle ou interação === */}
      {shouldLoad && (
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
      )}
    </>
  )
}
