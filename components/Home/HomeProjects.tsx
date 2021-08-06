import { FunctionComponent } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import styles from './HomeProjects.module.css'

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
    <section className='relative overflow-hidden bg-gray-800 py-72' id={id}>
      <div className='absolute w-full h-48 transform scale-110 bg-white -top-20 rotate-4'></div>
      <div className='container px-5 mx-auto text-white md:px-0'>
        <h2 className='text-4xl font-bold text-white md:text-center md:text-5xl mb-14'>
          Meine Projekte
        </h2>
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
                    <div
                      key={y}
                      className='inline-block px-5 py-1 mb-4 mr-4 text-black bg-white rounded-full'
                    >
                      {ele}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='absolute w-full h-48 transform scale-110 bg-white -bottom-20 rotate-4'></div>
    </section>
  )
}

export default HomeProjects
