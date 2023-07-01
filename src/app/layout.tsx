import '@/styles/globals.css'
import 'nprogress/nprogress.css'
import 'swiper/css'

import { Metadata } from 'next'
import { Playfair_Display, Urbanist } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Markus Sommer — Frontendartist & Webentwickler',
  description:
    'Persönliche Webseite von Markus Sommer ein Entwickler für moderne Web Technologien, Design und Frontend',
  icons: [
    { rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' },
    { rel: 'icon', type: 'image/png', url: '/favicon.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
  ],

  manifest: '/site.webmanifest',
}

const urbanist = Urbanist({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
})
const playfairDisplay = Playfair_Display({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
})

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='de'>
      <body className={urbanist.className}>{children}</body>
    </html>
  )
}
