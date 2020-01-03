<template>
    <div class="app">
        <nuxt />
    </div>
</template>

<script lang="ts">
    import FontFaceObserver from 'fontfaceobserver';
    import Vue from 'vue';

    const fontA = new FontFaceObserver('Roboto Slab');
    const fontB = new FontFaceObserver('Maven Pro');

    export default Vue.extend({
        mounted() {
            Promise.all([fontA.load(), fontB.load()]).then(function() {
                document.body.classList.add('fonts--loaded');
            });
        },
    });
</script>

<style>
    .app {
        overflow: hidden;
        position: relative;
        z-index: 10;
    }

    .page-enter-active,
    .page-leave-active {
        transition: all 0.3s ease-out;
    }

    .page-enter,
    .page-leave-active {
        opacity: 0;
        transform-origin: 50% 50%;
    }
</style>
