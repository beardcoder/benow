import unified from 'unified'
import remark2rehype from 'remark-rehype'
import urls from 'rehype-urls'
import highlight from 'remark-prism'
import html from 'rehype-stringify'
import markdown from 'remark-parse'
import slug from 'rehype-slug'
import links from 'remark-inline-links'

export default async function markdownToHtml(data) {
  const result = await unified()
    .use(markdown)
    .use(remark2rehype)
    .use(links)
    .use(html)
    .use(highlight, {
      plugins: ['prismjs/plugins/autolinker/prism-autolinker'],
    })
    .use(urls, blankExternal)
    .use(slug)
    .process(data)
  return result.toString()
}

function blankExternal(url, node) {
  if (url.host !== 'creativeworkspace') {
    node.properties.target = '_blank'
    node.properties.rel = ['nofollow']
  }
}
