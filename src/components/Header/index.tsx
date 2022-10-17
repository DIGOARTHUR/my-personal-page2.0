

import { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import Link from 'next/link';
export function Header() {
 

 
  return (
    <header className={styles.headerContainer}>
      <Link href="/" >
        <span className={styles.logoName}>@digoarthur</span>
      </Link>
      <nav className={styles.navigation}>

        <Link className={styles.aboutLink} href="/About">
          <span >SOBRE</span>
        </Link>


      </nav>
      <div />
    </header>
  )
}