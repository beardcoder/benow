import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html lang='de'>
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
                </Head>
                <body className='app'>
                    <Main />
                    <NextScript />
                </body>
                <style jsx>{`
                    .main {
                        position: relative;
                        z-index: 20;
                        overflow: hidden;
                        padding-bottom: 100px;
                    }
                    .app {
                        overflow: hidden;
                        position: relative;
                        z-index: 10;
                    }
                `}</style>
            </html>
        );
    }
}
