import styles from '@/components/Section.module.css';
import classNames from 'classnames';

type ISection = {
    title: string;
    description?: string | any;
    children: any;
    id?: string;
    second?: boolean;
};

export default function Section({ title, children, description, id, second, ...props }: ISection) {
    return (
        <section
            {...props}
            id={id}
            className={classNames(styles.section, second ? styles.second : null)}>
            <div className={styles.inner}>
                <header className={styles.header}>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.description}>{description}</div>
                </header>
                <div className={styles.content}>{children}</div>
            </div>
        </section>
    );
}
