import * as React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import css from './Personal.module.css';
import Skill from './Skill';

const skills = [
    { title: 'CSS', value: 90 },
    { title: 'HTML', value: 95 },
    { title: 'JavaScript', value: 70 },
    { title: 'PHP', value: 80 },
    { title: 'Vue', value: 80 },
    { title: 'Nuxt (SSR JavaScript)', value: 70 },
    { title: 'Docker', value: 70 },
];

const Personal: React.FunctionComponent = () => {
    return (
        <section id='about-me' className={css.personal}>
            <h2 className={css.header}>
                Mein Fokus und meine Leidenschaft sind auf die Benutzererfahrung (User Experience)
                gerichtet
            </h2>
            <div className={css.wrapper}>
                <div className={css.personalImageWrapper}>
                    <LazyLoadImage
                        src='/static/images/markus_sommer.jpg'
                        alt='Markus Sommer'
                        title='Bild von Markus Sommer'
                        width={500}
                        height={667}
                        className={css.personalImage}
                    />
                </div>
                <div className={css.personalContent}>
                    <h3>Webentwickler, Frontend Artist und Designer</h3>
                    <p>
                        Brauchst du Hilfe z. B. <strong>um deine Website in neuem Glanz</strong>{' '}
                        erstrahlen zu lassen, Moderne Web Technologieren einzusetzen oder mal einen
                        Tipp wie du eine <strong>Sitemap einrichtest?</strong>
                    </p>
                    <p>
                        <a href='mailto:creativeworkspace@sommer-online.xyz'>
                            Dann schreibe mich an.
                        </a>
                        Ich stehe gerne mit Rat und Tat zur Seite.
                    </p>
                    <ul className={css.personalSkills}>
                        {skills.map((skill, i) => (
                            <Skill key={i} value={skill.value} title={skill.title} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Personal;
