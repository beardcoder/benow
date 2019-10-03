<template>
    <section id="about-me" class="personal">
        <script type="application/ld+json" v-html="schema" />
        <Shape direction="left" />
        <h2 class="header">
            Mein Fokus meine Leidenschaft und ist auf die Benutzer Erfahren (User Expiriance)
            gerichtet
        </h2>

        <div class="wrapper">
            <div v-in-viewport.once class="personalImageWrapper">
                <img
                    v-lazy="require('~/assets/images/markus_sommer.jpg?webp')"
                    :src="require('~/assets/images/markus_sommer.jpg?sqip')"
                    alt="Markus Sommer"
                    title="Bild von Markus Sommer"
                    height="420"
                    width="420"
                    class="personalImage"
                />
            </div>
            <div class="personalContent">
                <h3>Webentwickler, Frontend Artist und Designer</h3>
                <p>
                    Brauchst du Hilfe z. B.
                    <strong>deine Website in neuem Glanz</strong>
                    erstrahlen zu lassen? Oder einfach nur mal einen Tipp wie du am besten eine
                    <strong>Sitemap einrichtest?</strong>
                </p>
                <p>
                    Dann melde dich bei mir. Ich stehe gerne mit Rat und Tat zur Seite.
                </p>
                <ul class="personalSkills">
                    <Skill :value="90" title="CSS" />
                    <Skill :value="95" title="HTML" />
                    <Skill :value="70" title="JavaScript" />
                    <Skill :value="80" title="PHP" />
                    <Skill :value="60" title="Vue" />
                    <Skill :value="70" title="Docker" />
                </ul>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';
    import Shape from '~/components/Shape.vue';
    import Skill from '~/components/Skill.vue';

    @Component({
        components: {
            Shape,
            Skill,
        },
    })
    export default class Personal extends Vue {
        schema = `{
                        "@context": "http://schema.org",
                        "@type": "Person",
                        "name": "Markus Sommer",
                        "url": "http://www.creativeworkspace.de",
                        "jobTitle": "Frontend Developer",
                        "gender": "male",
                        "image": "${require('~/assets/images/markus_sommer.jpg?webp')}",
                        "sameAs": [
                            "https://github.com/beardcoder",
                            "https://twitter.com/beardcoder",
                            "https://forge.typo3.org/users/41461",
                            "https://www.xing.com/profile/Markus_Sommer30",
                            "https://www.linkedin.com/in/markus-sommer-9040649b/"
                        ]
                    }`;
    }
</script>

<style scoped>
    .personal {
        padding-right: 1rem;
        padding-left: 1rem;
        position: relative;
        margin-top: 150px;
    }

    .personalImage {
        position: relative;
    }

    .personalImageWrapper {
        max-width: 420px;
        display: inline-block;
        position: relative;
        align-self: flex-start;
        margin-bottom: 20px;
    }

    .personalImageWrapper:after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 20px;
        bottom: 20px;
        left: 40px;
        right: -40px;
        border: 0 solid;
        border-image: linear-gradient(135deg, #f03f32 0%, #360940 100%);
        border-image-slice: 5;
        transition: border-width 0.6s linear;
    }

    .personalImageWrapper.in-viewport:after {
        border-width: 5px;
    }

    .personalSkills {
        list-style: none;
        margin: 60px 0 0 0;
        padding: 0;
    }

    .header {
        text-align: center;
        max-width: 900px;
        margin: auto;
        margin-bottom: 50px;
    }

    @media (min-width: 768px) {
        .personalContent {
            max-width: 750px;
            margin-left: 150px;
        }

        .personal {
            margin-top: 250px;
            max-width: 1440px;
            margin-left: auto;
            margin-right: auto;
        }

        .wrapper {
            display: flex;
            flex-flow: row;
        }
    }
</style>
