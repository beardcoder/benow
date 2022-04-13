import '@fontsource/inter/700.css'
import '@fontsource/open-sans'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/700.css'

import 'swiper/css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HelperJsonLd } from '@/src/components/Helper/HelperJsonLd'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HelperJsonLd />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
