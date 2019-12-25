import React, { useState } from 'react';
import css from '~/components/GithubList.module.css';
import { GithubItem } from '~/types';

import Button from './Button';
import Card from './Card';

type Props = {
    items?: GithubItem[];
    gist: boolean;
    title: string;
    linkText: string;
};

const GithubList: React.FunctionComponent<Props> = ({
    title,
    gist,
    items,
    linkText
}) => {
    const [open, setOpen] = useState(false);

    const handleClick = function() {
        setOpen(!open);
    };
    return (
        <div className={css.github}>
            <h3>{title}</h3>
            <ul className={css.githubList}>
                {items?.map((item, i) => (
                    <li
                        key={i}
                        className={[
                            css.githubItem,
                            i >= 3 && !open ? css.githubItemHidden : ''
                        ].join(' ')}
                        aria-hidden={i >= 3 && !open}
                    >
                        <Card>
                            <div>
                                <h4>
                                    {gist ? item.description : item.full_name}
                                </h4>
                                <p
                                    v-if="!gist"
                                    className={css.githubItemDescription}
                                >
                                    {item.description}
                                </p>
                            </div>
                            <Button
                                href={item.html_url}
                                rel="noreferrer"
                                target="_blank"
                                secondary={gist}
                            >
                                {linkText}
                                <img
                                    src="/static/icons/external-link-duotone.svg"
                                    width="15"
                                    height="15"
                                    alt="external link icon"
                                    style={{
                                        marginLeft: '5px',
                                        marginBottom: '2px'
                                    }}
                                />
                            </Button>
                        </Card>
                    </li>
                ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
                <Button
                    tagName="button"
                    attrs={{ onClick: handleClick, type: 'button' }}
                    secondary={gist}
                >
                    {open ? 'Verbergen' : 'Alle anzeigen'}
                </Button>
            </div>
        </div>
    );
};

export default GithubList;
