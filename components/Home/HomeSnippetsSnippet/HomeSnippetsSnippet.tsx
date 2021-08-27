import { ISnippet } from '@/@types/snippet'
import { HelperSvgGradient } from '@/components/Helper/HelperSvgGradient'
import { UiCard } from '@/components/Ui/UiCard/UiCard'
import { UiCardContent } from '@/components/Ui/UiCard/UiCardContent'
import { FunctionComponent } from 'react'
import { GoLightBulb } from 'react-icons/go'

type Props = {
  snippet: ISnippet
}

export const HomeSnippetsSnippet: FunctionComponent<Props> = ({
  snippet,
}): JSX.Element => {
  return (
    <UiCard href={`${snippet.url}`} target='_blank' rel='noreferrer'>
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
