<template functional>
    <header class="wrapper">
        <div class="backgroundWrapper">
            <div role="presentation" class="background" />
        </div>
        <div class="headerContent">
            <h1 class="h1">
                Webentwickler
                <br />
                Frontend Artist
                <br />
                Designer
                <br />
            </h1>
            <h3 class="h3">Innovation, Inspiration, Technik und Leidenschaft</h3>
            <img
                src="@/assets/images/shape2.svg"
                alt="header shape"
                width="182"
                height="142"
                class="headerShape"
            />
        </div>
    </header>
</template>

<style scoped>
    .wrapper {
        display: flex;
        min-height: 500px;
        height: 90vh;
        max-height: 1200px;
        background-size: 1200px;
        position: relative;
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
        background-image: url('/images/header--xs.jpg');
    }

    @media (min-width: 420px) {
        .background {
            background-image: url('/images/header--sm.jpg');
        }
    }

    @media (min-width: 768px) {
        .background {
            background-image: url('/images/header.jpg');
        }
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
</style>
