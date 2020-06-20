import matter from 'gray-matter';
import glob from 'glob';
import { IPost } from '@@/types';

export function getFullPosts(): IPost[] {
    return getPostData().map(post => {
        return {
            ...post.data,
            content: post.content,
        };
    });
}

export function getMinimalPosts(): IPost[] {
    return getPostData().map(post => {
        return {
            ...post.data,
        };
    });
}

function getPostData(): any[] {
    const files = glob.sync('*', { cwd: './src/content/posts' });

    const posts: { data: any; content: string }[] = files.map(fileKey => {
        const cleanKey: string = fileKey.replace('.md', '');
        const file = require(`@/content/posts/${fileKey}`);
        const post = { ...matter(file.default) };
        post['data']['slug'] = cleanKey;
        return { ...post };
    });

    posts.sort((a, b) => {
        const dateA = new Date(a.data.date).getTime();
        const dateB = new Date(b.data.date).getTime();
        return dateB - dateA;
    });

    return posts;
}
