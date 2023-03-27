import { Menu } from './ui/menu'

type Props = {} & JSX.IntrinsicElements['div']

import { cx } from 'classix'

export default function Layout({ children, ...props }: Props) {
  return (
    <div className={cx('relative w-full')} {...props}>
      <Menu />
      {children}
      <footer className='p-10 text-center text-white bg-neutral-800'>
        Markus Sommer since 1984, 100% Made with ☕ and 🦄 in Bavaria
      </footer>
    </div>
  )
}
