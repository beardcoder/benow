import styles from './Personal.module.css';
import Skill from './Skill';
import Section from './Section';
import shortid from 'shortid';
import content from '../content/homepage.json';
import LazyImage from './LazyImage';
import parse from 'html-react-parser';

export default function Personal() {
    return (
        <Section title={content.personal.title} second id='personal' data-cy='personal'>
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
                    <h3 data-aos='fade-up'>{parse(content.personal.subtitle)}</h3>
                    <p data-aos='fade-up' data-aos-delay='200'>
                        {parse(content.personal.description)}
                    </p>
                    <p data-aos='fade-up' data-aos-delay='300'>
                        {parse(content.personal.text)}
                    </p>
                    <ul className={styles.personalSkills}>
                        {content.personal.skills.map(skill => (
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
