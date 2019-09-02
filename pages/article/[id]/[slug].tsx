import globalStyles from '~/components/Layout/Layout.css';
import Layout from '~/components/Layout/Layout';
import { NextPage } from 'next';
import PageHeader from '~/components/Header/Header';
import { Article } from '~/interfaces';
import { fetchArticle } from '~/utils/blog';
import PageFooter from '~/components/Footer/Footer';
import Navigation from '~/components/Navigation/Navigation';
import { NextSeo } from 'next-seo';
import { person, openGraphPerson } from '~/utils/schema-data';
import 'sanitize.css';

type Props = {
    article: Article;
};

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
            openGraph={openGraphPerson()}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={person()} />
        <div className={globalStyles.app}>
            <Navigation
                items={[
                    {
                        name: 'Über mich',
                        link: '#about-me',
                    },
                    {
                        name: 'Projekte',
                        link: '#projects',
                    },
                ]}
            />
            <PageHeader />
            <main className={globalStyles.main}>
                <h1>{article.headline}</h1>
            </main>
            <PageFooter />
        </div>
    </Layout>
);

ArticlePage.getInitialProps = async ({ query }) => {
    // Example for including initial props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    let article: Article;

    const id: number = Number(query.id);

    if (!Number.isNaN(id)) {
        article = await fetchArticle(id).then((res) => {
            return res.data;
        });
    } else {
        article = {
            id: 0,
            author: '',
            datePublished: '',
            description: '',
            headline: '',
            slug: '',
        };
    }
    return { article };
};

export default ArticlePage;
