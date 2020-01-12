import { SocialProfileJsonLd } from 'next-seo';
import App from 'next/app';
import React from 'react';

export default class MyApp extends App {
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
