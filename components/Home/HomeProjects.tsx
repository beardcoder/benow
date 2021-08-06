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
      <div className='absolute w-full h-48 transform scale-110 bg-white -top-10 rotate-3'></div>
      <div className='container mx-auto text-white'>
        <h2 className='text-2xl font-bold text-center text-white md:text-5xl mb-14'>
          Meine Projekte
        </h2>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            {projects.map((project, i) => (
              <div key={i} className={styles.embla__slide}>
                <a
                  href={project.link}
                  className='block mb-5 text-xl font-bold text-center uppercase md:text-2xl text-primary'
                >
                  {project.name}
                </a>
                <div className='text-center'>
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
      <div className='absolute w-full h-48 transform scale-110 bg-white -bottom-10 rotate-3'></div>
    </section>
  )
}

export default HomeProjects
