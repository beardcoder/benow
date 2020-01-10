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
    import { createComponent, onMounted } from '@vue/composition-api';
    import getPosts from '../utils/getPosts';
    import ContactMe from '@/components/ContactMe.vue';
    import PHeader from '@/components/PHeader.vue';
    import Projects from '@/components/Projects.vue';
    import Personal from '@/components/Personal.vue';
    import Blog from '@/components/Blog.vue';
    import PFooter from '@/components/PFooter.vue';

    export default createComponent({
        components: {
            ContactMe,
            PHeader,
            Projects,
            Personal,
            Blog,
            PFooter,
        },

        setup() {
            onMounted(() => {
                if (window.location.hash) {
                    const elem = document.getElementById(window.location.hash.replace('#', ''));
                    if (elem) elem.scrollIntoView();
                }
            });
        },

        async asyncData(context) {
            const { $axios, route, $payloadURL } = context;

            if (process.static && process.client && $payloadURL) {
                const payload = await $axios.$get($payloadURL(route));
                return payload;
            }

            const repos = require('@/.content/github/repos.json');
            const snippets = require('@/.content/github/snippets.json');
            const posts = await getPosts();

            return {
                repos,
                snippets,
                posts,
            };
        },

        data() {
            return {
                snippets: [],
                repos: [],
                posts: [],
            };
        },

        head() {
            return {
                title: 'Moderne Web Technologieren, Design und Frontendartist 🚀',
            };
        },
    });
</script>

<style scoped>
    .main {
        position: relative;
        z-index: 20;
        overflow: hidden;
        padding-bottom: 100px;
    }
</style>
