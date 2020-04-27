import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import styles from './Skill.module.css';
import classNames from 'classnames';

type Props = {
    title: string;
    value: number;
};

const Skill: React.FunctionComponent<Props> = ({ title, value }) => {
    const [active, setActive] = useState(false);
    const handleEnter = (isVisible: boolean) => {
        if (isVisible) setActive(true);
    };

    return (
        <VisibilitySensor onChange={handleEnter}>
            <li className={classNames(styles.skill, active ? styles.inViewport : null)}>
                <div className={styles.skillTitle}>{title}</div>
                <div className={styles.skillPercent}>
                    <div style={{ marginLeft: `${value}%` }} className={styles.skillPercentNumber}>
                        {value}
                    </div>
                    <div className={styles.skillPercentBackground}></div>
                    <div
                        style={{ width: `${value}%` }}
                        className={styles.skillPercentIndicator}></div>
                </div>
            </li>
        </VisibilitySensor>
    );
};

export default Skill;
