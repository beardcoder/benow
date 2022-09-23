import type { ID } from '@directus/sdk'
import { stringify } from 'qs'

export function getAssetURL(
  id: ID,
  params?: {
    fit?: 'cover' | 'contain' | 'inside' | 'outside'
    width?: number
    height?: number
  }
) {
  if (!id) {
    return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  }

  const stringParams = stringify({ ...params }, { addQueryPrefix: true })
  return `${import.meta.env.PUBLIC_DIRECTUS_URL}/assets/${id}${stringParams}`
}
