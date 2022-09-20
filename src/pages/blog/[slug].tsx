import 'prism-themes/themes/prism-a11y-dark.css'

import { GetStaticPaths, GetStaticProps } from 'next'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import { FiArrowLeft } from 'react-icons/fi'

import { Article } from '@/@types/api'
import { BlogContent } from '@/src/components/Blog/BlogContent'
import { BlogHeader } from '@/src/components/Blog/BlogHeader'
import { LayoutPage } from '@/src/components/Layout/LayoutPage'
import { UiButton } from '@/src/components/Ui/Button/UiButton'
import { getAssetURL } from '@/src/utils/get-asset-url'
import { getAllPosts, getPostBySlug } from '@/src/utils/get-blog'

export default function BlogSlug({
  title,
  content,
  date_created,
  image,
  tags,
  slug,
}: Article) {
  return (
    <LayoutPage>
      <NextSeo
        title={`${title} — Markus Sommer`}
        canonical={`https://letsbenow.de/blog/${slug}`}
      />
      <ArticleJsonLd
        url={`https://letsbenow.de/blog/${slug}`}
        title={title ?? ''}
        images={[String(image) ?? '']}
        datePublished={date_created}
        dateModified={date_created}
        authorName='Markus Sommer'
        description={content ?? ''}
      />
      <BlogHeader
        title={title}
        image={`${getAssetURL(
          image
        )}?width=2560&height=600&fit=cover&transforms=[["blur", 5]]`}
        createdAt={date_created}
        author='Markus Sommer'
        tags={tags}
        id='intro'
      />
      <article>
        <div className='container flex flex-col items-start px-5 mx-auto lg:px-0 lg:flex-row'>
          <BlogContent
            className='lg:w-5/6'
            articleBody={content ?? ''}
          ></BlogContent>
          <div className='flex-col order-1 w-full mb-5 md:sticky md:top-24 lg:order-2 lg:w-1/6'>
            <div>
              <UiButton href='/#blog'>
                <FiArrowLeft className='mr-1 stroke-1' />{' '}
                <span className='pr-2'>Zurück</span>
              </UiButton>
            </div>
          </div>
        </div>
        <div className='mt-12 text-center'>
          <UiButton href='/#blog'>
            <FiArrowLeft className='inline-block mr-1 stroke-1' />{' '}
            <span className='pr-2'>Zurück</span>
          </UiButton>
        </div>
      </article>
    </LayoutPage>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts(['slug'])

  return {
    paths: posts.map((post) => ({
      params: {
        slug: String(post.slug),
      },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let post: Article | null = null
  post = await getPostBySlug(
    typeof params?.slug === 'string' ? params?.slug : '',
    ['title', 'image', 'slug', 'tags', 'date_created', 'content']
  )
  return {
    props: {
      ...post,
    },
    revalidate: 10,
  }
}
