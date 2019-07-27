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

type Props = {
    repos: GithubItem[];
    gists: GithubItem[];
};

const IndexPage: NextPage<Props> = ({ repos, gists }) => (
    <Layout>
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
        repos = await findAllRepos().then((res) => res);
        gists = await findAllGists().then((res) => res);
    }
    return { repos, gists };
};

export default IndexPage;
