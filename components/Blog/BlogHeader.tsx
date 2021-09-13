import Image from 'next/image'
import { FunctionComponent } from 'react'
import { FiCalendar, FiUser, FiTag } from 'react-icons/fi'
import dayjs from 'dayjs'

type Props = {
  image: string
  title: string
  createdAt: string
  author: string
  type: string
} & JSX.IntrinsicElements['header']

export const BlogHeader: FunctionComponent<Props> = ({
  title,
  image,
  createdAt,
  author,
  type,
  ...props
}): JSX.Element => {
  return (
    <header className='relative overflow-hidden' {...props}>
      <Image
        src={`https:${image}`}
        layout='fill'
        objectFit='cover'
        alt='Header image'
        className='z-0'
      ></Image>
      <div className='absolute inset-0 z-0 bg-black bg-opacity-50'></div>
      <div className='container relative z-10 flex flex-col max-w-4xl px-5 pt-48 pb-8 mx-auto text-center md:px-0'>
        <h1>{title}</h1>
      </div>
      <div className='container relative z-10 flex justify-center pb-48 mx-auto text-white'>
        <div className='flex justify-center mb-4'>
          <FiCalendar size='24' className='mr-3' />{' '}
          {dayjs(createdAt).locale('de-DE').format('DD.MM.YYYY')}
        </div>
        <div className='flex justify-center ml-10'>
          <FiUser size='24' className='mr-3' /> {author}
        </div>
        <div className='flex justify-center ml-10'>
          <FiTag size='24' className='mr-3' /> {type}
        </div>
      </div>
    </header>
  )
}

export default BlogHeader
