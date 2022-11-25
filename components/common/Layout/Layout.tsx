import { FC, PropsWithChildren } from 'react';
import s from './Layout.module.css';
// react 18 children no longer to FC, it belong to PropsWithChildren
const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={s.root}>
            <main
            className="fit">
                {children}
            </main>
        </div>
    )
}
export default Layout;