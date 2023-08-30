import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Urbanist } from 'next/font/google'
import Menu from '../components/menu'
import { twMerge } from 'tailwind-merge'
import Script from 'next/script'

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <Script
        src="https://tracking.letsbenow.de/script.js"
        data-website-id="e66e564e-d8b9-469d-93cc-1defbfe9ddc1"
      />
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
