'use client'

import { motion } from 'framer-motion'

type Props = {
  href: string
  children: React.ReactNode
  external?: boolean
  className?: string
}

export default function MagneticLink({
  href,
  children,
  external = false,
  className = '',
}: Props) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`group relative inline-block ${className}`}
      whileHover="hover"
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 h-px w-full bg-[var(--color-accent)] origin-left"
        initial={{ scaleX: 0 }}
        variants={{
          hover: { scaleX: 1 },
        }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </motion.a>
  )
}
