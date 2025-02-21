import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '@/assets/logo.png';

import classes from './main-header.module.css';

export default function MainHeader({children}) {
    return (
      <header className={classes.header}>
        <Link　className={classes.logo} href="/">
            <Image src={LogoImg} alt="Food Logo" />
            NextLevel Food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals">Meals</Link>
                </li>
                <li>
                    <Link href="/community">Community</Link>
                </li>
            </ul>
        </nav>
      </header>

    );

}