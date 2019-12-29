<template>
    <div class="app">
        <nuxt />
    </div>
</template>

<style lang="postcss">
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
