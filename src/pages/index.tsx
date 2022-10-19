

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import styles from './home.module.scss'
import Typical from 'react-typical'
import TypeWriter from 'typewriter-effect'
import { TRUE } from 'sass'
export default function Home() {
  return (
    <div className={styles.containerHome}>
      <Header />
      <main className={styles.main}>
        <div />
        <section className={styles.contentMain} >
          <h1>Diego Arthur</h1>
          <p>
            <strong>Front-end Developer | Passionate about React. </strong>

          </p>
          <div className={styles.frase}>
            <span>Programar... </span>
            <TypeWriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.changeDelay(30).typeString('É para todos').pauseFor(1000).deleteAll().typeString('Muda o Mundo').pauseFor(1000).deleteAll().start();
              }}


            />
          </div>
          
        </section>
        <div />
      </main>
      <Footer />

    </div>
  )
}