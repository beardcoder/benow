import { Swiper, SwiperSlide } from '@/components/swiper'

import { twMerge } from 'tailwind-merge'
import { Project } from '@/utils/directus-client'
import { playfair } from '@/app/layout'
import { H2, H3 } from '../ui/headline'
import Button from '../ui/button'
import Tag from '../ui/tag'

type Props = {
  projects: Project[]
}

export default function Projects({ projects }: Props) {
  return (
    <section
      id="projects"
      className={twMerge(
        'relative bg-neutral-200 dark:bg-neutral-800 py-36 overflow-x-hidden mb-32',
      )}
    >
      <div className="container px-5 mx-auto md:px-0">
        <div className="flex flex-col mb-20 md:flex-row">
          <div className="order-2 w-full md:order-1 md:w-1/2 mr-7">
            <div
              className={twMerge(
                'hidden mb-4 text-right h2 md:text-5xl md:block font-bold',
                playfair.className,
              )}
            >
              100%
            </div>
            <p className="max-w-xl ml-auto prose dark:prose-invert md:text-right">
              Hier zeige ich meine aktuellen Projekte und beweise meine
              Fähigkeiten im Webdesign. Jedes Projekt wird mit Sorgfalt und
              Leidenschaft angefertigt, um eine benutzerfreundliche und
              einzigartige Online-Erfahrung für meine Kunden zu schaffen. Schau
              dir meine Arbeiten an und lass dich inspirieren. Kontaktiere mich,
              wenn du bereit bist, deine Online-Präsenz zu verbessern.
            </p>
          </div>
          <div
            className={twMerge(
              'order-1 w-full md:order-2 md:w-1/2',
              playfair.className,
            )}
          >
            <H2 className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-lime-500 to-green-400">
              Projekte
            </H2>
            <div className="mb-8 text-3xl font-bold md:text-4xl font-header py-1 md:mb-14">
              Made in Bavaria
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
              slidesPerView: 3,
            },
          }}
        >
          <div className="w-full">
            <div className="grid grid-flow-col gap-6 auto-cols-4/5 md:auto-cols-1/3">
              {projects.map(({ name, id, keywords, url }) => (
                <SwiperSlide key={id}>
                  <div>
                    <H3 className="mb-5 uppercase md:text-center">{name}</H3>
                    <div className="md:text-center">
                      <div className="text-sm">
                        {keywords?.map((ele, y) => <Tag key={y}>{ele}</Tag>)}
                      </div>
                      {url && (
                        <Button
                          target="_blank"
                          className="mt-4"
                          tagName="a"
                          href={url}
                          small
                        >
                          Zum {name} Projekt
                        </Button>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  )
}
