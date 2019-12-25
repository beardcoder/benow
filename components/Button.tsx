import React from 'react';

import css from './Button.module.css';

type Props = {
    secondary?: boolean;
    tagName?: any;
    href?: any;
    attrs?: {};
    rel?: string;
    target?: string;
    onClick?: any;
};

const Button: React.FunctionComponent<Props> = React.forwardRef(
    ({ children, secondary, href, onClick, rel, target, tagName }, ref) => {
        const CompTagName = tagName;

        return (
            <CompTagName
                ref={ref}
                href={href}
                onClick={onClick}
                rel={rel}
                tatget={target}
                className={[css.btn, secondary ? css.btnSecondary : ''].join(
                    ' '
                )}
            >
                {children}
            </CompTagName>
        );
    }
);

Button.defaultProps = {
    secondary: false,
    tagName: 'a'
};

export default Button;
