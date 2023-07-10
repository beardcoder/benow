'use client'

import merge from 'deepmerge'
import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

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

const variantsItems: Variants = {
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

const variantsWrapper: Variants = {
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

const lineVariants: Variants = {
  open: {
    transition: {
      bounce: 0,
      duration: 0.2,
    },
  },
  closed: {
    rotate: 0,
    transition: {
      bounce: 0,
      duration: 0.2,
    },
  },
}

export default function Menu() {
  const [isOpen, toggleOpen] = useState(false)
  return (
    <>
      <motion.button
        className='w-12 mt-10 mr-10 z-50 absolute top-0 right-0 space-y-2'
        aria-label='Show Navigation Menu'
        aria-expanded={isOpen ? 'true' : 'false'}
        animate={isOpen ? 'open' : 'closed'}
        tabIndex={0}
        onClick={() => toggleOpen(!isOpen)}
      >
        <motion.div
          className='bg-white w-1/2 rounded-full h-[5px]'
          animate={isOpen ? 'open' : 'closed'}
          variants={merge(
            {
              open: {
                rotate: 45,
                translateX: 3,
                translateY: 5,
              },
            },
            lineVariants,
          )}
        />
        <motion.div
          className='bg-white w-full rounded-full h-[5px]'
          animate={isOpen ? 'open' : 'closed'}
          variants={merge(
            {
              open: {
                rotate: -45,
              },
            },
            lineVariants,
          )}
        />
        <motion.div
          className='bg-white w-4/5 rounded-full h-[5px]'
          animate={isOpen ? 'open' : 'closed'}
          variants={merge(
            {
              open: {
                rotate: 45,
                translateX: 8,
                translateY: -9,
              },
            },
            lineVariants,
          )}
        />
      </motion.button>
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
