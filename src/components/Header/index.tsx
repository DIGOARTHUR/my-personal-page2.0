

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

      <span className={styles.logoName}>@digoarthur</span>

      <nav className={styles.navigation}>

        <Link className={activateLink === 'SOBRE' ? styles.activeAboutLink : styles.aboutLink} href="/About" onClick={() => chamada()}>
          <span >SOBRE</span>
        </Link>



        <span>PROJECTS</span>


      </nav>
      <div />
    </div>
  )
}