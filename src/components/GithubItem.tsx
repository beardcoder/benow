import React from 'react';
import styles from './GithubList.module.css';
import { GithubItem as IGithubItem } from '~/types';

import Button from './Button';
import Card from './Card';
import classNames from 'classnames';

type Props = {
    item: IGithubItem;
    gist: boolean;
    hidden: boolean;
    linkText: string;
};

export default function GithubItem({ gist, item, linkText, hidden }: Props) {
    return (
        <li
            className={classNames(styles.githubItem, hidden ? styles.githubItemHidden : null)}
            aria-hidden={hidden}>
            <Card>
                <div>
                    <div className='h4'>{gist ? item.description : item.full_name}</div>
                    {!gist && <p className={styles.githubItemDescription}>{item.description}</p>}
                </div>
                <Button href={item.html_url} rel='noreferrer' target='_blank'>
                    {linkText}
                    <img
                        src={require('~/src/assets/icons/external-link-duotone.svg')}
                        width='15'
                        height='15'
                        alt='external link icon'
                        style={{
                            marginLeft: '5px',
                            marginBottom: '2px',
                        }}
                    />
                </Button>
            </Card>
        </li>
    );
}
