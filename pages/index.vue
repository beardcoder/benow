<template>
    <div class="container">
        <p-header />
        <main class="main">
            <personal />
            <projects />
            <blog :posts="posts" />
        </main>
        <p-footer />
    </div>
</template>

<script lang="ts">
    import { Component, State, Vue } from 'nuxt-property-decorator';
    import Personal from '~/components/Personal.vue';
    import Projects from '~/components/Projects.vue';
    import Blog from '~/components/Blog.vue';
    import PFooter from '~/components/PFooter.vue';
    import PHeader from '~/components/PHeader.vue';
    import { Post } from '~/types';

    @Component({
        components: {
            PHeader,
            PFooter,
            Projects,
            Personal,
            Blog,
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

        @State('blog/posts') posts!: Post[];

        async fetch({ store }) {
            await Promise.all([store.dispatch('github/fetch'), store.dispatch('blog/fetch')]);
        }
    }
</script>

<style>
    .main {
        position: relative;
        z-index: 20;
        overflow: hidden;
        padding-bottom: 100px;
    }
</style>
