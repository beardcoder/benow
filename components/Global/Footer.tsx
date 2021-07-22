import styles from './Footer.module.css'
import { FiCoffee } from 'react-icons/fi'
import { GiUnicorn } from 'react-icons/gi'
export default function GlobalFooter() {
  return (
    <footer>
      <div className={styles.footer2}>
        <div className='container text-center'>
          Markus Sommer since 1984, 100% Made with{' '}
          <FiCoffee
            height='17'
            style={{ bottom: '2px' }}
            className='relative inline-block'
          />{' '}
          and{' '}
          <GiUnicorn
            height='17'
            style={{ bottom: '2px' }}
            className='relative inline-block mx-1'
          />
          in <span className={styles.highlight}>Bavaria</span>
        </div>
      </div>
    </footer>
  )
}
