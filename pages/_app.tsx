import '@fontsource/work-sans/700.css'
import '@fontsource/open-sans'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/700.css'

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HelperJsonLd } from '@/components/Helper/HelperJsonLd'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HelperJsonLd />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
