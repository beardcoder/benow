import styles from '@styles/ui/Button.module.css'
import classnames from 'classnames'

export default function UiButton({
  children,
  className,
  tagName,
  small,
  ...props
}) {
  const CompTagName = tagName ? tagName : 'a'
  return (
    <CompTagName
      className={classnames(
        styles.button,
        small ? styles.buttonSmall : undefined,
        tagName === 'a' ? styles.buttonIsLink : undefined,
        className
      )}
      {...props}
    >
      {children}
    </CompTagName>
  )
}
