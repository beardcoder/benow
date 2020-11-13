import BlogIntro from '@/components/Blog/Intro'
import UiNavigation from '@/components/Ui/Navigation'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import 'prism-themes/themes/prism-a11y-dark.css'
import styles from './Article.module.css'
import classnames from 'classnames'
import { NextSeo, BlogJsonLd } from 'next-seo'
import GlobalFooter from '@/components/Global/Footer'
import UiButton from '@/components/Ui/Button'
import { ArrowLeft, Sun, Moon } from 'react-feather'
import { useState } from 'react'

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
  const [darkMode, setDarkMode] = useState(false)
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
        authorName='Markus Sommer'
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
      <article
        className={classnames(
          styles.article,
          darkMode ? 'bg-background' : 'bg-white'
        )}
      >
        <div className='container flex items-start flex-col lg:flex-row'>
          <div
            className={classnames(
              'prose prose-lg container order-2 lg:order-1',
              darkMode ? 'prose-dark' : undefined,
              styles.articleInner
            )}
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <div className='md:sticky md:top-24 order-1 lg:order-2 w-full lg:w-auto text-center mb-5 flex flex-col'>
            <UiButton
              className={darkMode ? 'text-white mb-4' : 'text-black mb-4'}
              tagName='button'
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Moon /> : <Sun />}
              <span className='px-2'>Lese Modus</span>
            </UiButton>

            <UiButton
              className={darkMode ? 'text-white' : 'text-black'}
              href='/#blog'
              tagName='a'
            >
              <ArrowLeft className='inline-block stroke-1 mr-1' />{' '}
              <span className='pr-2'>Zurück</span>
            </UiButton>
          </div>
        </div>
        <div className='text-center mt-12'>
          <UiButton
            className={darkMode ? 'text-white' : 'text-black'}
            href='/#blog'
            tagName='a'
          >
            <ArrowLeft className='inline-block stroke-1 mr-1' />{' '}
            <span className='pr-2'>Zurück</span>
          </UiButton>
        </div>
      </article>
      <GlobalFooter />
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
