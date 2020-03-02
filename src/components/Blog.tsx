import React from 'react';

import css from './Blog.module.css';
import Post from './Post';

type Props = {
    posts: any[];
};

const Blog: React.FunctionComponent<Props> = ({ posts }) => {
    return (
        <div id='blog' className={css.blog}>
            <h2 className={css.blogHeader}>Blog</h2>
            <div className={css.articles}>
                {Object.keys(posts).map((key: any) => (
                    <Post key={key} post={posts[key]} />
                ))}
            </div>
        </div>
    );
};

export default Blog;
