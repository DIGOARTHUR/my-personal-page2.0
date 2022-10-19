
import { AiFillLinkedin, AiOutlineInstagram, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { useEffect, useState } from 'react';
import styles from './styles.module.scss'


export function Footer() {

    
    
    return (
        <footer className={styles.footerContainer}>
            <span className={styles.Linkedin}    >
                <a href="https://www.linkedin.com/in/digoarthur/">linkedin</a>
                <a href="https://www.linkedin.com/in/digoarthur/">< AiFillLinkedin className={styles.svg} />  </a>

            </span>
            <span className={styles.Email}   >
                <a className={styles.Email} href="digo.arthur@hotmail.com">email    </a>
                <a href="digo.arthur@hotmail.com">< AiOutlineMail className={styles.svg} /> </a>
            </span>
            <span className={styles.Instagram}   >
                <a href="https://www.instagram.com/digoarthur/">instagram </a>
                <a href="https://www.instagram.com/digoarthur/">< AiOutlineInstagram className={styles.svg} />  </a>
            </span>
            <span className={styles.Github}   >
                <a className={styles.Github} href="https://github.com/DIGOARTHUR">github </a>
                <a href="https://github.com/DIGOARTHUR"> < AiFillGithub className={styles.svg} />  </a>

            </span>
        </footer>
    )


}