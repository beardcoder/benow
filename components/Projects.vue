<template>
    <section id="projects" class="projects">
        <Shape direction="right" />
        <header class="projects__header">
            <h2>
                Projekte und Snippets die mir und vielleicht auch dir helfen können.
            </h2>
            <p>
                Hast du dich schon einmal gefragt, wie manche Menschen so schnell programmieren
                können? Oder fehlt dir die Inspiration zu einem kleinen Bereich deiner Seite?
            </p>
            <p>Hier findest du alles, was einem das Leben leichter macht 😊</p>
            <p>
                Meine kleine Snippet Datenbank wird stetig erweitert und überarbeitet, da ich sie
                selbst jeden Tag produktiv nutze. Wenn du einen Fehler findest oder etwas verbessern
                kannst, dann nur her damit.
            </p>
        </header>
        <div id="repositories">
            <github-list :items="repos" link-text="zum Repo" title="Repositories" />
        </div>
        <div id="snippets" class="snippets">
            <github-list :items="snippets" gist link-text="zum Snippet" title="Snippets" />
        </div>
    </section>
</template>

<script lang="ts">
    import { createComponent } from '@vue/composition-api';
    import Shape from '@/components/Shape.vue';
    import { IGithubItem } from '~/types';
    import GithubList from '~/components/GithubList.vue';

    export default createComponent({
        components: {
            GithubList,
            Shape,
        },
        props: {
            repos: {
                type: Array as () => IGithubItem[],
                default: () => {},
            },
            snippets: {
                type: Array as () => IGithubItem[],
                default: () => {},
            },
        },
    });
</script>

<style scoped>
    .projects {
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 150px;
        position: relative;
    }

    .projects__header {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        padding: 1rem;
    }

    .snippets {
        margin-top: 100px;
    }

    @media (min-width: 40em) {
        .projects__header {
            text-align: center;
        }
    }
</style>
