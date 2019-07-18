<template>
    <nuxt />
</template>

<script lang="ts">
    import 'normalize.css';
    import Vue from 'vue';
    export default Vue.extend({});
</script>

<style lang="postcss">
    html,
    body {
        font-size: 18px;
        line-height: 1.5;
        font-family: 'Titillium Web', sans-serif;
        font-weight: 300;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #141618;
        min-height: 100%;
        color: #fff;
        width: 100%;
    }

    body {
        width: 100%;
        overflow-x: hidden;
    }

    strong {
        font-weight: 700;
    }

    h1 {
        font-family: 'Roboto Slab', serif;
        font-size: responsive 24px 50px; /* min-size, max-size */
        margin-top: 0;
    }

    h2 {
        font-family: 'Roboto Slab', serif;
        font-size: responsive 22px 34px; /* min-size, max-size */
        margin-top: 0;
    }

    h3 {
        font-family: 'Roboto Slab', serif;
        font-size: responsive 20px 30px; /* min-size, max-size */
        font-weight: 300;
        margin-top: 0;
    }

    h4 {
        font-family: 'Roboto Slab', serif;
        font-size: responsive 18px 20px; /* min-size, max-size */
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 1rem;
    }

    h2 + h3 {
        margin-top: -30px;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .content {
        overflow-x: hidden;
    }

    .btn {
        background: transparent;
        cursor: pointer;
        position: relative;
        margin-top: 1rem;
        display: inline-block;
        padding: 10px 30px;
        line-height: 1;
        text-transform: uppercase;
        border: 4px solid;
        border-image: linear-gradient(135deg, #f03f32 0%, #360940 100%);
        border-image-slice: 4;
        text-decoration: none;
        color: #fff;
        font-weight: 700;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.19);
        background-image: linear-gradient(135deg, #f03f3200 0%, #36094000 100%);
        transition: background 0.3s;
        z-index: 2;

        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            background-image: linear-gradient(135deg, #f03f32 0%, #360940 100%);
            opacity: 0;
            transition: opacity 0.2s;
        }

        &--secondary {
            border-image: linear-gradient(135deg, #32f0d1 0%, #104f98 100%);
            border-image-slice: 4;

            &:after {
                background-image: linear-gradient(135deg, #32f0d1 0%, #104f98 100%);
            }
        }

        &:hover:after,
        &:focus:after {
            opacity: 1;
        }
    }
</style>
