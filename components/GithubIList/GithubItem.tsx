import * as React from 'react';
import styles from './GithubList.css';
import globalStyles from '../Layout/Layout.css';
import { GithubItem } from '../../interfaces';
import classnames from 'classnames';
import ReactVisibilitySensor from 'react-visibility-sensor';

type Props = {
    item: GithubItem;
    index: number;
    linkText: string;
    open: boolean;
    gist?: boolean;
};

type State = {
    isVisible: boolean;
};

class PageGithubItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isVisible: false,
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(isVisible: boolean) {
        if (!this.state.isVisible) {
            this.setState({
                isVisible: isVisible,
            });
        }
    }

    render() {
        const { item, open, index, gist, linkText } = this.props;
        return (
            <ReactVisibilitySensor onChange={this.onChange}>
                <li
                    key={item.id}
                    className={classnames(
                        styles.githubItem,
                        this.state.isVisible
                            ? styles.githubItemInViewport
                            : null,
                        !open && index >= 6 ? styles.githubItemHidden : '',
                    )}>
                    <div>
                        <h4>{gist ? item.description : item.full_name}</h4>
                        {!gist ? <p>{item.description}</p> : ''}
                    </div>
                    <a
                        href={item.html_url}
                        className={classnames(
                            globalStyles.btn,
                            gist ? globalStyles.btnSecondary : '',
                        )}
                        target="_blank"
                        rel="noopener">
                        {linkText}
                    </a>
                </li>
            </ReactVisibilitySensor>
        );
    }
}

export default PageGithubItem;
