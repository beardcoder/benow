import Link from 'next/link'
import { UrlObject } from 'url'

import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  tagName?: string
  small?: boolean
  block?: boolean
  href: string | UrlObject
  [key: string]: any
}
export default function Button({
  children,
  className,
  tagName,
  small = false,
  block = false,
  href,
  ...props
}: Props) {
  return (
    <Link
      href={href}
      className={twMerge(
        'uppercase text-white bg-gradient-to-br from-lime-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium text-sm px-9 py-3 text-center mr-2 mb-2 inline-flex justify-center items-center',
        small && 'px-6 py-2',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
