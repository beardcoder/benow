import styles from './Card.module.css'
import classnames from 'classnames'
import { forwardRef } from 'react'

export const UiCard = forwardRef(({
  children,
  className,
  tagName,
  small,
  innerClassName,
  contentClassName,
  ...props
}, ref) => {
  const CompTagName = tagName
  return (
    <CompTagName
      className={classnames(
        styles.card,
        small ? styles.cardSmall : undefined,
        tagName === 'a' ? styles.cardIsLink : undefined,
        className
      )}
      ref={ref}
      {...props}
    >
      <div className={classnames(styles.cardInner, innerClassName)}>
        <div className={classnames(styles.cardContent, contentClassName)}>
          {children}
        </div>
      </div>
    </CompTagName>
  )
})

export default UiCard