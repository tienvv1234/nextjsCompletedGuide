import "@assets/main.css";
import { AppProps } from 'next/app';
import { ElementType, FC, PropsWithChildren } from 'react';

const Noop: FC<PropsWithChildren> = ({children}) => <>{children}</>;

// update type & { Layout: ElementType } to { Layout: ElementType } & PropsWithChildren
// function MyApp({Component, pageProps}: AppProps & {Component: { Layout: ElementType } & PropsWithChildren}) {
function MyApp({Component, pageProps}: AppProps & {Component: { Layout: FC<PropsWithChildren> }}) {    
    const Layout = Component.Layout ?? Noop;

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp 