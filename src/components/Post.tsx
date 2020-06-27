import Link from 'next/link';
import { useEffect, useState } from 'react';
import LazyImage from './LazyImage';
import { useWindowWidth } from '@react-hook/window-size';

import Button from './Button';
import Card from './Card';
import styles from './Post.module.css';
import { IPost } from '@@/types';

type IPostComponent = {
    post: IPost;
    index: number;
};

export default function Post({ post, index }: IPostComponent) {
    const [delay, setDelay] = useState(0);
    const windowWidth = useWindowWidth();

    useEffect(() => {
        windowWidth >= 768 ? setDelay((index % 3) * 200) : setDelay(0);
    });

    return (
        <div data-aos='fade-up' data-aos-delay={delay} data-aos-duration='400'>
            <Card>
                <Link passHref href='/blog/[slug]' as={`/blog/${post.slug}`}>
                    <a className={styles.link}>
                        <div className={styles.image}>
                            <LazyImage
                                src={post.thumbnail}
                                alt='Article Bild'
                                title={post.title}
                                width={480}
                                height={300}
                                className={styles.articleImage}
                            />
                        </div>
                    </a>
                </Link>
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
        </div>
    );
}
