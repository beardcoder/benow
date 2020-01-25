<template functional>
    <div :class="{ wrapperBottom: bottom }" class="wrapper">
        <div :class="{ shapeLeft: direction === 'left' }" class="shape" />
    </div>
</template>

<script lang="ts">
    import { createComponent } from '@vue/composition-api';

    export default createComponent({
        name: 'Shape',
        props: {
            direction: {
                type: String,
                default: '',
            },
            bottom: {
                type: Boolean,
                default: false,
            },
        },
    });
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
