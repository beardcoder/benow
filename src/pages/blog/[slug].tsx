import 'prism-themes/themes/prism-a11y-dark.css'

import { GetStaticPaths, GetStaticProps } from 'next'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import { FiArrowLeft } from 'react-icons/fi'

import { Article } from '@/@types/api'
import ArticleHero from '@/src/components/article-hero'
import Button from '@/src/components/button'
import Layout from '@/src/components/layout'
import { getAllArticles, getArticleBySlug } from '@/src/utils/get-articles'
import { getAssetURL } from '@/src/utils/get-asset-url'

export default function BlogSlug({
  title,
  content,
  date_created,
  image,
  tags,
  slug,
}: Article) {
  return (
    <Layout>
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
      <ArticleHero
        title={title}
        image={`${getAssetURL(
          image
        )}?width=2560&height=600&fit=cover&transforms=[["blur", 5]]`}
        createdAt={date_created}
        author='Markus Sommer'
        tags={tags}
        id='intro'
      />
      <article className='mt-10'>
        <div className='container flex flex-col items-start px-5 mx-auto lg:px-0 lg:flex-row'>
          <div className='prose dark:prose-invert prose-lg container order-2 lg:order-1 mx-auto lg:w-5/6'>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </div>
        <div className='my-12 text-center'>
          <Button href='/#blog'>
            <FiArrowLeft className='inline-block mr-1 stroke-1' />{' '}
            <span className='pr-2'>Zurück</span>
          </Button>
        </div>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getAllArticles(['slug'])

  return {
    paths: articles.map((article) => ({
      params: {
        slug: String(article.slug),
      },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let article: Article | null = null
  article = await getArticleBySlug(
    typeof params?.slug === 'string' ? params?.slug : '',
    ['title', 'image', 'slug', 'tags', 'date_created', 'content']
  )
  return {
    props: {
      ...article,
    },
    revalidate: 10, // In seconds
  }
}
