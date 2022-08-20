import IArticle from '@/@types/article'
import { Directus } from '@directus/sdk'
import { markdownToHtml } from './markdown-to-html'
const directus = new Directus('https://backend.viking.uber.space')

/**
 * It returns a promise that resolves to an array of IPostFields
 * @returns An array of IPostFields
 */
export async function getAllPosts(
  fields: (keyof IArticle)[]
): Promise<IArticle[]> {
  const { data } = await directus.items('articles').readByQuery({
    fields,
  })

  if (!data) {
    return []
  }
  const posts: IArticle[] = []

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
  fields: (keyof IArticle)[]
): Promise<IArticle | null> {
  const { data } = await directus.items('articles').readByQuery({
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
function mapFields(fields: (keyof IArticle)[], data: IArticle) {
  const post: Partial<IArticle> = {}
  fields.forEach((field) => {
    if (field === 'content' && data.content) {
      post[field] = markdownToHtml(data.content)
      return
    }

    if (field === 'image' && data.image) {
      post[field] = `${directus.url}/assets/${data.image}`
      return
    }

    if (typeof data[field] !== 'undefined') {
      post[field] = data[field]
    }
  })

  return post as IArticle
}
