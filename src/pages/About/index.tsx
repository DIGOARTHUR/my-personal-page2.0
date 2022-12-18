import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import styles from './styles.module.scss'

export default function About() {
    return (
        <div className={styles.about_Container}>
            <Header />
            <main className={styles.main_Container}> 
                <div className={styles.main_Content}>
                    <h1>Sobre mim.</h1>
                    <section className={styles.bio}>
                        <img src="https://user-images.githubusercontent.com/59892368/192088757-e8a5cc7f-3c4c-4eda-b896-2ecb94f8e015.JPG"></img>
                        <div className={styles.description}>
                            <p>Meu nome é <b>Diego Arthur</b> e tenho <b>29 anos</b></p>
                            <p> Sou programador front-end, apaixonado por ensinar e por tudo que envolva tecnologia. Meu primeiro emprego foi utilizando a tecnologia <a href="https://ui5.sap.com/">SAPUI5</a>, mas atualmente me especializo em: <i>HTML</i>, <i>JavaScript</i>, <i>CSS</i>, <i>ReactJS</i>, <i>TypeScript</i>.</p>
                            <div className={styles.stackIcons}>
                                <a >
                                    <img src="https://user-images.githubusercontent.com/59892368/193366561-0826e4e9-0401-4b1e-9899-2b3d2580a402.svg"></img>
                                </a>
                                <a >
                                <img src="https://user-images.githubusercontent.com/59892368/193366761-0d09f15e-b86c-49b0-a674-19ecc9b8dca1.svg"></img>
                                </a>
                                <a >
                                <img src="https://user-images.githubusercontent.com/59892368/193366836-6b78624f-aada-483b-bee7-8d9e261e8136.svg"></img>
                                </a>
                                <a >
                                <img src="https://user-images.githubusercontent.com/59892368/193366875-279bc7fc-ae0e-4ffa-ba27-32abd1807870.svg"></img>
                                </a>
                                <a >
                                <img src="https://user-images.githubusercontent.com/59892368/193366884-d781aa5b-648b-49bb-8b08-a0d833c7125e.svg"></img>
                                </a>
                            </div>
                            <p>Quando não estou trabalhando, desenvolvo projetos pessoais ou de eventos da Rocketseat, Alura, e acompanho novidades sobre a área no Youtube.</p>
                        </div>
                    </section>
                    <div className={styles.jobs}>
                        <h2>Carreira</h2>

                        <h3>Developer FrontEnd Jr.</h3>

                        <p>BrGaap • Goiânia, GO</p>

                        <p> mar de 2022 – jun de 2022 • 4 meses</p>

                        <h3>Suporte Técnico</h3>

                        <p>BrGaap • Goiânia, GO</p>

                        <p> ago de 2021 – fev de 2022 • 7 meses</p>



                    </div>

                </div>

            </main>
            <Footer />
        </div >
    )
}