import { IRepo } from '@/@types/repo'
import useEmblaCarousel from 'embla-carousel-react'
import { FunctionComponent, useRef } from 'react'
import { HomeReposRepo } from './HomeReposRepo/HomeReposRepo'
import { Typewriter } from 'react-simple-typewriter'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'

type Props = {
  repos: IRepo[]
} & JSX.IntrinsicElements['section']

export const HomeRepos: FunctionComponent<Props> = ({
  repos,
  className,
  ...props
}): JSX.Element => {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'keepSnaps',
  })

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  })
  let text
  if (inView) {
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
    <section
      className={classNames('container relative px-8 mx-auto', className)}
      {...props}
    >
      <div className='flex flex-col mb-10 md:flex-row'>
        <div className='order-2 w-full md:order-1 md:w-1/2 mr-7'>
          <div className='hidden mb-4 text-right h2 md:text-5xl md:block'>
            100%
          </div>
          <p className='max-w-xl ml-auto prose md:text-right'>
            Open Source ist die Zukunft der modernen Software Entwicklung. Egal
            ob es darum geht schneller Programme oder Webseiten zu entwickeln
            oder sich mit Kollegen auf der Ganzen Welt auszutauschen.
          </p>
        </div>
        <div className='order-1 w-full md:order-2 md:w-1/2'>
          <h2 className='text-gradient'>Coding</h2>
          <div className='mb-8 h2 md:mb-14' ref={ref}>
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
