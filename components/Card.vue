<template>
    <div class="card">
        <slot />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';

    @Component({})
    export default class Card extends Vue {}
</script>

<style scoped>
    .card {
        background-color: #1f2123;
        padding: 1rem;
        box-sizing: border-box;
        height: 100%;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
    }

    .card:after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        pointer-events: none;
        background-image: radial-gradient(
            ellipse at 60% 120%,
            rgba(62, 62, 62, 0.4) 0%,
            rgba(28, 30, 32, 0) 60%
        );
    }

    .card:before {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        pointer-events: none;
        background-image: radial-gradient(
            ellipse at 100% -10%,
            rgba(62, 62, 62, 0.4) 0%,
            rgba(28, 30, 32, 0) 50%
        );
    }
</style>
