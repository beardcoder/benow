import styles from './Header.module.css';
import ProgressiveImage from 'react-progressive-image';
const imageSmall = require('@/assets/images/template.png?lqip');
const image = require('@/assets/images/template.png?webp');

export default function PageHeader() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.backgroundWrapper}>
                <ProgressiveImage src={image} placeholder={imageSmall}>
                    {(src: string, _loading: boolean) => (
                        <img
                            src={src}
                            alt='Kopf Bild'
                            width={2560}
                            height={1920}
                            className={styles.background}
                        />
                    )}
                </ProgressiveImage>
            </div>
            <div className={styles.headerContent}>
                <h1 data-aos='fade-up' className={styles.h1}>
                    Webentwickler
                    <br />
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
