import React from 'react';

import css from './Blog.module.css';
import Post from './Post';

type Props = {
    posts: any[];
};

const Blog: React.FunctionComponent<Props> = ({ posts }) => {
    return (
        <div id="blog" className={css.blog}>
            <h2 className={css.blogHeader}>Blog</h2>
            <div className={css.articles}>
                {posts.map((post, i) => (
                    <Post key={i} post={post} />
                ))}
            </div>
        </div>
    );
};

Blog.defaultProps;

export default Blog;
