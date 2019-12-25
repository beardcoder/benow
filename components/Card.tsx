import React from 'react';

import css from './Card.module.css';

type Props = {
    className?: string;
};

const Card: React.FunctionComponent<Props> = ({ children, className }) => {
    return <div className={[css.card, className].join(' ')}>{children}</div>;
};

export default Card;
