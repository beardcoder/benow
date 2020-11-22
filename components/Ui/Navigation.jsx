import { Twitter, GitHub, Mail } from 'react-feather'
import styles from './Navigation.module.css'
import Scrollspy from 'react-scrollspy'
import Headroom from 'react-headroom'

const items = [
  { href: '/#intro', name: 'Intro' },
  { href: '/#about', name: 'Über mich' },
  { href: '/#blog', name: 'Blog' },
  { href: '/#portfolio', name: 'Portfolio' },
]

const social = [
  {
    href: 'https://twitter.com/beardcoder',
    icon: <Twitter />,
    title: 'twitter',
  },
  {
    href: 'https://github.com/beardcoder',
    icon: <GitHub />,
    title: 'github',
  },
  {
    href: 'mailto:info@creativeworkspace.de',
    icon: <Mail />,
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
              <a key={`${href}${name}`} className={styles.link} href={href}>
                {name}
              </a>
            ))}
          </Scrollspy>
          <nav className={styles.navbar}>
            <div className={styles.social}>
              {social.map(({ href, icon, title }) => (
                <a
                  key={`${href}${title}`}
                  target='_blank'
                  rel='noreferrer'
                  className={styles.social__link}
                  href={href}
                  title={title}
                >
                  {icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </Headroom>
  )
}
