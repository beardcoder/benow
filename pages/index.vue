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

<script>
    import LazyHydrate from 'vue-lazy-hydration';
    import { mapState } from 'vuex';
    export default {
        components: {
            LazyHydrate,
            PHeader: () => import('~/components/PHeader.vue'),
            Personal: () => import('~/components/Personal.vue'),
            Projects: () => import('~/components/Projects.vue'),
            Blog: () => import('~/components/Blog.vue'),
            PFooter: () => import('~/components/PFooter.vue'),
        },
        transition: 'page',

        computed: mapState(['blog']),

        async fetch({ store }) {
            await Promise.all([store.dispatch('github/fetch'), store.dispatch('blog/fetch')]);
        },

        mounted() {
            if (window.location.hash) {
                const elem = document.getElementById(window.location.hash.replace('#', ''));
                if (elem) elem.scrollIntoView();
            }
        },

        head() {
            return {
                title: 'Moderne Web Technologieren, Design und Frontendartist 🚀',
            };
        },
    };
</script>

<style scoped>
    .main {
        position: relative;
        z-index: 20;
        overflow: hidden;
        padding-bottom: 100px;
    }
</style>
