import * as React from 'react';
import styles from './Skill.css';
import VisibilitySensor from 'react-visibility-sensor';

type Props = {
    title: string;
    value: number;
};

type State = {
    isVisible: boolean;
};

class ListItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isVisible: false,
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(isVisible: any) {
        if (!this.state.isVisible) {
            this.setState({
                isVisible: isVisible,
            });
        }
    }

    render() {
        const { title, value } = this.props;

        return (
            <VisibilitySensor onChange={this.onChange}>
                <li
                    className={
                        !this.state.isVisible ? styles.isNotVisible : undefined
                    }>
                    <div className={styles.skillTitle}>{title}</div>
                    <div className={styles.skillPercent}>
                        <div
                            className={styles.skillPercentNumber}
                            style={{ marginLeft: value + '%' }}>
                            {value}
                        </div>
                        <div className={styles.skillPercentBackground} />
                        <div
                            className={styles.skillPercentIndicator}
                            style={{ width: value + '%' }}
                        />
                    </div>
                </li>
            </VisibilitySensor>
        );
    }
}
export default ListItem;
