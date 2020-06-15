import styles from './Header.module.css';
import LazyImage from './LazyImage';
const image800 = require('~/src/assets/images/header--800.jpg?webp');
const image1200 = require('~/src/assets/images/header--1200.jpg?webp');
const image1400 = require('~/src/assets/images/header--1400.jpg?webp');
const image2560 = require('~/src/assets/images/header.jpg?webp');

export default function PageHeader() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.backgroundWrapper}>
                <LazyImage
                    srcSet={`${image800} 800w,${image1200} 1200w,${image1400} 1400w,${image2560} 2560w`}
                    src={image800}
                    alt='Kopf Bild'
                    width={2541}
                    height={1786}
                    className={styles.background}
                />
            </div>
            <div className={styles.headerContent}>
                <h1 data-aos='fade-up' className={styles.h1}>
                    Webentwickler <br />
                    Frontend Artist <br />
                    Designer <br />
                </h1>
                <h3 data-aos='fade-up' data-aos-delay='300' className={styles.h3}>
                    Innovation, Inspiration, Technik und Leidenschaft
                    <span
                        data-aos='fade-right'
                        data-aos-delay='600'
                        className={styles.arrow}></span>
                </h3>
            </div>
        </header>
    );
}
