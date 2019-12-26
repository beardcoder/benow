import Link from 'next/link';
import React from 'react';

import css from './BackLink.module.css';

interface Props {
    footer?: boolean;
}

const BackLink: React.FC<Props> = ({ footer }) => {
    return (
        <Link href="/">
            <a
                className={[css.backLink, css.backLinkFooter ?? footer].join(
                    ' '
                )}
            >
                <span className={css.backLinkText}>Zurück</span>
            </a>
        </Link>
    );
};

export default BackLink;
