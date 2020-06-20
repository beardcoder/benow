import { useState, useEffect } from 'react';
import styles from './GithubList.module.css';
import { GithubItem as IGithubItem } from '@@/types';

import Button from './Button';
import Card from './Card';
import classNames from 'classnames';
import { useWindowWidth } from '@react-hook/window-size';

type Props = {
    item: IGithubItem;
    gist: boolean;
    hidden: boolean;
    linkText: string;
    index: number;
};

export default function GithubItem({ gist, item, linkText, hidden, index }: Props) {
    const [delay, setDelay] = useState(0);
    const windowWidth = useWindowWidth();

    useEffect(() => {
        if (index <= 2) {
            windowWidth >= 768 ? setDelay((index % 3) * 200) : setDelay(0);
        }
    });
    return (
        <li
            data-aos={index <= 2 ? 'fade-up' : false}
            data-aos-delay={delay}
            className={classNames(styles.githubItem, hidden ? styles.githubItemHidden : null)}
            aria-hidden={hidden}>
            <Card>
                <div className='h4'>{gist ? item.description : item.full_name}</div>
                {!gist && <p className={styles.githubItemDescription}>{item.description}</p>}
                <Button href={item.html_url} rel='noreferrer' target='_blank'>
                    {linkText}
                    <img
                        src={require('@/assets/icons/external-link-duotone.svg')}
                        width='14'
                        height='14'
                        alt='external link icon'
                        style={{
                            marginLeft: '10px',
                        }}
                    />
                </Button>
            </Card>
        </li>
    );
}
