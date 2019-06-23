<template>
    <ul class="repos">
        <template v-for="repo in repos.data">
            <li class="repo" v-bind:key="repo.id" v-if="repo.fork === false">
                <h4>{{ repo.name }}</h4>
                <p>{{ repo.description }}</p>
                <a class="repo__link" v-bind:href="repo.html_url" target="_blank">zum Repo</a>
            </li>
        </template>
    </ul>
</template>

<script>
    import Octokit from '@octokit/rest';

    export default {
        name: 'Repos',
        data() {
            return {
                repos: this.getRepos(),
            };
        },
        methods: {
            async getRepos() {
                const clientWithAuth = new Octokit({
                    auth: 'af546dac1c7586e645262865beea708d6290c12f',
                });

                this.repos = await clientWithAuth.repos.listForUser({
                    username: 'beardcoder',
                });
            },
        },
    };
</script>

<style scoped>
    .repo,
    .repos {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .repos {
        display: flex;
        flex-flow: row wrap;
    }

    .repo {
        background: #09090b;
        box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.50);
        min-width: 30%;
        max-width: 30%;
        margin: 1.5%;
        padding: 1rem;
        box-sizing: border-box;
    }

    .repo__link {
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
