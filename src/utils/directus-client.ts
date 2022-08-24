import { Directus, ID } from '@directus/sdk'

// Map your collection structure based on its fields.
export type Article = {
  id: ID
  title: string
  content: string
  slug: string
  image: any
  date_created: any
  tags: string[]
}

// Map your collections to its respective types. The SDK will
// infer its types based on usage later.
type MySite = {
  articles: Article
  home: {
    id: ID
    avatar: ID
  }
}

export const directusClient = new Directus<MySite>(
  'https://backend.viking.uber.space'
)
