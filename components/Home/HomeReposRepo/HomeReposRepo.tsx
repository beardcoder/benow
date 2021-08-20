import { IRepo } from '@/@types/repo'
import { UiCard } from '@/components/Ui/UiCard/UiCard'
import { FunctionComponent } from 'react'

type Props = {
  repo: IRepo
}

export const HomeReposRepo: FunctionComponent<Props> = ({
  repo,
}): JSX.Element => {
  return (
    <UiCard href={`${repo.url}`} target='_blank' rel='noreferrer'>
      <div className='p-4'>
        <h3 className='mb-4'>{repo.name}</h3>
        <p className='mb-4'>{repo.description}</p>
      </div>
    </UiCard>
  )
}
