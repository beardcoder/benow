<template>
    <fragment>
        <page-header />
        <main class="main">
            <personal />
            <projects :github="github" />
        </main>
        <page-footer />
    </fragment>
</template>

<script lang="ts">
    import PageHeader from '../components/Header.vue';
    import PageFooter from '../components/Footer.vue';
    import Personal from '../components/Personal.vue';
    import Projects from '../components/Projects.vue';
    import Vue from 'vue';

    export default Vue.extend({
        components: {
            PageHeader,
            Projects,
            Personal,
            PageFooter,
        },
        data() {
            return {
                github: null,
            };
        },
        async fetch({ store }) {
            let gists = await store.dispatch('github/fetchGists');
            store.commit('github/addGists', gists);

            let repos = await store.dispatch('github/fetchRepos');
            store.commit('github/addRepos', repos);
        },
    });
</script>

