import BlogIntro from '@/components/Blog/Intro'
import UiNavigation from '@/components/Ui/Navigation'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import 'prism-themes/themes/prism-a11y-dark.css'
import styles from './Article.module.css'
import classnames from 'classnames'
import { NextSeo, BlogJsonLd } from 'next-seo'
import Link from 'next/link'
import GlobalFooter from '@/components/Global/Footer'
import UiButton from '@/components/Ui/Button'
import { ArrowLeft, Sun, Moon } from 'react-feather'
import { useState } from 'react'

export default function BlogSlug({
  headline,
  articleBody,
  description,
  image,
  slug,
  author,
  date,
  type,
}) {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <NextSeo
        title={`${headline} — Markus Sommer`}
        description={description}
        canonical={`https://www.creativeworkspace.de/blog/${slug}`}
      />
      <BlogJsonLd
        url={`https://www.creativeworkspace.de/blog/${slug}`}
        title={headline}
        images={[image]}
        datePublished={date}
        dateModified={date}
        authorName='Markus Sommer'
        description={description}
      />
      <header>
        <UiNavigation />
      </header>
      <BlogIntro
        title={headline}
        image={`${image.fields.file.url}?w=2560&h=600&fit=thumb`}
        date={date}
        author={author}
        type={type}
      />
      <article
        className={classnames(
          styles.article,
          darkMode ? 'bg-background' : 'bg-white'
        )}
      >
        <div className='container flex flex-col items-start lg:flex-row'>
          <div
            className={classnames(
              'prose prose-lg container order-2 lg:order-1',
              darkMode ? 'prose-dark' : undefined,
              styles.articleInner
            )}
            dangerouslySetInnerHTML={{ __html: articleBody }}
          ></div>
          <div className='flex flex-col order-1 w-full mb-5 text-center md:sticky md:top-24 lg:order-2 lg:w-auto'>
            <UiButton
              className={darkMode ? 'text-white mb-4' : 'text-black mb-4'}
              tagName='button'
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Moon /> : <Sun />}
              <span className='px-2'>Lese Modus</span>
            </UiButton>
            <Link href={`/#blog`} passHref>
              <UiButton
                className={darkMode ? 'text-white' : 'text-black'}
                tagName='a'
              >
                <ArrowLeft className='inline-block mr-1 stroke-1' />{' '}
                <span className='pr-2'>Zurück</span>
              </UiButton>
            </Link>
          </div>
        </div>
        <div className='mt-12 text-center'>
          <UiButton
            className={darkMode ? 'text-white' : 'text-black'}
            href='/#blog'
            tagName='a'
          >
            <ArrowLeft className='inline-block mr-1 stroke-1' />{' '}
            <span className='pr-2'>Zurück</span>
          </UiButton>
        </div>
      </article>
      <GlobalFooter />
    </>
  )
}

export const getStaticPaths = async () => {
  const posts = await getAllPosts()

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.fields.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = (await getPostBySlug(params.slug)).fields
  post.articleBody = await markdownToHtml(post.articleBody || '')

  return {
    props: {
      ...post,
    },
  }
}
