<template>
    <footer class="footer">
        <img
            class="footer__shape"
            alt="header shape"
            src="@/assets/images/shape.svg"
            width="1442"
            height="1316"
        />
        <div class="footer__content">
            <h4>Erstellt mit 🍺 und 🦄 von Markus Sommer</h4>
            <ul class="social">
                <li class="social__item" v-for="(item, i) in socialLinks" :key="i">
                    <a
                        class="social__link"
                        :title="item.title"
                        :href="item.link"
                        v-html="item.icon"
                    ></a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        data() {
            return {
                socialLinks: [
                    {
                        icon: require('~/assets/icons/github-brands.svg?include'),
                        link: 'https://github.com/beardcoder',
                        title: 'Github Profil von Markus Sommer',
                    },
                    {
                        icon: require('~/assets/icons/twitter-brands.svg?include'),
                        link: 'https://twitter.com/beardcoder',
                        title: 'Twitter Profil von Markus Sommer',
                    },
                    {
                        icon: require('~/assets/icons/neos-brands.svg?include'),
                        link: 'https://www.neos.io/',
                        title: 'Neos Website',
                    },
                    {
                        icon: require('~/assets/icons/typo3-brands.svg?include'),
                        link: 'https://forge.typo3.org/users/41461',
                        title: 'TYPO3 Forge',
                    },
                    {
                        icon: require('~/assets/icons/xing-brands.svg?include'),
                        link: 'https://www.xing.com/profile/Markus_Sommer30',
                        title: 'Xing Profil von Markus Sommer',
                    },
                ],
            };
        },
    });
</script>


<style lang="postcss">
    :root {
        --color__footer: #232629;
    }

    .footer {
        background-color: var(--color__footer);
        margin-top: 100px;
        padding-top: 150px;
        padding-bottom: 150px;
        position: relative;
    }

    .footer__shape {
        position: absolute;
        bottom: 50px;
        min-width: 800px;
        right: -50%;
        z-index: -1;
        transform: rotate(270deg);
    }

    .footer__content {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    .social {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    .social__item {
        padding: 0;
        margin: 0;
        display: block;
    }

    .social__link {
        --size: 60px;

        box-sizing: border-box;
        padding: 15px;
        width: var(--size);
        height: var(--size);
        display: block;
        text-decoration: none;
        border-image-slice: 4;
        margin: 15px;
        position: relative;
        border-radius: calc(var(--size) / 2);

        svg {
            max-width: 100%;
            height: auto;
            z-index: 3;
            position: relative;
        }

        svg path {
            fill: #fff;
        }
    }

    .social__link:before,
    .social__link:after {
        content: '';
        position: absolute;
        border-radius: calc((var(--size) + 8px) / 2);
    }

    .social__link:before {
        top: -4px;
        bottom: -4px;
        left: -4px;
        right: -4px;
        background: linear-gradient(135deg, #f03f32 0%, #360940 100%);
        z-index: 1;
    }

    .social__link:after {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: var(--color__footer);
        z-index: 2;
    }
</style>
