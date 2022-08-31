import { Directus } from '@directus/sdk'

import { DirectusApi } from '@/@types/api'

export const directusClient = new Directus<DirectusApi>(
  'https://backend.viking.uber.space'
)
