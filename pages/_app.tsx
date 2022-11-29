console.log(2);
import '@assets/main.css';
import { UIProvider } from '@components/ui/context';
import { AppProps } from 'next/app';
import { ElementType, FC, PropsWithChildren } from 'react';

const Noop: FC<PropsWithChildren> = ({ children }) => <>{children}</>;

MyApp.getInitialProps = async (appContext: AppProps) => {
    console.log(3333333333333);
    console.log('server23222');
    return {
        props: {},
    };
};
// update type & { Layout: ElementType } to { Layout: ElementType } & PropsWithChildren
// function MyApp({Component, pageProps}: AppProps & {Component: { Layout: ElementType } & PropsWithChildren}) {
function MyApp({
    Component,
    pageProps,
}: AppProps & { Component: { Layout: FC<PropsWithChildren> } }) {
    const Layout = Component.Layout ?? Noop;
    console.log(Component.displayName);
    console.log(Component['name']);
    console.log(3333);
    return (
        <UIProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </UIProvider>
    );
}

export default MyApp;
