module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        htmlAttrs: {
            lang: 'de',
        },
        title: 'Markus Sommer — moderne Web Technologieren, Design und Frontendartist',
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
        link: [
            {
                rel: 'shortcut icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/apple-touch-icon.png?v=NmP44eAp5E',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/favicon-32x32.png?v=NmP44eAp5E',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/favicon-16x16.png?v=NmP44eAp5E',
            },
            {
                rel: 'manifest',
                href: '/site.webmanifest?v=NmP44eAp5E',
            },
            {
                rel: 'mask-icon',
                href: '/safari-pinned-tab.svg?v=NmP44eAp5E',
                color: '#202025',
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
            },
        ],
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
        { src: '~/plugins/carousel', mode: 'client' },
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
        ['@nuxtjs/google-tag-manager', { id: 'GTM-NT4CRWW' }],
        '@nuxtjs/dotenv',
        'nuxt-feature-toggle',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},

    featureToggle: {
        queryString: true,
    },

    optimizedImages: {
        optimizeImages: true,
        optimizeImagesInDev: true,
    },

    webfontloader: {
        google: {
            families: ['Titillium+Web:300,400,700', 'Roboto+Slab:300,400&display=swap'],
        },
    },

    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
        parallel: true,
        cache: false,
        watch: ['~/api/*'],
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
