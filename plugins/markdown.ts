import MarkdownIt from 'markdown-it';
import MarkdownItTarget from 'markdown-it-link-target';
import hljs from 'highlight.js/lib/highlight.js';
import 'highlight.js/styles/a11y-dark.css';
hljs.registerLanguage('xml', require(`highlight.js/lib/languages/xml`));
hljs.registerLanguage('yaml', require(`highlight.js/lib/languages/yaml`));
hljs.registerLanguage('javascript', require(`highlight.js/lib/languages/javascript`));
hljs.registerLanguage('bash', require(`highlight.js/lib/languages/bash`));
hljs.registerLanguage('typescript', require(`highlight.js/lib/languages/typescript`));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default ({ app }, inject) => {
    const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        highlight(str, lang) {
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
