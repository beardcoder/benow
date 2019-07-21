const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withCSS = require('next-typed-css');

module.exports = withPlugins([
    [
        optimizedImages,
        {
            /* config for next-optimized-images */
        },
    ],
    [
        withCSS,
        {
            tsCssModules: true,
            cssModules: true,
            cssLoaderOptions: {
                namedExport: true,
                camelCase: true,
                importLoaders: 1,
                localIdentName: '[local]___[hash:base64:5]',
            },
        },
    ],
    // your other plugins here
]);
