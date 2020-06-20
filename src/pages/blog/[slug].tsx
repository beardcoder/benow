import { BlogJsonLd, NextSeo } from 'next-seo';
import styles from './slug.module.css';
import { getMinimalPosts } from '@/helper/getPosts';
import { GetStaticPaths, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { IPost } from '@@/types';
import CodeBlock from '@/components/CodeBlock';

const ReactMarkdown = dynamic(() => import('react-markdown'));
const Footer = dynamic(() => import('@/components/Footer'));
const BackLink = dynamic(() => import('@/components/BackLink'));

type Props = {
    post: IPost;
};

function Post({ post }: Props) {
    return (
        <>
            <NextSeo
                title={`${post.title} — Markus Sommer`}
                description={post.description}
                canonical={`https://www.creativeworkspace.de/blog/${post.slug}`}
            />
            <BlogJsonLd
                url={`https://www.creativeworkspace.de/blog/${post.slug}`}
                title={post.title}
                images={[post.image]}
                datePublished={post.date}
                dateModified={post.date}
                authorName='Markus Sommer'
                description={post.description}
            />
            <header className={styles.header}>
                <div className={styles.headerBackground}>
                    <div role='presentation' className='backgroundImage' />
                    <style jsx>{`
                        .backgroundImage {
                            background-image: url(${post.image});
                            background-position: center center;
                            background-size: cover;
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            will-change: transform;
                        }
                    `}</style>
                </div>
                <BackLink />
            </header>
            <div className={styles.main}>
                <article className={styles.article}>
                    <h1 data-aos='fade-up' data-aos-duration='400'>
                        {post.title}
                    </h1>
                    Veröffentlicht am{' '}
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                    <br />
                    von <b>Markus Sommer</b>
                    <p className='description'>{post.description}</p>
                    <ReactMarkdown source={post.content} renderers={{ code: CodeBlock }} />
                </article>
            </div>
            <Footer>
                <BackLink footer />
            </Footer>
        </>
    );
}

export const getStaticProps: GetStaticProps = async context => {
    const content = await require(`@/content/posts/${context.params?.slug}.md`);
    const matter = await import('gray-matter');
    const markdown: any = matter.default(content.default);
    const post = {
        ...markdown.data,
        content: markdown.content,
        slug: context.params?.slug,
    };
    return {
        props: {
            post,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getMinimalPosts();
    const paths = posts.map((post: any) => ({
        params: { slug: post.slug },
    }));

    return { paths, fallback: false };
};

export default Post;
