import { getAllPosts, getPostBySlug } from '@/services/blog'
import 'prism-themes/themes/prism-a11y-dark.css'
import classnames from 'classnames'
import { NextSeo, BlogJsonLd } from 'next-seo'
import Link from 'next/link'
import { FiArrowLeft, FiSun, FiMoon } from 'react-icons/fi'
import { useState } from 'react'
import { IPostFields } from '@/@types/generated/contentful'
import { UiButton } from '@/components/Ui/Button/UiButton'
import { GetStaticProps, GetStaticPaths } from 'next'
import LayoutPage from '@/components/Layout/LayoutPage'
import BlogHeader from '@/components/Blog/BlogHeader'
import BlogContent from '@/components/Blog/BlogContent'
import Sticky from 'react-stickynode'

export default function BlogSlug({
  headline,
  articleBody,
  description,
  date,
  image,
  author,
  type,
  slug,
}: IPostFields) {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <LayoutPage>
      <NextSeo
        title={`${headline} — Markus Sommer`}
        description={description}
        canonical={`https://www.creativeworkspace.de/blog/${slug}`}
      />
      <BlogJsonLd
        url={`https://www.creativeworkspace.de/blog/${slug}`}
        title={headline ?? ''}
        images={[
          typeof image?.fields.file.url === 'string'
            ? image?.fields.file.url
            : '',
        ]}
        datePublished={date}
        dateModified={date}
        authorName='Markus Sommer'
        description={description ?? ''}
      />
      <BlogHeader
        title={headline ?? ''}
        image={`${image?.fields.file.url}?w=2560&h=600&fit=thumb`}
        createdAt={date}
        author={author}
        type={type ?? ''}
        id='intro'
      />
      <article
        className={classnames(darkMode ? 'bg-background' : 'bg-white', 'py-20')}
      >
        <div className='container flex flex-col items-start mx-auto lg:flex-row'>
          <BlogContent
            className='lg:w-5/6'
            articleBody={articleBody ?? ''}
            darkMode={darkMode}
          ></BlogContent>
          <div className='flex-col order-1 w-full mb-5 md:sticky md:top-24 lg:order-2 lg:w-auto lg:w-1/6'>
            <Sticky enabled={true} top={50}>
              <UiButton
                className={darkMode ? 'text-white mb-4' : 'text-black mb-4'}
                tagName='button'
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <FiMoon /> : <FiSun />}
                <span className='px-2'>Lese Modus</span>
              </UiButton>
              <Link href={`/#blog`} passHref>
                <UiButton
                  className={darkMode ? 'text-white' : 'text-black'}
                  tagName='a'
                >
                  <FiArrowLeft className='mr-1 stroke-1' />{' '}
                  <span className='pr-2'>Zurück</span>
                </UiButton>
              </Link>
            </Sticky>
          </div>
        </div>
        <div className='mt-12 text-center'>
          <UiButton
            className={darkMode ? 'text-white' : 'text-black'}
            href='/#blog'
            tagName='a'
          >
            <FiArrowLeft className='inline-block mr-1 stroke-1' />{' '}
            <span className='pr-2'>Zurück</span>
          </UiButton>
        </div>
      </article>
    </LayoutPage>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: IPostFields[] = await getAllPosts()

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let post = {}
  post = await getPostBySlug(
    typeof params?.slug === 'string' ? params?.slug : ''
  )

  return {
    props: {
      ...post,
    },
  }
}
