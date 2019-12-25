import '../assets/css/global.css';
import 'sanitize.css';

import Head from 'next/head';
import * as React from 'react';

type Props = {
    title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
    children,
    title = 'This is the default title'
}) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Maven+Pro:400,700|Roboto+Slab:400,700&display=swap"
                rel="stylesheet"
            />
        </Head>
        {children}
    </div>
);

export default Layout;
