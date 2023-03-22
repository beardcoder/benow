import Image from 'next/image'
import type { FunctionComponent } from 'react'

type Props = {
  image: string
  text: string
} & JSX.IntrinsicElements['section']

const AboutMe: FunctionComponent<Props> = ({ image, text, ...props }) => {
  return (
    <section
      className='relative z-30 mx-auto md:flex max-w-screen-2xl'
      data-cy='personal'
      {...props}
    >
      <div className='w-full mr-20 md:w-1/2'>
        <Image
          data-cy='personalImage'
          src={`${image}?width=600&height=600`}
          width='600'
          height='600'
          alt='Markus Sommer'
        ></Image>
      </div>
      <div className='w-full px-5 my-auto mt-10 mb-20 md:mt-auto md:w-1/2 md:mb-auto'>
        <div className='relative z-10 flex flex-col mx-auto'>
          <h2 className='mb-5 text-4xl font-bold md:text-5xl'>
            Hi, ich bin{' '}
            <span className='pb-1 text-gradient'>Markus Sommer&nbsp;</span>
          </h2>
          <div
            className='max-w-3xl text-lg prose dark:prose-invert text-opacity-70'
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
