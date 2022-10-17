
 
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import styles from './home.module.scss'

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
            <br />
            <span>I try to inspire and encourage people around me interested in Programming.</span>
          </p>
          <button></button>
        </section>
        <div />
      </main>
      <Footer />

    </div>
  )
}