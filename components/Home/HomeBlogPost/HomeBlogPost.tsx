import Link from 'next/link'
import Image from 'next/image'
import { IPostFields } from '../../../@types/generated/contentful'
import UiTag from '../../Ui/Tag/UiTag'
import { UiCard } from '@/components/Ui/UiCard/UiCard'
import { UiCardContent } from '@/components/Ui/UiCard/UiCardContent'

interface Props {
  post: IPostFields
}

export const HomeBlogPost = ({ post }: Props) => {
  return (
    <div className='w-full p-4 md:w-1/2 lg:w-1/4'>
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
