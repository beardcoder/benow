import { IPost } from '~/types';
import matter from 'gray-matter';
import glob from 'glob';

export default (): IPost[] => {
    const files = glob.sync('*', { cwd: './src/content/posts' });
    let posts: any = {};
    files.forEach(async function(key) {
        const cleanKey: string = key.replace('.md', '');
        const file = await import(`~/src/content/posts/${key}`);
        posts[cleanKey] = matter(file.default);
        posts[cleanKey]['data']['slug'] = cleanKey;
    });

    return posts;
};
