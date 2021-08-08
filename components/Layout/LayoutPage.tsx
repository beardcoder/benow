import { FunctionComponent } from 'react'
import { UiMenu } from '../Ui/Menu/UiMenu'

interface Props {}

export const LayoutPage: FunctionComponent<Props> = ({
  children,
}): JSX.Element => {
  return (
    <div className='relative w-full overflow-x-hidden'>
      <UiMenu />
      {children}
    </div>
  )
}

export default LayoutPage
