import remarkInlineLinks from 'remark-inline-links'
import link from 'rehype-autolink-headings'
import rehypePrism from '@mapbox/rehype-prism'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

/**
 * It takes a markdown string, parses it, converts it to HTML, adds syntax highlighting, adds inline
 * links, and returns the HTML
 * @param {string} markdown - string - The markdown string to convert to HTML
 * @returns A string of HTML
 */
export function markdownToHtml(markdown: string) {
  const result = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(remarkInlineLinks)
    .use(link)
    .use(rehypeStringify)
    .processSync(markdown)
  return String(result)
}
