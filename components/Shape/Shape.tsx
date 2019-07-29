import React from 'react';
import classnames from 'classnames';
import styles from './Shape.css';

interface Props {
    direction: 'left' | 'right';
    bottom?: boolean
}

export const Shape: React.FC<Props> = (props) => {
    return (
        <div
            className={classnames(
                styles.designShape,
                props.direction === 'left' ? styles.designShapeLeft : '',
                props.bottom ? styles.designShapeBottom : '',
            )}
        />
    );
};
