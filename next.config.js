const withCSS = require('@zeit/next-css');
const path = require('path');
const optimizedImages = require('next-optimized-images');
const webpack = require('webpack');

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
        [optimizedImages],
    ],
    {
        experimental: {
            modern: true,
            granularChunks: true,
        },
        webpack(config, { dev, isServer }) {
            config.resolve.alias['~'] = path.join(__dirname);
            config.module.rules.push({
                test: /\.md$/,
                use: 'raw-loader',
            });
            return config;
        },
        exportTrailingSlash: true,
        target: 'serverless',
    }
);
