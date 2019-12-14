import 'highlight.js/styles/monokai.css';

import hljs from 'highlight.js/lib/highlight.js';
import MarkdownIt from 'markdown-it';
import MarkdownItTarget from 'markdown-it-link-target';

hljs.registerLanguage('xml', require(`highlight.js/lib/languages/xml`));
hljs.registerLanguage('yaml', require(`highlight.js/lib/languages/yaml`));
hljs.registerLanguage('javascript', require(`highlight.js/lib/languages/javascript`));
hljs.registerLanguage('bash', require(`highlight.js/lib/languages/bash`));
hljs.registerLanguage('typescript', require(`highlight.js/lib/languages/typescript`));

export default ({ app }: any, inject: any) => {
    const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        highlight(str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value;
                } catch (__) {}
            }

            return ''; // use external default escaping
        },
    }).use(MarkdownItTarget);

    inject('md', markdown => md.render(markdown));
};
