export async function findArticles() {
    return await fetch(`https://api.creativeworkspace.de/_/items/article`).then(
        (res) => res.json(),
    );
}

export async function findArticle(slug: string) {
    return await fetch(
        `https://api.creativeworkspace.de/_/items/article?single=1&filter[slug]=${slug}`,
    ).then((res) => res.json());
}
