import DirectusSDK from '@directus/sdk-js';

export function blog() {
    const client = new DirectusSDK({
        url: 'https://api.creativeworkspace.de',
        project: '_',
    });

    const articles = client.getItems('article', {
        fields: 'headline.*,author.*,description.*,articlebody.*,slug.*,image.*,id',
    });
    return articles;
};

