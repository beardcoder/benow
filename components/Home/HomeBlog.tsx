import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { IPost, IPostFields } from '../../@types/generated/contentful'
import { UiButton } from '../Ui/Button/UiButton'
import UiTag from '../Ui/Tag/UiTag'

type Props = {
  id: string
  posts: IPostFields[]
}

export const HomeBlog: FunctionComponent<Props> = ({
  id,
  posts,
}): JSX.Element => {
  return (
    <section className='container relative px-5 mx-auto' id={id}>
      <h2 className='mb-5 text-4xl font-bold md:text-5xl'>Blog</h2>
      <div className='flex flex-wrap -mx-8'>
        {posts.map(({ image, headline, type, slug }, i) => (
          <div key={i} className='w-full p-8 md:w-1/2 lg:w-1/4'>
            <Link href={`/blog/${slug}`}>
              <a className='flex transition-shadow duration-200 shadow-xl hover:shadow-2xl md:block'>
                <div className='hidden md:mr-0 md:block'>
                  <Image
                    src={`https:${image?.fields.file.url}?w=480&h=280&fit=fill`}
                    width='480'
                    height='280'
                    className=''
                    alt={headline}
                  />
                </div>
                <div className='mr-5 md:hidden'>
                  <div className='w-44'>
                    <Image
                      src={`https:${image?.fields.file.url}?w=300&h=400&fit=fill`}
                      width='300'
                      height='400'
                      layout='responsive'
                      className='md:hidden'
                      alt={headline}
                    />
                  </div>
                </div>

                <div className='p-4'>
                  <UiTag>{type}</UiTag>
                  <h3 className='mb-4 text-lg font-bold md:text-xl'>
                    {headline}
                  </h3>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomeBlog
