<template>
    <div class="container">
        <LazyHydrate when-visible>
            <p-header />
        </LazyHydrate>
        <main class="main">
            <LazyHydrate when-visible>
                <personal />
            </LazyHydrate>
            <LazyHydrate when-visible>
                <projects :repos="repos" :snippets="snippets" />
            </LazyHydrate>
            <LazyHydrate when-visible>
                <blog :posts="blog.items" />
            </LazyHydrate>
        </main>
        <contact-me />
        <LazyHydrate ssr-only>
            <p-footer />
        </LazyHydrate>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';
    import LazyHydrate from 'vue-lazy-hydration';
    import { GithubItem } from '@/types';
    import { repos as reposAPI, snippets as snippetsAPI } from '~/api/github';
    import client from '~/plugins/contentful';

    @Component({
        name: 'Index',
        components: {
            LazyHydrate,
            ContactMe: () => import(/* webpackChunkName: "home" */ '@/components/ContactMe.vue'),
            PHeader: () => import(/* webpackChunkName: "home" */ '@/components/PHeader.vue'),
            Projects: () => import(/* webpackChunkName: "home" */ '@/components/Projects.vue'),
            Personal: () => import(/* webpackChunkName: "home" */ '@/components/Personal.vue'),
            Blog: () => import(/* webpackChunkName: "home" */ '@/components/Blog.vue'),
            PFooter: () => import(/* webpackChunkName: "global" */ '@/components/PFooter.vue'),
        },
    })
    export default class Index extends Vue {
        snippets;
        repos;
        blog;

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

        async asyncData({ error, $axios }) {
            const repos = await reposAPI($axios)
                .then((data: GithubItem[]) => data)
                .catch(() => {
                    error({ statusCode: 404, message: 'Repos not found' });
                });
            const snippets = await snippetsAPI($axios)
                .then((data: GithubItem[]) => data)
                .catch(() => {
                    error({ statusCode: 404, message: 'Snippets not found' });
                });
            const blog = await client
                .getEntries({
                    content_type: 'post',
                    order: '-sys.createdAt',
                })
                .then(response => response)
                .catch(() => {
                    error({ statusCode: 404, message: 'Blog not found' });
                });

            return {
                repos,
                snippets,
                blog,
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
