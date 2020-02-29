import Link from 'next/link';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IPost } from '~/types';

import Button from './Button';
import Card from './Card';
import css from './Post.module.css';

type Props = {
    post: IPost;
};

const Post: React.FunctionComponent<Props> = ({ post }) => {
    return (
        <Card className={css.article}>
            <div className={css.image}>
                <LazyLoadImage
                    src={`${post?.fields?.image?.fields.file.url}?fm=webp&w=600&h=337`}
                    alt='Article Bild'
                    title={post?.fields?.headline}
                    width={600}
                    height={337}
                    className={css.articleImage}
                />
            </div>
            <div className={css.body}>
                <h4>{post.fields?.headline}</h4>
                <time className={css.articleTime} dateTime={post.sys?.createdAt}>
                    {new Date(post?.sys?.createdAt).toLocaleDateString()}
                </time>
                <p className={css.description}>{post.fields?.description}</p>
            </div>
            <div className={css.footer}>
                <Link passHref href='/blog/[slug]' as={`/blog/${post.fields?.slug}`}>
                    <Button>Zum Post</Button>
                </Link>
            </div>
        </Card>
    );
};

export default Post;
