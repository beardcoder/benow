const path = require('path');
const optimizedImages = require('next-optimized-images');
const webpack = require('webpack');
const withTM = require('next-transpile-modules')(['react-syntax-highlighter']);
const withPrefresh = require('@prefresh/next');

const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([[optimizedImages], [withTM], [withPrefresh]], {
    webpack(config, { isServer, dev }) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });

        const splitChunks = config.optimization && config.optimization.splitChunks;
        if (splitChunks) {
            const cacheGroups = splitChunks.cacheGroups;
            const test = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
            if (cacheGroups.framework) {
                cacheGroups.preact = Object.assign({}, cacheGroups.framework, { test });
                // if you want to merge the 2 small commons+framework chunks:
                // cacheGroups.commons.name = 'framework';
            }
        }

        // Install webpack aliases:
        const aliases = config.resolve.alias || (config.resolve.alias = {});
        aliases.react = aliases['react-dom'] = 'preact/compat';

        // Automatically inject Preact DevTools:
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
});
