import { NextApiRequest, NextApiResponse } from 'next'

import { getDirectusClient } from '@/src/utils/directus-client'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { collection } = req.body
  const headers = req.headers

  if (!headers['x-webhook-secret']) {
    return res.status(403).send('Forbidden')
  }

  const receivedSecret = headers['x-webhook-secret']

  const secret = 'sdQIl6Hn3+6cBBgwxoDD8ZuQBLj95V9ZfdDMpvxDZl8'

  if (receivedSecret !== secret) {
    return res.status(403).send('Forbidden')
  }

  if (collection === 'articles') {
    const { keys } = req.body

    const directusClient = await getDirectusClient()

    for (const key of keys) {
      const directusRes = await directusClient
        .items(collection)
        .readOne(key, { fields: ['slug'] })

      await res.revalidate(`/${directusRes.slug}`)
      await res.revalidate('/')
    }
  }

  return res.status(200).send('Success')
}

export default handler
