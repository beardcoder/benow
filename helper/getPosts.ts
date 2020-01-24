import { IPost } from '~/types/index.js';

export default async (): Promise<IPost[]> => {
    // https://webpack.js.org/guides/dependency-management/#requirecontext
    const articles = require('../.content/blog/articles.json');

    return Promise.all(
        articles.map(async (slug: string) => {
            const json = await import(`../.content/blog/${slug}.json`);
            return { ...json };
        })
    );
};
