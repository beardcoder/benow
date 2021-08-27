import { IRepo } from '@/@types/repo'
import { HelperSvgGradient } from '@/components/Helper/HelperSvgGradient'
import { UiCard } from '@/components/Ui/UiCard/UiCard'
import { UiCardContent } from '@/components/Ui/UiCard/UiCardContent'
import { FunctionComponent } from 'react'
import { FiGithub } from 'react-icons/fi'

type Props = {
  repo: IRepo
}

export const HomeReposRepo: FunctionComponent<Props> = ({
  repo,
}): JSX.Element => {
  return (
    <UiCard href={`${repo.url}`} target='_blank' rel='noreferrer'>
      <UiCardContent className='flex flex-row'>
        <div className='pt-1 pr-4'>
          <FiGithub
            size='40'
            strokeWidth='1.3'
            style={{ stroke: 'url(#gradient)' }}
          />
          <HelperSvgGradient />
        </div>
        <div>
          <h3 className='mb-4 truncate'>{repo.name}</h3>
          <p className='truncate'>{repo.description}</p>
        </div>
      </UiCardContent>
    </UiCard>
  )
}
