export const person = () => {
    return {
        __html: `{
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Markus Sommer",
            "url": "http://www.creativeworkspace.de",
            "jobTitle": "Frontend Developer",
            "gender": "male",
            "image": "${require('../assets/images/markus_sommer.jpg?webp')}",
            "sameAs": [
                "https://github.com/beardcoder",
                "https://twitter.com/beardcoder",
                "https://forge.typo3.org/users/41461",
                "https://www.xing.com/profile/Markus_Sommer30",
                "https://www.linkedin.com/in/markus-sommer-9040649b/",
            ]
        }`,
    };
};

export const openGraphPerson = () => {
    return {
        url: 'https://creativeworkspace.de',
        title:
            'Markus Sommer — moderne Web Technologieren, Design und Frontendartist',
        description:
            'Persönliche Webseite von Markus Sommer ein Entwickler für moderne Web Technologieren, Design und Frontend',
        images: [
            {
                url: require('../assets/images/markus_sommer.jpg?webp'),
                width: 420,
                height: 630,
                alt: 'Bild von Markus Sommer',
            },
        ],
        locale: 'de_DE',
        type: 'website',
        site_name:
            'Markus Sommer — moderne Web Technologieren, Design und Frontendartist',
    };
};
