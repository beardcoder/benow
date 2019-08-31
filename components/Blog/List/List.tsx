import * as React from 'react';
import Link from 'next/link';
import { Article } from '~/interfaces';
import styles from './List.css';

export interface IListProps {
    articles: Article[];
}

export default class List extends React.Component<IListProps> {
    public render() {
        const { articles } = this.props;
        return (
            <div className={styles.list}>
                {articles.map((article, index) => (
                    <Link
                        href="/article/[slug]"
                        as={`/article/${article.slug}`}
                        passHref>
                        <a key={index} className={styles.item}>
                            <h4>{article.headline}</h4>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: article.description,
                                }}
                            />
                        </a>
                    </Link>
                ))}
            </div>
        );
    }
}
