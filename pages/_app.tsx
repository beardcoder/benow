import '@fontsource/fira-sans/700.css'
import '@fontsource/pt-sans'
import '@fontsource/pt-sans/700.css'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
