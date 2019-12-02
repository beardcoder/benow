import MarkdownIt from 'markdown-it';
import MarkdownItTarget from 'markdown-it-link-target';
import hljs from 'highlight.js/lib/highlight.js';
import 'highlight.js/styles/a11y-dark.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default ({ app }, inject) => {
    const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        highlight(str, lang) {
            hljs.registerLanguage(lang, require(`highlight.js/lib/languages/${ lang }`));
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value;
                } catch (__) {
                }
            }

            return ''; // use external default escaping
        }
    }).use(MarkdownItTarget);

    inject('md', markdown => md.render(markdown));
}
