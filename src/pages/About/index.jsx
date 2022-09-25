import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import './styles.scss'

export function About() {
    return (
        <div className="cotainerAbout">
            <Header />
            <div className="containerBody">
                <div />
                <div className="contentBody">
                    <h1>Sobre mim.</h1>
                    <section className="bio">
                        <img src="https://user-images.githubusercontent.com/59892368/192088757-e8a5cc7f-3c4c-4eda-b896-2ecb94f8e015.JPG"></img>
                        <div className="description">
                            <p>Meu nome é Diego Arthur, e tenho 29 anos</p>
                            <p> Sou programador front-end, apaixonado por ensinar e por tudo que envolva tecnologia. Meu primeiro emprego foi utilizando a tecnologia SAPUI5, mas atualmente me especializo em: HTML, CSS, JavaScript, TypeScript, ReactJS.</p>
                            <p>Quando não estou trabalhando, desenvolvo projetos pessoais ou de eventos da Rockeseat, Alura, e acompanho novidades sobre a área no Youtube.</p>
                        </div>
                    </section>
                    <div className="work">
                        <h2>Carreira</h2>

                        <h3>Developer FrontEnd Jr.</h3>

                        <p>BrGaap • Goiânia, GO</p>

                        <p> mar de 2022 – jun de 2022 • 4 meses</p>

                        <h3>Suporte Técnico</h3>

                        <p>BrGaap • Goiânia, GO</p>

                        <p> ago de 2021 – fev de 2022 • 7 meses</p>



                    </div>

                </div>
                <div />
            </div>
            <Footer />
        </div >
    )
}