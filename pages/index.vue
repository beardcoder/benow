<template>
    <div class="container">
        <p-header />
        <main class="main">
            <personal />
            <projects :repos="repos" :snippets="snippets" />
            <blog :posts="posts" />
        </main>
        <contact-me />
        <p-footer />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';
    import ContactMe from '@/components/ContactMe.vue';
    import PHeader from '@/components/PHeader.vue';
    import Projects from '@/components/Projects.vue';
    import Personal from '@/components/Personal.vue';
    import Blog from '@/components/Blog.vue';
    import PFooter from '@/components/PFooter.vue';

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
            ContactMe,
            PHeader,
            Projects,
            Personal,
            Blog,
            PFooter,
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

        async asyncData({ $axios, $payloadURL, route }) {
            if (process.static && process.client && $payloadURL) {
                const payload = await $axios.$get($payloadURL(route));
                return payload;
            }

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
