import { cx } from 'classix'
import { FunctionComponent } from 'react'

type Props = {
  light?: boolean
} & JSX.IntrinsicElements['div']

const Tag: FunctionComponent<Props> = ({
  children,
  light = false,
  ...props
}) => {
  return (
    <div
      className={cx(
        'inline-block px-4 py-1 mb-4 mr-4 text-sm  rounded-full bg-neutral-800 dark:bg-neutral-200 text-white dark:text-black'
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Tag
