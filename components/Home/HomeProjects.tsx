import { FunctionComponent } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import IProject from '../../@types/project'
import { HomeProjectsProject } from './HomeProjectsProject/HomeProjectsProject'

type Props = {
  id: string
}

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

export const HomeProjects: FunctionComponent<Props> = ({ id }): JSX.Element => {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'keepSnaps',
  })
  return (
    <section className='relative py-40 bg-gray-800' id={id}>
      <div className='absolute w-full transform scale-110 bg-white h-28 lg:h-48 -top-20 rotate-4'></div>
      <div className='container px-5 py-20 mx-auto text-white md:px-0'>
        <div className='flex flex-col mb-20 md:flex-row'>
          <div className='order-2 w-full md:order-1 md:w-1/2 mr-7'>
            <div className='hidden mb-4 text-right text-white h2 md:text-5xl md:block'>
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
            <h2 className='text-4xl font-bold md:text-5xl'>Projekte</h2>
            <div className='mb-8 h2 md:mb-14'>„Made in Bavaria“</div>
          </div>
        </div>

        <div className='w-full overflow-hidden' ref={emblaRef}>
          <div className='flex'>
            {projects.map((project, i) => (
              <HomeProjectsProject
                key={i}
                project={project}
                className='w-1/3'
              />
            ))}
          </div>
        </div>
      </div>
      <div className='absolute w-full transform scale-110 bg-white h-28 lg:h-48 -bottom-20 rotate-4'></div>
    </section>
  )
}

export default HomeProjects
