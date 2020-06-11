import shortid from 'shortid';
import styles from '~/src/components/Footer.module.css';

export default function Footer({ children }: any) {
    const socialLinks = [
        {
            icon: require('~/src/assets/icons/mailbox-duotone.svg'),
            link: 'mailto:creativeworkspace@sommer-online.xyz',
            title: 'E-Mail Markus Sommer',
        },
        {
            icon: require('~/src/assets/icons/github-brands.svg'),
            link: 'https://github.com/beardcoder',
            title: 'Github Profil von Markus Sommer',
        },
        {
            icon: require('~/src/assets/icons/twitter-brands.svg'),
            link: 'https://twitter.com/beardcoder',
            title: 'Twitter Profil von Markus Sommer',
        },
        {
            icon: require('~/src/assets/icons/neos-brands.svg'),
            link: 'https://www.neos.io/',
            title: 'Neos Website',
        },
        {
            icon: require('~/src/assets/icons/typo3-brands.svg'),
            link: 'https://forge.typo3.org/users/41461',
            title: 'TYPO3 Forge',
        },
        {
            icon: require('~/src/assets/icons/xing-brands.svg'),
            link: 'https://www.xing.com/profile/Markus_Sommer30',
            title: 'Xing Profil von Markus Sommer',
        },
        {
            icon: require('~/src/assets/icons/linkedin-in-brands.svg'),
            link: 'https://www.linkedin.com/in/markus-sommer-9040649b/',
            title: 'linkedin Profil von Markus Sommer',
        },
    ];
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                {children}
                <h4>Erstellt mit 🍺 und 🦄 von Markus Sommer</h4>
                <ul className={styles.social}>
                    {socialLinks.map(item => (
                        <li key={shortid.generate()} className={styles.socialItem}>
                            <a
                                href={item.link}
                                title={item.title}
                                rel='noopener'
                                target='_blank'
                                className={styles.socialLink}>
                                <img
                                    src={item.icon}
                                    className={styles.socialIcon}
                                    alt={item.title}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
