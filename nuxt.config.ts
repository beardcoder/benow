import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
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
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700|Roboto+Slab:300,400&display=swap',
            },
        ],
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: "#121212" },
    /*
    ** Global CSS
    */
    css: [],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/vue-fragment.ts',
        {src: '@/plugins/aos.ts', mode: 'client'},
        {src: '@/plugins/in-viewport', mode: 'client'},
        {src: '@/plugins/vue-lazyload', mode: 'client'},
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

    /*
    ** Build configuration
    */
    build: {

        devtools: true,
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
            config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map';
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
        optimizeImagesInDev: false,
    },
};

export default config
