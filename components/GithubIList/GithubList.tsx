import * as React from 'react';
import styles from './GithubList.css';
import globalStyles from './../Layout/Layout.css';
import { GithubItem } from '../../interfaces';

type Props = {
    items: GithubItem[];
    linkText: string;
    title: string;
    gist?: boolean;
};

type State = {
    open: boolean;
};

class PageGithubList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            open: false,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            open: !this.state.open,
        });
    }

    render() {
        const { title, items, gist, linkText } = this.props;
        return (
            <div className={styles.github}>
                <h3>{title}</h3>
                <ul className={styles.githubList}>
                    {items.map((item, index) => (
                        <li
                            key={item.id}
                            className={[
                                styles.githubItem,
                                !this.state.open && index >= 3
                                    ? styles.githubItemHidden
                                    : '',
                            ].join(' ')}>
                            <div>
                                <h4>
                                    {gist ? item.description : item.full_name}
                                </h4>
                                {!gist ? <p>item.description</p> : ''}
                            </div>
                            <a
                                href={item.html_url}
                                className={[
                                    globalStyles.btn,
                                    gist ? globalStyles.btnSecondary : [],
                                ].join(' ')}
                                target="_blank"
                                rel="noopener">
                                {linkText}
                            </a>
                        </li>
                    ))}
                </ul>
                <div style={{ textAlign: 'center' }}>
                    <button
                        onClick={this.onClick}
                        className={[
                            globalStyles.btn,
                            gist ? globalStyles.btnSecondary : [],
                        ].join(' ')}>
                        {this.state.open ? 'Verbergen' : 'Alle anzeigen'}
                    </button>
                </div>
            </div>
        );
    }
}

export default PageGithubList;
