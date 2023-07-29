import dayjs from 'dayjs'
import Image from 'next/image'
import { FiCalendar, FiTag, FiUser } from 'react-icons/fi'
import { H1 } from './ui/headline'
import { playfair } from '@/app/layout'

type Props = {
  image: string
  title: string
  createdAt: string
  author: string
  tags?: string[]
} & JSX.IntrinsicElements['header']

export default function ArticleHero({
  title,
  image,
  createdAt,
  author,
  tags,
  ...props
}: Props) {
  return (
    <header className="relative overflow-hidden bg-black" {...props}>
      <div className="absolute inset-0">
        <Image
          src={`${image}`}
          fill
          priority
          alt="Header image"
          className="z-0 object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-black bg-opacity-50" />
      <div className="w-full">
        <div className="container relative z-10 flex flex-col max-w-4xl px-5 pt-48 pb-8 mx-auto text-center md:px-0">
          <H1 className={playfair.className}>{title}</H1>
        </div>
        <div className="container relative z-10 justify-center pb-48 mx-auto text-white md:flex">
          <div className="flex justify-center mb-4">
            <FiCalendar size="24" className="mr-3" />{' '}
            {dayjs(createdAt).locale('de-DE').format('DD.MM.YYYY')}
          </div>
          <div className="flex justify-center mb-4 md:ml-10">
            <FiUser size="24" className="mr-3" /> {author}
          </div>
          <div className="flex justify-center mb-4 md:ml-10">
            <FiTag size="24" className="mr-3" />{' '}
            {tags &&
              tags.map((tag, key) => (
                <span key={key} className="mr-1">
                  {tag}
                  {tags && key !== tags.length - 1 && ', '}
                </span>
              ))}
          </div>
        </div>
      </div>
    </header>
  )
}
