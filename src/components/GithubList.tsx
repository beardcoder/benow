import React, { useState } from 'react';
import styles from './GithubList.module.css';
import { GithubItem as IGithubItem } from '~/types';

import Button from './Button';
import GithubItem from './GithubItem';

type Props = {
    items?: IGithubItem[];
    gist?: boolean;
    title: string;
    linkText: string;
};

const GithubList: React.FunctionComponent<Props> = ({ title, gist, items, linkText }) => {
    const [open, setOpen] = useState(false);

    const handleClick = function () {
        setOpen(!open);
    };

    return (
        <div className={styles.github}>
            <h3>{title}</h3>
            <ul className={styles.githubList}>
                {items?.map((item, i) => (
                    <GithubItem
                        hidden={i >= 3 && !open}
                        item={item}
                        gist={gist ? gist : false}
                        linkText={linkText}
                        key={i}
                    />
                ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
                <Button tagName='button' onClick={handleClick} type='button' secondary={gist}>
                    {open ? 'Verbergen' : 'Alle anzeigen'}
                </Button>
            </div>
        </div>
    );
};

export default GithubList;
