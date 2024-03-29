'use client'

import { NEXT_PUBLIC_GA_ID } from '../common/constants'

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageview(url: string) {
  window.gtag('config', NEXT_PUBLIC_GA_ID, {
    page_path: url,
  })
}

type GTagEvent = {
  action: string
  category: string
  label: string
  value: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export function event({ action, category, label, value }: GTagEvent) {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

const gaScript = `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","${NEXT_PUBLIC_GA_ID}");`

export default function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (!window.gtag || !pathname) return

    pageview(pathname)
  }, [pathname])

  // Next.js 13 에서 아직 미지원
  // const router = useRouter()
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   router.events.on('hashChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //     router.events.off('hashChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  return (
    // https://nextjs.org/docs/messages/next-script-for-ga
    NEXT_PUBLIC_GA_ID ? (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {gaScript}
        </Script>
      </>
    ) : null
  )
}
