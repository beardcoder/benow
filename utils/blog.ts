import DirectusSDK from '@directus/sdk-js';
const client = new DirectusSDK({
    url: 'https://api.creativeworkspace.de/',
    project: '_',
});

export async function fetchAllArticles() {
    return await client.getItems('article');
}

export async function fetchArticle(id: number) {
    return await client.getItem('article', id);
}
