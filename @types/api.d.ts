import type { Field, ID } from '@directus/sdk'

export type Article = {
  id: ID
  image: string
  status: Field
  sort: number
  date_created: Field
  date_updated: Field
  title: Field
  slug: Field
  tags?: string[]
  content: Field
}
export type Home = {
  id: ID
  image: Field
  avatar: Field
  title: Field
  about_title: Field
  about_text: Field
  projects_title: Field
}
export type Project = {
  id: ID
  image: Field
  status: Field
  sort: number
  date_created: Field
  name: Field
  url?: Field
  keywords?: string[]
}

export type DirectusApi = {
  articles: Article
  home: Home
  projects: Project
}
