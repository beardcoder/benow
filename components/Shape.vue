<template>
    <div data-rellax-speed="-3" :class="{ wrapper: true, rellax: true, wrapperBottom: bottom }">
        <div :class="{ shape: true, shapeLeft: direction === 'left' }" />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'nuxt-property-decorator';

    @Component
    export default class Shape extends Vue {
        @Prop({ default: 'left' }) direction!: string;
        @Prop({ default: false, type: Boolean }) bottom!: boolean;
    }
</script>

<style scoped>
    .wrapper {
        position: absolute;
        left: calc(-1 * (200vw - 100%) / 2);
        top: -500px;
        z-index: -1;
    }

    .shape {
        height: 873px;
        width: 200vw;
        transform: rotate(20deg);
        background-image: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.03) 100%
        );
    }

    .shapeLeft {
        transform: rotate(-20deg);
    }

    .wrapperBottom {
        top: auto;
        bottom: 20%;
    }
</style>
