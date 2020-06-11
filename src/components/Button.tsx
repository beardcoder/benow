import { forwardRef } from 'react';
import classnames from 'classnames';
import styles from './Button.module.css';

type Props = {
    secondary?: boolean;
    tagName?: any;
    props: {} | any[];
};

const Button: React.FunctionComponent<Props> = forwardRef(
    ({ children, secondary, tagName, ...props }, ref) => {
        const CompTagName = tagName;

        return (
            <CompTagName
                ref={ref}
                {...props}
                className={classnames([styles.btn, secondary ? styles.btnSecondary : ''])}>
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
