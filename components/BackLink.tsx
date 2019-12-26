import Link from 'next/link';
import React from 'react';

import css from './Backlink.module.css';

interface Props {}

const BackLink: React.FC<Props> = () => {
    return (
        <Link href="/">
            <a className={css.backLink}>
                <span className={css.backLinkText}>Zurück</span>
            </a>
        </Link>
    );
};

export default BackLink;
