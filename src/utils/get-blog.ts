import getConfig from 'next/config'

import { Article } from '@/@types/api'
import { getDirectusClient } from '@/src/utils/directus-client'
import { markdownToHtml } from '@/src/utils/markdown-to-html'

const { publicRuntimeConfig } = getConfig()

/**
 * It returns a promise that resolves to an array of IPostFields
 * @returns An array of IPostFields
 */
export async function getAllPosts(
  fields: (keyof Article)[]
): Promise<Article[]> {
  const directusClient = await getDirectusClient()
  const { data } = await directusClient.items('articles').readByQuery({
    fields,
  })

  if (!data) {
    return []
  }
  const posts: Article[] = []

  data.forEach((item) => {
    const post = mapFields(fields, item)
    posts.push(post)
  })

  return posts
}

/**
 * It takes a slug and an array of fields, and returns a post object with the fields you requested
 * @param {string} slug - The slug of the post you want to retrieve.
 * @param {Field[]} fields - An array of strings that represent the fields you want to retrieve from
 * the Contentful API.
 * @returns A post object with the fields specified in the fields array.
 */
export async function getPostBySlug(
  slug: string,
  fields: (keyof Article)[]
): Promise<Article | null> {
  const directusClient = await getDirectusClient()
  const { data } = await directusClient.items('articles').readByQuery({
    filter: { slug },
    fields,
  })
  if (!data) {
    return null
  }

  const rawPost = data[0]

  const post = mapFields(fields, rawPost)
  return post
}
function mapFields(fields: (keyof Article)[], data: Article) {
  const post: Partial<Article> = {}
  fields.forEach((field) => {
    if (field === 'content' && data.content) {
      post[field] = markdownToHtml(data.content)
      return
    }

    if (typeof data[field] !== 'undefined') {
      // @ts-ignore
      post[field] = data[field]
    }
  })

  return post as Article
}
