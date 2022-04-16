import { FunctionComponent } from 'react'
import classnames from 'classnames'
import ReactMarkdown from 'react-markdown'
import remarkInlineLinks from 'remark-inline-links'
import link from 'rehype-autolink-headings'
import rehypePrism from '@mapbox/rehype-prism'

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
      <ReactMarkdown
        linkTarget='_target'
        rehypePlugins={[remarkInlineLinks, link, rehypePrism]}
      >
        {articleBody}
      </ReactMarkdown>
    </div>
  )
}

export default BlogContent
