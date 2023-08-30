import 'prism-themes/themes/prism-a11y-dark.css'
import { FiArrowLeft } from 'react-icons/fi'

import { getAssetURL } from '@/utils/get-asset-url'
import ArticleHero from '@/components/article-hero'
import Button from '@/components/ui/button'
import { Article, client } from '@/utils/directus-client'
import { cache } from 'react'
import { readItems } from '@directus/sdk'
import ReactMarkdown from 'react-markdown'
import rehypePrism from '@mapbox/rehype-prism'
import link from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify'
import remarkInlineLinks from 'remark-inline-links'

const getArticleBySlug = cache(
  async (slug: string) =>
    await client.request(
      readItems('articles', { filter: { slug: { _eq: slug } } }),
    ),
)

const getArticles = cache(
  async () => await client.request(readItems('articles')),
)

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({ slug: article.slug }))
}

export default async function BlogSlug({
  params,
}: {
  params: { slug: string }
}) {
  const [article] = (await getArticleBySlug(params.slug)) as Article[]
  return (
    <main>
      <ArticleHero
        title={article.title}
        image={`${getAssetURL(
          article.image,
        )}?width=2560&height=600&fit=cover&transforms=[["blur", 5]]`}
        createdAt={article.date_created}
        author="Markus Sommer"
        tags={article.tags}
        id="intro"
      />
      <article className="mt-10">
        <div className="container flex flex-col items-start px-5 mx-auto lg:px-0 lg:flex-row">
          <div className="prose dark:prose-invert prose-lg container order-2 lg:order-1 mx-auto lg:w-5/6">
            <ReactMarkdown
              children={article.content}
              remarkPlugins={[link, remarkInlineLinks]}
              rehypePlugins={[rehypePrism, rehypeStringify as any]}
              linkTarget="_blank"
            />
          </div>
        </div>
        <div className="my-12 text-center">
          <Button href="/#blog">
            <FiArrowLeft className="inline-block mr-1 text-lg" />{' '}
            <span className="pr-2">Zurück</span>
          </Button>
        </div>
      </article>
    </main>
  )
}
