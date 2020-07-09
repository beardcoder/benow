import styles from './Header.module.css';
import content from '../content/homepage.json';
import ProgressiveImage from 'react-progressive-image';
const imageSmall = require('@/assets/images/template.png?lqip');
const image = require('@/assets/images/template.png?webp');
import parse from 'html-react-parser';

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
                <h1 data-aos='fade-up' className={styles.title} id='title'>
                    {parse(content.title)}
                </h1>
                <h2
                    data-aos='fade-up'
                    data-aos-delay='300'
                    className={styles.subtitle}
                    id='subtitle'>
                    {parse(content.subtitle)}
                    <span
                        data-aos='fade-right'
                        data-aos-delay='600'
                        className={styles.arrow}></span>
                </h2>
            </div>
        </header>
    );
}
