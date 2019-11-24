<template>
    <div class="contactMe">
        <a href="mailto:creativeworkspace@sommer-online.xyz">
            <vue-typed-js :strings="['Scheib mich an! <br /> Frong kost nix.']">
                <div class="contactMe__message typing"></div>
            </vue-typed-js>
            <div class="contactMe__image">
                <img
                    v-lazy="require('~/assets/images/markus_sommer--square.jpg')"
                    :src="require('~/assets/images/markus_sommer--square.jpg?lqip')"
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
        border-radius: 10px;
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
        height: 80px;
        width: 80px;
        border-radius: 40px;
        overflow: hidden;
        display: inline-block;
        border: 4px solid var(--color__secondary);
        vertical-align: bottom;
    }
</style>
