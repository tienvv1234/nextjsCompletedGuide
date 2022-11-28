import { FC, PropsWithChildren } from 'react';
import s from './Layout.module.css';
import { Footer, Navbar } from '@components/common';
// react 18 children no longer to FC, it belong to PropsWithChildren
const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={s.root}>
            <Navbar />
            <main
            className="fit">
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Layout;