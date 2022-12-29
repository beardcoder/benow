import { FiGithub } from 'react-icons/fi'

import { IRepo } from '@/@types/repo'
import { UiCard } from '@/src/components/card'

type Props = IRepo
export default function Repo({ url, name, description }: Props) {
  return (
    <UiCard href={`${url}`} target='_blank' rel='noreferrer'>
      <div className='flex flex-row items-center'>
        <div className='pt-1 pr-4'>
          <FiGithub
            size='40'
            strokeWidth='1.3'
            style={{ stroke: 'url(#gradient)' }}
          />
          <svg width='0' height='0'>
            <linearGradient id='gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
              <stop stopColor='#84cc16' offset='0' />
              <stop stopColor='#4ade80' offset='100%' />
            </linearGradient>
          </svg>
        </div>
        <div className='overflow-hidden'>
          <h3 className='truncate font-sans'>{name}</h3>
          <p className='truncate'>{description}</p>
        </div>
      </div>
    </UiCard>
  )
}
