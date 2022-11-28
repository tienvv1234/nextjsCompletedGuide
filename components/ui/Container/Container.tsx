import { FC, ReactNode, ComponentType, HTMLAttributes} from 'react';

interface Props {
    children: ReactNode | ReactNode[];
    el?: ComponentType<HTMLAttributes<HTMLElement>>
}

// el: Component meaning alias
const Container: FC<Props> = ({children, el: Component = 'div'}) => {
    return (
        <Component className="px-6 mx-auto max-w-8xl">
            {children}
        </Component>
    )
}

export default Container;