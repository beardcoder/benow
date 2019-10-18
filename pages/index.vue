<template>
    <div class="container">
        <p-header />
        <main class="main">
            <personal />
            <projects />
            <blog :articles="articles" />
        </main>
        <p-footer />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';
    import Personal from '~/components/Personal.vue';
    import Projects from '~/components/Projects.vue';
    import Blog from '~/components/Blog.vue';
    import PFooter from '~/components/PFooter.vue';
    import PHeader from '~/components/PHeader.vue';

    @Component({
        components: {
            PHeader,
            PFooter,
            Projects,
            Personal,
            Blog,
        },
        transition: 'slide-right',
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

        articles!: any[];

        async fetch({ store }) {
            await store.dispatch('github/fetch');
        }

        asyncData() {
            const resolve = require.context('~/content/', true, /\.md$/);
            const imports: [] = resolve.keys().map(key => {
                // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
                const filenames = key.match(/articles\/(.+)\.md$/);
                return {
                    slug: filenames ? filenames[1] : '',
                    content: resolve(key),
                };
            });
            return {
                articles: imports.reverse(),
            };
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
