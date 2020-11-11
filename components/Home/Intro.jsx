import styles from './Intro.module.css'

export default function HomeIntro() {
  return (
    <section id='intro' className={styles.intro}>
      <div className='container'>
        <div className={styles.text}>
          Innovation, Inspiration, Technik und Leidenschaft
        </div>
        <h1 className={styles.title}>
          Webentwickler
          <br />
          Frontend <span className={styles.titleHighlight}>Artist</span>
          <br />
          Designer
        </h1>
      </div>
    </section>
  )
}
