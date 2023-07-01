'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { Button } from './ui/button'

type Props = { image: string } & JSX.IntrinsicElements['header']

export default function Hero({ image, ...props }: Props) {
  const { scrollY } = useScroll()
  const ref = useRef<HTMLDivElement>(null)
  const [divHeight, getDivHeight] = useState<number>(0)

  useEffect(() => {
    const div = (ref.current && ref.current.clientHeight) || 0
    getDivHeight(Number(div))
  }, [divHeight])

  const opacity = useTransform(scrollY, [divHeight / 2, 0], [0.2, 1])
  const scale = useTransform(scrollY, [divHeight, 0], [0.7, 1], {
    clamp: false,
  })
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
      <motion.div className='w-full h-full'>
        <motion.div
          style={{ opacity }}
          className='absolute inset-0 min-h-full w-full'
        >
          <Image
            src={image}
            fill
            priority
            alt='Header image'
            className='z-0 object-cover'
          ></Image>
        </motion.div>
        <div className='absolute inset-0 z-0 bg-black bg-opacity-50'></div>
        <motion.div
          style={{ scale, translateY }}
          className='container relative z-10 flex flex-col px-5 py-48 mx-auto text-center md:px-0'
        >
          <h1>
            Web&shy;entwickler
            <br />
            Frontend <span className='pb-1 text-gradient'>Artist&nbsp;</span>
            <br />
            Designer
          </h1>
          <div className='mt-16'>
            <Button
              data-cy='contact'
              className='text-white md:text-xl'
              href='mailto:markus@letsbenow.de'
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </header>
  )
}
