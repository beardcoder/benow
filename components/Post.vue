<template>
    <card v-if="post" class="article">
        <div v-if="post.fields.image" class="image">
            <img
                v-lazy="`${post.fields.image.fields.file.url}?fm=webp&w=600&h=337`"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAFRCAQAAAACiBsCAAADSklEQVR42u3UMQ0AAAzDsJU/6SEogEo2hBzJAYyIBIBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhAYYlAWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBVA8IDABUgzSsTgAAAAASUVORK5CYII="
                class="articleImage"
                alt="Article image"
                width="600"
                height="337"
            />
        </div>
        <div class="body">
            <h4>{{ post.fields.headline }}</h4>
            <time class="articleTime" :datetime="post.sys.createdAt">
                {{ new Date(post.sys.createdAt).toLocaleDateString() }}
            </time>
            <p class="description">{{ post.fields.description }}</p>
        </div>
        <div class="footer">
            <nuxt-link
                :prefetch="false"
                :to="{ name: 'blog-slug', params: { slug: post.fields.slug } }"
                class="btn"
            >
                Lesen
            </nuxt-link>
        </div>
    </card>
</template>
<script lang="ts">
    import { createComponent } from '@vue/composition-api';
    import { IPost } from '@/types/contentful';

    export default createComponent({
        name: 'Post',
        components: {
            Card: () => import('@/components/Card.vue'),
        },
        props: {
            post: {
                type: Object as () => IPost,
                default: () => {},
            },
        },
    });
</script>
<style scoped>
    @import '../assets/css/variables.css';

    h4 {
        margin-bottom: 0;
    }

    time {
        font-size: 0.8rem;
        margin-bottom: 1.5rem;
    }

    .article {
        opacity: 1;
        transition: opacity 0.5s, transform 0.8s;
    }

    .below-viewport {
        opacity: 0;
        transform: scale3d(0.1, 0.1, 0.1);
    }

    .article.in-viewport {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }

    .articleTime {
        color: var(--color__font--secondary);
    }

    .image {
        position: relative;
        padding-bottom: 56.25%;
        margin-top: -1rem;
        margin-left: -1rem;
        margin-right: -1rem;
    }

    .articleImage {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .body {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .footer {
        margin-top: 1rem;
    }

    .description {
        font-style: italic;
    }
</style>
