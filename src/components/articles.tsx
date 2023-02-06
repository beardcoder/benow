import { cx } from 'classix'
import { useInView } from 'react-intersection-observer'
import { Typewriter } from 'react-simple-typewriter'

import type { Article as ArticleType } from '@/@types/api'

import Article from './article'

type Props = {
  articles: ArticleType[]
} & JSX.IntrinsicElements['section']

export default function Articles({ articles, className, ...props }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  })
  let text
  if (inView) {
    text = (
      <>
        <Typewriter
          words={['„Made with mindfulness“']}
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
    <section {...props} className={cx('container relative px-8 mx-auto', className)}>
      <div className='flex flex-col mb-16 md:flex-row'>
        <div className='order-2 w-full md:order-1 md:w-1/2 mr-7'>
          <div className='hidden mb-4 text-right h2 md:text-5xl md:block'>100%</div>
          <p className='max-w-xl ml-auto prose dark:prose-invert md:text-right'>
            Gedanken, Ideen oder auch Tutorials findet ihr in meinem Blog. Immer wenn ich etwas Neues gefunden hbe das
            mich fasziniert schreibe ich es hier nieder. Um mein Wissen und meine Erfahrungen mit euch zu Teilen. Gerne
            Lese ich auch Feedback zu meinen Artikeln. Schreibt mit einfach eine Email an{' '}
            <a href='mailto:markus@letsbenow.de'>markus@letsbenow.de</a>
          </p>
        </div>
        <div className='order-1 w-full md:order-2 md:w-1/2'>
          <h2 className='pb-1 text-gradient'>Blog&nbsp;</h2>
          <div className='mb-8 h2-sub md:mb-14' ref={ref}>
            {text}
          </div>
        </div>
      </div>
      <div className='flex flex-wrap -mx-8'>
        {articles.map((article, i) => (
          <Article {...article} key={i} />
        ))}
      </div>
    </section>
  )
}
