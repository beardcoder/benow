import * as React from 'react';
import styles from './Header.css';
import classnames from 'classnames';
import Rellax from 'rellax';

const PageHeader: React.FunctionComponent = () => {
    React.useEffect(() => {
        new Rellax('.rellax');
    });

    return (
        <header className={classnames(styles.header)}>
            <div className={styles.backgroundWrapper}>
                <div
                    className="background rellax"
                    data-rellax-speed="-5"
                    role="presentation"
                />
            </div>
            <style jsx>{`
                .background {
                    background-position: center center;
                    background-size: cover;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background-image: url(${require('../../assets/images/header.jpg?webp')});
                }
            `}</style>
            <div className={styles.headerContent}>
                <h1 className={styles.h1}>
                    Webentwicker
                    <br />
                    Frontend Ingenieur
                    <br />
                    Designer
                    <br />
                </h1>
                <h3 className={styles.h3}>
                    Innovation, Inspiration, Technik und Leidenschaft
                </h3>
                <img
                    className={styles.headerShape}
                    alt="header shape"
                    src={require('../../assets/images/shape.svg')}
                    width="1442"
                    height="1316"
                />
            </div>
        </header>
    );
};

export default PageHeader;
