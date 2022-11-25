import {FC, PropsWithChildren} from 'react';
import s from './Grid.module.css';
import cn from 'classnames';

interface Props {
    children: React.ReactNode[];
    layout?: 'A' | 'B';
}

const Grid: FC<Props> = ({children, layout = 'A'}) => {

    // console.log('s.root', s.root);
    // console.log('cn A', cn(s.root, s.layoutA));
    // console.log('cn B', cn(s.root, s.layoutB));

    const rootClassName = cn(s.root, {
        [s.layoutA]: layout === 'A',
        [s.layoutB]: layout === 'B',
    });

    // console.log('rootClassName', rootClassName);
    return (
        <div className={rootClassName}>
            {children}
        </div>
    )
}

export default Grid