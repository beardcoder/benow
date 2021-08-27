import classNames from 'classnames'
import { FunctionComponent } from 'react'

interface Props {
  className?: string
}

export const UiCardContent: FunctionComponent<Props> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <div className={classNames('p-8', className)} {...props}>
      {children}
    </div>
  )
}
