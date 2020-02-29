import * as React from 'react';

import css from './Header.module.css';

const PageHeader: React.FunctionComponent = () => (
    <header className={css.wrapper}>
        <div className={css.backgroundWrapper}>
            <div role='presentation' className={css.background} />
        </div>
        <div className={css.headerContent}>
            <h1 className={css.h1}>
                Webentwickler <br />
                Frontend Artist <br />
                Designer <br />
            </h1>
            <h3 className={css.h3}>Innovation, Inspiration, Technik und Leidenschaft</h3>
            <img
                src='/static/images/shape2.svg'
                alt='header shape'
                width='182'
                height='142'
                className={css.headerShape}
            />
        </div>
    </header>
);

export default PageHeader;
