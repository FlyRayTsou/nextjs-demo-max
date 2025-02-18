import Link from 'next/link';

import LogoImg from '@/assets/logo.png';

export default function MainHeader({children}) {
    return (
      <header>
        <Link href="/">
            <img src={LogoImg.src} alt="Food Logo" />
            NextLevel Food
        </Link>
        <nav>
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