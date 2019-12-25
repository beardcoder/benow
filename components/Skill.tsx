import React, { useState } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';

import css from './Skill.module.css';

type Props = {
    title: string;
    value: number;
};

const Skill: React.FunctionComponent<Props> = ({ title, value }) => {
    const [active, setActive] = useState(false);
    return (
        <ReactVisibilitySensor onChange={setActive} active={!active}>
            {({ isVisible }) => (
                <li
                    className={`${css.skill} ${
                        isVisible ? css.inViewport : ''
                    }`}
                >
                    <div className={css.skillTitle}>{title}</div>
                    <div className={css.skillPercent}>
                        <div
                            style={{ marginLeft: `${value}%` }}
                            className={css.skillPercentNumber}
                        >
                            {value}
                        </div>
                        <div className={css.skillPercentBackground}></div>
                        <div
                            style={{ width: `${value}%` }}
                            className={css.skillPercentIndicator}
                        ></div>
                    </div>
                </li>
            )}
        </ReactVisibilitySensor>
    );
};

export default Skill;
