import { PropsWithChildren } from 'react';
import s from './Layout.module.css';
// react 18 children no longer to FC, it belong to PropsWithChildren
const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className={s.root}>
            <main 
            style={{color: "var(--primary)"}}
            className="fit">
                {children}
            </main>
        </div>
    )
}
export default Layout;