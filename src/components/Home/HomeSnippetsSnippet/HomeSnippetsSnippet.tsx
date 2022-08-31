import { FunctionComponent } from 'react'
import { GoLightBulb } from 'react-icons/go'

import { ISnippet } from '@/@types/snippet'
import { HelperSvgGradient } from '@/src/components/Helper/HelperSvgGradient'
import { UiCard } from '@/src/components/Ui/UiCard/UiCard'
import { UiCardContent } from '@/src/components/Ui/UiCard/UiCardContent'

type Props = {
  snippet: ISnippet
} & JSX.IntrinsicElements['div'] &
  JSX.IntrinsicElements['a']

export const HomeSnippetsSnippet: FunctionComponent<Props> = ({
  snippet,
  ...props
}): JSX.Element => {
  return (
    <UiCard href={`${snippet.url}`} target='_blank' rel='noreferrer' {...props}>
      <UiCardContent className='flex flex-row items-center'>
        <div className='pt-1 pr-4'>
          <GoLightBulb size='30' style={{ fill: 'url(#gradient)' }} />
          <HelperSvgGradient />
        </div>
        <h3 className='truncate'>{snippet.description}</h3>
      </UiCardContent>
    </UiCard>
  )
}
