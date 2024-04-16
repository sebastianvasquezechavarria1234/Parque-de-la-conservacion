
import logo from "../img/logo.png"
import '../fold-css/Header.css'

export const Header = () => {
    return(

        <header>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <img src={logo} alt="logo" />
                        </a>
                    </li>
                </ul>
            </nav>

            <nav>
                <ul>
                    <li>
                        <a href="#">ES</a>
                        </li>
                    <li>
                        <a href="#">Nosotros</a>
                        </li>
                    <li>
                        <a href="#">Contáctanos</a>
                        </li>
                    <li>
                        <a href="#">tickets</a>
                        </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">Visitanos</a>
                        </li>
                    <li>
                        <a href="#">Servicios</a>
                        </li>
                    <li>
                        <a href="#">Animales</a>
                        </li>
                    <li>
                        <a href="#">Biodiversidad</a>
                        </li>
                </ul>
            </nav>
        </header>

    );
}