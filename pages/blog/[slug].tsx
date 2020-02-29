import { NextPage } from 'next';
import { BlogJsonLd, NextSeo } from 'next-seo';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import BackLink from '~/components/BackLink';
import Footer from '~/components/Footer';
import Layout from '~/components/Layout';

import css from './[slug].module.css';

type Props = {
    post?: any;
};

// @ts-ignore
const Post: NextPage<Props> = ({ post }) => {
    return (
        <Layout>
            <>
                <NextSeo
                    title={`${post.fields.headline} — Markus Sommer`}
                    description={post.fields.description}
                    canonical={`https://creativeworkspace.de/blog/${post.slug}`}
                />
                <BlogJsonLd
                    url={`https://creativeworkspace.de/blog/${post.slug}`}
                    title={post.fields.headline}
                    images={[post.fields.image.fields.file.url + '?fm=webp']}
                    datePublished={post.sys.createdAt}
                    dateModified={post.sys.updatedAt}
                    authorName='Markus Sommer'
                    description={post.fields.description}
                />
                <header className={css.header}>
                    <div className={css.headerBackground}>
                        <div role='presentation' className='backgroundImage' />
                        <style jsx>{`
                            .backgroundImage {
                                background-image: url(${post.fields.image.fields.file.url}?fm=webp);
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
                            <h1>{post.fields.headline}</h1>
                            <div>
                                Veröffentlicht am
                                <time dateTime={post.sys.createdAt}>
                                    {new Date(post.sys.createdAt).toLocaleDateString()}
                                </time>
                                von Markus Sommer
                                <br />
                                Letzte Änderung
                                <time dateTime='post.sys.updatedAt'>
                                    {new Date(post.sys.updatedAt).toLocaleDateString()}
                                </time>
                            </div>
                            <p className='description'>{post.fields.description}</p>
                            <ReactMarkdown source={post.fields.articleBody} />
                        </article>
                    </div>
                    <Footer>
                        <BackLink footer />
                    </Footer>
                </div>
            </>
        </Layout>
    );
};

Post.getInitialProps = async ({ query }) => {
    const { slug } = query;
    const post = await import(`~/.content/blog/${slug}.json`).catch(() => null);
    return { post };
};

export default Post;
