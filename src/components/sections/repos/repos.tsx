'use client'

import { cx } from 'classix'
import { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import { Typewriter } from 'react-simple-typewriter'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IRepo } from '@@/@types/repo'

import { ReposItem } from '.'

type Props = {
  repos: IRepo[]
} & JSX.IntrinsicElements['section']

const Repos: FC<Props> = ({ repos, className, ...props }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  })
  let text
  if (inView) {
    text = (
      <>
        <Typewriter
          words={['„Made with love“']}
          cursor
          cursorStyle='_'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </>
    )
  }
  return (
    <section
      className={cx('relative px-8 overflow-x-hidden py-12', className)}
      {...props}
    >
      <div className='container mx-auto'>
        <div className='flex flex-col mb-10 md:flex-row'>
          <div className='order-2 w-full md:order-1 md:w-1/2 mr-7'>
            <div className='hidden mb-4 text-right h2 md:text-5xl md:block'>
              100%
            </div>
            <p className='max-w-xl ml-auto prose dark:prose-invert md:text-right'>
              Ich bin von den Vorteilen von Open Source begeistert und sehe es
              als unverzichtbar für meine tägliche Arbeit als
              Softwareentwickler. Es ermöglicht mir, schneller und effizienter
              zu arbeiten und durch den Austausch mit Entwicklern auf der ganzen
              Welt ständig zu lernen und mich weiterzuentwickeln.
            </p>
          </div>
          <div className='order-1 w-full md:order-2 md:w-1/2'>
            <h2 className='pb-1 text-gradient'>Coding&nbsp;</h2>
            <div className='mb-8 h2-sub md:mb-14' ref={ref}>
              {text}
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={32}
          slidesPerView={1.3}
          breakpoints={{
            460: {
              slidesPerView: 2.3,
            },
            768: {
              slidesPerView: 3.5,
            },
          }}
        >
          <div className='w-full'>
            <div className='grid grid-flow-col gap-6 auto-cols-4/5 md:auto-cols-1/3'>
              {repos.map((repo, i) => (
                <SwiperSlide key={i}>
                  <ReposItem {...repo} />
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Repos
