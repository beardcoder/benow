import styles from './Intro.module.css'
import { FiCalendar, FiUser, FiTag } from 'react-icons/fi'
import dayjs from 'dayjs'

export default function BlogIntro({ title, image, createdAt, author, type }) {
  return (
    <section
      id='blogIntro'
      className={styles.intro}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='container mt-10'>
        <h1 className={styles.title}>{title}</h1>
        <div className='flex flex-row flex-wrap justify-center mt-16'>
          <div className='flex justify-center mb-4'>
            <FiCalendar size="24" className='mr-3' />{' '}
            {dayjs(createdAt).locale('de-DE').format('DD.MM.YYYY')}
          </div>
          <div className='flex justify-center ml-10'>
            <FiUser size="24" className='mr-3' /> {author}
          </div>
          <div className='flex justify-center ml-10'>
            <FiTag size="24" className='mr-3' /> {type}
          </div>
        </div>
      </div>
    </section>
  )
}
