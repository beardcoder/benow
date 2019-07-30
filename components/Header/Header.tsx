import * as React from 'react';
import styles from './Header.css';
import classnames from 'classnames';

const PageHeader: React.FunctionComponent = () => (
    <header className={classnames(styles.header)}>
        <style jsx>{`
            header {
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

export default PageHeader;
