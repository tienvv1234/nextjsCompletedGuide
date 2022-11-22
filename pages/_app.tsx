import "@assets/main.css";
import { AppProps } from 'next/app';
import { ElementType, PropsWithChildren } from 'react';

const Noop = ({children}: PropsWithChildren) => <>{children}</>;

// update type & { Layout: ElementType } to { Layout: ElementType } & PropsWithChildren
// function MyApp({Component, pageProps}: AppProps & {Component: { Layout: ElementType } & PropsWithChildren}) {
function MyApp({Component, pageProps}: AppProps & {Component: { Layout: ElementType<PropsWithChildren> }}) {    
    const Layout = Component.Layout ?? Noop;

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp 