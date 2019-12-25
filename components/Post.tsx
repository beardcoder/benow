import Link from 'next/link';
import React from 'react';
import { IPost } from '~/types';

import Card from './Card';

type Props = {
    post: IPost;
};

const Post: React.FunctionComponent<Props> = ({ post }) => {
    return (
        <Card className="article">
            <div className="image">
                <img
                    src={`${post?.fields?.image?.fields.file.url}?fm=webp&w=600&h=337`}
                    className="articleImage"
                    alt="Article image"
                    width="600"
                    height="337"
                />
            </div>
            <div className="body">
                <h4>{post.fields.headline}</h4>
                <time className="articleTime" dateTime={post.sys.createdAt}>
                    {new Date(post.sys.createdAt).toLocaleDateString()}
                </time>
                <p className="description">{post.fields.description}</p>
            </div>
            <div className="footer">
                <Link href={`/blog/${post.fields.slug}`}>Zum Post</Link>
            </div>
        </Card>
    );
};

export default Post;
