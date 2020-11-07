import styles from '@styles/Blog/Intro.module.css'

export default function BlogIntro({ title, image }) {
  return (
    <section
      id="intro"
      className={styles.intro}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container">
        <div className={styles.text}>
          Innovation, Inspiration, Technik und Leidenschaft
        </div>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  )
}
