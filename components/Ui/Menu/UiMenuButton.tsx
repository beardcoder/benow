import classNames from 'classnames'
import { FunctionComponent } from 'react'
import styles from './UiMenuButton.module.css'

type Props = {
  open: boolean | (() => void)
  toogle: () => void
  className: string
}

export const UiMenuButton: FunctionComponent<Props> = ({
  open,
  toogle,
  className,
}): JSX.Element => {
  return (
    <button
      className={classNames('w-12 mt-10 mr-10', className)}
      onClick={toogle}
    >
      <div
        className={classNames(
          styles.burgerBunTop,
          open ? styles.burgerBunTopOpen : null
        )}
      ></div>
      <div
        className={classNames(
          styles.burgerFilling,
          open ? styles.burgerFillingOpen : null
        )}
      ></div>
      <div
        className={classNames(
          styles.burgerBunBottom,
          open ? styles.burgerBunBottomOpen : null
        )}
      ></div>
    </button>
  )
}
