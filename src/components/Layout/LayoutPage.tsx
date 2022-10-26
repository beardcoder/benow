import { FunctionComponent } from 'react'

import { UiMenu } from '../Ui/Menu/UiMenu'

type Props = {} & JSX.IntrinsicElements['div']

import { Urbanist } from '@next/font/google'
import classNames from 'classnames'
const urbanist = Urbanist()

export const LayoutPage: FunctionComponent<Props> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <div
      className={classNames('relative w-full', urbanist.className)}
      {...props}
    >
      <UiMenu />
      {children}
      <footer className='p-10 text-center text-white bg-neutral-800'>
        Markus Sommer since 1984, 100% Made with ☕ and 🦄 in Bavaria
      </footer>
    </div>
  )
}

export default LayoutPage
