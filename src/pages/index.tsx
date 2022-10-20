

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import styles from './home.module.scss'
import TypeWriter from 'typewriter-effect'
export default function Home() {


  return (
    <div className={styles.containerHome}>
      <Header />
      <main className={styles.main}>
        <div />
        <section className={styles.contentMain} >
          <h1>Diego Arthur</h1>
          <p>
            <strong>Front-end Developer | Apaixonado por React. </strong>

          </p>
          <div className={styles.frase}>
            <span>Programação... </span>
            <TypeWriter
            
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.changeDelay(30).typeString('Muda o Mundo.').pauseFor(1000).deleteAll().typeString('Abre a mente.').pauseFor(1000).deleteAll().typeString('É para todos!').pauseFor(1000).deleteAll().start();
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