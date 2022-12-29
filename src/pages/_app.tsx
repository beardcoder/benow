import '@/src/styles/globals.css'
import 'nprogress/nprogress.css'
import 'swiper/css'

import { Playfair_Display, Urbanist } from '@next/font/google'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import { DefaultSeo, LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import nprogress from 'nprogress'
import { useEffect } from 'react'

nprogress.configure({ showSpinner: false })

const urbanist = Urbanist({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
})
const playfairDisplay = Playfair_Display({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
})

export default function Website({ Component, pageProps }: AppProps) {
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
      <DefaultSeo
        title='Markus Sommer — Frontendartist & Webentwickler'
        description='Persönliche Webseite von Markus Sommer ein Entwickler für moderne Web Technologien, Design und Frontend'
        openGraph={{
          type: 'website',
          locale: 'de_DE',
          url: 'https://www.letsbenow.de',
          site_name: 'be now',
        }}
        twitter={{
          handle: '@beardcoder',
          site: '@beardcoder',
          cardType: 'summary_large_image',
        }}
      />
      <LogoJsonLd
        logo='https://www.letsbenow.de/icon.svg'
        url='https://www.letsbenow.de'
      />
      <SocialProfileJsonLd
        type='Person'
        name='Markus Sommer'
        url='https://www.letsbenow.de'
        sameAs={[
          'https://www.instagram.com/markus.sommer/',
          'https://github.com/beardcoder',
          'https://twitter.com/beardcoder',
        ]}
      />
      <style jsx global>
        {`
          :root {
            --font-urbanist: ${urbanist.style.fontFamily};
            --font-playfairDisplay: ${playfairDisplay.style.fontFamily};
          }
        `}
      </style>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
