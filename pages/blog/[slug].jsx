import BlogIntro from '@/components/Blog/Intro'
import UiNavigation from '@/components/Ui/Navigation'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import 'prism-themes/themes/prism-a11y-dark.css'
import styles from '@styles/Article.module.css'
import classnames from 'classnames'
import { NextSeo, BlogJsonLd } from 'next-seo'

export default function BlogSlug({
  title,
  content,
  description,
  image,
  slug,
  author,
  createdAt,
  type,
}) {
  return (
    <>
      <NextSeo
        title={`${title} — Markus Sommer`}
        description={description}
        canonical={`https://www.creativeworkspace.de/blog/${slug}`}
      />
      <BlogJsonLd
        url={`https://www.creativeworkspace.de/blog/${slug}`}
        title={title}
        images={[image]}
        datePublished={createdAt}
        dateModified={createdAt}
        authorName="Markus Sommer"
        description={description}
      />
      <header>
        <UiNavigation />
      </header>
      <BlogIntro
        title={title}
        image={image}
        createdAt={createdAt}
        author={author}
        type={type}
      />
      <article className={classnames(styles.article)}>
        <div
          className="prose prose-lg container" // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </article>
    </>
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
    'createdAt',
    'description',
    'author',
    'image',
    'type',
    'slug',
    'content',
  ])
  post.content = await markdownToHtml(post.content || '')

  return {
    props: {
      ...post,
    },
  }
}
