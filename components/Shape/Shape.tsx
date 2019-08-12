import React from 'react';
import classnames from 'classnames';
import styles from './Shape.css';

interface Props {
    direction: 'left' | 'right';
    bottom?: boolean;
}

export const Shape: React.FunctionComponent<Props> = (props) => {
    return (
        <div
            className={classnames(styles.wrapper, 'rellax')}
            data-rellax-speed="-3">
            <div
                className={classnames(
                    styles.shape,
                    props.direction === 'left' ? styles.shapeLeft : '',
                    props.bottom ? styles.shapeBottom : '',
                )}
            />
        </div>
    );
};
