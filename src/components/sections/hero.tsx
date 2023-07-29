import Image from 'next/image'
import Button from '../ui/button'
import { twMerge } from 'tailwind-merge'
import { playfair } from '../../app/layout'
import { H1 } from '../ui/headline'

type Props = { image: string } & JSX.IntrinsicElements['header']

export default function Hero({ image }: Props) {
  return (
    <header className="relative flex overflow-hidden bg-neutral-800">
      <div className="w-full h-full">
        <div className="absolute inset-0 min-h-full w-full">
          <Image
            src={image}
            fill
            priority
            alt="Header image"
            className="z-0 object-cover"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-black bg-opacity-50" />
        <div className="container relative z-10 flex flex-col px-5 py-48 mx-auto text-center md:px-0">
          <H1
            className={twMerge(
              playfair.className,
              'text-5xl font-bold text-white md:text-6xl lg:text-8xl font-header py-1',
            )}
          >
            Web&shy;entwickler
            <br />
            Frontend{' '}
            <span className="pb-1 inline-block text-transparent bg-clip-text bg-gradient-to-br from-lime-500 to-green-400">
              Artist&nbsp;
            </span>
            <br />
            Designer
          </H1>
          <div className="mt-16">
            <Button
              className="text-white md:text-xl"
              href="mailto:markus@letsbenow.de"
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
