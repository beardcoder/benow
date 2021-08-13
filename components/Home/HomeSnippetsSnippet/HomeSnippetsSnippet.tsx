import { ISnippet } from '@/@types/snippet'
import Link from 'next/link'
import { FunctionComponent } from 'react'

type Props = {
  snippet: ISnippet
}

export const HomeSnippetsSnippet: FunctionComponent<Props> = ({
  snippet,
}): JSX.Element => {
  return (
    <div className='h-full'>
      <a
        href={`${snippet.url}`}
        target='_blank'
        className='block transition-shadow duration-200 shadow-xl hover:shadow-2xl'
        rel='noreferrer'
      >
        <div className='p-4'>
          <h3 className='mb-4'>{snippet.description}</h3>
        </div>
      </a>
    </div>
  )
}
