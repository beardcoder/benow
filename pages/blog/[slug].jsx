import BlogIntro from '@/components/Blog/Intro'
import UiNavigation from '@/components/Ui/Navigation'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import 'prism-themes/themes/prism-a11y-dark.css'
import styles from '@styles/Article.module.css'
import classnames from 'classnames'

export default function BlogSlug({ title, content, image }) {
  return (
    <div>
      <header>
        <UiNavigation />
      </header>
      <BlogIntro title={title} image={image} />
      <article className={classnames(styles.article)}>
        <div
          className="prose prose-lg container" // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </article>
    </div>
  )
}

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug, [
    'title',
    'description',
    'date',
    'modified_date',
    'image',
    'content',
    'slug',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      title: post.title,
      description: post.description,
      image: post.image,
      content,
    },
  }
}
