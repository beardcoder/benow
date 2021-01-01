import '../styles/globals.css'
import '../styles/loader.css'
import '@fontsource/poppins/700.css'
import '@fontsource/ubuntu/400.css'
import '@fontsource/ubuntu/700.css'
import Router from 'next/router'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
