import styles from '@styles/ui/Card.module.css'
import classnames from 'classnames'

export default function UiCard({
  children,
  className,
  tagName,
  small,
  ...props
}) {
  const CompTagName = tagName
  return (
    <CompTagName
      className={classnames(
        styles.card,
        small ? styles.cardSmall : undefined,
        className,
        tagName === 'a' ? styles.cardIsLink : undefined
      )}
      {...props}
    >
      <div className={styles.cardContent}>{children}</div>
    </CompTagName>
  )
}
