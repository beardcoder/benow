import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { UiButton } from '../Ui/Button/UiButton'

type Props = { image: string } & JSX.IntrinsicElements['header']

export function HomeHeader({ ...props }: Props): JSX.Element {
  const { scrollY } = useScroll()
  const ref = useRef<HTMLDivElement>(null)
  const [divHeight, getDivHeight] = useState<number>(0)

  useEffect(() => {
    const div = (ref.current && ref.current.clientHeight) || 0
    getDivHeight(Number(div))
  }, [divHeight])

  const opacity = useTransform(scrollY, [divHeight / 2, 0], [0.2, 1])
  const translateY = useTransform(scrollY, [divHeight, 0], [200, 0], {
    clamp: false,
  })

  return (
    <header
      className='relative flex overflow-hidden bg-neutral-800'
      data-cy='intro'
      ref={ref}
      {...props}
    >
      <motion.div
        style={{ translateY }}
        transition={{ duration: 1 }}
        className='w-full'
      >
        <motion.div style={{ opacity }}>
          <Image
            src='/assets/header.jpg'
            fill
            alt='Header image'
            className='z-0 object-cover'
          ></Image>
        </motion.div>
        <div className='absolute inset-0 z-0 bg-black bg-opacity-50'></div>
        <div className='container relative z-10 flex flex-col px-5 py-48 mx-auto text-center md:px-0'>
          <h1>
            Web&shy;entwickler
            <br />
            Frontend <span className='pb-1 text-gradient'>Artist&nbsp;</span>
            <br />
            Designer
          </h1>
          <div className='mt-16'>
            <UiButton
              data-cy='contact'
              className='text-white md:text-xl'
              href='mailto:markussom@gmail.com'
            >
              Kontakt aufnehmen
            </UiButton>
          </div>
        </div>
      </motion.div>
    </header>
  )
}

export default HomeHeader
