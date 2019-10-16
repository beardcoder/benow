<template>
    <nuxt-link class="backLink" to="/#blog">
        <span class="backLink__text">Zurück</span>
    </nuxt-link>
</template>
<script lang="ts">
    export default {
        name: 'BackLink',
    };
</script>
<style scoped>
    .backLink {
        --size: 100px;

        position: absolute;
        display: flex;
        bottom: -60px;
        left: calc(50% - 60px);
        box-sizing: border-box;
        width: var(--size);
        height: var(--size);
        text-decoration: none;
        margin: 15px;
        color: #fff;
        border-radius: calc(var(--size) / 2);
        justify-content: center;
        align-items: center;
        z-index: 100;
    }

    .backLink__text {
        position: relative;
        z-index: 99;
        text-transform: uppercase;
        font-weight: bold;
    }

    .backLink:before {
        content: '';
        position: absolute;
        border-radius: calc((var(--size) + 8px) / 2);
        top: -6px;
        bottom: -6px;
        left: -6px;
        right: -6px;
        background: linear-gradient(135deg, #f03f32 0%, #360940 100%);
        z-index: 1;
    }

    .backLink:after {
        content: '';
        position: absolute;
        border-radius: calc((var(--size) + 8px) / 2);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: var(--color__footer);
        z-index: 2;
        transform: scale(1);
        transition: transform 0.3s;
    }

    .backLink:hover:after {
        transform: scale(0);
    }
</style>
