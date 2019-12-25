import { NextPage } from 'next';
import * as React from 'react';
import { reposFetch, snippetsFetch } from '~/api/github';
import Blog from '~/components/Blog';
import Footer from '~/components/Footer';
import { GithubItem } from '~/types';

import PageHeader from '../components/Header';
import Layout from '../components/Layout';
import Personal from '../components/Personal';
import Projects from '../components/Projects';

type Props = {
    repos?: GithubItem[];
    snippets?: GithubItem[];
    posts?: any;
};

// @ts-ignore
const IndexPage: NextPage<Props> = ({ repos, snippets, posts }) => {
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <div className="container">
                <PageHeader />
                <main className="main">
                    <Personal />
                    <Projects repos={repos} snippets={snippets} />
                    <Blog posts={posts} />
                </main>
                <Footer />
            </div>
            <style jsx>{`
                .main {
                    position: relative;
                    z-index: 20;
                    overflow: hidden;
                    padding-bottom: 100px;
                }
            `}</style>
        </Layout>
    );
};

const importPosts = async () => {
    // https://webpack.js.org/guides/dependency-management/#requirecontext
    const articles = require('../.contentful/blog/articles.json');

    return Promise.all(
        articles.map(async (slug: string) => {
            const json = await import(`../.contentful/blog/${slug}.json`);
            return { ...json };
        })
    );
};

// @ts-ignore
IndexPage.getInitialProps = async () => {
    const repos = await reposFetch()
        .then((data: GithubItem[]) => data)
        .catch(e => {
            console.error(e);
        });

    const snippets = await snippetsFetch()
        .then((data: GithubItem[]) => data)
        .catch(e => {
            console.error(e);
        });

    const posts = await importPosts();

    return { repos, snippets, posts };
};

export default IndexPage;
