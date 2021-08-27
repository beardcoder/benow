import classNames from 'classnames'
import { FunctionComponent } from 'react'
import styles from './UiButton.module.css'

type Props = {
  className?: string
  tagName?: string
  small?: boolean
  block?: boolean
  [key: string]: any
}

export const UiButton: FunctionComponent<Props> = ({
  children,
  className,
  tagName,
  small = false,
  block = false,
  ...props
}): JSX.Element => {
  const CompTagName = `${
    tagName ? tagName : 'a'
  }` as keyof JSX.IntrinsicElements

  return (
    <CompTagName
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
    </CompTagName>
  )
}
