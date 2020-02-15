<template>
    <div class="container">
        <p-header />
        <main class="main">
            <personal />
            <projects />
            <blog />
        </main>
        <contact-me />
        <p-footer />
    </div>
</template>

<script>
    import ContactMe from '@/components/ContactMe.vue';
    import PHeader from '@/components/PHeader.vue';
    import Projects from '@/components/Projects.vue';
    import Personal from '@/components/Personal.vue';
    import Blog from '@/components/Blog.vue';
    import PFooter from '@/components/PFooter.vue';

    export default {
        name: 'PageIndex',
        components: {
            ContactMe,
            PHeader,
            Projects,
            Personal,
            Blog,
            PFooter,
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
