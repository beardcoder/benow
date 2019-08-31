import React from 'react';
import Layout from '~/components/Layout/Layout';
import { NextSeo } from 'next-seo';
import globalStyles from '~/components/Layout/Layout.css';
import { NextPage } from 'next';
import { Article } from '~/interfaces';
import { findArticle } from '~/utils/blog';

interface Props {
    article: Article;
}

const ArticlePage: NextPage<Props> = ({ article }) => (
    <Layout>
        <NextSeo
            title="Markus Sommer — moderne Web Technologieren, Design und Frontendartist"
            description="Persönliche Webseite von Markus Sommer ein Entwickler für moderne Web Technologieren, Design und Frontend"
            canonical="https://creativeworkspace.de"
            twitter={{
                handle: '@beardcoder',
                cardType: 'summary_large_image',
            }}
        />
        <div className={globalStyles.app}>
            <main className={globalStyles.main}>
                <h1>{article.headline}</h1>
                <i>{`Written by ${article.author} | ${article.created_on}`}</i>
            </main>
        </div>
    </Layout>
);

ArticlePage.getInitialProps = async (ctx: any) => {
    const article = await findArticle(ctx.query.slug).then((res) => res.data);

    return {
        article,
    };
};

export default ArticlePage;
