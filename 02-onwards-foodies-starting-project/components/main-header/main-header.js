import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '@/assets/logo.png';

import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';

export default function MainHeader({children}) {
    return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link　className={classes.logo} href="/">
            <Image src={LogoImg} alt="Food Logo" priority />
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
    </>
    );

}