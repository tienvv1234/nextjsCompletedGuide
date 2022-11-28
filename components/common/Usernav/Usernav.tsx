import Link from 'next/link';
import { FC } from 'react';
import s from './Usernav.module.css';
import { Bag as Cart, Heart } from '@components/icons';
import { useUI } from '@components/ui/context';

const Usernav: FC = () => {
    const {openSidebar} = useUI();

    return (
        <div>
            <ul className={s.list}>
                <li className={s.item}>
                    <Cart onClick={openSidebar}/>
                </li>
                <li className={s.item}>
                    <Link href='/wishlist'>
                        <a>
                            <Heart />
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Usernav