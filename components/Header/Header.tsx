import * as React from 'react';
import styles from './Header.css';
import classnames from 'classnames';
import Rellax from 'rellax';

// @ts-ignore
import LazyLoad from 'vanilla-lazyload';

const PageHeader: React.FunctionComponent = () => {
    React.useEffect(() => {
        new Rellax('.rellax');
        new LazyLoad({
            elements_selector: '.lazy',
        });
    });

    return (
        <header className={classnames(styles.header)}>
            <div className={styles.backgroundWrapper}>
                <div
                    className="background rellax lazy"
                    data-rellax-speed="-5"
                    role="presentation"
                    data-bg={`url(${require('../../assets/images/header.jpg?webp')})`}
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
                    background-image: url(${require('../../assets/images/header.jpg?resize&size=50')});
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
