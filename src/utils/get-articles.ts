import { getDirectusClient } from '@/utils/directus-client'
import { markdownToHtml } from '@/utils/markdown-to-html'
import { Article } from '@@/@types/api'

/**
 * It returns a promise that resolves to an array of IarticleFields
 * @returns An array of IarticleFields
 */
export async function getAllArticles(
  fields: (keyof Article)[],
): Promise<Article[]> {
  const directusClient = await getDirectusClient()
  const { data } = await directusClient.items('articles').readByQuery({
    fields,
  })

  if (!data) {
    return []
  }
  const articles: Article[] = []

  data.forEach((item: any) => {
    const article = mapFields(fields, item)
    articles.push(article)
  })

  return articles
}

/**
 * It takes a slug and an array of fields, and returns a article object with the fields you requested
 * @param {string} slug - The slug of the article you want to retrieve.
 * @param {Field[]} fields - An array of strings that represent the fields you want to retrieve from
 * the Contentful API.
 * @returns A article object with the fields specified in the fields array.
 */
export async function getArticleBySlug(
  slug: string,
  fields: (keyof Article)[],
): Promise<Article | null> {
  const directusClient = await getDirectusClient()
  const { data } = await directusClient.items('articles').readByQuery({
    filter: { slug },
    fields,
  })
  if (!data) {
    return null
  }

  const rawArticle = data[0] as Article

  const article = mapFields(fields, rawArticle)
  return article
}
function mapFields(fields: (keyof Article)[], data: Article) {
  const article: Partial<Article> = {}
  fields.forEach((field) => {
    if (field === 'content' && data.content) {
      article[field] = markdownToHtml(data.content)
      return
    }

    if (typeof data[field] !== 'undefined') {
      // @ts-ignore
      article[field] = data[field]
    }
  })

  return article as Article
}
