

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import styles from './styles.module.scss'
import TypeWriter from 'typewriter-effect'
export default function Home() {


  return (
    <div className={styles.home_Container}>
      <Header />
      <main className={styles.main_Container}>
       
        <section className={styles.main_Content} >
          <h1>Diego Arthur</h1>
          <p>
            <strong>Front-end Developer | Apaixonado por React. </strong>

          </p>
          <div className={styles.typeWriter_Container}>
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
      
      </main>
      <Footer />

    </div>
  )
}