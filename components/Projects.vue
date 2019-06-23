<template>
    <section class="projects">
        <header class="projects__header">
            <h3>Projekte</h3>
            <p>Hast du dich schon einmal gefragt wie Manche Menschen so schnell Programmieren können?
                Oder fehlt dir Inspiration zu einem kleinen Bereich deiner Seite?</p>
            <p>Hier findest du alles, was einem Das Leben leichter macht 😊</p>
            <p>Meine kleine Snippet Datenbank wird Stetig erweitert und überarbeitet,
                da ich sie Selbst jeden Tag Produktiv nutze. Wenn du einen Fehler findest oder etwas verbessern
                kannst dann nur her damit.</p>
        </header>
        <Repos />
        <Gists />
        <DesignShapeRight />
    </section>
</template>
<script>
    import Repos from './Repos';
    import Gists from './Gists';
    import DesignShapeRight from './DesignShapeRight';

    export default {
        name: 'Projects',
        components: {
            Repos,
            Gists,
            DesignShapeRight,
        },
    };
</script>

<style lang="scss">
    .projects {
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 150px;
        position: relative;
    }

    .projects__header {
        text-align: center;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
