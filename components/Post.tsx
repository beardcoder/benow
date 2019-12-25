import Link from 'next/link';
import React from 'react';
import { IPost } from '~/types';

import Card from './Card';
import css from './Post.module.css';

type Props = {
    post: IPost;
};

const Post: React.FunctionComponent<Props> = ({ post }) => {
    return (
        <Card className={css.article}>
            <div className={css.image}>
                <img
                    src={`${post?.fields?.image?.fields.file.url}?fm=webp&w=600&h=337`}
                    className={css.articleImage}
                    alt="Article image"
                    width="600"
                    height="337"
                />
            </div>
            <div className={css.body}>
                <h4>{post.fields.headline}</h4>
                <time className={css.articleTime} dateTime={post.sys.createdAt}>
                    {new Date(post.sys.createdAt).toLocaleDateString()}
                </time>
                <p className={css.description}>{post.fields.description}</p>
            </div>
            <div className={css.footer}>
                <Link href={`/blog/${post.fields.slug}`}>
                    <a>Zum Post</a>
                </Link>
            </div>
        </Card>
    );
};

export default Post;
