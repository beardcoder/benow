import { IPost } from '~/types';

export default (blogPosts: IPost[]) => {
    let latestPost = '';
    let postsXml = '';
    Object.keys(blogPosts).map((key: any) => {
        const postDate = blogPosts[key].date;
        if (
            !latestPost ||
            new Date(blogPosts[key].date).getTime() >= new Date(blogPosts[key].date).getTime()
        ) {
            latestPost = postDate;
        }
        postsXml += `
            <url>
                <loc>/blog/${blogPosts[key].slug}/</loc>
                <lastmod>${blogPosts[key].date}</lastmod>
                <priority>0.80</priority>
            </url>`;
    });
    return {
        postsXml,
        latestPost,
    };
};
