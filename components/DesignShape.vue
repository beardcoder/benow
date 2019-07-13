<template>
    <div :class="{'designShape': true, 'designShape--left': left}"></div>
</template>
<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        props: {
            left: Boolean,
        },
    });
</script>

<style scoped lang="postcss">
    .designShape {
        height: 873px;
        width: 200vw;
        top: -20%;
        left: calc(-1 * (200vw - 100%) / 2);
        position: absolute;
        transform: rotate(20deg);
        background-image: linear-gradient(
            174deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.03) 100%
        );
        z-index: -1;

        &--left {
            transform: rotate(-20deg);
        }
    }
</style>
