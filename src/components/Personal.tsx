import styles from './Personal.module.css';
import Skill from './Skill';
import Section from './Section';
import shortid from 'shortid';
import LazyImage from './LazyImage';

const skills = [
    { title: 'CSS', value: 90 },
    { title: 'HTML', value: 95 },
    { title: 'JavaScript', value: 70 },
    { title: 'PHP', value: 80 },
    { title: 'Vue', value: 80 },
    { title: 'Nuxt (SSR JavaScript)', value: 70 },
    { title: 'Docker', value: 70 },
];

export default function Personal() {
    return (
        <Section title='Mein Fokus und meine Leidenschaft sind auf die Benutzererfahrung (User Experience) gerichtet'>
            <div className={styles.wrapper}>
                <div className={styles.personalImageWrapper}>
                    <LazyImage
                        src='/images/markus_sommer.jpg'
                        alt='Markus Sommer'
                        title='Bild von Markus Sommer'
                        width={500}
                        height={667}
                        className={styles.personalImage}
                    />
                </div>
                <div className={styles.personalContent}>
                    <h3 data-aos='fade-up'>Webentwickler, Frontend Artist und Designer</h3>
                    <p data-aos='fade-up' data-aos-delay='200'>
                        Brauchst du Hilfe z. B. <strong>um deine Website in neuem Glanz</strong>{' '}
                        erstrahlen zu lassen, Moderne Web Technologieren einzusetzen oder mal einen
                        Tipp wie du eine <strong>Sitemap einrichtest?</strong>
                    </p>
                    <p data-aos='fade-up' data-aos-delay='300'>
                        <a href='mailto:creativeworkspace@sommer-online.xyz'>
                            Dann schreibe mich an.
                        </a>{' '}
                        Ich stehe gerne mit Rat und Tat zur Seite.
                    </p>
                    <ul className={styles.personalSkills}>
                        {skills.map(skill => (
                            <Skill
                                key={shortid.generate()}
                                value={skill.value}
                                title={skill.title}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}
