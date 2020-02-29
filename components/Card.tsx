import React from 'react';

import css from './Card.module.css';
import classNames from 'classnames';

type Props = {
    className?: string;
};

const Card: React.FunctionComponent<Props> = ({ children, className }) => {
    return <div className={classNames(css.card, className)}>{children}</div>;
};

export default Card;
