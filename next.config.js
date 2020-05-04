const path = require('path');
const optimizedImages = require('next-optimized-images');
const webpack = require('webpack');

const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([[optimizedImages]], {
    webpack(config, { isServer, dev }) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });

        return config;
    },
    exportTrailingSlash: true,
});
