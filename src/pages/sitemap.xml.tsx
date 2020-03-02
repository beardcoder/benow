import * as React from 'react';
import getPosts from '~/src/helper/getPosts';
import sitemapXml from '~/src/helper/sitemapXml';

export default class Sitemap extends React.Component {
    static getInitialProps({ res }: any) {
        const posts = getPosts();
        res.setHeader('Content-Type', 'text/xml');
        res.write(sitemapXml(posts));
        res.end();
    }
}
