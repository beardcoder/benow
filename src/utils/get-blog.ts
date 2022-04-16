import { IPost, IPostFields } from '../../@types/generated/contentful'
import { Asset, createClient, Entry } from 'contentful'
import { markdownToHtml } from './markdown-to-html'
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '', // ID of a Compose-compatible space to be used \
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '', // delivery API key for the space \
})

type Field = keyof IPostFields

type Post = {
  [key in Field]?: string
}

/**
 * It returns a promise that resolves to an array of IPostFields
 * @returns An array of IPostFields
 */
export async function getAllPosts(fields: Field[]): Promise<Post[]> {
  const { items } = await client.getEntries<IPostFields>()
  const posts: Post[] = []

  items.forEach((item) => {
    const post = mapFields(fields, item.fields)
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
  fields: Field[]
): Promise<Post> {
  const { items } = await client.getEntries<IPostFields>({
    content_type: 'post',
    'fields.slug[in]': slug,
  })

  const data = items[0].fields

  const post = mapFields(fields, data)
  return post
}
function mapFields(fields: (keyof IPostFields)[], data: IPostFields) {
  const post: Post = {}
  fields.forEach((field) => {
    if (field === 'articleBody' && data.articleBody) {
      post[field] = markdownToHtml(data.articleBody)
      return
    }

    if (field === 'image' && data.image) {
      post[field] = data.image.fields.file.url
      return
    }

    if (typeof data[field] !== 'undefined') {
      post[field] = String(data[field])
    }
  })

  return post
}
