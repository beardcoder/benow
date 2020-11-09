import styles from './Card.module.css'
import classnames from 'classnames'

export default function UiCard({
  children,
  className,
  tagName,
  small,
  innerClassName,
  contentClassName,
  ...props
}) {
  const CompTagName = tagName
  return (
    <CompTagName
      className={classnames(
        styles.card,
        small ? styles.cardSmall : undefined,
        tagName === 'a' ? styles.cardIsLink : undefined,
        className
      )}
      {...props}
    >
      <div className={classnames(styles.cardInner, innerClassName)}>
        <div className={classnames(styles.cardContent, contentClassName)}>
          {children}
        </div>
      </div>
    </CompTagName>
  )
}
