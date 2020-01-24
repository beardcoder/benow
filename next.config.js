const withCSS = require('@zeit/next-css');
const path = require('path');
const withImages = require('next-images');
const articleSlugs = require('./.content/blog/articles.json');

require('dotenv').config();

const withPlugins = require('next-compose-plugins');

module.exports = withPlugins(
    [
        [
            withCSS,
            {
                cssModules: true,
                cssLoaderOptions: {
                    importLoaders: 1,
                    localIdentName: '[local]__[hash:base64:5]',
                },
            },
        ],
        [withImages],
    ],
    {
        // exportPathMap() {
        //     const pages = {};
        //     articleSlugs.forEach(articleSlug => {
        //         const post = require(`./.content/blog/${articleSlug}.json`);
        //         pages[`/blog/${articleSlug}`] = {
        //             page: '/blog/[slug]',
        //             slug: articleSlug,
        //             query: {
        //                 ...post,
        //             },
        //         };
        //     });

        //     // combine the map of post pages with the home
        //     return Object.assign({}, pages, {
        //         '/': { page: '/' },
        //     });
        // },
        env: {
            GITHUB_TOKEN: process.env.GITHUB_TOKEN,
            GITHUB_USERNAME: process.env.GITHUB_USERNAME,
        },
        webpack(config) {
            config.resolve.alias['~'] = path.join(__dirname);
            return config;
        },
    }
);
