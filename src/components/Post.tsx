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
                    src={post.thumbnail}
                    alt='Article Bild'
                    title={post.title}
                    width={480}
                    height={300}
                    className={css.articleImage}
                />
            </div>
            <div className={css.body}>
                <h4>{post.title}</h4>
                <time className={css.articleTime} dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString()}
                </time>
                <p className={css.description}>{post.description}</p>
            </div>
            <div className={css.footer}>
                <Link passHref href='/blog/[slug]' as={`/blog/${post.slug}/`}>
                    <Button>Zum Post</Button>
                </Link>
            </div>
        </Card>
    );
};

export default Post;
