import React from 'react';
import styles from '~/src/components/Section.module.css';
import classNames from 'classnames';

type ISection = {
    title: string;
    description?: string | any;
    children: any;
    id?: string;
    second?: boolean;
};

export default function Section({ title, children, description, id, second }: ISection) {
    return (
        <section id={id} className={classNames(styles.section, second ? styles.second : null)}>
            <div className={styles.inner}>
                <header className={styles.header}>
                    <h2 data-aos='fade-up' className={styles.title}>
                        {title}
                    </h2>
                    <div data-aos='fade-up' data-aos-delay='300' className={styles.description}>
                        {description}
                    </div>
                </header>
                <div className={styles.content}>{children}</div>
            </div>
        </section>
    );
}
