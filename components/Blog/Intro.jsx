import styles from './Intro.module.css'
import { Calendar, User, Tag } from 'react-feather'
import dayjs from 'dayjs'

export default function BlogIntro({ title, image, createdAt, author, type }) {
  return (
    <section
      id="blogIntro"
      className={styles.intro}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container mt-10">
        <h1 className={styles.title}>{title}</h1>
        <div className="flex justify-center mt-16 flex-row flex-wrap">
          <div className="flex justify-center mb-4">
            <Calendar className="mr-3" />{' '}
            {dayjs(createdAt).locale('de-DE').format('DD.MM.YYYY')}
          </div>
          <div className="ml-10 flex justify-center">
            <User className="mr-3" /> {author}
          </div>
          <div className="ml-10 flex justify-center">
            <Tag className="mr-3" /> {type}
          </div>
        </div>
      </div>
    </section>
  )
}
