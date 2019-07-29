import * as React from 'react';
import styles from './Item.css';

type INavigationItemState = {
    active: boolean;
};

interface INavigationItemProps {
    name: string;
    link: string;
    index: number;
}

export default class NavigationItem extends React.Component<
    INavigationItemProps,
    INavigationItemState
> {
    constructor(props: INavigationItemProps) {
        super(props);
        this.state = {
            active: false,
        };
        this.checkIfNavlinksAreActive = this.checkIfNavlinksAreActive.bind(
            this,
        );
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.checkIfNavlinksAreActive();
        window.addEventListener('scroll', this.checkIfNavlinksAreActive, {
            passive: true,
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkIfNavlinksAreActive);
    }

    isCurrentSection(section: Element, scrollTop: number) {
        let de = document.documentElement;
        let box = section.getBoundingClientRect();
        let sectionTop = Math.floor(
            box.top + window.pageYOffset - de.clientTop,
        );
        let sectionBottom = sectionTop + section.clientHeight;

        return scrollTop >= sectionTop && scrollTop < sectionBottom;
    }

    getScrollTop() {
        return Math.max(
            document.documentElement.scrollTop,
            document.body.scrollTop,
        );
    }

    checkIfNavlinksAreActive() {
        let scrollTop = this.getScrollTop();

        let section = document.querySelector(this.props.link);

        if (section && this.isCurrentSection(section, scrollTop)) {
            this.setState({
                active: true,
            });
            window.history.replaceState(null, '', this.props.link);
        } else {
            this.setState({
                active: false,
            });
        }
    }

    public render() {
        const { index, name, link } = this.props;
        return (
            <li
                key={index}
                className={[
                    styles.item,
                    this.state.active ? styles.active : undefined,
                ].join(' ')}>
                <a className={styles.link} href={link}>
                    {name}
                </a>
            </li>
        );
    }
}
