import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles.module.css';

const Navigation = () => {
    const { asPath } = useRouter();
    return (
        <header className={styles.header}>
            <Image src="/next.png" alt="Vercel Logo" width={30} height={30} />
            <nav className={styles.nav}>
                <ul>
                    <li><Link href="/" className={`${asPath === "/" ? styles.active : ""}`}>Home</Link></li>
                    <li><Link href="/products" className={`${asPath === "/products" ? styles.active : ""}`}>Products</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;