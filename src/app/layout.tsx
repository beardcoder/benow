import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Urbanist } from 'next/font/google'
import Menu from '../components/menu'
import { twMerge } from 'tailwind-merge'

export const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
})
export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body
        className={twMerge(
          urbanist.variable,
          playfair.variable,
          'text-neutral-800 bg-white dark:bg-neutral-900 dark:text-neutral-100 font-sans',
        )}
      >
        <div className="relative w-full">
          <Menu />

          {children}

          <footer className="p-10 text-center text-white bg-neutral-800">
            Markus Sommer since 1984, 100% Made with ☕ and 🦄 in Bavaria
          </footer>
        </div>
      </body>
    </html>
  )
}
