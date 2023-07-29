import { playfair } from '@/app/layout'
import { Article } from '@/utils/directus-client'
import { getAssetURL } from '@/utils/get-asset-url'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { H2, H3 } from '../ui/headline'

type Props = {
  articles: Article[]
}

export default function Blog({ articles }: Props) {
  return (
    <section id="blog" className="container relative px-8 mx-auto mb-20">
      <div className="flex flex-col mb-16 md:flex-row">
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
            In meinem Blog teile ich mit Ihnen meine Gedanken, Ideen und
            Tutorials zu Themen, die mich faszinieren. Ich möchte mein Wissen
            und meine Erfahrungen mit Ihnen teilen und freue mich immer über
            Feedback. Wenn Sie Fragen oder Anregungen haben, schreiben Sie mir
            gerne eine Email an{' '}
            <a href="mailto:markus@letsbenow.de">markus@letsbenow.de</a>. Lassen
            Sie uns gemeinsam lernen und wachsen.
          </p>
        </div>
        <div
          className={twMerge(
            'order-1 w-full md:order-2 md:w-1/2',
            playfair.className,
          )}
        >
          <H2 className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-lime-500 to-green-400">
            Blog
          </H2>
          <div className="mb-8 text-3xl font-bold md:text-4xl font-header py-1 md:mb-14">
            „Made with mindfulness“
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-8">
        {articles.map(({ title, image, tags, id, slug }) => (
          <div className="w-full p-4 md:w-1/2 lg:w-1/3" key={id}>
            <Link
              className="block duration-200 rounded-xl overflow-hidden bg-neutral-400 bg-opacity-10 dark:bg-opacity-100 dark:bg-neutral-800 hover:shadow-md dark:hover:bg-neutral-700 dark:transition-colors transition-shadow h-full"
              href={`/blog/${slug}`}
            >
              <Image
                src={`${getAssetURL(image)}?width=480&height=280&fit=fill`}
                width="480"
                height="280"
                alt={title}
              />

              <div className="p-4 md:p-6">
                <p className="pb-2 text-sm">
                  {tags?.map((tag, key) => (
                    <span key={key} className="mr-1">
                      {tag}
                      {tags && key !== tags.length - 1 && ', '}
                    </span>
                  ))}
                </p>
                <H3>{title}</H3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
