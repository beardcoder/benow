<template>
    <div class="designShape"></div>
</template>
<script>
    export default {
        name: 'DesignShapeLeft',
    };
</script>
<style scoped>
    .designShape {
        height: 873px;
        width: 200vw;
        top: -20%;
        left: calc(-1 * (200vw - 100%) / 2);
        position: absolute;
        transform: rotate(20deg);
        background-image: linear-gradient(174deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.03) 100%);
        z-index: -1;
    }
</style>
