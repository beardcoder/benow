import classNames from 'classnames'
import { FunctionComponent } from 'react'

type Props = {
  className?: string
} & JSX.IntrinsicElements['div']

export const UiCardContent: FunctionComponent<Props> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <div className={classNames('p-4 md:p-8', className)} {...props}>
      {children}
    </div>
  )
}
