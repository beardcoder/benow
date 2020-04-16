import React from 'react';
import styles from '~/src/components/Section.module.css';

type ISection = {
    title: string;
    description?: string | any;
    children: any;
    id?: string;
};

export default function Section({ title, children, description, id }: ISection) {
    return (
        <section id={id} className={styles.section}>
            <header className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.description}>{description}</div>
            </header>
            <div className={styles.content}>{children}</div>
        </section>
    );
}
