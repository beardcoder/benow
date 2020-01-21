<template>
    <div class="container">
        <LazyHydrate when-idle>
            <p-header />
        </LazyHydrate>
        <main class="main">
            <LazyHydrate when-visible>
                <personal />
            </LazyHydrate>
            <LazyHydrate when-visible>
                <projects />
            </LazyHydrate>
            <LazyHydrate when-visible>
                <blog />
            </LazyHydrate>
        </main>
        <LazyHydrate when-idle>
            <contact-me />
        </LazyHydrate>
        <LazyHydrate ssr-only>
            <p-footer />
        </LazyHydrate>
    </div>
</template>

<script lang="ts">
    import { createComponent, onMounted } from '@vue/composition-api';
    import LazyHydrate from 'vue-lazy-hydration';

    export default createComponent({
        name: 'PageIndex',
        components: {
            LazyHydrate,
            ContactMe: () => import(/* webpackPrefetch: true */ '@/components/ContactMe.vue'),
            PHeader: () => import(/* webpackPrefetch: true */ '@/components/PHeader.vue'),
            Projects: () => import(/* webpackPrefetch: true */ '@/components/Projects.vue'),
            Personal: () => import(/* webpackPrefetch: true */ '@/components/Personal.vue'),
            Blog: () => import(/* webpackPrefetch: true */ '@/components/Blog.vue'),
            PFooter: () => import(/* webpackPrefetch: true */ '@/components/PFooter.vue'),
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
