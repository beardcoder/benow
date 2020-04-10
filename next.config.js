const path = require('path');
const optimizedImages = require('next-optimized-images');
const webpack = require('webpack');

const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([[optimizedImages]], {
    experimental: {
        modern: true,
        polyfillsOptimization: true,
    },
    webpack(config, { isServer, dev }) {
        if (isServer) {
            config.externals = ['react', 'react-dom', ...config.externals];
        }

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

        config.resolve.alias = Object.assign({}, config.resolve.alias, {
            '~': path.join(__dirname),
            react$: 'preact/compat',
            'react-dom$': 'preact/compat',
            react: 'preact/compat',
            'react-dom': 'preact/compat',
        });

        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });

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
});
