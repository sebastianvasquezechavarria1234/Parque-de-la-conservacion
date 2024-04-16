
import '../fold-css/Slider-card.css'
  
export const SliderCard = ({isoClick, titulo}) => {
    return(
        <article className="slider__card" onClick={isoClick}>
            <div className="slider__card__tt">
                <h3>{titulo}</h3>
                <a href="#">Mas informacion</a>
            </div>
        </article>
    )
}