

import { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import Link from 'next/link';
export function Header() {
  const [activateLink, setActiveLink] = useState('');

  function chamada() {

    setActiveLink('SOBRE')
  }
  return (
    <div className={styles.header}>
      <Link href="/" >
        <span className={styles.logoName}>@digoarthur</span>
      </Link>
      <nav className={styles.navigation}>

        <Link className={activateLink === 'SOBRE' ? styles.activeAboutLink : styles.aboutLink} href="/About" onClick={() => chamada()}>
          <span >SOBRE</span>
        </Link>


      </nav>
      <div />
    </div>
  )
}