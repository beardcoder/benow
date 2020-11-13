import unified from 'unified'
import remark2rehype from 'remark-rehype'
import urls from 'rehype-urls'
import highlight from 'remark-prism'
import html from 'rehype-stringify'
import markdown from 'remark-parse'
import slug from 'rehype-slug'
import links from 'remark-inline-links'
import link from 'rehype-autolink-headings'
import s from 'hastscript/svg'

export default async function markdownToHtml(data) {
  const result = await unified()
    .use(markdown)
    .use(remark2rehype)
    .use(links)
    .use(html)
    .use(highlight, {
      plugins: ['prismjs/plugins/autolinker/prism-autolinker'],
    })
    .use(slug)
    .use(urls, blankExternal)
    .use(link, {
      properties: {
        class: 'header-link',
      },
      content: svgLink,
    })
    .process(data)
  return result.toString()
}

function blankExternal(url, node) {
  if (url.host !== 'creativeworkspace') {
    node.properties.target = '_blank'
    node.properties.rel = ['nofollow']
  }
}

function svgLink() {
  return s(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewbox: '0 0 24 24',
      width: 24,
      height: 24,
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      class: 'header-link',
    },
    [
      s('path', {
        d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71',
      }),
      s('path', {
        d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
      }),
    ]
  )
}
