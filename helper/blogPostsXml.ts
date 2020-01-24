import { IPost } from '~/types';

export default (blogPosts: IPost[]) => {
    let latestPost = '';
    let postsXml = '';
    blogPosts.map(post => {
        const postDate = post.sys.createdAt;
        if (
            !latestPost ||
            new Date(post.sys.createdAt).getTime() >= new Date(post.sys.createdAt).getTime()
        ) {
            latestPost = postDate;
        }
        postsXml += `
            <url>
                <loc>/blog/${post.fields.slug}</loc>
                <lastmod>${post.sys.createdAt}</lastmod>
                <priority>0.80</priority>
            </url>`;
    });
    return {
        postsXml,
        latestPost,
    };
};
