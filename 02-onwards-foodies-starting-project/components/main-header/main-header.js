'use client';

import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '@/assets/logo.png';
import { usePathname } from 'next/navigation';

import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';

export default function MainHeader({children}) {
    const path = usePathname();
    return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image src={LogoImg} alt="Food Logo" priority />
            NextLevel Food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}>Meals</Link>
                </li>
                <li>
                    <Link href="/community" className={path.startsWith('/community') ? classes.active : undefined}>Community</Link>
                </li>
            </ul>
        </nav>
      </header>
    </>
    );

}