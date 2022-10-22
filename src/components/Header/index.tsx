

import { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/router';
export function Header() {

  const { asPath } = useRouter();

  console.log(asPath);

  return (
    <header className={styles.headerContainer}>
      <Link href="/" >
        <span className={styles.logoName}>@digoarthur</span>
      </Link>
      <nav className={styles.navigation}>

        <Link  href="/About">
          <span className={asPath === "/About"? styles.activeLink:""} >SOBRE</span>
        </Link>

        <Link  href="/University">
          <span className={asPath === "/University"? styles.activeLink:""} >UNIVERSIDADE</span>
        </Link>


      </nav>
      <div />
    </header>
  )
}