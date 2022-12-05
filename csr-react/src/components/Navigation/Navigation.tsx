import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../logo.svg"
import styles from './styles.module.css';

const Navigation = () => {
    const { pathname } = useLocation();
    return (
        <header className={styles.header}>
            <img src={logo} alt="Vercel Logo" width={40} height={40} />
            <nav className={styles.nav}>
                <ul>
                    <li><Link to="/" className={`${pathname === "/" ? styles.active : ""}`}>Home</Link></li>
                    <li><Link to="/products" className={`${pathname === "/products" ? styles.active : ""}`}>Products</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;