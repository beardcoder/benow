import Image from 'next/image'
import { FunctionComponent } from 'react'

type Props = {} & JSX.IntrinsicElements['section']

export const HomePersonal: FunctionComponent<Props> = ({
  ...props
}): JSX.Element => {
  return (
    <section
      className='relative z-30 mx-auto md:flex max-w-screen-2xl'
      {...props}
    >
      <div className='w-full mr-20 md:w-1/2'>
        <Image
          src='/assets/markus_sommer.jpg'
          width='600'
          height='600'
          layout='responsive'
          alt='Markus Sommer'
        ></Image>
      </div>
      <div className='w-full px-5 my-auto mt-10 mb-20 md:mt-auto md:w-1/2 md:mb-auto'>
        <div className='relative z-10 flex flex-col mx-auto'>
          <h2 className='mb-5 text-4xl font-bold md:text-5xl'>
            Hi, ich bin <span className='text-gradient'>Markus Sommer</span>
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
