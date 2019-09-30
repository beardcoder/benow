<template>
    <div class="container">
        <Header />
        <main class="main">
            <Personal />
            <Projects />
            <Blog />
        </main>
        <Footer />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';
    import Header from '~/components/Header.vue';
    import Personal from '~/components/Personal.vue';
    import Projects from '~/components/Projects.vue';
    import Footer from '~/components/Footer.vue';
    import Blog from '~/components/Blog.vue';

    @Component({
        components: {
            Projects,
            Header,
            Personal,
            Footer,
            Blog,
        },
    })
    export default class Index extends Vue {
        async fetch({ store }) {
            await store.dispatch('github/fetch');
            await store.dispatch('blog/fetch');
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
