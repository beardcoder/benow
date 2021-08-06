import Image from 'next/image'
import { FunctionComponent } from 'react'
import { IPost, IPostFields } from '../../@types/generated/contentful'
import { UiButton } from '../Ui/Button/UiButton'

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
          <div key={i} className='w-1/4 p-8'>
            <div className='shadow-xl'>
              <Image
                src={`https:${image?.fields.file.url}?w=480&h=280&fit=fill`}
                width='480'
                height='280'
                alt='adf'
              />

              <div className='p-4'>
                <h3 className='mb-4 text-xl font-bold'>{headline}</h3>
                <div className='inline-block px-5 py-1 mb-4 mr-4 text-white bg-black rounded-full'>
                  {type}
                </div>
                <div>
                  <UiButton href={`/blog/${slug}`}>Artikel Lesen</UiButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomeBlog
