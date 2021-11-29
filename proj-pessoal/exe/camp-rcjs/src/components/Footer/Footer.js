import './Footer.css'
import 'react-icons/fa'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
    return( <footer>
        <h2>Desenvolvido por: Tyfani Abreu</h2>
        <div class='social'>
            <a id="rs" href="https://github.com/Tyfani21">
            <FaGithub/>
            </a>
        
            <a id="rs" href="https://www.instagram.com/tyfani_abreu/"> <FaInstagram/>
            </a>
            <a id="rs" href="https://www.linkedin.com/in/tyfaniabreu/"><FaLinkedinIn/>
            </a>
        </div>
    </footer>
    )
}
export default Footer;