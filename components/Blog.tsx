import React from 'react';

import Post from './Post';

type Props = {
    posts: any[];
};

const Blog: React.FunctionComponent<Props> = ({ posts }) => {
    return (
        <div id="blog" className="blog">
            <h2 className="blog__header">Blog</h2>
            <div className="articles">
                {posts.map((post, i) => (
                    <Post key={i} post={post} />
                ))}
            </div>
        </div>
    );
};

Blog.defaultProps;

export default Blog;
