import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import * as React from 'react';
import Blog from '~/components/Blog';
import Contact from '~/components/Contact';
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

const IndexPage: NextPage<Props> = ({ repos, snippets, posts }) => {
    return (
        <Layout>
            <NextSeo 
                title='Moderne Web Technologieren, Design und Frontendartist 🚀 — Markus Sommer' 
                description='Persönliche Webseite von Markus Sommer ein Entwickler für moderne Web Technologien, Design und Frontend'
                canonical="https://creativeworkspace.de/"
            />
            <div className='container'>
                <PageHeader />
                <Contact />
                <main className='main'>
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
    const articles = require(`../.content/blog/articles.json`);

    return Promise.all(
        articles.map(async (slug: string) => {
            const json = await import(`../.content/blog/${slug}.json`);
            return { ...json };
        })
    );
};

IndexPage.getInitialProps = async () => {
    const repos = await require(`../.content/github/repos.json`);
    const snippets = await require(`../.content/github/snippets.json`);
    const posts = await importPosts();

    return { repos, snippets, posts };
};

export default IndexPage;
