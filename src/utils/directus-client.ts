import { createDirectus, rest, staticToken } from '@directus/sdk'

export type Article = {
  id: number
  image: string
  status: string
  sort: number
  date_created: string
  date_updated: string
  title: string
  slug: string
  tags?: string[]
  content: string
}

export type Project = {
  id: number
  image: string
  status: string
  sort: number
  date_created: string
  name: string
  url?: string
  keywords?: string[]
}

export type Home = {
  id: number
  avatar: string
  image: string
  title: string
  about_title: string
  about_text: string
  projects_title: string
}

type Schema = {
  home: Home
  projects: Project[]
  articles: Article[]
}

export const client = createDirectus<Schema>(process.env.API_URL)
  .with(rest())
  .with(staticToken(process.env.API_TOKEN))
