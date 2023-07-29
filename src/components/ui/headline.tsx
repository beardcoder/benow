import { twMerge } from 'tailwind-merge'

export function H1({ children, className }: JSX.IntrinsicElements['h1']) {
  return (
    <h1
      className={twMerge(
        'text-5xl font-bold text-white md:text-6xl lg:text-8xl font-header py-1',
        className,
      )}
    >
      {children}
    </h1>
  )
}

export function H2({ children, className }: JSX.IntrinsicElements['h2']) {
  return (
    <h2
      className={twMerge(
        'text-4xl font-bold md:text-5xl font-header py-1',
        className,
      )}
    >
      {children}
    </h2>
  )
}
export function H3({ children, className }: JSX.IntrinsicElements['h3']) {
  return (
    <h3
      className={twMerge(
        'text-lg font-bold md:text-xl font-header py-1',
        className,
      )}
    >
      {children}
    </h3>
  )
}
