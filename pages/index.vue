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
                <blog :posts="blog.items" />
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
    import { GithubItem } from '@/types';
    import client from '~/plugins/contentful';
    import { reposFetch, snippetsFetch } from '~/api/github';

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

        async asyncData({ error }) {
            const repos = await reposFetch()
                .then((data: GithubItem[]) => data)
                .catch(() => {
                    error({ statusCode: 404, message: 'Repos not found' });
                });
            const snippets = await snippetsFetch()
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
