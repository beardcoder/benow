import { cx } from 'classix'
import { motion, MotionProps } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

import styles from './menu.module.css'

const nav = [
  {
    title: 'Intro',
    id: 'intro',
  },
  {
    title: 'Über mich',
    id: 'me',
  },
  {
    title: 'Projekte',
    id: 'projects',
  },
  {
    title: 'Blog',
    id: 'blog',
  },
  {
    title: 'Repositories',
    id: 'repos',
  },
  {
    title: 'Snippets',
    id: 'snippets',
  },
]

const variantsItems = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const variantsWrapper = {
  open: {
    y: '0',
    transition: {
      type: 'spring',
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  closed: {
    y: '-100%',
    transition: {
      type: 'spring',
      duration: Object.keys(nav).length * 0.1,
      delay: 0.1,
      staggerChildren: 0.1,
    },
  },
}

export default function Menu() {
  const [isOpen, toggleOpen] = useState(false)
  return (
    <>
      <button
        className='w-12 mt-10 mr-10 z-50 absolute top-0 right-0'
        aria-label='Show Navigation Menu'
        aria-expanded={isOpen ? 'true' : 'false'}
        tabIndex={0}
        onClick={() => toggleOpen(!isOpen)}
      >
        <div
          className={cx(styles.burgerBunTop, isOpen && styles.burgerBunTopOpen)}
        />
        <div
          className={cx(
            styles.burgerFilling,
            isOpen && styles.burgerFillingOpen
          )}
        />
        <div
          className={cx(
            styles.burgerBunBottom,
            isOpen && styles.burgerBunBottomOpen
          )}
        />
      </button>
      <motion.nav
        animate={isOpen ? 'open' : 'closed'}
        className='fixed flex flex-col justify-center items-center inset-0 bg-black transition-all duration-200 z-40'
        initial={false}
        variants={variantsWrapper}
      >
        {nav.map((link, i) => (
          <motion.div key={i} variants={variantsItems}>
            <Link
              href={`/#${link.id}`}
              onClick={() => toggleOpen(false)}
              className='block py-5 text-4xl font-bold text-white uppercase hover:text-gradient text-[6vh] pt-[3vh] pb-[3vh] leading-none'
            >
              {link.title}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </>
  )
}
