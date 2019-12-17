import client from './plugins/contentful';
import { Configuration } from '@/node_modules/@nuxt/types';

require('dotenv').config();

const config: Configuration = {
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
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
                crossorigin: true,
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: true,
            },
            {
                rel: 'preconnect',
                href: 'https://www.google-analytics.com',
                crossorigin: true,
            },
        ],
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#121212',
        height: '5px',
    },

    /*
     ** Global CSS
     */
    css: ['sanitize.css', '@/assets/css/variables.css', '@/assets/css/global.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '@/plugins/lazyload', mode: 'client' },
        '@/plugins/vue-typed',
        { src: '@/plugins/viewport-directive', mode: 'client' },
        '@/plugins/jsonld',
        '@/plugins/markdown',
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
        'nuxt-webfontloader',
        ['@nuxtjs/google-tag-manager', { id: 'GTM-NT4CRWW' }],
        '@nuxtjs/dotenv',
        '@nuxtjs/sitemap',
        '@nuxtjs/netlify-files',
        '@nuxtjs/date-fns',
        '@nuxtjs/pwa',
    ],

    /**
     * PWA Settings
     * See doc: https://pwa.nuxtjs.org/
     */
    pwa: {
        meta: {
            lang: 'de',
            theme_color: '#121212',
        },
    },

    typescript: {
        typeCheck: {
            eslint: true,
        },
    },

    sitemap: {
        hostname: 'https://creativeworkspace.de',
        gzip: true,
        trailingSlash: true,
    },

    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},

    generate: {
        routes() {
            return Promise.all([
                // get all blog posts
                client.getEntries({
                    content_type: 'post',
                }),
            ]).then(entries => {
                return entries[0].items.map(entry => {
                    return {
                        // @ts-ignore
                        route: `/blog/${entry.fields.slug}/`,
                        payload: entry,
                    };
                });
            });
        },
    },

    router: {
        // Doc: https://nuxtjs.org/api/configuration-router/#trailingslash
        trailingSlash: true,
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
        watch: ['@/api/*'],
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
                cssnano: {},
                'postcss-css-variables': {},
            },
            preset: {},
        },
    },
};

export default config;
