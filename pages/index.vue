<template>
    <div class="container">
        <v-lazy ssr-only>
            <p-header />
        </v-lazy>
        <main class="main">
            <v-lazy when-visible>
                <personal />
            </v-lazy>
            <v-lazy when-visible>
                <projects :repos="repos" :snippets="snippets" />
            </v-lazy>
            <v-lazy when-visible>
                <blog :posts="posts" />
            </v-lazy>
        </main>
        <v-lazy when-idle>
            <contact-me />
        </v-lazy>
        <v-lazy ssr-only>
            <p-footer />
        </v-lazy>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';
    import VLazy from 'vue-lazy-hydration';

    const importPosts = () => {
        // https://webpack.js.org/guides/dependency-management/#requirecontext
        const articles = require('@/.content/blog/articles.json');

        return Promise.all(
            articles.map(async (slug: string) => {
                const json = await import(`@/.content/blog/${slug}.json`);
                return { ...json };
            })
        );
    };

    @Component({
        name: 'Index',
        components: {
            VLazy,
            ContactMe: () => import(/* webpackChunkName: "home" */ '@/components/ContactMe.vue'),
            PHeader: () => import(/* webpackChunkName: "home" */ '@/components/PHeader.vue'),
            Projects: () => import(/* webpackChunkName: "home" */ '@/components/Projects.vue'),
            Personal: () => import(/* webpackChunkName: "home" */ '@/components/Personal.vue'),
            Blog: () => import(/* webpackChunkName: "home" */ '@/components/Blog.vue'),
            PFooter: () => import(/* webpackChunkName: "home" */ '@/components/PFooter.vue'),
        },
    })
    export default class Index extends Vue {
        snippets;
        repos;
        posts;

        mounted() {
            if (window.location.hash) {
                const elem = document.getElementById(window.location.hash.replace('#', ''));
                if (elem) elem.scrollIntoView();
            }
        }

        head() {
            return {
                title: 'Moderne Web Technologieren, Design und Frontendartist 🚀',
            };
        }

        async asyncData() {
            const repos = require('@/.content/github/repos.json');
            const snippets = require('@/.content/github/snippets.json');
            const posts = await importPosts();

            return {
                repos,
                snippets,
                posts,
            };
        }
    }
</script>

<style scoped>
    .main {
        position: relative;
        z-index: 20;
        overflow: hidden;
        padding-bottom: 100px;
    }
</style>
