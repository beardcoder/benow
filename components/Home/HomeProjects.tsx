import { FunctionComponent } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import styles from './HomeProjects.module.css'
import UiTag from '../Ui/Tag/UiTag'

type Props = {
  id: string
}

const projects = [
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
  const [emblaRef] = useEmblaCarousel()
  return (
    <section className='relative py-32 bg-gray-800' id={id}>
      <div className='absolute w-full transform scale-110 bg-white h-28 lg:h-48 -top-20 rotate-4'></div>
      <div className='container px-5 py-20 mx-auto text-white md:px-0'>
        <div className='flex flex-col mb-20 md:flex-row'>
          <div className='order-2 w-full md:order-1 md:w-1/2 mr-7'>
            <div className='hidden mb-4 text-4xl font-bold text-right text-white md:text-5xl md:block'>
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
            <h2 className='mb-8 text-4xl font-bold text-white md:text-5xl md:mb-14'>
              Projekte <br />
              „Made in Bavaria“
            </h2>
          </div>
        </div>

        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            {projects.map((project, i) => (
              <div key={i} className={styles.embla__slide}>
                <a
                  href={project.link}
                  className='block mb-5 text-xl font-bold uppercase md:text-center md:text-2xl text-primary'
                >
                  {project.name}
                </a>
                <div className='md:text-center'>
                  {project.tech.map((ele, y) => (
                    <UiTag light key={y}>
                      {ele}
                    </UiTag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='absolute w-full transform scale-110 bg-white h-28 lg:h-48 -bottom-20 rotate-4'></div>
    </section>
  )
}

export default HomeProjects
