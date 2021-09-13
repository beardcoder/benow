import classNames from 'classnames'
import { FunctionComponent } from 'react'
import Link from 'next/link'
import styles from './UiButton.module.css'

type Props = {
  className?: string
  tagName?: string
  small?: boolean
  block?: boolean
  href?: string
  [key: string]: any
} & JSX.IntrinsicElements['a']
export const UiButton: FunctionComponent<Props> = ({
  children,
  className,
  tagName,
  small = false,
  block = false,
  href,
  ...props
}): JSX.Element => {
  const Wrapper = ({ children }: any) =>
    href ? <Link href={href}>{children}</Link> : <>{children}</>

  return (
    <Wrapper>
      <a
        className={classNames(
          styles.button,
          small ? styles.buttonSmall : undefined,
          block ? styles.buttonBlock : undefined,
          tagName === 'a' ? styles.buttonIsLink : undefined,
          'border-gradient flex flex-row items-center cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </a>
    </Wrapper>
  )
}
