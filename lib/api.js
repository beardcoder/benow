import { createClient } from 'contentful'
const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
const client = createClient({
  space: space,
  accessToken: accessToken,
})

export async function getAllPosts() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function getPostBySlug(slug) {
  try {
    const entry = await client.getEntries({
      content_type: 'post',
      'fields.slug[in]': slug,
    })
    if (entry) return entry.items[0]
    console.log(`Error getting Entries for ${contentType.name}.`)
  } catch (error) {
    console.log(error)
  }
}
