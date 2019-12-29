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
                className={[
                    css.backLink,
                    footer ? css.backLinkFooter : null
                ].join(' ')}
            >
                <span className={css.backLinkText}>Zurück</span>
            </a>
        </Link>
    );
};

BackLink.defaultProps = {
    footer: false
};

export default BackLink;
