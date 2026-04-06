'use client'

import { motion } from 'framer-motion'
import Reveal from '@/components/reveal'
import MagneticLink from '@/components/magnetic-link'
import SmoothLine from '@/components/smooth-line'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/beardcoder' },
  { label: 'E-Mail', href: 'mailto:markus@letsbenow.de' },
]

export default function Footer() {
  return (
    <footer className="relative px-6 pb-12 pt-32 md:px-12 md:pb-16 md:pt-48 lg:px-20">
      <SmoothLine className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-20 lg:right-20" />

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
          {/* Label */}
          <Reveal className="md:col-span-4" delay={0.1}>
            <span className="text-xs font-light tracking-[0.3em] uppercase text-[var(--color-text-muted)]">
              Kontakt
            </span>
          </Reveal>

          {/* Content */}
          <div className="md:col-span-8">
            <Reveal delay={0.2}>
              <p className="font-serif text-3xl font-normal leading-snug tracking-tight-custom text-[var(--color-text-primary)] md:text-4xl lg:text-5xl text-balance">
                Lust auf Zusammen&shy;arbeit?
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-[var(--color-text-secondary)]">
                Ich freue mich über spannende Projekte und neue Kontakte.
              </p>
            </Reveal>

            {/* Links */}
            <Reveal delay={0.5}>
              <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
                {socialLinks.map((link) => (
                  <MagneticLink
                    key={link.label}
                    href={link.href}
                    external={!link.href.startsWith('mailto:')}
                    className="text-sm font-light tracking-wide text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                  </MagneticLink>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-32 flex flex-col items-start justify-between gap-4 pt-8 md:mt-48 md:flex-row md:items-center"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <Reveal delay={0.6}>
            <span className="text-xs font-light text-[var(--color-text-muted)]">
              © {new Date().getFullYear()} Markus Sommer
            </span>
          </Reveal>
          <Reveal delay={0.7}>
            <span className="text-xs font-light text-[var(--color-text-muted)]">
              Made in Bavaria
            </span>
          </Reveal>
        </motion.div>
      </div>
    </footer>
  )
}
