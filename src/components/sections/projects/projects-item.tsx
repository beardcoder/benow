import { FunctionComponent } from 'react'

import { Button } from '@/components/ui/button'
import { Tag } from '@/components/ui/tag'
import type { Project } from '@@/@types/api'

type Props = Project

const ProjectsItem: FunctionComponent<Props> = ({ name, keywords, url }) => {
  return (
    <div>
      <h3 className='font-sans block mb-5 text-xl font-bold uppercase md:text-center md:text-2xl'>
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

export default ProjectsItem
