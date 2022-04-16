import { FunctionComponent } from 'react'
import { IPostFields } from '../../../@types/generated/contentful'
import { HomeBlogPost } from './HomeBlogPost/HomeBlogPost'
import { Typewriter } from 'react-simple-typewriter'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'

type Props = {
  posts: IPostFields[]
} & JSX.IntrinsicElements['section']

export const HomeBlog: FunctionComponent<Props> = ({
  posts,
  className,
  ...props
}): JSX.Element => {
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
    <section
      {...props}
      className={classNames('container relative px-8 mx-auto', className)}
    >
      <div className='flex flex-col mb-16 md:flex-row'>
        <div className='order-2 w-full md:order-1 md:w-1/2 mr-7'>
          <div className='hidden mb-4 text-right h2 md:text-5xl md:block'>
            100%
          </div>
          <p className='max-w-xl ml-auto prose dark:prose-invert md:text-right'>
            Gedanken, Ideen oder auch Tutorials findet ihr in meinem Blog. Immer
            wenn ich etwas Neues gefunden hbe das mich fasziniert schreibe ich
            es hier nieder. Um mein Wissen und meine Erfahrungen mit euch zu
            Teilen. Gerne Lese ich auch Feedback zu meinen Artikeln. Schreibt
            mit einfach eine Email an{' '}
            <a href='mailto:markussom@gmail.com'>markussom@gmail.com</a>
          </p>
        </div>
        <div className='order-1 w-full md:order-2 md:w-1/2'>
          <h2 className='text-gradient pb-1'>Blog&nbsp;</h2>
          <div className='mb-8 h2 md:mb-14' ref={ref}>
            {text}
          </div>
        </div>
      </div>
      <div className='flex flex-wrap -mx-8'>
        {posts.map((post, i) => (
          <HomeBlogPost post={post} key={i}></HomeBlogPost>
        ))}
      </div>
    </section>
  )
}

export default HomeBlog
