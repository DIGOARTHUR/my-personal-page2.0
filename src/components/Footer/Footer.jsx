import './styles.scss'
import { AiFillLinkedin, AiOutlineInstagram,AiFillGithub,AiOutlineMail } from "react-icons/ai";
export function Footer() {
    return (
        <footer>


            <span className="Linkedin"    >
                <a href="">linkedin  </a>
                < AiFillLinkedin className="svg" />

            </span>

            <span className="Email"   >
                <a className="Email" href="Email">email</a>
                < AiOutlineMail className="svg" />

            </span>




            <span className="Instagram"   >
                <a href="Instagram">instagram</a>
                < AiOutlineInstagram className="svg" />

            </span>

            <span className="Github"   >
                <a className="Github" href="Github">github</a>
                < AiFillGithub className="svg" />

            </span>


        </footer>
    )


}