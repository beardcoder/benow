import Image from 'next/image'
import { FunctionComponent } from 'react'
import { UiButton } from '../Ui/Button/UiButton'

type Props = {
  id: string
}

export const HomeHeader: FunctionComponent<Props> = ({ id }): JSX.Element => {
  return (
    <header className='relative flex min-h-screen overflow-hidden' id={id}>
      <Image
        src='/assets/header.jpg'
        layout='fill'
        objectFit='cover'
        alt='Header image'
        className='z-0'
      ></Image>
      <div className='absolute inset-0 z-0 bg-black bg-opacity-50'></div>
      <div className='container relative z-10 flex flex-col px-5 pb-32 mx-auto mt-40 md:px-0'>
        <p className='text-lg text-white uppercase md:text-xl lg:text-2xl text-opacity-70'>
          Innovation, Inspiration, Technik und Leidenschaft
        </p>
        <h1 className='text-5xl font-bold text-white md:text-6xl lg:text-9xl'>
          Web&shy;entwickler
          <br />
          Frontend <span className='text-primary'>Artist</span>
          <br />
          Designer
        </h1>
        <div className='mt-8'>
          <UiButton
            className='text-white md:text-xl'
            href='mailto:markussom@gmail.com'
          >
            Kontakt aufnehmen
          </UiButton>
        </div>
      </div>
      <div className='absolute w-full transform scale-110 bg-white h-28 lg:h-48 -bottom-20 -rotate-4'></div>
    </header>
  )
}

export default HomeHeader
