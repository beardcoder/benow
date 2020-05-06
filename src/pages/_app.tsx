import { SocialProfileJsonLd } from 'next-seo';
import App from 'next/app';
import 'aos/dist/aos.css';
import React from 'react';
import '~/src/assets/css/global.css';
import Head from 'next/head';

export default class MyApp extends App {
    componentDidMount() {
        import('webfontloader').then(WebFont => {
            WebFont.load({
                google: {
                    families: ['Fira+Code:wght@300;400;700', 'Maven+Pro:wght@400;700&display=swap'],
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
                <Head>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                    <link rel='manifest' href='/site.webmanifest' />
                    <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#f03f32' />
                    <meta name='msapplication-TileColor' content='#f03f32' />
                    <meta name='theme-color' content='#333333' />
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                </Head>
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
