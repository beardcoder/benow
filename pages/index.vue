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

<script lang="ts">
    import { createComponent, onMounted } from '@vue/composition-api';

    export default createComponent({
        name: 'PageIndex',
        components: {
            ContactMe: () => import('@/components/ContactMe.vue'),
            PHeader: () => import('@/components/PHeader.vue'),
            Projects: () => import('@/components/Projects.vue'),
            Personal: () => import('@/components/Personal.vue'),
            Blog: () => import('@/components/Blog.vue'),
            PFooter: () => import('@/components/PFooter.vue'),
        },

        setup() {
            onMounted(() => {
                if (window.location.hash) {
                    const elem = document.getElementById(window.location.hash.replace('#', ''));
                    if (elem) elem.scrollIntoView();
                }
            });
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
