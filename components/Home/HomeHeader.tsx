import Image from 'next/image'
import { FunctionComponent } from 'react'
import { UiButton } from '../Ui/Button/UiButton'

type Props = {} & JSX.IntrinsicElements['header']

export const HomeHeader: FunctionComponent<Props> = ({
  ...props
}): JSX.Element => {
  return (
    <header className='relative flex overflow-hidden' {...props}>
      <Image
        src='/assets/header.jpg'
        layout='fill'
        objectFit='cover'
        alt='Header image'
        className='z-0'
      ></Image>
      <div className='absolute inset-0 z-0 bg-black bg-opacity-50'></div>
      <div className='container relative z-10 flex flex-col px-5 py-48 mx-auto text-center md:px-0'>
        <h1>
          Web&shy;entwickler
          <br />
          Frontend <span className='text-gradient'>Artist</span>
          <br />
          Designer
        </h1>
        <div className='mt-16'>
          <UiButton
            className='text-white md:text-xl'
            href='mailto:markussom@gmail.com'
          >
            Kontakt aufnehmen
          </UiButton>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader
