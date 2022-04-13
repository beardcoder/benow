import Image from 'next/image'
import { IPostFields } from '../../../../@types/generated/contentful'
import { UiCard } from '@/src/components/Ui/UiCard/UiCard'
import { UiCardContent } from '@/src/components/Ui/UiCard/UiCardContent'

type Props = {
  post: IPostFields
} & JSX.IntrinsicElements['div']

export const HomeBlogPost = ({ post, ...props }: Props) => {
  return (
    <div className='w-full p-4 md:w-1/2 lg:w-1/4' {...props}>
      <UiCard href={`/blog/${post.slug}`}>
        <Image
          src={`https:${post.image?.fields.file.url}?w=480&h=280&fit=fill`}
          width='480'
          height='280'
          className=''
          alt={post.headline}
        />

        <UiCardContent className='pt-4'>
          <p className='pb-2'>{post.type}</p>
          <h3>{post.headline}</h3>
        </UiCardContent>
      </UiCard>
    </div>
  )
}
