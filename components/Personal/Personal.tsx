import * as React from 'react';
import styles from './Personal.css';
import Skill from '../Skill/Skill';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { Shape } from '../Shape/Shape';
import classnames from 'classnames';

type Props = {};

type State = {
    isVisible: boolean;
};

class PagePersonal extends React.Component<Props, State> {
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
        return (
            <section id="about-me" className={styles.personal}>
                <Shape direction="left" />
                <h2 className={styles.header}>
                    Meine Leidenschaften und mein Fokus ist die User Expiriance
                    und das User Interface
                </h2>

                <div className={styles.wrapper}>
                    <ReactVisibilitySensor onChange={this.onChange}>
                        <div
                            className={classnames(
                                this.state.isVisible ? styles.isVisible : null,
                                styles.personalImageWrapper,
                            )}>
                            <img
                                src={require('../../assets/images/markus_sommer.jpg?webp')}
                                alt="Bild von Markus Sommer"
                                title="Bild von Markus Sommer"
                                className={styles.personalImage}
                                width="420"
                                height="630"
                            />
                        </div>
                    </ReactVisibilitySensor>
                    <div className={styles.personalContent}>
                        <h3>Webentwickler, Frontend Artist und Designer</h3>
                        <p>
                            Brauchst du Hilfe z. B.
                            <strong>deine Website in neuem Glanz</strong>
                            erstrahlen zu lassen? Oder einfach nur mal einen
                            Tipp wie du am besten eine
                            <strong>Sitemap einrichtest?</strong>
                        </p>
                        <p>
                            Dann melde dich bei mir. Ich stehe gerne mit Rat und
                            Tat zur Seite.
                        </p>
                        <ul className={styles.personalSkills}>
                            <Skill title="CSS" value={90} />
                            <Skill title="HTML" value={95} />
                            <Skill title="JavaScript" value={70} />
                            <Skill title="PHP" value={80} />
                            <Skill title="Vue" value={60} />
                            <Skill title="Docker" value={70} />
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
export default PagePersonal;
