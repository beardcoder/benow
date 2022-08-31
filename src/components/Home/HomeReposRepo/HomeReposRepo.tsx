import { FunctionComponent } from 'react'
import { FiGithub } from 'react-icons/fi'

import { IRepo } from '@/@types/repo'
import { HelperSvgGradient } from '@/src/components/Helper/HelperSvgGradient'
import { UiCard } from '@/src/components/Ui/UiCard/UiCard'
import { UiCardContent } from '@/src/components/Ui/UiCard/UiCardContent'

type Props = {
  repo: IRepo
} & JSX.IntrinsicElements['div'] &
  JSX.IntrinsicElements['a']

export const HomeReposRepo: FunctionComponent<Props> = ({
  repo,
  ...props
}): JSX.Element => {
  return (
    <UiCard href={`${repo.url}`} target='_blank' rel='noreferrer' {...props}>
      <UiCardContent className='flex flex-row'>
        <div className='pt-1 pr-4'>
          <FiGithub
            size='40'
            strokeWidth='1.3'
            style={{ stroke: 'url(#gradient)' }}
          />
          <HelperSvgGradient />
        </div>
        <div className='overflow-hidden'>
          <h3 className='mb-4 truncate'>{repo.name}</h3>
          <p className='truncate'>{repo.description}</p>
        </div>
      </UiCardContent>
    </UiCard>
  )
}
