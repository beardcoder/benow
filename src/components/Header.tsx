import * as React from 'react';
import css from './Header.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const multipleSizes = require('~/src/assets/images/header.jpg?resize&sizes[]=300&sizes[]=768&sizes[]=1024&sizes[]=1400&sizes[]=2560');

const PageHeader: React.FunctionComponent = () => (
    <header className={css.wrapper}>
        <div className={css.backgroundWrapper}>
            <LazyLoadImage
                srcSet={multipleSizes.srcSet}
                src={multipleSizes.src}
                alt='Kopf Bild'
                className={css.background}
            />
        </div>
        <div className={css.headerContent}>
            <h1 className={css.h1}>
                Webentwickler <br />
                Frontend Artist <br />
                Designer <br />
            </h1>
            <h3 className={css.h3}>Innovation, Inspiration, Technik und Leidenschaft</h3>
            <img
                src='/images/shape2.svg'
                alt='header shape'
                width='182'
                height='142'
                className={css.headerShape}
            />
        </div>
    </header>
);

export default PageHeader;
