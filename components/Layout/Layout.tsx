import * as React from 'react';
import Head from 'next/head';
import 'sanitize.css';
import './Layout.css';

const Layout: React.FunctionComponent = ({ children }) => (
    <div>
        <Head>
            <title>Markus Sommer | Creativeworkspace > Moderne Webtechnologien und Design</title>
            <meta name="description" content="Persönliche Webseite von Markus Sommer ein Entwickler für moderne Web Technologieren und Design" />
            <link rel="canonical" href="https://creativeworkspace.de" />
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/static/apple-touch-icon.png?v=NmP44eAp5E"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/static/favicon-32x32.png?v=NmP44eAp5E"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/static/favicon-16x16.png?v=NmP44eAp5E"
            />
            <link rel="manifest" href="/static/site.webmanifest?v=NmP44eAp5E" />
            <link
                rel="mask-icon"
                href="/static/safari-pinned-tab.svg?v=NmP44eAp5E"
                color="#202025"
            />
            <link rel="shortcut icon" href="/static/favicon.ico?v=NmP44eAp5E" />
            <meta
                name="apple-mobile-web-app-title"
                content="Markus Sommer | Creativeworkspace"
            />
            <meta
                name="application-name"
                content="Markus Sommer | Creativeworkspace"
            />
            <meta name="msapplication-TileColor" content="#202025" />
            <meta
                name="msapplication-config"
                content="/static/browserconfig.xml?v=NmP44eAp5E"
            />
            <meta name="theme-color" content="#202025" />
        </Head>
        {children}
    </div>
);

export default Layout;
