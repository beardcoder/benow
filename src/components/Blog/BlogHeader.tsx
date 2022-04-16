import Image from 'next/image'
import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { FiCalendar, FiUser, FiTag } from 'react-icons/fi'
import dayjs from 'dayjs'
import { useTransform, useViewportScroll, motion } from 'framer-motion'

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
  const { scrollY } = useViewportScroll()
  const ref = useRef<HTMLDivElement>(null)
  const [divHeight, getDivHeight] = useState<number>(0)

  useEffect(() => {
    const div = (ref.current && ref.current.clientHeight) || 0
    getDivHeight(Number(div))
  }, [divHeight])

  const opacity = useTransform(scrollY, [divHeight / 2 - 50, 0], [0, 1])
  const translateY = useTransform(scrollY, [divHeight, 0], [200, 0], {
    clamp: false,
  })

  return (
    <header className='relative overflow-hidden bg-black' {...props} ref={ref}>
      <motion.div style={{ opacity }}>
        <Image
          src={`https:${image}`}
          layout='fill'
          objectFit='cover'
          alt='Header image'
          className='z-0'
        ></Image>
      </motion.div>
      <div className='absolute inset-0 z-0 bg-black bg-opacity-50'></div>
      <motion.div
        style={{ translateY }}
        transition={{ duration: 1 }}
        className='w-full'
      >
        <div className='container relative z-10 flex flex-col max-w-4xl px-5 pt-48 pb-8 mx-auto text-center md:px-0'>
          <h1>{title}&nbsp;</h1>
        </div>
        <div className='container relative z-10 justify-center pb-48 mx-auto text-white md:flex'>
          <div className='flex justify-center mb-4'>
            <FiCalendar size='24' className='mr-3' />{' '}
            {dayjs(createdAt).locale('de-DE').format('DD.MM.YYYY')}
          </div>
          <div className='flex justify-center mb-4 md:ml-10'>
            <FiUser size='24' className='mr-3' /> {author}
          </div>
          <div className='flex justify-center mb-4 md:ml-10'>
            <FiTag size='24' className='mr-3' /> {type}
          </div>
        </div>
      </motion.div>
    </header>
  )
}

export default BlogHeader
