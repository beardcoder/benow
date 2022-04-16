import '@fontsource/inter/700.css'
import '@fontsource/open-sans'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/700.css'

import { HelperJsonLd } from '@/src/components/Helper/HelperJsonLd'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from 'react'
import 'swiper/css'
import '../styles/globals.css'

NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const delay = 500 // in milliseconds
    let timer: NodeJS.Timeout | null = null
    const load = () => {
      timer = setTimeout(function () {
        NProgress.start()
      }, delay)
    }
    const stop = () => {
      if (timer) clearTimeout(timer)
      NProgress.done()
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
export default MyApp
