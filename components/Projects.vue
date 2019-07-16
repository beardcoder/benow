<template>
    <section class="projects">
        <header class="projects__header">
            <h2>Projekte</h2>
            <p>
                Hast du dich schon einmal gefragt wie Manche Menschen so schnell Programmieren können?
                Oder fehlt dir Inspiration zu einem kleinen Bereich deiner Seite?
            </p>
            <p>Hier findest du alles, was einem Das Leben leichter macht 😊</p>
            <p>
                Meine kleine Snippet Datenbank wird Stetig erweitert und überarbeitet,
                da ich sie Selbst jeden Tag Produktiv nutze. Wenn du einen Fehler findest oder etwas verbessern
                kannst dann nur her damit.
            </p>
        </header>
        <div id="repos">
            <github-list :data="github.repos" linkText="zum Repo" title="Repositories" />
        </div>
        <div id="snippets">
            <github-list :data="github.gists" linkText="zum Snippet" title="Snippets" gist />
        </div>
        <design-shape />
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { mapGetters } from 'vuex';

    @Component({
        components: {
            GithubList: () => import('./GithubList.vue'),
            DesignShape: () => import('./DesignShape.vue'),
        },
        computed: mapGetters({
            github: 'github/get',
        }),
        mounted() {
            this.$store.dispatch('github/fetch');
        },
    })
    export default class Projects extends Vue {}
</script>

<style lang="postcss" scoped>
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

        @media (min-width: 40em) {
            text-align: center;
        }
    }
</style>
