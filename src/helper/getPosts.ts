import matter from 'gray-matter';
import glob from 'glob';

export default (): any => {
    const files = glob.sync('*', { cwd: './src/content/posts' });

    const posts = files.map(fileKey => {
        const cleanKey: string = fileKey.replace('.md', '');
        const file = require(`~/src/content/posts/${fileKey}`);
        const post = { ...matter(file.default) };
        post['data']['slug'] = cleanKey;
        return { ...post };
    });

    return posts.map(post => {
        return {
            ...post.data,
            content: post.content,
        };
    });
};
