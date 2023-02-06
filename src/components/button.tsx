import { cx } from 'classix'
import Link from 'next/link'
import { UrlObject } from 'url'

import styles from './button.module.css'

type Props = {
  className?: string
  tagName?: string
  small?: boolean
  block?: boolean
  href: string | UrlObject
  [key: string]: any
}
export default function Button({ children, className, tagName, small = false, block = false, href, ...props }: Props) {
  return (
    <Link
      href={href}
      className={cx(
        styles.button,
        small ? styles.buttonSmall : undefined,
        block ? styles.buttonBlock : undefined,
        tagName === 'a' ? styles.buttonIsLink : undefined,
        'border-gradient',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
