import { IPost, IPostFields } from '../../@types/generated/contentful'
import { createClient, Entry } from 'contentful'
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '', // ID of a Compose-compatible space to be used \
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '', // delivery API key for the space \
})

export async function getAllPosts(): Promise<IPostFields[]> {
  return client
    .getEntries<IPostFields>()
    .then((elements) => elements.items.map((item) => item.fields))
    .catch(() => [])
}

export async function getPostBySlug(slug: string): Promise<Entry<IPostFields>> {
  const entry = await client.getEntries<IPost>({
    content_type: 'post',
    'fields.slug[in]': slug,
  })
  return entry.items[0].fields
}
