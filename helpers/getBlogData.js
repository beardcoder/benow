const contentful = require('contentful');
const fs = require('fs');
const path = require('path');
const blogDir = path.resolve('./.contentful/blog');
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js

const client = contentful.createClient({
    space: '22eos54kli61',
    accessToken: 'tpfrb9QLpT370g5_OuEuEMCURteRzZbJ8bX_aqeevxE'
});

const blog = client
    .getEntries({
        content_type: 'post',
        order: '-sys.createdAt'
    })
    .then(response => response)
    .catch(() => {
        console.error({ statusCode: 404, message: 'Blog not found' });
    });

fs.mkdirSync(blogDir, { recursive: true });

blog.then(res => {
    const articles = [];
    for (let item of res.items) {
        const { slug } = item.fields;
        articles.push(slug);
        fs.writeFile(`${blogDir}/${slug}.json`, JSON.stringify(item), function(
            err
        ) {
            if (err) {
                return console.log(err);
            }
            console.log(`The file ${blogDir}/${slug}.json was saved!`);
        });
    }
    fs.writeFile(`${blogDir}/articles.json`, JSON.stringify(articles), function(
        err
    ) {
        if (err) {
            return console.log(err);
        }
        console.log(`The file ${blogDir}/articles.json was saved!`);
    });
});
