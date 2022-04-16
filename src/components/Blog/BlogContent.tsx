import { FunctionComponent } from 'react'
import classnames from 'classnames'

type BlogContentProps = {
  articleBody: string
} & JSX.IntrinsicElements['div']

const BlogContent: FunctionComponent<BlogContentProps> = ({
  articleBody,
  className,
}): JSX.Element => {
  return (
    <div
      className={classnames(
        'prose dark:prose-invert prose-lg container order-2 lg:order-1 mx-auto',
        className
      )}
    >
      <div dangerouslySetInnerHTML={{ __html: articleBody }}></div>
    </div>
  )
}

export default BlogContent
