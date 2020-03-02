const withCSS = require('@zeit/next-css');
const path = require('path');
const withImages = require('next-images');
const jdown = require('jdown');

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
        env: {
            GITHUB_TOKEN: process.env.GITHUB_TOKEN,
            GITHUB_USERNAME: process.env.GITHUB_USERNAME,
        },
        webpack(config) {
            config.resolve.alias['~'] = path.join(__dirname);
            config.module.rules.push({
                test: /\.md$/,
                use: 'raw-loader',
            });
            return config;
        },
        exportTrailingSlash: true,
    }
);
