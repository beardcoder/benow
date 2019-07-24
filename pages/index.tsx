import * as React from 'react';
import Layout from '../components/Layout/Layout';
import { NextPage } from 'next';
import PageHeader from '../components/Header/Header';
import PagePersonal from '../components/Personal/Personal';
import { GithubItem } from '../interfaces';
import { findAllRepos, findAllGists } from '../utils/github-api';
import PageProjects from '../components/Projects/Projects';
import PageFooter from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

type Props = {
    repos: GithubItem[];
    gists: GithubItem[];
};

const IndexPage: NextPage<Props> = ({ repos, gists }) => (
    <Layout>
        <div className="app">
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
            <main className="main">
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

    // @ts-ignore
    const repos: GithubItem[] = await findAllRepos();

    // @ts-ignore
    const gists: GithubItem[] = await findAllGists();

    return { repos, gists };
};

export default IndexPage;
