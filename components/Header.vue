<template>
    <header
        class="header"
        :style="{ backgroundImage: `url(${require('@/assets/images/header.jpg?webp')})` }"
    >
        <div class="header_content">
            <h1>
                Webentwicker
                <br />Frontend Ingenieur
                <br />Designer
                <br />
            </h1>
            <h3>Innovation, Inspiration, Technik und Leidenschaft</h3>
            <img
                class="header_shape"
                alt="header shape"
                src="@/assets/images/shape.svg"
                width="1442"
                height="1316"
            />
        </div>
    </header>
</template>

<style lang="scss">
    @function strip-unit($value) {
        @return $value / ($value * 0 + 1);
    }

    .header {
        display: flex;
        min-height: 500px;
        height: 90vh;
        max-height: 1200px;
        background-size: 1200px;
        background-position: center center;
        position: relative;

        @media (min-width: 768px) {
            background-size: cover;
        }
    }

    .header_content {
        width: 100%;
        margin: auto auto 50px;
        padding-left: 1rem;
        padding-right: 1rem;
        position: relative;
        max-width: 1440px;

        @media (min-width: 768px) {
            margin-bottom: 100px;
        }

        h1 {
            position: relative;
            z-index: 2;
            display: inline-block;
            text-align: left;

            @media (min-width: 500px) {
                text-align: right;
            }
        }

        h3 {
            margin-bottom: 0;
            position: relative;
            z-index: 2;
            text-align: left;
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.6);
        }
    }

    .header_shape {
        max-width: none;
        position: absolute;
        width: calc(1000px + 442 * ((100vw - 420px) / 860));
        top: calc(-100px + -200 * ((100vw - 420px) / 860));
        left: calc(-500px + -140 * ((100vw - 420px) / 860));
    }
</style>
