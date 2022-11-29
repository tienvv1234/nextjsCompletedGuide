import { FC, PropsWithChildren } from 'react';
import s from './Layout.module.css';
import { Footer, Navbar } from '@components/common';
import { Sidebar } from '@components/ui';
import { CartSidebar } from '@components/cart';
import { useUI } from '@components/ui/context';

// react 18 children no longer to FC, it belong to PropsWithChildren
const Layout: FC<PropsWithChildren> = ({ children }) => {
    const { isSidebarOpen, closeSidebar } = useUI();
    console.log('Re-rendering Layout');
    return (
        <div className={s.root}>
            <Navbar />
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
                <CartSidebar />
            </Sidebar>
            <main className='fit'>{children}</main>
            <Footer />
        </div>
    );
};
export default Layout;
