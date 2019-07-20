import NuxtConfiguration from '@nuxt/config';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

const config: NuxtConfiguration = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title:
            'Markus Sommer | Creativeworkspace > Moderne Webtechnologien und Design',
        htmlAttrs: {
            lang: 'de',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
        ],
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#121212' },

    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '@/plugins/in-viewport', mode: 'client' },
        { src: '@/plugins/vue-lazyload', mode: 'client' },
        { src: '@/plugins/scrollnav', mode: 'client' },
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/eslint-module',
        '@bazzite/nuxt-optimized-images',
        '@nuxtjs/axios',
        'nuxt-payload-extractor',
        'nuxt-webfontloader',

        // Simple usage
        ['nuxt-rfg-icon', { masterPicture: 'assets/favicon.png' }],
        '@nuxtjs/manifest',
        'nuxt-seo',
    ],

    seo: {
        // Module options
        name: 'Markus Sommer',
        title: 'Creativeworkspace',
        templateTitle: '%name% - %title%',
        description: 'Entwickler für moderne Web Technologieren und Design',
        lang: 'de',
        language: 'Deutsch',
        author: ['Markus Sommer', 'info@creativeworkspace.de'],
        'og:type': 'website',
        'og:title': 'Moderne Webtechnologien und Design',
        'og:site_name': 'Creativeworkspace',
        'og:url': 'https://creativeworkspace.de',
        'og:description':
            'Entwickler für moderne Web Technologieren und Design',
    },

    webfontloader: {
        google: {
            families: [
                'Titillium+Web:300,400,700',
                'Roboto+Slab:300,400&display=swap',
            ],
        },
    },

    /*
     ** Build configuration
     */
    build: {
        devtools: false,
        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true,
            },
        },
        optimization: {
            minimize: true,
            minimizer: [
                // terser-webpack-plugin
                new OptimizeCssAssetsPlugin({
                    cssProcessor: require('cssnano'),
                }),
            ],
            splitChunks: {
                chunks: 'all',
                automaticNameDelimiter: '.',
                name: undefined,
                cacheGroups: {},
            },
        },

        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            config.devtool = ctx.isClient
                ? 'eval-source-map'
                : 'inline-source-map';
        },
        postcss: {
            // Add plugin names as key and arguments as value
            // Install them before as dependencies with npm or yarn
            plugins: {
                // Disable a plugin by passing false as value
                'postcss-url': false,
                'postcss-nested': {},
                'postcss-responsive-type': {},
                'postcss-hexrgba': {},
                'postcss-css-variables': {},
            },
            preset: {
                // Change the postcss-preset-env settings
                autoprefixer: {
                    grid: true,
                },
            },
        },
    },
    optimizedImages: {
        optimizeImages: true,
        optimizeImagesInDev: false,
    },
};

export default config;
