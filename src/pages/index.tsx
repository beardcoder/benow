import { NextSeo } from 'next-seo';
import * as React from 'react';
import Blog from '~/src/components/Blog';
import Contact from '~/src/components/Contact';
import Footer from '~/src/components/Footer';
import getPosts from '~/src/helper/getPosts';
import PageHeader from '~/src/components/Header';
import Personal from '~/src/components/Personal';
import Projects from '~/src/components/Projects';
import reposJson from '~/.content/github/repos.json';
import snippetsJson from '~/.content/github/snippets.json';
import { GetStaticProps } from 'next';
import LazyHydrate from 'react-lazy-hydration';

function IndexPage({ posts }: any) {
    return (
        <>
            <NextSeo
                title='Moderne Web Technologieren, Designer und Frontend Artist 🚀 — Markus Sommer'
                description='Persönliche Webseite von Markus Sommer ein Entwickler für moderne Web Technologien, Design und Frontend'
                canonical='https://www.creativeworkspace.de/'
            />
            <div className='container'>
                <PageHeader />
                <Contact />
                <main className='main'>
                    <Personal />
                    <Blog posts={posts} />
                    <LazyHydrate ssrOnly>
                        <Projects repos={reposJson} snippets={snippetsJson} />
                    </LazyHydrate>
                </main>
                <LazyHydrate ssrOnly>
                    <Footer />
                </LazyHydrate>
            </div>
            <style jsx>{`
                .container {
                    position: relative;
                    overflow-x: hidden;
                }

                .main {
                    position: relative;
                    z-index: 20;
                    overflow: hidden;
                    padding-bottom: 100px;
                }
            `}</style>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = getPosts();
    return {
        props: {
            posts,
        },
    };
};

export default IndexPage;
