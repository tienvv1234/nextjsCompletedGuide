import { FC, PropsWithChildren } from 'react';
import s from './ProductSlider.module.css';

const ProductSlider: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={s.root}>
            <div className='h-full transition-opacity duration-150'>
                {children}
            </div>
        </div>
    );
};
export default ProductSlider;