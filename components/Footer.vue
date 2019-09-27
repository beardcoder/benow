<template>
    <footer class="footer">
        <img
            :src="require('~/assets/images/shape.svg')"
            alt="footer shape"
            height="1316"
            width="1442"
            class="footerShape"
        />
        <div class="footerContent">
            <h4>Erstellt mit 🍺 und 🦄 von Markus Sommer</h4>
            <ul class="social">
                <li v-for="(item, index) in socialLinks" :key="index" class="socialItem">
                    <a
                        :href="item.link"
                        :title="item.title"
                        rel="noopener"
                        target="_blank"
                        class="socialLink"
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
                    {
                        icon: require('~/assets/icons/linkedin-in-brands.svg?include'),
                        link: 'https://www.linkedin.com/in/markus-sommer-9040649b/',
                        title: 'linkedin Profil von Markus Sommer',
                    },
                ],
            };
        },
    });
</script>

<style>
    :root {
        --color__footer: #232629;
    }

    .footer {
        position: relative;
        z-index: 10;
        background-color: var(--color__footer);
        padding-top: 150px;
        padding-bottom: 150px;
    }

    .footerShape {
        display: none;
    }

    @media (min-width: 768px) {
        .footerShape {
            display: block;
            position: absolute;
            bottom: 50px;
            min-width: 800px;
            right: -50%;
            z-index: -1;
            transform: rotate(270deg);
        }
    }

    .footerContent {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        z-index: 20;
    }

    .social {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    .socialItem {
        padding: 0;
        margin: 0;
        display: block;
    }

    .socialLink {
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
    }

    .socialLink svg {
        max-width: 100%;
        height: auto;
        z-index: 3;
        position: relative;
    }

    .socialLink svg path {
        fill: #fff;
    }

    .socialLink:before {
        content: '';
        position: absolute;
        border-radius: calc((var(--size) + 8px) / 2);
        top: -4px;
        bottom: -4px;
        left: -4px;
        right: -4px;
        background: linear-gradient(135deg, #f03f32 0%, #360940 100%);
        z-index: 1;
    }

    .socialLink:after {
        content: '';
        position: absolute;
        border-radius: calc((var(--size) + 8px) / 2);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: var(--color__footer);
        z-index: 2;
        transform: scale(1);
        transition: transform 0.3s;
    }

    .socialLink:hover:after {
        transform: scale(0);
    }
</style>
