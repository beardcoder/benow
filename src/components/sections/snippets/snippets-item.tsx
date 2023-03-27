import { FunctionComponent } from 'react'
import { GoLightBulb } from 'react-icons/go'

import { Card } from '@/components/ui/card'
import { ISnippet } from '@@/@types/snippet'

type Props = ISnippet

const SnippetsItem: FunctionComponent<Props> = ({ url, description }) => {
  return (
    <Card href={`${url}`} target='_blank' rel='noreferrer'>
      <div className='flex flex-row items-center'>
        <div className='pt-1 pr-4'>
          <GoLightBulb size='30' style={{ fill: 'url(#gradient)' }} />
          <svg width='0' height='0'>
            <linearGradient id='gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
              <stop stopColor='#84cc16' offset='0' />
              <stop stopColor='#4ade80' offset='100%' />
            </linearGradient>
          </svg>
        </div>
        <h3 className='truncate font-sans'>{description}</h3>
      </div>
    </Card>
  )
}

export default SnippetsItem
