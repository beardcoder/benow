export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''},
        ],
        link: [],
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#ffffff'},
    /*
    ** Global CSS
    */
    css: [],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/vue-fragment',
        '~/plugins/vue-in-viewport-directive',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/eslint-module',
        '@bazzite/nuxt-optimized-images',
        '@nuxtjs/axios',

        // Simple usage
        ['nuxt-rfg-icon', {masterPicture: 'assets/favicon.png'}],
        '@nuxtjs/manifest',
    ],

    axios: {
        // proxyHeaders: false
    },

    /*
    ** Build configuration
    */
    build: {

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
                // optimize-css-assets-webpack-plugin
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
    },
};
