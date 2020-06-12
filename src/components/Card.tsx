import styles from './Card.module.css';
import classNames from 'classnames';

type Props = {
    className?: string;
    children: any;
};

export default function Card({ children, className }: Props) {
    return <div className={classNames(styles.card, className)}>{children}</div>;
}
