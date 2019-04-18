import React from 'react';
import Helmet from 'react-helmet';
import './all.sass';
import Navbar from './Navbar';
import '../helpers/cursor';
import useSiteMetadata from './SiteMetadata';

const TemplateWrapper = ({ children }) => {
    const { title, description } = useSiteMetadata();
    return (
        <div className="container">
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />

                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="57x57"
                    href="/img/apple-touch-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="114x114"
                    href="/img/apple-touch-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="72x72"
                    href="/img/apple-touch-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="144x144"
                    href="/img/apple-touch-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="60x60"
                    href="/img/apple-touch-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="120x120"
                    href="/img/apple-touch-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="76x76"
                    href="/img/apple-touch-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="152x152"
                    href="/img/apple-touch-icon-152x152.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/img/favicon-196x196.png"
                    sizes="196x196"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/img/favicon-96x96.png"
                    sizes="96x96"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/img/favicon-32x32.png"
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/img/favicon-16x16.png"
                    sizes="16x16"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/img/favicon-128.png"
                    sizes="128x128"
                />
                <meta name="application-name" content="&nbsp;" />
                <meta name="msapplication-TileColor" content="#FFFFFF" />
                <meta
                    name="msapplication-TileImage"
                    content="mstile-144x144.png"
                />
                <meta
                    name="msapplication-square70x70logo"
                    content="mstile-70x70.png"
                />
                <meta
                    name="msapplication-square150x150logo"
                    content="mstile-150x150.png"
                />
                <meta
                    name="msapplication-wide310x150logo"
                    content="mstile-310x150.png"
                />
                <meta
                    name="msapplication-square310x310logo"
                    content="mstile-310x310.png"
                />
                <meta name="theme-color" content="#fff" />
                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
                <meta property="og:image" content="/img/og-image.jpg" />
            </Helmet>
            <div className="cursor cursor--small" />
            <Navbar />
            <main className="main">{children}</main>
        </div>
    );
};

export default TemplateWrapper;
