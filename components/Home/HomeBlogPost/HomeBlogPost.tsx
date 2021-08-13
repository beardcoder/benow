import Link from 'next/link'
import Image from 'next/image'
import { IPostFields } from '../../../@types/generated/contentful'
import UiTag from '../../Ui/Tag/UiTag'

interface Props {
  post: IPostFields
}

export const HomeBlogPost = ({ post }: Props) => {
  return (
    <div className='w-full p-8 md:w-1/2 lg:w-1/4'>
      <Link href={`/blog/${post.slug}`}>
        <a className='block transition-shadow duration-200 shadow-xl hover:shadow-2xl'>
          <Image
            src={`https:${post.image?.fields.file.url}?w=480&h=280&fit=fill`}
            width='480'
            height='280'
            className=''
            alt={post.headline}
          />

          <div className='p-4'>
            <UiTag>{post.type}</UiTag>
            <h3 className='mb-4'>
              {post.headline}
            </h3>
          </div>
        </a>
      </Link>
    </div>
  )
}
