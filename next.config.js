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
        webpack(config, { dev, isServer }) {
            config.resolve.alias['~'] = path.join(__dirname);
            config.module.rules.push({
                test: /\.md$/,
                use: 'raw-loader',
            });
            config.plugins.push(
                new webpack.optimize.LimitChunkCountPlugin({
                    maxChunks: 5,
                })
            );
            const splitChunks = config.optimization && config.optimization.splitChunks;
            if (splitChunks) {
                const cacheGroups = splitChunks.cacheGroups;
                const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
                if (cacheGroups.framework) {
                    cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
                        test: preactModules,
                    });
                    cacheGroups.commons.name = 'framework';
                } else {
                    cacheGroups.preact = {
                        name: 'commons',
                        chunks: 'all',
                        test: preactModules,
                    };
                }
            }

            // inject Preact DevTools
            if (dev && !isServer) {
                const entry = config.entry;
                config.entry = () =>
                    entry().then(entries => {
                        entries['main.js'] = ['preact/debug'].concat(entries['main.js'] || []);
                        return entries;
                    });
            }
            return config;
        },
        exportTrailingSlash: true,
        target: 'serverless',
    }
);
