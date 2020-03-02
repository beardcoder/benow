import { IPost } from '~/types';

import blogPostsXml from './blogPostsXml';

export default (blogPosts: IPost[]) => {
    const { postsXml, latestPost } = blogPostsXml(blogPosts);
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://creativeworkspace.de/</loc>
      <lastmod>${latestPost}</lastmod>
      <priority>1.00</priority>
    </url>
    ${postsXml}
  </urlset>`;
};
