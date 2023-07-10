import { cx } from 'classix'
import { FunctionComponent } from 'react'
import { useInView } from 'react-intersection-observer'
import { Typewriter } from 'react-simple-typewriter'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { Project as ProjectType } from '@@/@types/api'

import { ProjectsItem } from '.'

type Props = {
  projects: ProjectType[]
} & JSX.IntrinsicElements['section']

const Projects: FunctionComponent<Props> = ({
  className,
  projects,
  ...props
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  })
  let text
  if (inView) {
    text = (
      <>
        <Typewriter
          words={['„Made in Bavaria“']}
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
      className={cx(
        'relative bg-neutral-200 dark:bg-neutral-800 py-36 overflow-x-hidden',
        className,
      )}
      {...props}
    >
      <div className='container px-5 mx-auto md:px-0'>
        <div className='flex flex-col mb-20 md:flex-row'>
          <div className='order-2 w-full md:order-1 md:w-1/2 mr-7'>
            <div className='hidden mb-4 text-right h2 md:text-5xl md:block'>
              100%
            </div>
            <p className='max-w-xl ml-auto prose dark:prose-invert md:text-right'>
              Hier zeige ich meine aktuellen Projekte und beweise meine
              Fähigkeiten im Webdesign. Jedes Projekt wird mit Sorgfalt und
              Leidenschaft angefertigt, um eine benutzerfreundliche und
              einzigartige Online-Erfahrung für meine Kunden zu schaffen. Schau
              dir meine Arbeiten an und lass dich inspirieren. Kontaktiere mich,
              wenn du bereit bist, deine Online-Präsenz zu verbessern.
            </p>
          </div>
          <div className='order-1 w-full md:order-2 md:w-1/2'>
            <h2 className='text-gradient' ref={ref}>
              Projekte
            </h2>
            <div className='mb-8 h2-sub md:mb-14'>{text}</div>
          </div>
        </div>

        <Swiper
          spaceBetween={32}
          slidesPerView={1.3}
          breakpoints={{
            460: {
              slidesPerView: 2.3,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          <div className='w-full'>
            <div className='grid grid-flow-col gap-6 auto-cols-4/5 md:auto-cols-1/3'>
              {projects.map((project, i) => (
                <SwiperSlide key={i}>
                  <ProjectsItem {...project} />
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Projects
