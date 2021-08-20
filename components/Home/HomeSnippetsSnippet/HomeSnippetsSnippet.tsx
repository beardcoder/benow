import { ISnippet } from '@/@types/snippet'
import { UiCard } from '@/components/Ui/UiCard/UiCard'
import Link from 'next/link'
import { FunctionComponent } from 'react'

type Props = {
  snippet: ISnippet
}

export const HomeSnippetsSnippet: FunctionComponent<Props> = ({
  snippet,
}): JSX.Element => {
  return (
    <UiCard href={`${snippet.url}`} target='_blank' rel='noreferrer'>
      <div className='p-4'>
        <h3 className='mb-4'>{snippet.description}</h3>
      </div>
    </UiCard>
  )
}
