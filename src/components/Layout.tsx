import Head from 'next/head';
import * as React from 'react';

type Props = {
    title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
    children,
    title = 'This is the default title',
}) => (
    <>
        <div className='app'>
            <Head>
                <title>{title}</title>
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
            {children}
        </div>
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
    </>
);

export default Layout;
