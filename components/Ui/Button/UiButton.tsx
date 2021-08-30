import classNames from 'classnames'
import { FunctionComponent } from 'react'
import styles from './UiButton.module.css'

type Props = {
  className?: string
  tagName?: string
  small?: boolean
  block?: boolean
  [key: string]: any
} & JSX.IntrinsicElements['a']
export const UiButton: FunctionComponent<Props> = ({
  children,
  className,
  tagName,
  small = false,
  block = false,
  ...props
}): JSX.Element => {
  return (
    <a
      className={classNames(
        styles.button,
        small ? styles.buttonSmall : undefined,
        block ? styles.buttonBlock : undefined,
        tagName === 'a' ? styles.buttonIsLink : undefined,
        'border-gradient',
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}
