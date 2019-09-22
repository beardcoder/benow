<template>
    <div class="container">
        <Header />
        <main class="main">
            <Personal />
            <Projects />
            <feature-toggle name="blog" :value="true">
                <Blog />
            </feature-toggle>
        </main>
        <Footer />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Header from '~/components/Header.vue';
    import Personal from '~/components/Personal.vue';
    import Projects from '~/components/Projects.vue';
    import Footer from '~/components/Footer.vue';
    import Blog from '~/components/Blog.vue';

    export default Vue.extend({
        components: {
            Projects,
            Header,
            Personal,
            Footer,
            Blog,
        },
        async fetch({ store }) {
            await store.dispatch('fetchGithub');
            await store.dispatch('fetchBlog');
        },
    });
</script>

<style>
    .main {
        position: relative;
        z-index: 20;
        overflow: hidden;
        padding-bottom: 100px;
    }
</style>
