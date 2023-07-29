import { playfair } from '@/app/layout'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

type Props = {
  image: string
  text: string
} & JSX.IntrinsicElements['section']

export default function AboutMe({ image, text, ...props }: Props) {
  return (
    <section
      className="relative z-30 mx-auto md:flex max-w-screen-2xl"
      {...props}
    >
      <div className="w-full mr-20 md:w-1/2">
        <Image
          src={`${image}?width=600&height=600`}
          width="600"
          height="600"
          alt="Markus Sommer"
        />
      </div>
      <div className="w-full px-5 my-auto mt-10 mb-20 md:mt-auto md:w-1/2 md:mb-auto">
        <div className="relative z-10 flex flex-col mx-auto">
          <h2
            className={twMerge(
              playfair.className,
              'mb-5 text-4xl font-bold md:text-5xl',
            )}
          >
            Hi, ich bin{' '}
            <span className="pb-1 inline-block text-transparent bg-clip-text bg-gradient-to-br from-lime-500 to-green-400">
              Markus Sommer&nbsp;
            </span>
          </h2>
          <div
            className="max-w-3xl text-lg prose dark:prose-invert text-opacity-70"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
    </section>
  )
}
