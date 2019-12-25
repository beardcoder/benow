import { NextPage } from 'next';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '~/components/Layout';

import css from './[slug].module.css';

type Props = {
    post?: any;
};

// @ts-ignore
const Post: NextPage<Props> = ({ post }) => {
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <div className="container">
                <div className={css.main}>
                    <article className={css.article}>
                        <h1>{post.fields.headline}</h1>
                        <div>
                            Veröffentlicht am
                            <time dateTime={post.sys.createdAt}>
                                {new Date(
                                    post.sys.createdAt
                                ).toLocaleDateString()}
                            </time>
                            von Markus Sommer
                            <br />
                            Letzte Änderung
                            <time dateTime="post.sys.updatedAt">
                                {new Date(
                                    post.sys.updatedAt
                                ).toLocaleDateString()}
                            </time>
                        </div>
                        <p className="description">{post.fields.description}</p>
                        <div>
                            <ReactMarkdown source={post.fields.articleBody} />
                        </div>
                    </article>
                </div>
            </div>
        </Layout>
    );
};

// @ts-ignore
Post.getInitialProps = async ({ query }) => {
    const { slug } = query;
    const post = await import(`~/.contentful/blog/${slug}.json`).catch(
        () => null
    );
    return { post };
};

export default Post;
