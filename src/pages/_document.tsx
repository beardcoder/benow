import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='de'>
      <Head>
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='icon' type='image/png' href='/favicon.png' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#22c55e' />
        <meta name='msapplication-TileColor' content='#22c55e' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <body className='text-neutral-800 bg-white dark:bg-neutral-900 dark:text-neutral-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
