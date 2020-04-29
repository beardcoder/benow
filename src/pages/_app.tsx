import { SocialProfileJsonLd } from 'next-seo';
import App from 'next/app';
import 'aos/dist/aos.css';
import React from 'react';
import 'sanitize.css';
import '~/src/assets/css/global.css';

export default class MyApp extends App {
    componentDidMount() {
        import('webfontloader').then(WebFont => {
            WebFont.load({
                google: {
                    families: ['Maven+Pro:400,700', 'Roboto+Slab:400,700&display=swap'],
                },
            });
        });

        import('aos').then(AOS => {
            AOS.init({
                once: true,
            });
        });
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Component {...pageProps} />
                <SocialProfileJsonLd
                    type='Person'
                    name='Markus Sommer'
                    url='https://www.creativeworkspace.de'
                    sameAs={[
                        'https://github.com/beardcoder',
                        'https://twitter.com/beardcoder',
                        'https://forge.typo3.org/users/41461',
                        'https://www.xing.com/profile/Markus_Sommer30',
                        'https://www.linkedin.com/in/markus-sommer-9040649b/',
                    ]}
                />
            </>
        );
    }
}
