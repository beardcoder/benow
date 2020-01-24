import css from '~/components/Footer.module.css';

const Footer: React.FunctionComponent = ({ children }) => {
    const socialLinks = [
        {
            icon: require('~/assets/icons/mailbox-duotone.svg'),
            link: 'mailto:creativeworkspace~sommer-online.xyz',
            title: 'E-Mail Markus Sommer'
        },
        {
            icon: require('~/assets/icons/github-brands.svg'),
            link: 'https://github.com/beardcoder',
            title: 'Github Profil von Markus Sommer'
        },
        {
            icon: require('~/assets/icons/twitter-brands.svg'),
            link: 'https://twitter.com/beardcoder',
            title: 'Twitter Profil von Markus Sommer'
        },
        {
            icon: require('~/assets/icons/neos-brands.svg'),
            link: 'https://www.neos.io/',
            title: 'Neos Website'
        },
        {
            icon: require('~/assets/icons/typo3-brands.svg'),
            link: 'https://forge.typo3.org/users/41461',
            title: 'TYPO3 Forge'
        },
        {
            icon: require('~/assets/icons/xing-brands.svg'),
            link: 'https://www.xing.com/profile/Markus_Sommer30',
            title: 'Xing Profil von Markus Sommer'
        },
        {
            icon: require('~/assets/icons/linkedin-in-brands.svg'),
            link: 'https://www.linkedin.com/in/markus-sommer-9040649b/',
            title: 'linkedin Profil von Markus Sommer'
        }
    ];
    return (
        <footer className={css.footer}>
            <div className={css.content}>
                {children}
                <h4>Erstellt mit 🍺 und 🦄 von Markus Sommer</h4>
                <ul className={css.social}>
                    {socialLinks.map((item, i) => (
                        <li key={i} className={css.socialItem}>
                            <a
                                href={item.link}
                                title={item.title}
                                rel="noopener"
                                target="_blank"
                                className={css.socialLink}
                            >
                                <img
                                    src={item.icon}
                                    className={css.socialIcon}
                                    alt={item.title}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
