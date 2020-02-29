import Link from 'next/link';
import React from 'react';

import css from './BackLink.module.css';
import classNames from 'classnames';

interface Props {
    footer?: boolean;
}

const BackLink: React.FC<Props> = ({ footer }) => {
    return (
        <Link href='/'>
            <a className={classNames(css.backLink, footer ? css.backLinkFooter : null)}>
                <span className={css.backLinkText}>Zurück</span>
            </a>
        </Link>
    );
};

BackLink.defaultProps = {
    footer: false,
};

export default BackLink;
