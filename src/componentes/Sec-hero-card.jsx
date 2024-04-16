
import '../fold-css/Sec-hero-card.css'
import hero1 from '../img/hero-1.jpg' 

export const SecHeroCard = (props) => {
    return (
        <li className="sec__hero__card">
            <img src={props.img} alt="hero1" />
            <div className="sec__hero__card__max__width">
              <h1>{props.titulo}</h1>
              <p>{props.texto}</p>
              <a href="#">más informacion</a>
              <div className="sec__hero__card__bottom">
                <a href="#">Recomendaciones</a>
                <a href="#">Horarios y tarifas</a>
                <a href="#">Tickets</a>
                <a href="#">¿Como llegar?</a>
              </div>
            </div>
        </li>
    )
}