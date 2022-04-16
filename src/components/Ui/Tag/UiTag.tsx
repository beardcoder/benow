import classNames from 'classnames'
import { FunctionComponent } from 'react'

type Props = {
  light?: boolean
} & JSX.IntrinsicElements['div']

export const UiTag: FunctionComponent<Props> = ({
  children,
  light = false,
  ...props
}): JSX.Element => {
  return (
    <div
      className={classNames(
        'inline-block px-4 py-1 mb-4 mr-4 text-sm  rounded-full bg-gray-900 dark:bg-gray-200 text-white dark:text-black'
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default UiTag
