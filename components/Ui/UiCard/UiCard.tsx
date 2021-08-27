import classNames from 'classnames'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'

interface Props {
  className?: string
  href?: string
  target?: string
  rel?: string
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
      <Link href={href}>
        <a
          className={classNames(
            'block transition-shadow duration-200 shadow-xl hover:shadow-2xl rounded-lg overflow-hidden',
            className
          )}
          target={target}
          rel={rel}
        >
          {children}
        </a>
      </Link>
    )
  }
  return (
    <div
      className={classNames(
        'block transition-shadow duration-200 shadow-x rounded',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
