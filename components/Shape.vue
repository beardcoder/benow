<template>
    <div class="wrapper rellax" data-rellax-speed="-3">
        <div :class="{'shape': true, 'shapeLeft': direction === 'left', 'shapeBootom': bottom}" />
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Shape',
        props: {
            direction: {
                type: String,
                default: () => 'right',
            },
            bottom: {
                type: Boolean,
                default: () => false,
            },
        },
    };
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

    .shapeBottom {
        top: auto;
        bottom: 20%;
    }
</style>
