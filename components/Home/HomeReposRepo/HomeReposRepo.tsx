import { IRepo } from '@/@types/repo'
import Link from 'next/link'
import { FunctionComponent } from 'react'

type Props = {
  repo: IRepo
}

export const HomeReposRepo: FunctionComponent<Props> = ({
  repo,
}): JSX.Element => {
  return (
    <div className='h-full'>
      <a
        href={`${repo.url}`}
        target='_blank'
        className='block transition-shadow duration-200 shadow-xl hover:shadow-2xl'
        rel='noreferrer'
      >
        <div className='p-4'>
          <h3 className='mb-4'>{repo.name}</h3>
          <p className='mb-4'>{repo.description}</p>
        </div>
      </a>
    </div>
  )
}
