import classNames from 'classnames'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { UrlObject } from 'url'

import styles from './UiButton.module.css'

type Props = {
  className?: string
  tagName?: string
  small?: boolean
  block?: boolean
  href: string | UrlObject
  [key: string]: any
} & JSX.IntrinsicElements['a']
export const UiButton: FunctionComponent<Props> = ({
  children,
  className,
  tagName,
  small = false,
  block = false,
  href,
  ...props
}): JSX.Element => {
  return (
    <Link
      href={href}
      className={classNames(
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
