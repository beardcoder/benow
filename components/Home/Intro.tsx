import Image from 'next/image'
import styles from './Intro.module.css'

export function HomeIntro() {
  return (
    <section id='intro' className={styles.intro}>
      <div className={styles.imageContainer}>
        <Image
          src='/content/images/header.jpg'
          layout='fill'
          alt='Header Image'
          objectFit='cover'
          className={styles.image}
          quality={60}
        ></Image>
      </div>
      <div className='container z-10'>
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

export default HomeIntro
