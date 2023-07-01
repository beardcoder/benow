import { Directus } from '@directus/sdk'

import { DirectusApi } from '@@/@types/api'

const url = process.env.API_URL ?? ''
const token = process.env.API_TOKEN ?? ''

const directus = new Directus<DirectusApi>(url)

export async function getDirectusClient() {
  if (await directus.auth.token) return directus

  await directus.auth.static(token)

  return directus
}
