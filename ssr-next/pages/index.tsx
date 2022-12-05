import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navigation from '../components/Navigation/Navigation';

export default function Home() {

  return (
    <div className={styles.container}>
      <Navigation />
      <main>
        <h1>Homepage</h1>
      </main>
    </div>
  )
}