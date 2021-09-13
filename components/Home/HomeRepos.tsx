import { IRepo } from '@/@types/repo'
import { useEmblaCarousel } from 'embla-carousel/react'
import { FunctionComponent, useRef } from 'react'
import { HomeReposRepo } from './HomeReposRepo/HomeReposRepo'
import { Typewriter } from 'react-simple-typewriter'
import { useInViewport } from 'react-in-viewport'

type Props = {
  repos: IRepo[]
} & JSX.IntrinsicElements['section']

export const HomeRepos: FunctionComponent<Props> = ({
  repos,
  ...props
}): JSX.Element => {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'keepSnaps',
  })

  const myRef = useRef(null)
  const { inViewport, enterCount } = useInViewport(
    myRef,
    {},
    { disconnectOnLeave: false },
    props
  )
  let text
  if (inViewport || enterCount >= 1) {
    text = (
      <>
        <Typewriter
          words={['„Made with love“']}
          cursor
          cursorStyle='_'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </>
    )
  }
  return (
    <section className='container relative px-8 mx-auto pb-36' {...props}>
      <div className='flex flex-col mb-10 md:flex-row'>
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
          <h2 className='text-gradient'>Codeing</h2>
          <div className='mb-8 h2 md:mb-14' ref={myRef}>
            {text}
          </div>
        </div>
      </div>
      <div className='w-full' ref={emblaRef}>
        <div className='grid grid-flow-col gap-6 auto-cols-4/5 md:auto-cols-1/3'>
          {repos.map((repo, i) => (
            <HomeReposRepo repo={repo} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}