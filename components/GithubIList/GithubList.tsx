import * as React from 'react';
import styles from './GithubList.css';
import globalStyles from '@/components/Layout/Layout.css';
import { GithubItem } from '@/interfaces';
import classnames from 'classnames';
import PageGithubItem from './GithubItem';

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
                <ul className={styles.githubList} ref="">
                    {items
                        ? items.map((item, index) => (
                              <PageGithubItem
                                  item={item}
                                  index={index}
                                  key={index}
                                  gist={gist}
                                  linkText={linkText}
                                  open={this.state.open}
                              />
                          ))
                        : ''}
                </ul>
                <div style={{ textAlign: 'center' }}>
                    <button
                        onClick={this.onClick}
                        className={classnames(
                            globalStyles.btn,
                            gist ? globalStyles.btnSecondary : null,
                        )}>
                        {this.state.open ? 'Verbergen' : 'Alle anzeigen'}
                    </button>
                </div>
            </div>
        );
    }
}

export default PageGithubList;
