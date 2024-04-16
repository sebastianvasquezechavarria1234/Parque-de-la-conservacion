
import './App.css'
import { SecHeroCard } from './componentes/Sec-hero-card.jsx'
import { Header } from './componentes/Header.jsx'
import { Sec3Card } from './componentes/Sec-3-card.jsx'
import ema from './img/ema.webp'
import hero1 from './img/hero-1.jpg' 
import hero2 from './img/hero-2.jpg' 
import hero3 from './img/hero-3.jpg' 
import hero4 from './img/hero-4.jpg' 
import sec2Img1 from './img/mono.png' 
import sec2Img2 from './img/pantera.png' 
import { Slider } from './componentes/Slider.jsx'



function App() {

  const isoClick = () => {
    alert("hizoclick")
  }

  return (
    <>
     <Header />

      <section className="sec__hero">
        <ul>
          <SecHeroCard 
          img={hero1}
          titulo="Beneficios para filiados a Comfenalco Antioquia y comfama"
          />

          <SecHeroCard 
          titulo="Somos centro de ciencia"
          texto="El Parque de la conservación es reconocido como CEntro de Ciencia por Miniciencia."
          img={hero2}
          />

          <SecHeroCard 
          titulo="¡Subete al Tren de la Conservación!"
          texto="Dedicado ala protección de la biodiversiadad."
          img={hero3}
          />

          <SecHeroCard 
          titulo="125 años de transformación, bienestar y sostenibilidad"
          img={hero4}
          />
          

        </ul>
      </section>

      <section className="sec__2">
        <div className="sec__2__card">
          <img src={sec2Img1} alt="mono" />
        
          <div className="sec__2__card__tt">
            <h2>Servicios Educativos</h2>
            <a href="#">Vér mas</a>
          </div>
        </div>

        <div className="sec__2__card">
          <img src={sec2Img2} alt="pantera" />
        
          <div className="sec__2__card__tt">
            <h2>Acciones de conservación</h2>
            <p>Somos una entidad dedicada a la protección de la biodiversidad, así como a la generación y apropiación social del conocimiento, para impactar positivamente a las comunidades y al medio ambiente. En nuestras instalaciones, centenares de especies encuentran un refugio, una segunda oportunidad para sus vidas.</p>
            <a href="#">ampliar información</a>
          </div>
        </div>
      </section>

      <section className="sec__3">
        <div className="sec__3__left">
          <h2>Novedades</h2>
          <Sec3Card
          isoClick={isoClick} 
          titulo="Consejo de Medellin exalta con su maxima distancia al Parque de la conservación"/>
          <Sec3Card
          isoClick={isoClick} 
          titulo="Medellin city"/>
          <Sec3Card
          isoClick={isoClick} 
          titulo="¡El primer ocelote albino en el mundo, está en colombia!"/>
          <Sec3Card
          isoClick={isoClick} 
          titulo="Preinscripciones Club Cientifíco"/>
          <Sec3Card
          isoClick={isoClick} 
          titulo="Deja tu mascota en casa"/>
        </div>

        <div className="sec__3__rigth">
          <div className="sec__rigth__tt">
            <h2>Animales</h2>
            <p>Es un escenario único en el Valle de Aburrá que reúne centenares de especies de animales, en el que se llevan a cabo procesos educativos e investigativos.</p>
            <a href="#">Ver mapa de animales</a>
          </div>
        </div>
      </section>

      <Slider />
    
     
    </>
  )
}

export default App
