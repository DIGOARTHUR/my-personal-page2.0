import { BodyApp } from "../../components/BodyApp/BodyApp";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import './styles.scss'

export function Main() {
  return (
    <div className="containerMain">
      <Header />
      <BodyApp />
      <Footer />

    </div>
  )
}