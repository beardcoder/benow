import UiTabs from '../Ui/Tabs'
import styles from './About.module.css'
import { Check } from 'react-feather'
import Image from 'next/image'

const tabs = [
  {
    title: 'Fähigkeiten',
    content: (
      <div>
        <Check /> Hallo
      </div>
    ),
  },
  { title: 'Erfahrung', content: 'Haus' },
]

export default function HomeAbout() {
  return (
    <section id='about' className={styles.about}>
      <div className='container flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 order-2 md:order-1 md:pr-10'>
          <Image
            src='/content/images/about.jpg'
            loading='lazy'
            className='h-auto max-w-full'
            alt='Webdesigner Markus Sommer'
            title='Webdesigner Markus Sommer'
            width={495}
            height={785}
          />
        </div>
        <div className='w-full md:w-1/2 mb-10 md:mb-0 order-1 md:order-2 md:pl-10'>
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
