<template>
    <div class="github">
        <h3>{{title}}</h3>
        <ul class="github__list">
            <template v-for="item in data">
                <li data-aos="zoom-in" class="github__item" v-bind:key="item.id">
                    <div v-if="item.full_name">
                        <h4>{{ item.full_name }}</h4>
                        <p>{{ item.description }}</p>
                    </div>
                    <h4 v-else>{{ item.description }}</h4>
                    <a
                        :class="{'github__link': true,'github__link--secondary': secondary}"
                        v-bind:href="item.html_url"
                        target="_blank"
                    >{{linkText}}</a>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'GithubList',
        props: {
            data: Array,
            linkText: String,
            secondary: Boolean,
            title: String,
        },
    };
</script>

<style scoped lang="scss">
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
        background: #222225;
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

    .github__link {
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
