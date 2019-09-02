import * as React from 'react';
import { Article } from '~/interfaces';
import styles from './List.css';
import Link from 'next/link';

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
                        key={index}
                        href="/article/[id]/[slug]"
                        as={`/article/${article.id}/${article.slug}`}>
                        <a className={styles.item}>
                            <h4>{article.headline ? article.headline : ''}</h4>
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
