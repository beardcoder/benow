import Link from 'next/link';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Button from './Button';
import Card from './Card';
import styles from './Post.module.css';

export default function Post({ post }: any) {
    return (
        <Card className={styles.article}>
            <div className={styles.image}>
                <LazyLoadImage
                    src={post.thumbnail}
                    alt='Article Bild'
                    title={post.title}
                    width={480}
                    height={300}
                    className={styles.articleImage}
                />
            </div>
            <div className={styles.body}>
                <h4 className={styles.title}>{post.title}</h4>
                <time className={styles.articleTime} dateTime={post.date}>
                    Veröffentlicht am: {new Date(post.date).toLocaleDateString()}
                </time>
                <p className={styles.description}>{post.description}</p>
            </div>
            <div className={styles.footer}>
                <Link passHref href='/blog/[slug]' as={`/blog/${post.slug}`}>
                    <Button>Zum Post</Button>
                </Link>
            </div>
        </Card>
    );
}
