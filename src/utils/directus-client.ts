import type { components } from '@/@types/api'
import { Directus } from '@directus/sdk'

export type Article = components['schemas']['ItemsArticles']
export type Home = components['schemas']['ItemsHome']
export type Project = components['schemas']['ItemsProjects'] & {
  keywords: string[]
}

type DirectusApi = {
  articles: Article
  home: Home
  projects: Project
}

export const directusClient = new Directus<DirectusApi>(
  'https://backend.viking.uber.space'
)
