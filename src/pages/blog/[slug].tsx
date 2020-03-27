import { BlogJsonLd, NextSeo } from 'next-seo';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import BackLink from '~/src/components/BackLink';
import Footer from '~/src/components/Footer';
import Layout from '~/src/components/Layout';
import matter from 'gray-matter';

import css from './[slug].module.css';
import getPosts from '~/src/helper/getPosts';

// @ts-ignore
function Post({ post }: any) {
    return (
        <Layout>
            <>
                <NextSeo
                    title={`${post.data.title} — Markus Sommer`}
                    description={post.data.description}
                    canonical={`https://creativeworkspace.de/blog/${post.data.slug}`}
                />
                <BlogJsonLd
                    url={`https://creativeworkspace.de/blog/${post.data.slug}`}
                    title={post.data.title}
                    images={[post.data.image]}
                    datePublished={post.data.date}
                    dateModified={post.data.date}
                    authorName='Markus Sommer'
                    description={post.data.description}
                />
                <header className={css.header}>
                    <div className={css.headerBackground}>
                        <div role='presentation' className='backgroundImage' />
                        <style jsx>{`
                            .backgroundImage {
                                background-image: url(${post.data.image});
                                background-position: center center;
                                background-size: cover;
                                position: absolute;
                                top: 0;
                                bottom: 0;
                                left: 0;
                                right: 0;
                                will-change: transform;
                            }
                        `}</style>
                    </div>
                    <BackLink />
                </header>
                <div className='container'>
                    <div className={css.main}>
                        <article className={css.article}>
                            <h1>{post.data.title}</h1>
                            <div>
                                Veröffentlicht am
                                <time dateTime={post.data.date}>
                                    {new Date(post.data.date).toLocaleDateString()}
                                </time>
                                von Markus Sommer
                                <br />
                                Letzte Änderung
                                <time dateTime={post.data.date}>
                                    {new Date(post.data.date).toLocaleDateString()}
                                </time>
                            </div>
                            <p className='description'>{post.data.description}</p>
                            <ReactMarkdown source={post.content} />
                        </article>
                    </div>
                    <Footer>
                        <BackLink footer />
                    </Footer>
                </div>
            </>
        </Layout>
    );
}

export async function getStaticProps({ query }: any) {
    const { slug } = query;
    const content = await import(`~/src/content/posts/${slug}.md`);

    const post: any = matter(content.default);
    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths() {
    const posts = await getPosts();

    console.log(posts);

    return {
        fallback: true,
    };
}

export default Post;
