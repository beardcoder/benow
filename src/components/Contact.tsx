import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Typewriter from 'typewriter-effect';

import styles from './Contact.module.css';

export default function Contact() {
    return (
        <div className={styles.contactMe}>
            <a href='mailto:creativeworkspace@sommer-online.xyz'>
                <div className={styles.contactMe__message}>
                    <Typewriter
                        options={{
                            strings: 'Scheib mich an! <br /> Frong kost nix.',
                            autoStart: true,
                            delay: 80,
                        }}
                    />
                </div>
                <div className={styles.contactMe__image}>
                    <LazyLoadImage
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
