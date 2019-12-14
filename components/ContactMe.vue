<template>
    <div class="contactMe">
        <a href="mailto:creativeworkspace@sommer-online.xyz">
            <vue-typed-js :strings="['Scheib mich an! <br /> Frong kost nix.']">
                <div class="contactMe__message typing"></div>
            </vue-typed-js>
            <div class="contactMe__image">
                <img
                    v-lazy="'/images/markus_sommer--square.jpg'"
                    src="/images/markus_sommer--square.jpg"
                    lazy="loading"
                    alt="Markus Sommer"
                    title="Bild von Markus Sommer"
                    height="300"
                    width="300"
                    class="personalImage"
                />
            </div>
        </a>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';

    @Component
    export default class ContactMe extends Vue {}
</script>

<style scoped>
    .contactMe {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 100;
    }

    a {
        display: block;
    }

    .contactMe__message {
        display: inline;
    }

    .typed-element {
        position: relative;
        display: inline-block;
        background-color: #555;
        vertical-align: bottom;
        padding: 10px 20px;
        width: 200px;
        height: 80px;
        border-radius: 4px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    .contactMe__message:before {
        position: absolute;
        right: -15px;
        top: 10px;
        content: '';
        width: 0;
        height: 0;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 15px solid #555;
    }

    .contactMe__image {
        padding: 5px;
        border-radius: 50%;
        overflow: hidden;
        display: inline-block;
        background-image: linear-gradient(
            135deg,
            var(--color__secondary) 0%,
            var(--color__secondary--dark) 100%
        );
        vertical-align: bottom;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    .contactMe__image img {
        height: 75px;
        width: 75px;
        border-radius: 40px;
    }
</style>
