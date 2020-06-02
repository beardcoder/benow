import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import * as React from 'react';
import { getMinimalPosts } from '~/src/helper/getPosts';
import reposJson from '~/.content/github/repos.json';
import snippetsJson from '~/.content/github/snippets.json';
import { GetStaticProps } from 'next';

const Contact = dynamic(() => import('~/src/components/Contact'));
const Footer = dynamic(() => import('~/src/components/Footer'));
const PageHeader = dynamic(() => import('~/src/components/Header'));
const Personal = dynamic(() => import('~/src/components/Personal'));
const Projects = dynamic(() => import('~/src/components/Projects'));
const Blog = dynamic(() => import('~/src/components/Blog'));

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
                    <Projects repos={reposJson} snippets={snippetsJson} />
                </main>
                <Footer />
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
                }
            `}</style>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = getMinimalPosts();
    return {
        props: {
            posts,
        },
    };
};

export default IndexPage;
