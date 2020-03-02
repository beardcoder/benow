import { IPost } from '~/types';

export default (blogPosts: IPost[]) => {
    let latestPost = '';
    let postsXml = '';
    Object.keys(blogPosts).map((key: any) => {
        const postDate = blogPosts[key].data.date;
        if (
            !latestPost ||
            new Date(blogPosts[key].data.date).getTime() >=
                new Date(blogPosts[key].data.date).getTime()
        ) {
            latestPost = postDate;
        }
        postsXml += `
            <url>
                <loc>/blog/${blogPosts[key].data.slug}/</loc>
                <lastmod>${blogPosts[key].data.date}</lastmod>
                <priority>0.80</priority>
            </url>`;
    });
    return {
        postsXml,
        latestPost,
    };
};
