
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import Timeline from '../../components/Timeline'
import styles from './styles.module.scss'
export default function University(){
    return(
        <div className={styles.universityContainer}>
        <Header/>
        <main>
            <Timeline/>
        </main>
        <Footer/>

        </div>
    )
}