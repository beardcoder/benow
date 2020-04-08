import React from 'react';

import styles from './Button.module.css';

type Props = {
    secondary?: boolean;
    tagName?: any;
    href?: any;
    attrs?: {};
    rel?: string;
    target?: string;
    onClick?: any;
    type?: string;
};

const Button: React.FunctionComponent<Props> = React.forwardRef(
    ({ children, secondary, href, onClick, rel, target, tagName, type }, ref) => {
        const CompTagName = tagName;

        return (
            <CompTagName
                ref={ref}
                href={href}
                onClick={onClick}
                type={type}
                rel={rel}
                tatget={target}
                className={[styles.btn, secondary ? styles.btnSecondary : ''].join(' ')}>
                {children}
            </CompTagName>
        );
    }
);

Button.defaultProps = {
    secondary: false,
    tagName: 'a',
};

export default Button;
