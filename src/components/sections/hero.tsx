'use client'

import { motion } from 'framer-motion'
import TextReveal from '@/components/text-reveal'

export default function Hero() {
  return (
    <header className="relative flex min-h-svh flex-col justify-end px-6 pb-16 md:px-12 lg:px-20">
      {/* Subtle grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top bar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 md:px-12 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-sm font-light tracking-widest uppercase text-[var(--color-text-secondary)]">
          Markus Sommer
        </span>
        <span className="text-sm font-light text-[var(--color-text-muted)]">
          Bavaria, DE
        </span>
      </motion.nav>

      {/* Main title */}
      <div className="max-w-6xl">
        <h1 className="font-serif text-5xl font-normal leading-[1.05] tracking-display text-[var(--color-text-primary)] sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem]">
          <TextReveal text="Creative" delay={0.3} />
          <br />
          <span className="text-[var(--color-text-muted)]">
            <TextReveal text="Developer" delay={0.5} />
          </span>
        </h1>

        <motion.p
          className="mt-8 max-w-md text-base font-light leading-relaxed text-[var(--color-text-secondary)] md:mt-10 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Frontendartist & Webentwickler.
          <br />
          Building modern web experiences
          <br />
          with precision and purpose.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-6 flex flex-col items-center gap-3 md:right-12 lg:right-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <span className="text-[10px] font-light tracking-[0.3em] uppercase text-[var(--color-text-muted)] [writing-mode:vertical-lr]">
          Scroll
        </span>
        <motion.div
          className="h-12 w-px bg-[var(--color-text-muted)]"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 1.2,
            delay: 2.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </motion.div>
    </header>
  )
}
