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
            'block transition-shadow duration-200 shadow-xl hover:shadow-2xl rounded-lg overflow-hidden',
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
        'block transition-shadow duration-200 shadow-xl rounded',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
