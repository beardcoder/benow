<template>
    <fragment>
        <page-header />
        <main>
            <personal />
            <projects />
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
    });
</script>

