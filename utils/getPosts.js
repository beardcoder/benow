export default () => {
    const files = require.context('../content/posts', true, /\.md$/);
    const posts = [];
    files.keys().forEach(async function(key) {
        const slug = key.replace('./', '').replace('.md', '');
        const post = await require(`../content/posts/${slug}.md`);
        post.attributes.slug = slug;
        posts.push(post);
    });
    return posts;
};
