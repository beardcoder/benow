import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Typewriter from 'typewriter-effect';

import css from './Contact.module.css';

const Contact: React.FC = () => {
    return (
        <div className={css.contactMe}>
            <a href='mailto:creativeworkspace@sommer-online.xyz'>
                <div className={css.contactMe__message}>
                    <Typewriter
                        options={{
                            strings: 'Scheib mich an! <br /> Frong kost nix.',
                            autoStart: true,
                            delay: 80,
                        }}
                    />
                </div>
                <div className={css.contactMe__image}>
                    <LazyLoadImage
                        src='/static/images/markus_sommer--square.jpg'
                        alt='Markus Sommer'
                        title='Bild von Markus Sommer'
                        width={300}
                        height={300}
                    />
                </div>
            </a>
        </div>
    );
};

export default Contact;
