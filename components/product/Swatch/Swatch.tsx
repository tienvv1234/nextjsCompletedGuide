import { FC } from 'react';
import s from './Swatch.module.css';
import { Check } from '@components/icons';
import cn from 'classnames';
import { isDark } from '@lib/color';

interface Props {
    color?: string;
    label?: string;
    variant?: 'size' | 'color' | string;
    active?: boolean;
    onClick?: () => void;
}

const Swatch: FC<Props> = ({
    color, label, variant, active,
    ...rest
}) => {
    label = label?.toLowerCase();
    variant = variant?.toLowerCase();
    const rootClassName = cn(s.root, {
        [s.color]: variant === 'color',
        [s.size]: variant === 'size',
        [s.active]: active,
        [s.dark]: color && isDark(color),
    });

    return (
        <button 
        style={color ? { backgroundColor: color} : {}}
        className={rootClassName}
        {...rest}
        
        >
            { variant === 'color' && active &&
                <span>
                    <Check />
                </span>
            }
            {variant === 'size' ? label : null}
        </button>
    )
};

export default Swatch;