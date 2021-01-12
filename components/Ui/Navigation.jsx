import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi'
import styles from './Navigation.module.css'
import Scrollspy from 'react-scrollspy'
import Headroom from 'react-headroom'
import Link from 'next/link'

const items = [
  { href: '/#intro', name: 'Intro' },
  { href: '/#about', name: 'Über mich' },
  { href: '/#blog', name: 'Blog' },
  { href: '/#portfolio', name: 'Portfolio' },
]

const social = [
  {
    href: 'https://twitter.com/beardcoder',
    icon: <FiTwitter />,
    title: 'twitter',
  },
  {
    href: 'https://github.com/beardcoder',
    icon: <FiGithub />,
    title: 'github',
  },
  {
    href: 'mailto:info@creativeworkspace.de',
    icon: <FiMail />,
    title: 'mail',
  },
]

export default function UiNavigation() {
  return (
    <Headroom disableInlineStyles>
      <div className={styles.navigation}>
        <div className='container flex'>
          <Scrollspy
            componentTag='nav'
            items={['intro', 'about', 'blog', 'portfolio']}
            currentClassName={styles.linkActive}
            className={styles.navbar + ' mx-auto md:ml-0'}
          >
            {items.map(({ href, name }) => (
              <Link key={`${href}${name}`} href={href} passHref>
                <a key={`${href}${name}`} className={styles.link}>
                  {name}
                </a>
              </Link>
            ))}
          </Scrollspy>
          <nav className={styles.navbar}>
            <div className={styles.social}>
              {social.map(({ href, icon, title }) => (
                <Link key={`${href}${title}`} href={href} passHref>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    className={styles.social__link}
                    title={title}
                  >
                    {icon}
                  </a>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </Headroom>
  )
}
