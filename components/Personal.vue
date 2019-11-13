<template>
    <section id="about-me" class="personal">
        <Shape direction="left" />
        <h2 class="header">
            Mein Fokus meine Leidenschaft und ist auf die Benutzererfahrung (User Expiriance)
            gerichtet
        </h2>

        <div class="wrapper">
            <div v-in-viewport.once class="personalImageWrapper">
                <img
                    v-lazy="require('~/assets/images/markus_sommer.jpg?webp')"
                    :src="require('~/assets/images/markus_sommer.jpg?sqip')"
                    alt="Markus Sommer"
                    title="Bild von Markus Sommer"
                    height="500"
                    width="667"
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
                    <skill
                        v-for="skill in skills"
                        :key="
                            skill.title
                                .toLowerCase()
                                .replace(/[^\w\s]/g, '')
                                .replace(/[ ]/g, '_')
                        "
                        :value="skill.value"
                        :title="skill.title"
                    />
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    import Shape from '~/components/Shape';
    import Skill from '~/components/Skill';
    import personSchema from '~/utils/schema/person';

    export default {
        components: {
            Shape,
            Skill,
        },

        data() {
            return {
                skills: [
                    { title: 'CSS', value: 90 },
                    { title: 'HTML', value: 95 },
                    { title: 'JavaScript', value: 70 },
                    { title: 'PHP', value: 80 },
                    { title: 'Vue', value: 80 },
                    { title: 'Nuxt (SSR JavaScript)', value: 70 },
                    { title: 'Docker', value: 70 },
                ],
            };
        },

        jsonld() {
            return personSchema;
        },
    };
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
        border-image: linear-gradient(
            135deg,
            var(--color__primary) 0%,
            var(--color__primary--dark) 100%
        );
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
