import * as React from 'react';
import styles from './Footer.css';

type SocialLink = {
    title: string;
    link: string;
    icon: string;
};

type Props = {
    socialLinks?: SocialLink[];
};

const PageFooter: React.FunctionComponent<Props> = ({ socialLinks }) => (
    <footer className={styles.footer}>
        <img
            className={styles.footerShape}
            alt="footer shape"
            src={require('../../assets/images/shape.svg')}
            width="1442"
            height="1316"
        />

        <div className={styles.footerContent}>
            <h4>Erstellt mit 🍺 und 🦄 von Markus Sommer</h4>
            <ul className={styles.social}>
                {socialLinks
                    ? socialLinks.map((item, index) => (
                          <li className={styles.socialItem} key={index}>
                              <a
                                  className={styles.socialLink}
                                  title={item.title}
                                  href={item.link}
                                  dangerouslySetInnerHTML={{
                                      __html: item.icon,
                                  }}
                              />
                          </li>
                      ))
                    : ''}
            </ul>
        </div>
    </footer>
);

PageFooter.defaultProps = {
    socialLinks: [
        {
            icon: require('../../assets/icons/github-brands.svg?include'),
            link: 'https://github.com/beardcoder',
            title: 'Github Profil von Markus Sommer',
        },
        {
            icon: require('../../assets/icons/twitter-brands.svg?include'),
            link: 'https://twitter.com/beardcoder',
            title: 'Twitter Profil von Markus Sommer',
        },
        {
            icon: require('../../assets/icons/neos-brands.svg?include'),
            link: 'https://www.neos.io/',
            title: 'Neos Website',
        },
        {
            icon: require('../../assets/icons/typo3-brands.svg?include'),
            link: 'https://forge.typo3.org/users/41461',
            title: 'TYPO3 Forge',
        },
        {
            icon: require('../../assets/icons/xing-brands.svg?include'),
            link: 'https://www.xing.com/profile/Markus_Sommer30',
            title: 'Xing Profil von Markus Sommer',
        },
    ],
};

export default PageFooter;
