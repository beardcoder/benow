import remark from 'remark'
import html from 'remark-html'
import externalLinks from 'remark-external-links'
import highlight from 'remark-prism'

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(highlight, {
      plugins: ['prismjs/plugins/autolinker/prism-autolinker'],
    })
    .use(html)
    .use(externalLinks)
    .process(markdown)
  return result.toString()
}
