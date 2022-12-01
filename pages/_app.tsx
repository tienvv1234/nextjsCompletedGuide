import '@assets/main.css';
import 'keen-slider/keen-slider.min.css'
import { UIProvider } from '@components/ui/context';
import { AppProps } from 'next/app';
import { ElementType, FC, PropsWithChildren } from 'react';

const Noop: FC<PropsWithChildren> = ({ children }) => <>{children}</>;

// only _app can use getInitialProps (maybe not)
// can't use getInitialProps in here, because it's not a page
// MyApp.getInitialProps = async (appContext: AppProps) => {
//     return {
//         props: {},
//     };
// };
// update type & { Layout: ElementType } to { Layout: ElementType } & PropsWithChildren
// function MyApp({Component, pageProps}: AppProps & {Component: { Layout: ElementType } & PropsWithChildren}) {
function MyApp({
    Component,
    pageProps,
}: AppProps & { Component: { Layout: FC<PropsWithChildren> } }) {
    const Layout = Component.Layout ?? Noop;
    return (
        <UIProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </UIProvider>
    );
}

export default MyApp;
