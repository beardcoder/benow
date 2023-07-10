import { cx } from 'classix'
import Link from 'next/link'
import { FunctionComponent } from 'react'

type Props = {
  className?: string
  href?: string
  target?: string
  dense?: boolean
  rel?: string
  children?: any
  image?: any
}

const Card: FunctionComponent<Props> = ({
  children,
  image,
  className,
  href,
  target,
  dense = false,
  rel,
  ...props
}): JSX.Element => {
  const Content = () => (
    <div className={cx(dense ? 'p-2 md:p-4' : 'p-4 md:p-6')}>{children}</div>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={cx(
          'block duration-200 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 hover:shadow-md dark:hover:bg-neutral-700 dark:transition-colors transition-shadow h-full',
          className,
        )}
        target={target}
        rel={rel}
        {...props}
      >
        {image}
        <Content />
      </Link>
    )
  }
  return (
    <div
      className={cx(
        'block duration-200 rounded-xl bg-neutral-100 dark:bg-neutral-800 h-full',
        className,
      )}
      {...props}
    >
      {image}
      <Content />
    </div>
  )
}

export default Card
