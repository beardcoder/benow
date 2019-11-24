import fs from 'fs';
import path from 'path';

const config = {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        htmlAttrs: {
            lang: 'de',
        },
        titleTemplate: '%s — Markus Sommer',
        meta: [
            { charset: 'utf-8' },
            { hid: 'lang', name: 'lang', content: 'de' },
            { hid: 'language', name: 'language', content: 'Deutsch' },
            { hid: 'author', name: 'author', content: 'Markus Sommer' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Persönliche Webseite von Markus Sommer ein Entwickler für moderne Web Technologien, Design und Frontend',
            },
        ],
        link: [
            {
                hid: 'canonical',
                rel: 'canonical',
                href: 'https://creativeworkspace.de',
            },
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
            {
                rel: 'preconnect',
                href: 'https://www.google-analytics.com',
            },
        ],
    },

    /*
     ** Customize the progress-bar color
     */
    loading: false,

    /*
     ** Global CSS
     */
    css: ['sanitize.css', '~/assets/css/variables.css', '~/assets/css/global.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/lazyload', mode: 'client' },
        { src: '~/plugins/viewport-directive', mode: 'client' },
        { src: '~/plugins/jsonld' },
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
        'nuxt-webfontloader',
        // Disable gtm for the moment
        // ['@nuxtjs/google-tag-manager', { id: 'GTM-NT4CRWW' }],
        '@bazzite/nuxt-optimized-images',
        '@nuxtjs/dotenv',
        '@nuxtjs/sitemap',
        '@nuxtjs/netlify-files',
        '@nuxtjs/markdownit',
        '@nuxtjs/date-fns',
    ],

    typescript: {
        typeCheck: {
            eslint: true,
        },
    },

    markdownit: {
        preset: 'default',
        linkify: true,
        breaks: true,
        injected: true,
        use: [
            'markdown-it-div',
            'markdown-it-attrs',
            'markdown-it-highlightjs',
            [
                'markdown-it-link-attributes',
                {
                    attrs: {
                        target: '_blank',
                        rel: 'noopener',
                    },
                },
            ],
        ],
    },

    sitemap: {
        hostname: 'https://creativeworkspace.de',
        gzip: true,
    },

    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},

    generate: {
        routes() {
            return fs.readdirSync('./assets/content/blog').map(file => {
                return {
                    route: `/blog/${file.slice(0, -5)}`, // Remove the .json from the end of the filename
                    payload: require(`./assets/content/blog/${file}`),
                };
            });
        },
    },

    pageTransition: {
        name: 'page',
        mode: 'out-in',
    },

    optimizedImages: {
        optimizeImages: true,
        inlineImageLimit: -1,
        defaultImageLoader: 'img-loader',
        webp: {
            quality: 85,
        },
    },

    webfontloader: {
        google: {
            families: ['Maven+Pro:400,700', 'Roboto+Slab:300,400&display=swap'],
        },
    },

    /*
     ** Build configuration
     */
    build: {
        cache: true,
        watch: ['~/api/*'],
        extend(config) {
            config.module.rules.push({
                test: /\.md$/,
                include: path.resolve(__dirname, 'content'),
                loader: 'frontmatter-markdown-loader',
            });
        },
        babel: {
            plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
            ],
        },
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

export default config;
