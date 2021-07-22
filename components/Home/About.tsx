import UiTabs from '../Ui/Tabs'
import styles from './About.module.css'
import { FiCode } from 'react-icons/fi'
import Image from 'next/image'
import { generate as uniqid } from 'shortid'

const skills = [
  ['HTML', 'CSS', 'JavaScript', 'React (Next.js)', 'Vue.js (Nuxt)'],
  ['PHP', 'Symfony', 'TYPO3', 'Neos CMS', 'Shopware'],
]

const tabs = [
  {
    title: 'Fertigkeiten',
    content: (
      <div className='flex'>
        {skills.map((skillSection) => (
          <ul className='w-1/3' key={uniqid()}>
            {skillSection.map((skill) => (
              <li key={uniqid()}>
                <FiCode className='inline-block mr-2 stroke-1' /> {skill}
              </li>
            ))}
          </ul>
        ))}
      </div>
    ),
  },
  {
    title: 'Projekte',
    content: (
      <div>
        <ul className='ml-4 list-disc'>
          <li>
            <a
              href='https://www.v-o-p.com'
              rel='noopener'
              target='_blank'
              className='text-primary'
            >
              Link zum „Vision of pearls“ Projekt
            </a>
          </li>
          <li>
            <a
              href='https://bavaria-ipsum.vercel.app/'
              rel='noopener'
              target='_blank'
              className='text-primary'
            >
              Link zum „bavaria-ipsum“ Projekt
            </a>
          </li>
        </ul>
      </div>
    ),
  },
]

export default function HomeAbout() {
  return (
    <section id='about' className={styles.about}>
      <div className='container flex flex-col md:flex-row'>
        <div className='order-2 w-full md:w-1/3 md:order-1 md:pr-10'>
          <Image
            src='/content/images/about.jpg'
            loading='lazy'
            className='h-auto max-w-full'
            alt='Webdesigner Markus Sommer'
            title='Webdesigner Markus Sommer'
            width={800}
            height={1067}
          />
        </div>
        <div className='order-1 w-full max-w-2xl mb-10 md:w-2/3 md:mb-0 md:order-2 md:pl-10'>
          <h2 className={styles.title}>Über mich</h2>
          <div className={styles.text}>
            Mein Fokus und meine Leidenschaft sind auf die Benutzererfahrung
            (User Experience) gerichtet. Brauchst du Hilfe z. B. um deine
            Website in neuem Glanz erstrahlen zu lassen, Moderne Web
            Technologieren einzusetzen oder mal einen Tipp wie du eine Sitemap
            einrichtest?{' '}
            <a href='mailto:info@creativeworkspace.de'>Dann schreibe mich an</a>
            . Ich stehe gerne mit Rat und Tat zur Seite.
          </div>
          <UiTabs tabs={tabs}></UiTabs>
        </div>
      </div>
    </section>
  )
}
