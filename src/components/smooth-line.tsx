'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function SmoothLine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scaleX = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <div ref={ref} className={className}>
      <motion.div
        className="h-px w-full bg-[var(--color-border-hover)] origin-left"
        style={{ scaleX }}
      />
    </div>
  )
}
