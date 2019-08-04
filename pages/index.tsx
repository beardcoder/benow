import * as React from 'react';
import globalStyles from '../components/Layout/Layout.css';
import Layout from '../components/Layout/Layout';
import { NextPage } from 'next';
import PageHeader from '../components/Header/Header';
import PagePersonal from '../components/Personal/Personal';
import { GithubItem } from '../interfaces';
import { findAllRepos, findAllGists } from '../utils/github-api';
import PageProjects from '../components/Projects/Projects';
import PageFooter from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import { NextSeo } from 'next-seo';
import { person, openGraphPerson } from '../utils/schema-data';
import 'sanitize.css';

type Props = {
    repos: GithubItem[];
    gists: GithubItem[];
};

const IndexPage: NextPage<Props> = ({ repos, gists }) => (
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
                <PagePersonal />
                <PageProjects repos={repos} gists={gists} />
            </main>
            <PageFooter />
        </div>
    </Layout>
);

IndexPage.getInitialProps = async () => {
    // Example for including initial props in a Next.js function compnent page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    let repos: GithubItem[] = [];
    let gists: GithubItem[] = [];
    if (!process.browser) {
        repos = await findAllRepos().then((res) => {
            // Only get non forked repos
            const resReduce = res.filter((item: GithubItem | any) => {
                return !item.fork;
            });

            return resReduce.map((item: GithubItem) => {
                return {
                    id: item.id,
                    description: item.description,
                    full_name: item.full_name,
                    html_url: item.html_url,
                };
            });
        });
        gists = await findAllGists().then((res) =>
            res.map((item: GithubItem) => {
                return {
                    id: item.id,
                    description: item.description,
                    html_url: item.html_url,
                };
            }),
        );
    }

    return { repos, gists };
};

export default IndexPage;
