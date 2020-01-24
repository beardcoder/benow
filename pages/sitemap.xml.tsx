import * as React from 'react';
import getPosts from '~/helper/getPosts';
import sitemapXml from '~/helper/sitemapXml';

export default class Sitemap extends React.Component {
    static async getInitialProps({ res }: any) {
        const posts = await getPosts();
        res.setHeader('Content-Type', 'text/xml');
        res.write(sitemapXml(posts));
        res.end();
    }
}
