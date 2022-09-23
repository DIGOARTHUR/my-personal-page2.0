import './styles.scss'
import ReactLogo from '../../icons8-linkedin-2.svg';
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
export function Footer() {
    return (
        <footer>


            <span className="Linkedin"    >
                <a href="">Linkedin  </a>
                < AiFillLinkedin className="svg" />

            </span>

            <span className="Instagram"   >
                <a className="Email" href="Email">Email</a>
                < AiOutlineInstagram className="svg" />

            </span>




            <span className="Instagram"   >
                <a href="Instagram">Instagram</a>
                < AiOutlineInstagram className="svg" />

            </span>

            <span className="Instagram"   >
                <a className="Github" href="Github">Github</a>
                < AiOutlineInstagram className="svg" />

            </span>


        </footer>
    )


}