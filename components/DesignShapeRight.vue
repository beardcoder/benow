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
        width: 140vw;
        top: 30%;
        position: absolute;
        left: -20vw;
        transform: rotate(20deg) translateY(-50%);;
        background-image: linear-gradient(174deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.03) 100%);
        z-index: -1;
    }
</style>
