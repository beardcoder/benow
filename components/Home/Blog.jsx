import styles from './Blog.module.css'
import UiCard from '../Ui/Card'

export default function HomeBlog({ articles }) {
  return (
    <section id="blog" className={styles.blog}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>Blog</h2>
          <p className={styles.text}>TODO: Text Schreiben</p>
        </header>
        <div className="flex flex-wrap -mx-4 justify-center">
          {articles
            ? articles.map(({ title, slug, type, image }, index) => (
                <div
                  key={`${slug}--${index}`}
                  className="w-full sm:1/2 md:w-1/3 p-4"
                >
                  <UiCard
                    tagName="a"
                    key={slug}
                    className={styles.article}
                    innerClassName={styles.articleInner}
                    href={`/blog/${slug}`}
                  >
                    <img className={styles.articleImage} src={image}></img>
                    <div className={styles.articleContent}>
                      <div className="text-sm mb-2">{type}</div>
                      <h4 className="text-2xl text-white">{title}</h4>
                    </div>
                  </UiCard>
                </div>
              ))
            : ''}
        </div>
      </div>
    </section>
  )
}
