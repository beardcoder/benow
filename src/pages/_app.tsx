import '@fontsource/inter/700.css'
import '@fontsource/open-sans'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/700.css'
import '@/src/styles/globals.css'
import 'nprogress/nprogress.css'
import 'swiper/css'

import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import nprogress from 'nprogress'
import { useEffect } from 'react'

import { HelperJsonLd } from '@/src/components/Helper/HelperJsonLd'

nprogress.configure({ showSpinner: false })

function Website({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const delay = 500 // in milliseconds
    let timer: NodeJS.Timeout | null = null
    const load = () => {
      timer = setTimeout(function () {
        nprogress.start()
      }, delay)
    }
    const stop = () => {
      if (timer) clearTimeout(timer)
      nprogress.done()
    }
    Router.events.on('routeChangeStart', () => load())
    Router.events.on('routeChangeComplete', () => stop())
    Router.events.on('routeChangeError', () => stop())
  }, [])
  return (
    <>
      <HelperJsonLd />
      <Component {...pageProps} />
    </>
  )
}
export default Website
