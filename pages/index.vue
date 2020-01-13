<template>
    <div class="container">
        <p-header />
        <main class="main">
            <personal />
            <projects :repos="state.repos" :snippets="state.snippets" />
            <blog :posts="state.posts" />
        </main>
        <contact-me />
        <p-footer />
    </div>
</template>

<script lang="ts">
    import { createComponent, onMounted, reactive, computed } from '@vue/composition-api';
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
            const state = reactive({
                repos: computed(() => require('@/.content/github/repos.json')),
                snippets: computed(() => require('@/.content/github/snippets.json')),
                posts: computed(() => getPosts()),
            });

            onMounted(() => {
                if (window.location.hash) {
                    const elem = document.getElementById(window.location.hash.replace('#', ''));
                    if (elem) elem.scrollIntoView();
                }
            });

            return {
                state,
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
