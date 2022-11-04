import Menu from './menu'

type Props = {} & JSX.IntrinsicElements['div']

import { Urbanist } from '@next/font/google'
import { cx } from 'classix'
const urbanist = Urbanist({ weight: ['400', '700', '800'], subsets: ['latin'] })

export default function Layout({ children, ...props }: Props) {
  return (
    <div className={cx('relative w-full', urbanist.className)} {...props}>
      <Menu />
      {children}
      <footer className='p-10 text-center text-white bg-neutral-800'>
        Markus Sommer since 1984, 100% Made with ☕ and 🦄 in Bavaria
      </footer>
    </div>
  )
}
