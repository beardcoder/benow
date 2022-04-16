import classNames from 'classnames'
import Link from 'next/link'
import { FunctionComponent } from 'react'

type Props = {
  className?: string
  href?: string
  target?: string
  rel?: string
} & JSX.IntrinsicElements['div'] &
  JSX.IntrinsicElements['a']

export const UiCard: FunctionComponent<Props> = ({
  children,
  className,
  href,
  target,
  rel,
  ...props
}): JSX.Element => {
  if (href) {
    return (
      <Link href={href}>
        <a
          className={classNames(
            'block duration-200 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 hover:shadow-md transition-shadow',
            className
          )}
          target={target}
          rel={rel}
          {...props}
        >
          {children}
        </a>
      </Link>
    )
  }
  return (
    <div
      className={classNames(
        'block duration-200 rounded-xl bg-gray-100 dark:bg-gray-900',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
