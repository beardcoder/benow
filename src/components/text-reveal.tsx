'use client'

import { motion } from 'framer-motion'

type Props = {
  text: string
  className?: string
  delay?: number
}

export default function TextReveal({ text, className, delay = 0 }: Props) {
  const words = text.split(' ')

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  )
}
