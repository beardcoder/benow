module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        htmlAttrs: {
            lang: 'de',
        },
        title:
            'Markus Sommer — moderne Web Technologieren, Design und Frontendartist',
        meta: [
            { charset: 'utf-8' },
            { lang: 'de' },
            { language: 'Deutsch' },
            { author: 'Markus Sommer' },
            { canonical: 'https://creativeworkspace.de' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Persönliche Webseite von Markus Sommer ein Entwickler für moderne Web Technologieren, Design und Frontend',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/rellax', mode: 'client' },
        { src: '~/plugins/lazyload', mode: 'client' },
        { src: '~/plugins/viewport-directive', mode: 'client' },
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        '@nuxt/typescript-build',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@bazzite/nuxt-optimized-images',
        'nuxt-webfontloader',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},

    optimizedImages: {
        optimizeImages: true,
        optimizeImagesInDev: true,
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
        watch: ['api'],
        postcss: {
            // Add plugin names as key and arguments as value
            // Install them before as dependencies with npm or yarn
            plugins: {
                'postcss-responsive-type': {},
            },
            preset: {
                // Change the postcss-preset-env settings
                autoprefixer: {
                    grid: true,
                },
            },
        },
    },
};
