<template>
    <div class="github">
        <h3>{{title}}</h3>
        <ul class="github__list">
            <template v-for="(item, i) in data">
                <li data-aos="zoom-in" class="github__item" v-bind:key="i" v-if="i < 3 || showAll">
                    <div v-if="!gist">
                        <h4>{{ item.full_name }}</h4>
                        <p>{{ item.description }}</p>
                    </div>
                    <h4 v-else>{{ item.description }}</h4>
                    <a
                        :class="{'github__link': true,'github__link--secondary': gist}"
                        v-bind:href="item.html_url"
                        target="_blank"
                    >{{linkText}}</a>
                </li>
            </template>
        </ul>
        <div style="text-align: center;">
            <button class="github__toggle" v-on:click="showAll = !showAll">
                <span v-if="!showAll">Alle anzeigen</span>
                <span v-else>wieder ausblenden</span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GithubList',
        props: {
            data: Array,
            linkText: String,
            title: String,
            gist: Boolean,
        },
        data() {
            return {
                showAll: false,
            };
        },
    };
</script>

<style scoped lang="postcss">
    .github {
        margin-top: 50px;

        h3 {
            text-align: center;
            margin-bottom: 0;
        }
    }

    .github__item,
    .github__list {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .github__list {
        display: flex;
        flex-flow: row wrap;
        margin-left: -1rem;
        margin-right: -1rem;
        padding: 1rem;
    }

    .github__item {
        background: #232629;
        box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.5);
        margin: 1rem;
        min-width: calc((100% / 1) - 2rem);
        max-width: calc((100% / 1) - 2rem);
        padding: 1rem;
        box-sizing: border-box;

        @media (min-width: 40em) {
            min-width: calc((100% / 2) - 2rem);
            max-width: calc((100% / 2) - 2rem);
        }

        @media (min-width: 60em) {
            min-width: calc((100% / 3) - 2rem);
            max-width: calc((100% / 3) - 2rem);
        }
    }

    h4 {
        text-overflow: ellipsis;

        /* Required for text-overflow to do anything */
        white-space: nowrap;
        overflow: hidden;
    }

    .github__toggle {
        background: transparent;
    }

    .github__link,
    .github__toggle {
        margin-top: 1rem;
        display: inline-block;
        padding: 5px 30px;
        text-transform: uppercase;
        border: 4px solid;
        border-image: linear-gradient(135deg, #f03f32 0%, #360940 100%);
        border-image-slice: 4;
        text-decoration: none;
        color: #fff;
        font-weight: 700;

        &--secondary {
            border-image: linear-gradient(135deg, #32f0d1 0%, #104f98 100%);
            border-image-slice: 4;
        }
    }
</style>
