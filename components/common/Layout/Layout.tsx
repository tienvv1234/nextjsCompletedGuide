import { PropsWithChildren } from 'react';

// react 18 children no longer to FC, it belong to PropsWithChildren
const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="layout">
            {children}
        </div>
    )
}
export default Layout;