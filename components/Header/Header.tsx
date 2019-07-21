import * as React from 'react';
import styles from './Header.css';

const PageHeader: React.FunctionComponent = () => (
    <header
        className={styles.header}
        style={{
            backgroundImage: `url(${require('../../assets/images/header.jpg?webp')})`,
        }}>
        <div className={styles.headerContent}>
            <h1>
                Webentwicker
                <br />
                Frontend Ingenieur
                <br />
                Designer
                <br />
            </h1>
            <h3>Innovation, Inspiration, Technik und Leidenschaft</h3>
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
