import { FunctionComponent } from 'react'
import { UiMenu } from '../Ui/Menu/UiMenu'

interface Props {}

export const LayoutPage: FunctionComponent<Props> = ({
  children,
}): JSX.Element => {
  return (
    <>
      <UiMenu />
      {children}
    </>
  )
}

export default LayoutPage
