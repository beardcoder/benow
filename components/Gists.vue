<template>
    <ul class="gists">
        <template v-for="gist in gists.data">
            <li class="gist" v-bind:key="gist.id">
                <h4>{{ gist.description }}</h4>
                <a class="gist__link" v-bind:href="gist.html_url" target="_blank">zum Repo</a>
            </li>
        </template>
    </ul>
</template>

<script>
    import Octokit from '@octokit/rest';

    export default {
        name: 'Gists',
        data() {
            return {
                gists: this.getGists(),
            };
        },
        methods: {
            async getGists() {
                const clientWithAuth = new Octokit({
                    auth: 'af546dac1c7586e645262865beea708d6290c12f',
                });

                this.gists = await clientWithAuth.gists.listPublicForUser({
                    username: 'beardcoder',
                });
            },
        },
    };
</script>

<style scoped>
    .gist,
    .gists {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .gists {
        display: flex;
        flex-flow: row wrap;
    }

    .gist {
        background: #09090b;
        box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.50);
        min-width: 30%;
        max-width: 30%;
        margin: 1.5%;
        padding: 1rem;
        box-sizing: border-box;
    }

    .gist__link {
        margin-top: 1rem;
        display: inline-block;
        padding: 5px 30px;
        text-transform: uppercase;
        border: 4px solid;
        border-image: linear-gradient(135deg, #32f0d1 0%, #104f98 100%);
        border-image-slice: 4;
        text-decoration: none;
        color: #ffffff;
        font-weight: 700;
    }
</style>
