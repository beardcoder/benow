export default () => {
    // https://webpack.js.org/guides/dependency-management/#requirecontext
    const articles = require('@/.content/blog/articles.json');

    return articles.map((slug: string) => {
        const json = require(`@/.content/blog/${slug}.json`);
        return { ...json };
    });
};
