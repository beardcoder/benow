<template>
    <div class="container">
        <LazyHydrate ssr-only>
            <p-header />
        </LazyHydrate>
        <main class="main">
            <LazyHydrate when-visible>
                <personal />
            </LazyHydrate>
            <LazyHydrate when-visible>
                <projects />
            </LazyHydrate>
            <LazyHydrate when-visible>
                <blog v-if="blog" :posts="blog.posts" />
            </LazyHydrate>
        </main>
        <contact-me />
        <LazyHydrate ssr-only>
            <p-footer />
        </LazyHydrate>
    </div>
</template>

<script lang="ts">
    import { Component, State, Vue } from 'nuxt-property-decorator';
    import LazyHydrate from 'vue-lazy-hydration';
    import { BlogState } from '~/types';

    @Component({
        name: 'Index',
        components: {
            LazyHydrate,
            ContactMe: () => import('~/components/ContactMe.vue'),
            PHeader: () => import('~/components/PHeader.vue'),
            Projects: () => import('~/components/Personal.vue'),
            Personal: () => import('~/components/Projects.vue'),
            PFooter: () => import('~/components/PFooter.vue'),
            Blog: () => import('~/components/Blog.vue'),
        },
    })
    export default class Index extends Vue {
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

        @State('blog') blog: BlogState | undefined;

        async fetch({ store }) {
            await Promise.all([store.dispatch('github/fetch'), store.dispatch('blog/fetch')]);
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
