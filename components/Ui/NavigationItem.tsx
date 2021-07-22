import styles from './Navigation.module.css'
import Link from 'next/link'
import classnames from 'classnames'

export default function UiNavigationItem({ href, name, className = '' }) {
  return (
    <Link key={`${href}${name}`} href={href} passHref>
      <a className={classnames(styles.link, className)}>{name}</a>
    </Link>
  )
}
