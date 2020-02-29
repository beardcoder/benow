import articles from '~/.content/blog/articles.json';
import { IPost } from '~/types';

export default async (): Promise<IPost[]> => {
    return Promise.all(
        articles.map(async (slug: string) => {
            const json = await import(`../.content/blog/${slug}.json`);
            return { ...json };
        })
    );
};
