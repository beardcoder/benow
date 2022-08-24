import Image from 'next/image'
import { UiCard } from '@/src/components/Ui/UiCard/UiCard'
import { UiCardContent } from '@/src/components/Ui/UiCard/UiCardContent'
import { Article } from '@/src/utils/directus-client'

type Props = {
  post: Article
} & JSX.IntrinsicElements['div']

export const HomeBlogPost = ({ post, ...props }: Props) => {
  return (
    <div className='w-full p-4 md:w-1/2 lg:w-1/4' {...props}>
      <UiCard href={`/blog/${post.slug}`}>
        <Image
          src={`${post.image}?width=480&height=280&fit=fill`}
          width='480'
          height='280'
          alt={post.title}
        />

        <UiCardContent className='pt-4'>
          <p className='pb-2'>
            {post.tags.map((tag, key) => (
              <span key={key} className='mr-1'>
                {tag}
                {key !== post.tags.length - 1 && ', '}
              </span>
            ))}
          </p>
          <h3>{post.title}</h3>
        </UiCardContent>
      </UiCard>
    </div>
  )
}
