
declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '*.png' {
    const content: any;
    export default content;
}

declare module '*.jpg' {
    const content: any;
    export default content;
}

// Nuxt 2.9+
declare module '@nuxt/types' {
    import MarkdownIt from 'markdown-it';

    interface Context {
        readonly $md: MarkdownIt
    }
}


declare module 'vue-lazy-hydration'
