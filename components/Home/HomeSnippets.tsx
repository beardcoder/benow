import { IRepo } from '@/@types/repo'
import { ISnippet } from '@/@types/snippet'
import { useEmblaCarousel } from 'embla-carousel/react'
import { FunctionComponent } from 'react'
import { HomeSnippetsSnippet } from './HomeSnippetsSnippet/HomeSnippetsSnippet'

type Props = {
  snippets: ISnippet[]
} & JSX.IntrinsicElements['section']

export const HomeSnippets: FunctionComponent<Props> = ({
  snippets,
  ...props
}): JSX.Element => {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'keepSnaps',
  })
  return (
    <section className='container relative px-8 py-20 mx-auto' {...props}>
      <div className='flex flex-col mb-20 md:flex-row'>
        <div className='order-2 w-full md:order-1 md:w-1/2 mr-7'>
          <div className='hidden mb-4 text-right h2 md:text-5xl md:block'>
            100%
          </div>
          <p className='max-w-xl ml-auto md:text-right'>
            Bavaria ipsum dolor sit amet Gamsbart, af woass Wuascht, moan
            boarischer griaß woass Stubn ma obacht du, Kirwa blärrd so kummt,
            Aasgem Trachtnhuat wui Weiznglasl Broadwurschtbudn woass gehd
            allerweil no gor Aasgem waar I Wia scho wea God Bia Jodler Luja
            graudwiggal ausgähd Hemad waar.
          </p>
        </div>
        <div className='order-1 w-full md:order-2 md:w-1/2'>
          <h2 className='text-gradient'>Snippets</h2>
          <div className='mb-8 h2 md:mb-14'>„Conscious experience“</div>
        </div>
      </div>
      <div className='w-full' ref={emblaRef}>
        <div className='grid grid-flow-col gap-6 auto-cols-4/5 md:auto-cols-1/3'>
          {snippets.map((snippet, i) => (
            <HomeSnippetsSnippet snippet={snippet} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
