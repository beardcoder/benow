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
                    src={post.data.thumbnail}
                    alt='Article Bild'
                    title={post.data.title}
                    width={600}
                    height={337}
                    className={css.articleImage}
                />
            </div>
            <div className={css.body}>
                <h4>{post.data.title}</h4>
                <time className={css.articleTime} dateTime={post.data.date}>
                    {new Date(post.data.date).toLocaleDateString()}
                </time>
                <p className={css.description}>{post.data.description}</p>
            </div>
            <div className={css.footer}>
                <Link passHref href='/blog/[slug]' as={`/blog/${post.data.slug}/`}>
                    <Button>Zum Post</Button>
                </Link>
            </div>
        </Card>
    );
};

export default Post;
