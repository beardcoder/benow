<template>
    <div class="container">
        <p-header />
        <main class="main">
            <personal />
            <projects />
            <blog v-if="blog" :posts="blog.posts" />
        </main>
        <contact-me />
        <p-footer />
    </div>
</template>

<script lang="ts">
    import { Component, State, Vue } from 'nuxt-property-decorator';
    import { BlogState } from '~/types';
    import ContactMe from '~/components/ContactMe.vue';
    import PHeader from '~/components/PHeader.vue';
    import Personal from '~/components/Personal.vue';
    import Projects from '~/components/Projects.vue';
    import PFooter from '~/components/PFooter.vue';
    import Blog from '~/components/Blog.vue';

    @Component({
        components: {
            PFooter,
            Projects,
            Personal,
            PHeader,
            ContactMe,
            Blog,
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

        async fetch({store}) {
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
