import * as React from 'react';
import styles from './Navigation.css';
import NavigationItem from './Item/Item';

type INavigationItemType = {
    link: string;
    name: string;
};

interface INavigationProps {
    items: INavigationItemType[];
}

export default class Navigation extends React.Component<INavigationProps> {
    public render() {
        const { items } = this.props;
        return (
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    {items.map((item, index) => (
                        <NavigationItem
                            key={index}
                            index={index}
                            name={item.name}
                            link={item.link}
                        />
                    ))}
                </ul>
            </nav>
        );
    }
}
