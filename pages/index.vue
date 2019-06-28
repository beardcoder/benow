<template>
    <fragment>
        <Header />
        <main>
            <Personal />
            <Projects />
        </main>
    </fragment>
</template>

<script>
    import Header from '../components/Header';
    import Personal from '../components/Personal';
    import Projects from '../components/Projects';

    export default {
        components: {
            Projects,
            Header,
            Personal,
        },
    };
</script>

