import { NextSeo } from 'next-seo';
import { getMinimalPosts } from '@/helper/getPosts';
import reposJson from '@@/.content/github/repos.json';
import snippetsJson from '@@/.content/github/snippets.json';
import { GetStaticProps } from 'next';

import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageHeader from '@/components/Header';
import Personal from '@/components/Personal';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';

function IndexPage({ posts }: any) {
    return (
        <>
            <NextSeo
                title='Moderne Web Technologieren, Designer und Frontend Artist 🚀 — Markus Sommer'
                description='Persönliche Webseite von Markus Sommer ein Entwickler für moderne Web Technologien, Design und Frontend'
                canonical='https://www.creativeworkspace.de/'
            />
            <PageHeader />
            <Contact />
            <main className='main'>
                <Personal />
                <Blog posts={posts} />
                <Projects repos={reposJson} snippets={snippetsJson} />
            </main>
            <Footer />
            <script
                id='CookieDeclaration'
                src='https://consent.cookiebot.com/07ed569b-466e-4e77-92e8-cdea87156613/cd.js'
                type='text/javascript'
                async></script>
            <style jsx>{`
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
