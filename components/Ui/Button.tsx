import styles from './Button.module.css'
import classnames from 'classnames'

export default function UiButton({
  children,
  className = '',
  tagName,
  small = false,
  block = false,
  ...props
}) {
  const CompTagName = tagName ? tagName : 'a'
  return (
    <CompTagName
      className={classnames(
        styles.button,
        small ? styles.buttonSmall : undefined,
        block ? styles.buttonBlock : undefined,
        tagName === 'a' ? styles.buttonIsLink : undefined,
        className
      )}
      {...props}
    >
      {children}
    </CompTagName>
  )
}
