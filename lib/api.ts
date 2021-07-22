import { IPost, IPostFields } from '@/@types/generated/contentful';
import { createClient, Entry } from 'contentful'
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID, // ID of a Compose-compatible space to be used \
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // delivery API key for the space \
});

export async function getAllPosts(): Promise<Entry<IPostFields>[]> {
  const entries = await client.getEntries<IPostFields>()
  if (entries.items) return entries.items
}

export async function getPostBySlug(slug: string): Promise<Entry<IPost>> {
  try {
    const entry = await client.getEntries<IPost>({
      content_type: 'post',
      'fields.slug[in]': slug,
    })
    if (entry) return entry.items[0]
  } catch (error) {
    console.log(error)
  }
}
