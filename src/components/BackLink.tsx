import Link from 'next/link';

import styles from './BackLink.module.css';
import classNames from 'classnames';

interface Props {
    footer?: boolean;
}

function BackLink({ footer, ...props }: Props) {
    return (
        <Link href='/#blog'>
            <a
                className={classNames(styles.backLink, footer ? styles.backLinkFooter : null)}
                {...props}>
                <span className={styles.backLinkText}>Zurück</span>
            </a>
        </Link>
    );
}

BackLink.defaultProps = {
    footer: false,
};

export default BackLink;
