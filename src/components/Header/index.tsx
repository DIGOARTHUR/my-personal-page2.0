

import { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/router';
export function Header() {

  const { asPath } = useRouter();

  console.log(asPath);

  return (
    <header className={styles.header_Container}>
      <Link href="/" >
        <span className={styles.logoName}>@digoarthur</span>
      </Link>
      <nav className={styles.navigation_Container}>

        <Link  href="/Aboutme">
          <span className={asPath === "/Aboutme"? styles.activeLink:""} >SOBRE</span>
        </Link>

        <Link  href="/University">
          <span className={asPath === "/University"? styles.activeLink:""} >UNIVERSIDADE</span>
        </Link>

        <Link  href="/Projects">
          <span className={asPath === "/Projects"? styles.activeLink:""} >PROJETOS</span>
        </Link>

       {/* <Link  href="/Inspiration">
          <span className={asPath === "/Inspiration"? styles.activeLink:""} >INSPIRAÇÕES</span>
        </Link>
*/}
       


      </nav>
      
    </header>
  )
}