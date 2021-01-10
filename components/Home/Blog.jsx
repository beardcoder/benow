import styles from './Blog.module.css'
import UiCard from '../Ui/Card'
import Link from 'next/link'
import { forwardRef } from 'react'

export const HomeBlog = forwardRef(({ articles }, ref) => {
  return (
    <section ref={ref} id='blog' className={styles.blog}>
      <div className='container'>
        <header className={styles.header}>
          <h2 className={styles.title}>Blog</h2>
          {/* <p className={styles.text}>TODO: Text Schreiben</p> */}
        </header>
        <div className='flex flex-wrap justify-center -mx-4'>
          {articles
            ? articles.map(({ slug, headline, image, type }, index) => (
                <div
                  key={`${slug}--${index}`}
                  className='w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4'
                >
                  <Link href={`/blog/${slug}`} passHref>
                    <UiCard
                      tagName='a'
                      key={slug}
                      className={styles.article}
                      innerClassName={styles.articleInner}
                    >
                      <img
                        className={styles.articleImage}
                        alt={headline}
                        src={`https:${image.fields.file.url}?w=480&h=480&fit=fill`}
                      ></img>
                      <div className={styles.articleContent}>
                        <div className='mb-2 text-sm'>{type}</div>
                        <h3 className='text-2xl text-white'>{headline}</h3>
                      </div>
                    </UiCard>
                  </Link>
                </div>
              ))
            : ''}
        </div>
      </div>
    </section>
  )
})

export default HomeBlog
