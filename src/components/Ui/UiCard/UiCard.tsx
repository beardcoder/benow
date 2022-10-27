import classNames from 'classnames'
import Link from 'next/link'
import { FunctionComponent } from 'react'

type Props = {
  className?: string
  href?: string
  target?: string
  rel?: string
  children?: any
}

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
      <Link
        href={href}
        className={classNames(
          'block duration-200 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 hover:shadow-md transition-shadow',
          className
        )}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </Link>
    )
  }
  return (
    <div
      className={classNames(
        'block duration-200 rounded-xl bg-neutral-100 dark:bg-neutral-900',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
