import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

import css from './Skill.module.css';

type Props = {
    title: string;
    value: number;
};

const Skill: React.FunctionComponent<Props> = ({ title, value }) => {
    const [active, setActive] = useState(false);
    const handleEnter = () => {
        setActive(true);
    };

    return (
        <Waypoint onEnter={handleEnter}>
            <li className={`${css.skill} ${active ? css.inViewport : ''}`}>
                <div className={css.skillTitle}>{title}</div>
                <div className={css.skillPercent}>
                    <div style={{ marginLeft: `${value}%` }} className={css.skillPercentNumber}>
                        {value}
                    </div>
                    <div className={css.skillPercentBackground}></div>
                    <div style={{ width: `${value}%` }} className={css.skillPercentIndicator}></div>
                </div>
            </li>
        </Waypoint>
    );
};

export default Skill;
