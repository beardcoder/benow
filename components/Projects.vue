<template>
    <section id="projects" class="projects">
        <Shape direction="right" />
        <header class="projectsHeader">
            <h2>
                Projekte und Snippets die mir und vielleicht auch dir helfen
                können.
            </h2>
            <p>
                Hast du dich schon einmal gefragt wie Manche Menschen so schnell
                Programmieren können? Oder fehlt dir
                Inspiration zu einem kleinen Bereich deiner Seite?
            </p>
            <p>Hier findest du alles, was einem Das Leben leichter macht 😊</p>
            <p>
                Meine kleine Snippet Datenbank wird Stetig erweitert und
                überarbeitet, da ich sie Selbst jeden Tag
                Produktiv nutze. Wenn du einen Fehler findest oder etwas
                verbessern kannst dann nur her damit.
            </p>
        </header>
        <div id="repositories">
            <GithubList :items="repos"
                        link-text="zum Repo"
                        title="Repositories" />
        </div>
        <div id="snippets" class="snippets">
            <GithubList :items="snippets"
                        gist
                        link-text="zum Snippet"
                        title="Snippets" />
        </div>
    </section>
</template>

<script>
    import { mapState } from 'vuex';
    import GithubList from '~/components/GithubList.vue';
    import Shape from '~/components/Shape.vue';

    export default {
        name: 'Projects',
        components: { GithubList, Shape },
        computed: {
            ...mapState({
                repos: (state) => state.repos,
                snippets: (state) => state.snippets,
            }),
        },
    };
</script>

<style scoped>
    .projects {
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 150px;
        position: relative;
    }

    .projectsHeader {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        padding: 1rem;
    }

    .snippets {
        margin-top: 150px;
    }

    @media (min-width: 40em) {
        .projectsHeader {
            text-align: center;
        }
    }
</style>
