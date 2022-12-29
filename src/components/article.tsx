import Image from 'next/image'

import type { Article } from '@/@types/api'
import { UiCard } from '@/src/components/card'
import { getAssetURL } from '@/src/utils/get-asset-url'

type Props = Article

export default function Article({ slug, image, tags, title }: Props) {
  return (
    <div className='w-full p-4 md:w-1/2 lg:w-1/3'>
      <UiCard
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
      </UiCard>
    </div>
  )
}
