import Image from 'next/image'

import { Card } from '@/components/ui/card'
import { getAssetURL } from '@/utils/get-asset-url'
import type { Article } from '@@/@types/api'

type Props = Article

export default function Article({ slug, image, tags, title }: Props) {
  return (
    <div className='w-full p-4 md:w-1/2 lg:w-1/3'>
      <Card
        href={`/blog/${slug}`}
        image={
          <Image
            src={`${getAssetURL(image)}?width=480&height=280&fit=fill`}
            width='480'
            height='280'
            alt={title}
          />
        }
      >
        <p className='pb-2 text-sm'>
          {tags &&
            tags.map((tag, key) => (
              <span key={key} className='mr-1'>
                {tag}
                {tags && key !== tags.length - 1 && ', '}
              </span>
            ))}
        </p>
        <h3 className='font-sans'>{title}</h3>
      </Card>
    </div>
  )
}
