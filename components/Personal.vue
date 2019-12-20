<template>
    <section id="about-me" class="personal">
        <shape direction="left" />
        <h2 class="header">
            Mein Fokus und meine Leidenschaft sind auf die Benutzererfahrung (User Experience)
            gerichtet
        </h2>

        <div class="wrapper">
            <div v-in-viewport.once class="personalImageWrapper">
                <img
                    v-lazy="'/images/markus_sommer.jpg'"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAKbCAQAAACplbATAAAFkUlEQVR42u3TAQ0AAAzCsOPf9H1AK2HJckC9SABGB4wOGB0wOmB0wOiA0QGjg9EBowNGB4wOGB0wOmB0wOhgdMDogNEBowNGB4wOGB0wOhgdMDpgdMDogNEBowNGB4wOGB2MDhgdMDpgdMDogNEBowNGB6MDRgeMDhgdMDpgdMDogNHB6IDRAaMDRgeMDhgdMDpgdMDoYHTA6IDRAaMDRgeMDhgdMDoYHTA6YHTA6IDRAaMDRgeMDkYHjA4YHTA6YHTA6IDRAaMDRgejA0YHjA4YHTA6YHTA6IDRweiA0QGjA0YHjA4YHTA6YHQwOmB0wOiA0QGjA0YHjA4YHTA6GB0wOmB0wOiA0QGjA0YHjA5GB4wOGB0wOmB0wOiA0QGjg9EBowNGB4wOGB0wOmB0wOiA0cHogNEBowNGB4wOGB0wOmB0MDpgdMDogNEBowNGB4wOGB2MDhgdMDpgdMDogNEBowNGB4wORgeMDhgdMDpgdMDogNEBo4PRAaMDRgeMDhgdMDpgdMDoYHTA6IDRAaMDRgeMDhgdMDpgdDA6YHTA6IDRAaMDRgeMDhgdjA4YHTA6YHTA6IDRAaMDRgejA0YHjA4YHTA6YHTA6IDRAaOD0QGjA0YHjA4YHTA6YHTA6GB0wOiA0QGjA0YHjA4YHTA6GB0wOmB0wOiA0QGjA0YHjA4YHYwOGB0wOmB0wOiA0QGjA0YHowNGB4wOGB0wOmB0wOiA0cHogNEBowNGB4wOGB0wOmB0MLoEYHTA6IDRAaMDRgeMDhgdMDoYHTA6YHTA6IDRAaMDRgeMDkYHjA4YHTA6YHTA6IDRAaOD0QGjA0YHjA4YHTA6YHTA6IDRweiA0QGjA0YHjA4YHTA6YHQwOmB0wOiA0QGjA0YHjA4YHYwOGB0wOmB0wOiA0QGjA0YHjA5GB4wOGB0wOmB0wOiA0QGjg9EBowNGB4wOGB0wOmB0wOhgdMDogNEBowNGB4wOGB0wOmB0MDpgdMDogNEBowNGB4wOGB2MDhgdMDpgdMDogNEBowNGB6MDRgeMDhgdMDpgdMDogNEBo4PRAaMDRgeMDhgdMDpgdMDoYHTA6IDRAaMDRgeMDhgdMDoYHTA6YHTA6IDRAaMDRgeMDhgdjA4YHTA6YHTA6IDRAaMDRgejA0YHjA4YHTA6YHTA6IDRweiA0QGjA0YHjA4YHTA6YHTA6GB0wOiA0QGjA0YHjA4YHTA6GB0wOmB0wOiA0QGjA0YHjA5GB4wOGB0wOmB0wOiA0QGjA0YHowNGB4wOGB0wOmB0wOiA0cHogNEBowNGB4wOGB0wOmB0MDpgdMDogNEBowNGB4wOGB0wOhgdMDpgdMDogNEBowNGB4wORgeMDhgdMDpgdMDogNEBo4PRAaMDRgeMDhgdMDpgdMDogNHB6IDRAaMDRgeMDhgdMDpgdDA6YHTA6IDRAaMDRgeMDhgdjA4YHTA6YHTA6IDRAaMDRgejSwBGB4wOGB0wOmB0wOiA0QGjg9EBowNGB4wOGB0wOmB0wOhgdMDogNEBowNGB4wOGB0wOhgdMDpgdMDogNEBowNGB4wOGB2MDhgdMDpgdMDogNEBowNGB6MDRgeMDhgdMDpgdMDogNHB6IDRAaMDRgeMDhgdMDpgdMDoYHTA6IDRAaMDRgeMDhgdMDoYHTA6YHTA6IDRAaMDRgeMDkYHjA4YHTA6YHTA6IDRAaMDRgejA0YHjA4YHTA6YHTA6IDRweiA0QGjA0YHjA4YHTA6YHQwOmB0wOiA0QGjA0YHjA4YHTA6GB0wOmB0wOiA0QGjA0YHjA5GB4wOGB0wOmB0wOiA0QGjg9EBowNGB4wOGB0wOmB0wOiA0cHogNEBowNGB4wOGB0wOmB0MDpgdMDogNEBowNGB4wOGB2GPbDYApxDnHzpAAAAAElFTkSuQmCC"
                    lazy="loading"
                    alt="Markus Sommer"
                    title="Bild von Markus Sommer"
                    width="500"
                    height="667"
                    class="personalImage"
                />
            </div>
            <div class="personalContent">
                <h3>Webentwickler, Frontend Artist und Designer</h3>
                <p>
                    Brauchst du Hilfe z. B.
                    <strong>um deine Website in neuem Glanz</strong>
                    erstrahlen zu lassen oder mal einen Tipp wie du eine
                    <strong>Sitemap einrichtest?</strong>
                </p>
                <p>
                    <a href="mailto:creativeworkspace@sommer-online.xyz">
                        Dann melde dich bei mir.
                    </a>
                    Ich stehe gerne mit Rat und Tat zur Seite.
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
<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';
    import { Jsonld } from 'nuxt-jsonld';
    import Shape from '@/components/Shape.vue';
    import Skill from '@/components/Skill.vue';
    import personSchema from '@/utils/schema/person';

    @Jsonld
    @Component({
        components: {
            Shape,
            Skill,
        },
    })
    export default class Personal extends Vue {
        skills = [
            { title: 'CSS', value: 90 },
            { title: 'HTML', value: 95 },
            { title: 'JavaScript', value: 70 },
            { title: 'PHP', value: 80 },
            { title: 'Vue', value: 80 },
            { title: 'Nuxt (SSR JavaScript)', value: 70 },
            { title: 'Docker', value: 70 },
        ];

        jsonld() {
            return personSchema;
        }
    }
</script>

<style scoped>
    @import '../assets/css/variables.css';

    .personal {
        padding-right: 1rem;
        padding-left: 1rem;
        position: relative;
        margin-top: 150px;
    }

    .personalImage[lazy='loading'] {
        filter: blur(5px);
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
        margin: auto auto 50px;
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
