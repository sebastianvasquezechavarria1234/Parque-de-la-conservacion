
import '../fold-css/Slider.css'
import { SliderCard } from '../componentes/Slider-card.jsx'

export const Slider = () => {
    return(
        <section className="slider">
            <ul>
                <SliderCard
                    titulo="Nacimiento de mariposa verde malaquita" />
                <SliderCard
                    titulo="Biometría de la danta" />            
                <SliderCard
                    titulo="Salud oral de los pacientes del Parque" />            
                <SliderCard
                    titulo="Experiencia con texturas, olores, sonidos y sabores para grupo de personas ciegas" />               
                <SliderCard
                    titulo="Procediemto médico de jaguar" />
                <SliderCard
                    titulo="Nacimiento de pollielos de flamencos rosados" />
                <SliderCard
                    titulo="Todo sobre la tortuga matamata" />
                <SliderCard
                    titulo="Examen Integral de D
                    Salud Animal : Puma" />
                <SliderCard
                    titulo="¿Conocias al rey de los gallinazos?" />
        
            </ul>
        </section>

    );
}