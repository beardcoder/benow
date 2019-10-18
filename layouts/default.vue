<template>
    <div class="app">
        <nuxt />
    </div>
</template>

<style lang="postcss">
    @import '~/assets/css/variables.css';

    html,
    body {
        font-size: 18px;
        line-height: 1.5;
        font-family: 'Titillium Web', sans-serif;
        font-weight: 300;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #161819;
        min-height: 100%;
        color: #fff;
        width: 100%;
    }

    strong {
        font-weight: 700;
    }

    h2 {
        font-family: 'Roboto Slab', serif;
        font-size: responsive 30px 40px; /* min-size, max-size */
        margin-top: 0;
        line-height: 1.4;
    }

    h3 {
        font-family: 'Roboto Slab', serif;
        font-size: 30px; /* min-size, max-size */
        font-weight: 300;
        margin-top: 0;
        line-height: 1.4;
    }

    h4 {
        font-family: 'Roboto Slab', serif;
        font-size: responsive 18px 20px; /* min-size, max-size */
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 1rem;
        line-height: 1.4;
    }

    h2 + h3 {
        margin-top: -10px;
    }

    @media (min-width: 1200px) {
        h2 + h3 {
            margin-top: -30px;
        }
    }

    img {
        max-width: 100%;
        height: auto;
    }

    a {
        color: var(--color__secondary);
        transition: color 0.2s;
        text-decoration: none;
    }

    a:hover {
        color: var(--color__primary);
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
        border-image: linear-gradient(
            135deg,
            var(--color__primary) 0%,
            var(--color__primary--dark) 100%
        );
        border-image-slice: 4;
        text-decoration: none;
        color: #fff;
        font-weight: 700;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.19);
        background-image: linear-gradient(135deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
        transition: background 0.3s;
        z-index: 2;
        font-size: 1rem;
    }

    .btn:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background-image: linear-gradient(
            135deg,
            var(--color__primary) 0%,
            var(--color__primary--dark) 100%
        );
        opacity: 0;
        transition: opacity 0.2s;
    }

    .btn:hover:after,
    .btn:focus:after {
        opacity: 1;
    }

    .btnSecondary {
        border-image: linear-gradient(
            135deg,
            var(--color__secondary) 0%,
            var(--color__secondary--dark) 100%
        );
        border-image-slice: 4;
    }

    .btnSecondary:after {
        background-image: linear-gradient(
            135deg,
            var(--color__secondary) 0%,
            var(--color__secondary--dark) 100%
        );
    }

    .app {
        overflow: hidden;
        position: relative;
        z-index: 10;
    }
</style>
