import { useState } from 'react';
import styles from './GithubList.module.css';
import { GithubItem as IGithubItem } from '@@/types';

import Button from './Button';
import GithubItem from './GithubItem';
import shortid from 'shortid';

type Props = {
    items?: IGithubItem[];
    gist?: boolean;
    title: string;
    linkText: string;
};

function GithubList({ title, gist, items, linkText }: Props) {
    const [open, setOpen] = useState(false);

    const handleClick = function () {
        setOpen(!open);
    };

    return (
        <div className={styles.github}>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.githubList}>
                {items?.map((item, i) => (
                    <GithubItem
                        index={i}
                        hidden={i >= 3 && !open}
                        item={item}
                        gist={gist ? gist : false}
                        linkText={linkText}
                        key={shortid.generate()}
                    />
                ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
                <Button tagName='button' onClick={handleClick} type='button' secondary>
                    {open ? 'Verbergen' : 'Alle anzeigen'}
                </Button>
            </div>
        </div>
    );
}

export default GithubList;
