import Typewriter from 'typewriter-effect';
import content from '../content/homepage.json';

import styles from './Contact.module.css';
import LazyImage from './LazyImage';

export default function Contact() {
    return (
        <div className={styles.contactMe} id='contact'>
            <a href='mailto:creativeworkspace@sommer-online.xyz'>
                <div className={styles.contactMe__message}>
                    <Typewriter
                        options={{
                            strings: content.contact,
                            autoStart: true,
                            delay: 80,
                        }}
                    />
                </div>
                <div className={styles.contactMe__image}>
                    <LazyImage
                        src='/images/markus_sommer--square.jpg'
                        alt='Markus Sommer'
                        title='Bild von Markus Sommer'
                        width={300}
                        height={300}
                    />
                </div>
            </a>
        </div>
    );
}
