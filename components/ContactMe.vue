<template>
    <div ref="contactMe" class="contactMe" :class="{ 'contactMe--fold': data.hidden }">
        <a href="mailto:creativeworkspace@sommer-online.xyz">
            <div class="contactMe__message">
                <div class="contactMe__text">
                    Scheib mich an!
                    <br />
                    Frong kost nix.
                </div>
            </div>
            <div class="contactMe__image">
                <img
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
    import { createComponent, onMounted, reactive } from '@vue/composition-api';

    export default createComponent({
        name: 'ContactMe',
        setup() {
            const data = reactive({
                hidden: false,
            });

            function handleScroll() {
                if (window.pageYOffset >= 50) {
                    data.hidden = true;
                } else {
                    data.hidden = false;
                }
            }

            onMounted(() => {
                document.addEventListener('scroll', handleScroll, true);
            });

            return { data };
        },
    });
</script>

<style scoped>
    @import '../assets/css/variables.css';

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
        color: var(--color__font);
        position: relative;
        display: inline-block;
        background-color: #3e3e3e;
        vertical-align: bottom;
        width: 200px;
        transition: width 0.2s 0.1s;
        height: 80px;
        border-radius: 4px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        overflow: hidden;
    }

    .contactMe--fold .contactMe__message {
        width: 0;
    }

    .contactMe__text {
        padding: 10px 20px;
        display: block;
        width: 200px;
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
        border-left: 15px solid #3e3e3e;
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
