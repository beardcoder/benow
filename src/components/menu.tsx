import { cx } from 'classix'
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

export default function Menu() {
  const [open, toggleOpen] = useState(false)
  return (
    <div className='absolute top-0 right-0 z-50'>
      <button
        className='w-12 mt-10 mr-10 relative z-50'
        aria-label='Show Navigation Menu'
        aria-expanded='false'
        tabIndex={0}
        onClick={() => toggleOpen(!open)}
      >
        <div className={cx(styles.burgerBunTop, open && styles.burgerBunTopOpen)} />
        <div className={cx(styles.burgerFilling, open && styles.burgerFillingOpen)} />
        <div className={cx(styles.burgerBunBottom, open && styles.burgerBunBottomOpen)} />
      </button>
      <div
        className={cx(
          'fixed flex left-0 right-0 h-full bg-black transition-all duration-200',
          open ? 'top-0' : '-top-full'
        )}
      >
        <nav className='mx-auto my-auto text-center'>
          {nav.map((link, i) => (
            <Link
              key={i}
              href={`/#${link.id}`}
              onClick={() => toggleOpen(false)}
              className='block py-5 text-4xl font-bold text-white uppercase hover:text-gradient'
            >
              {link.title}
              <style jsx>{`
                a {
                  font-size: 6vh;
                  line-height: 1;
                  padding-top: 3vh;
                  padding-bottom: 3vh;
                }
              `}</style>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
