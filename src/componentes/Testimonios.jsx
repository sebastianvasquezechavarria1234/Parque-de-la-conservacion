
import '../fold-css/Testimonios.css';
import ema from '../img/ema.webp'

export const Testimonios = (props) => {
    return (
        <acrticle className='cardTestimonio'>
            <img src={props.img} alt="ema" />
            
            <h1>{props.titulo}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam autem eveniet nesciunt, neque dolores ipsum maiores dicta reprehenderit quae ex expedita quibusdam quis assumenda repellendus explicabo, itaque praesentium veniam placeat!</p>
        </acrticle>

    );
}
