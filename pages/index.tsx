import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import * as React from 'react';
import Blog from '~/components/Blog';
import Contact from '~/components/Contact';
import Footer from '~/components/Footer';
import getPosts from '~/helper/getPosts';

import PageHeader from '~/components/Header';
import Layout from '~/components/Layout';
import Personal from '~/components/Personal';
import Projects from '~/components/Projects';
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

IndexPage.getInitialProps = async () => {
    const posts = await getPosts();

    return { posts };
};

export default IndexPage;
