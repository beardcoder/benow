import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import * as React from 'react';
import Blog from '~/src/components/Blog';
import Contact from '~/src/components/Contact';
import Footer from '~/src/components/Footer';
import getPosts from '~/src/helper/getPosts';

import PageHeader from '~/src/components/Header';
import Layout from '~/src/components/Layout';
import Personal from '~/src/components/Personal';
import Projects from '~/src/components/Projects';
import reposJson from '~/.content/github/repos.json';
import snippetsJson from '~/.content/github/snippets.json';

type Props = {
    posts?: any;
};

const IndexPage: NextPage<Props> = ({ posts }) => {
    return (
        <Layout>
            <NextSeo
                title='Moderne Web Technologieren, Design und Frontendartist 🚀 — Markus Sommer'
                description='Persönliche Webseite von Markus Sommer ein Entwickler für moderne Web Technologien, Design und Frontend'
                canonical='https://creativeworkspace.de/'
            />
            <div className='container'>
                <PageHeader />
                <Contact />
                <main className='main'>
                    <Personal />
                    <Projects repos={reposJson} snippets={snippetsJson} />
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

IndexPage.getInitialProps = () => {
    const posts = getPosts();
    return { posts };
};

export default IndexPage;
