<template>
    <div class="container">
        <lazy-hydrate when-idle>
            <p-header />
        </lazy-hydrate>
        <main class="main">
            <lazy-hydrate when-visible>
                <personal />
            </lazy-hydrate>
            <lazy-hydrate when-visible>
                <projects />
            </lazy-hydrate>
            <lazy-hydrate when-visible>
                <blog :posts="blog.posts" />
            </lazy-hydrate>
        </main>
        <lazy-hydrate ssr-only>
            <p-footer />
        </lazy-hydrate>
    </div>
</template>

<script lang="ts">
    import { Component, State, Vue } from 'nuxt-property-decorator';
    import LazyHydrate from 'vue-lazy-hydration';
    import PHeader from '~/components/PHeader.vue';
    import { BlogState } from '~/types';

    @Component({
        components: {
            LazyHydrate,
            PHeader,
            Personal: () => import('~/components/Personal.vue'),
            Projects: () => import('~/components/Projects.vue'),
            Blog: () => import('~/components/Blog.vue'),
            PFooter: () => import('~/components/PFooter.vue'),
        },
        transition: 'page',
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

        @State('blog') blog!: BlogState;

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
