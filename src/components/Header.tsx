import * as React from 'react';
import styles from './Header.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const image300 = require('~/src/assets/images/header--300.jpg?webp').default;
const image600 = require('~/src/assets/images/header--600.jpg?webp').default;
const image800 = require('~/src/assets/images/header--800.jpg?webp').default;
const image1200 = require('~/src/assets/images/header--1200.jpg?webp').default;
const image1400 = require('~/src/assets/images/header--1400.jpg?webp').default;
const image2560 = require('~/src/assets/images/header.jpg?webp').default;

const PageHeader: React.FunctionComponent = () => (
    <header className={styles.wrapper}>
        <div className={styles.backgroundWrapper}>
            <LazyLoadImage
                srcSet={`${image300} 300w,${image600} 600w,${image800} 800w,${image1200} 1200w,${image1400} 1400w,${image2560} 2560w`}
                src={image300}
                alt='Kopf Bild'
                width={2541}
                height={1786}
                className={styles.background}
            />
        </div>
        <div className={styles.headerContent}>
            <h1 className={styles.h1}>
                Webentwickler <br />
                Frontend Artist <br />
                Designer <br />
            </h1>
            <h3 className={styles.h3}>Innovation, Inspiration, Technik und Leidenschaft</h3>
            <img
                src='/images/shape2.svg'
                alt='header shape'
                width='182'
                height='142'
                className={styles.headerShape}
            />
        </div>
    </header>
);

export default PageHeader;
