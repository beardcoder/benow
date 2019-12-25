import React from 'react';

import css from './Button.module.css';

type Props = {
    secondary?: boolean;
    tagName?: any;
    attrs: {};
};

const Button: React.FunctionComponent<Props> = props => {
    const CompTagName = props.tagName;

    return (
        <CompTagName
            {...props.attrs}
            className={[css.btn, props.secondary ? css.btnSecondary : ''].join(
                ' '
            )}
        >
            {props.children}
        </CompTagName>
    );
};

Button.defaultProps = {
    secondary: false,
    tagName: 'a'
};

export default Button;
