import styles from './Footer.module.css'

export default function GlobalFooter() {
  return (
    <footer className={styles.footer}>
      <div className='container text-center'>
        Markus Sommer since 1984, 100% Made with ☕️ in{' '}
        <span className={styles.highlight}>Bavaria</span>
      </div>
    </footer>
  )
}
