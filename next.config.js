const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withCSS = require('next-typed-css');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withProgressBar = require('next-progressbar');

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
    [
        withBundleAnalyzer,
        {
            analyzeServer: ['server', 'both'].includes(
                process.env.BUNDLE_ANALYZE,
            ),
            analyzeBrowser: ['browser', 'both'].includes(
                process.env.BUNDLE_ANALYZE,
            ),
            bundleAnalyzerConfig: {
                server: {
                    analyzerMode: 'static',
                    reportFilename: './tmp/server.html',
                },
                browser: {
                    analyzerMode: 'static',
                    reportFilename: './tmp/bundles/client.html',
                },
            },
        },
    ],
    [
        withProgressBar,
        {
            progressBar: {
                profile: true,
            },
        },
    ],
]);
