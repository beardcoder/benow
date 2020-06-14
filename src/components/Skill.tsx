import useIsInViewport from 'use-is-in-viewport';

import styles from './Skill.module.css';
import classNames from 'classnames';

type Props = {
    title: string;
    value: number;
};

export default function Skill({ title, value }: Props) {
    const [isInViewport, targetRef] = useIsInViewport();

    return (
        <li
            ref={targetRef}
            className={classNames(styles.skill, isInViewport ? styles.inViewport : null)}>
            <div className={styles.skillTitle}>{title}</div>
            <div className={styles.skillPercent}>
                <div style={{ marginLeft: `${value}%` }} className={styles.skillPercentNumber}>
                    {value}
                </div>
                <div className={styles.skillPercentBackground}></div>
                <div style={{ width: `${value}%` }} className={styles.skillPercentIndicator}></div>
            </div>
        </li>
    );
}
