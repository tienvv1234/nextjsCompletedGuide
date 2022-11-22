import { AppProps } from 'next/app';
import { ElementType, PropsWithChildren } from 'react';

// update type & { Layout: ElementType } to { Layout: ElementType } & PropsWithChildren
// function MyApp({Component, pageProps}: AppProps & {Component: { Layout: ElementType } & PropsWithChildren}) {
function MyApp({Component, pageProps}: AppProps & {Component: { Layout: ElementType<PropsWithChildren> }}) {    
    const Layout = Component.Layout;

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp 