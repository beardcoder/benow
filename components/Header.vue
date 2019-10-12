<template>
    <header class="wrapper">
        <div class="backgroundWrapper">
            <div class="backgroundParallax rellax" data-rellax-speed="-5">
                <div
                    v-lazy:background-image="`${require('~/assets/images/header.jpg?webp')}`"
                    :style="
                        `background-color: ${require('~/assets/images/header.jpg?lqip-colors')[0]}`
                    "
                    role="presentation"
                    class="background"
                />
            </div>
        </div>
        <div class="headerContent">
            <h1 class="h1">
                Webentwicker
                <br />
                Frontend Artist
                <br />
                Designer
                <br />
            </h1>
            <h3 class="h3">Innovation, Inspiration, Technik und Leidenschaft</h3>
            <img
                :src="require('~/assets/images/shape2.svg')"
                loading="lazy"
                alt="header shape"
                width="182"
                height="142"
                class="headerShape"
            />
        </div>
    </header>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';

    @Component
    export default class Header extends Vue {}
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

    .backgroundWrapper,
    .backgroundParallax {
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
        width: calc(1200px + 100 * ((100vw - 420px) / 860));
        top: calc(-100px + -100 * ((100vw - 420px) / 860));
        left: calc(-600px);
    }

    .nav {
        position: fixed;
        z-index: 999;
        width: 100%;
        background: #000;
        text-align: center;
    }

    .scrollactive-item {
        color: #fff;
        text-decoration: none;
        display: inline-block;
        padding: 10px;
    }

    .scrollactive-item.is-active {
        color: #32f0d1;
    }
</style>
