import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export function getAssetURL(id: string) {
  return `${publicRuntimeConfig.url}/assets/${id}`
}
