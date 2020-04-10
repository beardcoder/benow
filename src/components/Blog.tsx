import React from 'react';

import styles from './Blog.module.css';
import Post from './Post';

type Props = {
    posts: any[];
};

export default function Blog({ posts }: Props) {
    return (
        <div id='blog' className={styles.blog}>
            <h2 className={styles.blogHeader}>Blog</h2>
            <div className={styles.articles}>
                {Object.keys(posts.reverse()).map((key: any) => (
                    <Post key={key} post={posts[key]} />
                ))}
            </div>
        </div>
    );
}
