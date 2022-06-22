import { FunctionComponent, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import IProject from '../../../@types/project'
import { HomeProjectsProject } from './HomeProjectsProject/HomeProjectsProject'
import { Typewriter } from 'react-simple-typewriter'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'

type Props = {} & JSX.IntrinsicElements['section']

const projects: IProject[] = [
  {
    name: 'Vision Of Pearls',
    link: 'https://www.v-o-p.com/',
    tech: ['TYPO3', 'VanillaJS', 'Webpack', 'Docker'],
  },
  {
    name: 'BavariaIpsum',
    link: 'https://bavaria-ipsum.vercel.app/',
    tech: ['NextJS', 'React', 'Serverless'],
  },
  {
    name: 'SommerSolutions',
    link: 'https://sommersolutions.de/',
    tech: ['Wordpress', 'Elementor', 'Server'],
  },
]

export const HomeProjects: FunctionComponent<Props> = ({
  className,
  ...props
}): JSX.Element => {
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
      className={classNames(
        'relative bg-gray-200 dark:bg-gray-900 py-36 overflow-x-hidden',
        className
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
              Bavaria ipsum dolor sit amet Gamsbart, af woass Wuascht, moan
              boarischer griaß woass Stubn ma obacht du, Kirwa blärrd so kummt,
              Aasgem Trachtnhuat wui Weiznglasl Broadwurschtbudn woass gehd
              allerweil no gor Aasgem waar I Wia scho wea God Bia Jodler Luja
              graudwiggal ausgähd Hemad waar.
            </p>
          </div>
          <div className='order-1 w-full md:order-2 md:w-1/2'>
            <h2 className='text-gradient' ref={ref}>
              Projekte
            </h2>
            <div className='mb-8 h2 md:mb-14'>{text}</div>
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
                  <HomeProjectsProject project={project} />
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default HomeProjects
