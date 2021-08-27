import classNames from 'classnames'
import { FunctionComponent } from 'react'

type Props = {
  light?: boolean
}

export const UiTag: FunctionComponent<Props> = ({
  children,
  light = false,
}): JSX.Element => {
  return (
    <div
      className={classNames(
        'inline-block px-4 py-1 mb-4 mr-4 text-sm  rounded-full',
        !light ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-600'
      )}
    >
      {children}
    </div>
  )
}

export default UiTag
