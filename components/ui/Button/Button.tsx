import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import s from './Button.module.css';
import cn from 'classnames';

// this has all the props that a button can have
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode | ReactNode[];
}
// rest is all the props that are not in the interface
const Button: FC<Props> = ({children, className, ...rest}) => {
    return (
        <button
            className={cn(s.root, className)} 
            type='button'
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button;