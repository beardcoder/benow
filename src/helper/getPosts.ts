import { IPost } from '~/types';
import matter from 'gray-matter';

export default (): IPost[] => {
    const files = require.context('../content/posts', true, /\.md$/);
    let posts: any = {};
    files.keys().forEach(function(key) {
        const cleanKey: string = key.replace('./', '').replace('.md', '');
        posts[cleanKey] = matter(files(key).default);
        posts[cleanKey]['data']['slug'] = cleanKey;
    });
    return posts;
};
