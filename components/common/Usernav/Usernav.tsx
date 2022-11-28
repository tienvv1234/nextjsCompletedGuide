import Link from 'next/link';
import { FC } from 'react';
import s from './Usernav.module.css';
import { Bag as Cart, Heart } from '@components/icons';
const Usernav: FC = () => {
    return (
        <div>
            <ul className={s.list}>
                <li className={s.item}>
                    <Cart />
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