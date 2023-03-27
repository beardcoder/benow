import { Directus } from '@directus/sdk'
import getConfig from 'next/config'

import { DirectusApi } from '@@/@types/api'

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()
const { url } = publicRuntimeConfig
const { email, password, token } = serverRuntimeConfig

const directus = new Directus<DirectusApi>(url)

export async function getDirectusClient() {
  if (await directus.auth.token) return directus

  if (email && password) {
    await directus.auth.login({ email, password })
  } else if (token) {
    await directus.auth.static(token)
  }

  return directus
}
