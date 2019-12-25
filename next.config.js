const withCSS = require('@zeit/next-css');
const path = require('path');
const withImages = require('next-images');

require('dotenv').config();

const withPlugins = require('next-compose-plugins');

const articles = require('./.contentful/blog/articles.json');

module.exports = withPlugins(
    [
        [
            withCSS,
            {
                cssModules: true,
                cssLoaderOptions: {
                    importLoaders: 1,
                    localIdentName: '[local]__[hash:base64:5]'
                }
            }
        ],
        [withImages]
    ],
    {
        exportPathMap: async function() {
            const paths = {
                '/': { page: '/' }
            };

            articles.forEach(slug => {
                paths[`/blog/${slug}`] = {
                    page: '/blog/[slug]',
                    query: { slug: slug }
                };
            });

            return paths;
        },
        env: {
            GITHUB_TOKEN: process.env.GITHUB_TOKEN,
            GITHUB_USERNAME: process.env.GITHUB_USERNAME
        },
        webpack(config) {
            config.resolve.alias['~'] = path.join(__dirname);
            return config;
        }
    }
);
