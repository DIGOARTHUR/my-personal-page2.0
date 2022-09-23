import './styles.scss'
import { AiFillLinkedin, AiOutlineInstagram,AiFillGithub,AiOutlineMail } from "react-icons/ai";
export function Footer() {
    return (
        <footer>


            <span className="Linkedin"    >
                <a href="https://www.linkedin.com/in/digoarthur/">linkedin  </a>
                < AiFillLinkedin className="svg" />

            </span>

            <span className="Email"   >
                <a className="Email" href="digo.arthur@hotmail.com">email</a>
                < AiOutlineMail className="svg" />

            </span>




            <span className="Instagram"   >
                <a href="https://www.instagram.com/digoarthur/">instagram</a>
                < AiOutlineInstagram className="svg" />

            </span>

            <span className="Github"   >
                <a className="Github" href="https://github.com/DIGOARTHUR">github</a>
                < AiFillGithub className="svg" />

            </span>


        </footer>
    )


}