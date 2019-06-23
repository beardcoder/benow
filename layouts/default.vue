<template>
    <nuxt />
</template>

<style lang="scss">
    @import "~normalize-scss/sass/normalize/import-now";
    @import url('https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700|Roboto+Slab:300,400&display=swap');

    //font-family: 'Roboto Slab', serif;
    //font-family: 'Quicksand', sans-serif;

    html,
    body {
        font-size: 18px;
        line-height: 1.5;
        font-family: 'Titillium Web', sans-serif;
        font-weight: 300;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #141618;
        height: 100%;
        color: #ffffff;
        width: 100%;
    }

    body {
        overflow-x: hidden;
    }

    strong {
        font-weight: 700;
    }

    h1 {
        font-family: 'Roboto Slab', serif;
        font-size: responsive 24px 50px; /* min-size, max-size */
        margin-top: 0;
    }

    h2 {
        font-family: 'Roboto Slab', serif;
        font-size: responsive 22px 34px; /* min-size, max-size */
        margin-top: 0;
    }

    h3 {
        font-family: 'Roboto Slab', serif;
        font-size: responsive 20px 30px; /* min-size, max-size */
        font-weight: 300;
        margin-top: 0;
    }

    h4 {
        font-family: 'Roboto Slab', serif;
        font-size: responsive 18px 20px; /* min-size, max-size */
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 1rem;
    }

    h2 + h3 {
        margin-top: -30px;
    }

    img {
        max-width: 100%;
        height: auto;
    }

</style>
