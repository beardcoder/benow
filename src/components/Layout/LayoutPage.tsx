import { FunctionComponent } from 'react'

import { UiMenu } from '../Ui/Menu/UiMenu'

type Props = {} & JSX.IntrinsicElements['div']

export const LayoutPage: FunctionComponent<Props> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <div className='relative w-full' {...props}>
      <UiMenu />
      {children}
      <footer className='p-10 text-center text-white bg-gray-900'>
        Markus Sommer since 1984, 100% Made with ☕ and 🦄 in Bavaria
      </footer>
    </div>
  )
}

export default LayoutPage
