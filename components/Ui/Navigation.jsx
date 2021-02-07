import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi'
import styles from './Navigation.module.css'
import Scrollspy from 'react-scrollspy'
import Headroom from 'react-headroom'
import Link from 'next/link'
import UiNavigationItem from './NavigationItem'

const items = [
  { href: '/#intro', name: 'Intro' },
  { href: '/#about', name: 'Über mich' },
  { href: '/#blog', name: 'Blog' },
  { href: '/#portfolio', name: 'Portfolio' },
]

const social = [
  {
    href: 'https://twitter.com/beardcoder',
    icon: <FiTwitter size="25" strokeWidth="1" />,
    title: 'twitter',
  },
  {
    href: 'https://github.com/beardcoder',
    icon: <FiGithub size="25" strokeWidth="1" />,
    title: 'github',
  },
  {
    href: 'mailto:markussom+creativeworkspace@gmail.com',
    icon: <FiMail size="25" strokeWidth="1" />,
    title: 'mail',
  },
]

export default function UiNavigation() {
  return (
    <Headroom disableInlineStyles>
      <div className={styles.navigation}>
        <div className='container flex'>
          <Scrollspy
            offset={-100}
            componentTag='nav'
            items={['intro', 'about', 'blog', 'portfolio']}
            currentClassName={styles.linkActive}
            className={styles.navbar + ' mx-auto md:ml-0'}
          >
            {items.map(({ href, name }) => (
              <UiNavigationItem key={`${href}`} href={href} name={name}></UiNavigationItem>
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
