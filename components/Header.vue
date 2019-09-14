<template>
    <header class="wrapper">
        <div class="backgroundWrapper">
            <div
                class="background rellax lazy"
                data-rellax-speed="-5"
                role="presentation"
                :style="`background-image: url('${require('~/assets/images/header.jpg?webp')}')`"
                :data-bg="`url(${require('~/assets/images/header.jpg?webp')})`"
            />
        </div>
        <div class="headerContent">
            <h1 class="h1">
                Webentwicker
                <br />Frontend Artist
                <br />Designer
                <br />
            </h1>
            <h3 class="h3">Innovation, Inspiration, Technik und Leidenschaft</h3>
            <img
                class="headerShape"
                alt="header shape"
                :src="require('~/assets/images/shape.svg')"
                width="1442"
                height="1316"
            />
        </div>
    </header>
</template>

<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        name: 'Header',
    });
</script>

<style scoped>
    .wrapper {
        display: flex;
        min-height: 500px;
        height: 90vh;
        max-height: 1200px;
        background-size: 1200px;
        position: relative;
    }

    @media (min-width: 768px) {
        .header {
            background-size: cover;
        }
    }

    .backgroundWrapper {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
    }

    .background {
        background-position: center center;
        background-size: cover;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        will-change: transform;
    }

    .h1 {
        font-family: 'Roboto Slab', serif;
        font-size: responsive 40px 65px; /* min-size, max-size */
        margin-top: 0;
        line-height: 1.4;
        position: relative;
        z-index: 2;
        display: inline-block;
        text-align: left;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.2);
    }

    @media (min-width: 500px) {
        .h1 {
            text-align: right;
        }
    }

    .h3 {
        margin-bottom: 0;
        position: relative;
        z-index: 2;
        text-align: left;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.2);
    }

    .headerContent {
        width: 100%;
        margin: auto auto 50px;
        padding-left: 1rem;
        padding-right: 1rem;
        position: relative;
        max-width: 1440px;
    }

    @media (min-width: 768px) {
        .headerContent {
            margin-bottom: 100px;
        }
    }

    .headerShape {
        max-width: none;
        position: absolute;
        width: calc(1000px + 442 * ((100vw - 420px) / 860));
        top: calc(-100px + -200 * ((100vw - 420px) / 860));
        left: calc(-500px + -140 * ((100vw - 420px) / 860));
    }

    .nav {
        position: fixed;
        z-index: 999;
        width: 100%;
        background: #000000;
        text-align: center;
    }

    .scrollactive-item {
        color: #ffffff;
        text-decoration: none;
        display: inline-block;
        padding: 10px;
    }

    .scrollactive-item.is-active {
        color: #32f0d1;
    }
</style>
