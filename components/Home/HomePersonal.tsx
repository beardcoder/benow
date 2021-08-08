import Image from 'next/image'
import { FunctionComponent } from 'react'
import { UiButton } from '../Ui/Button/UiButton'

type Props = {
  id: string
}

export const HomePersonal: FunctionComponent<Props> = ({ id }): JSX.Element => {
  return (
    <section
      className='container relative px-5 pt-3 mx-auto overflow-hidden md:flex'
      id={id}
    >
      <div className='w-full mr-20 md:w-3/12'>
        <Image
          src='/assets/markus_sommer.jpg'
          width='400'
          height='400'
          alt='Markus Sommer'
          className='rounded-full'
        ></Image>
      </div>
      <div className='w-full my-auto mt-10 md:w-9/12 md:mt-auto'>
        <div className='relative z-10 flex flex-col mx-auto'>
          <h2 className='mb-5 text-4xl font-bold md:text-5xl'>
            Über <span className='text-primary'>Markus Sommer</span>
          </h2>
          <p className='max-w-3xl text-lg text-opacity-70'>
            Mein Fokus und meine Leidenschaft sind auf die Benutzererfahrung
            (User Experience) gerichtet. Brauchst du Hilfe z. B. um deine
            Website in neuem Glanz erstrahlen zu lassen, Moderne Web
            Technologieren einzusetzen oder mal einen Tipp wie du eine Sitemap
            einrichtest? Dann schreibe mich an. Ich stehe gerne mit Rat und Tat
            zur Seite.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomePersonal
