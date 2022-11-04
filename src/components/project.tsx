import type { Project } from '@/@types/api'
import Button from '@/src/components/button'
import Tag from '@/src/components/tag'

type Props = Project

export default function Project({ name, keywords, url }: Props) {
  return (
    <div>
      <h3 className='block mb-5 text-xl font-bold uppercase md:text-center md:text-2xl'>
        {name}
      </h3>
      <div className='md:text-center'>
        <div className='text-sm'>
          {keywords && keywords.map((ele, y) => <Tag key={y}>{ele}</Tag>)}
        </div>
        {url && (
          <Button target='_blank' className='mt-4' tagName='a' href={url} small>
            Zum {name} Projekt
          </Button>
        )}
      </div>
    </div>
  )
}
