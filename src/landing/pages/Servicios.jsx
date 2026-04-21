import React, { useEffect, useRef } from "react";
import ServiciosBarberia from '../componentes/Servicios';
import VideoSection from '../componentes/VideoSeccion';
import ServicesSection from '../componentes/ServicioCorte';
import BarberoServicio from '../componentes/BarberoServicio';
import music from "../../assets/img/videos/musica_fondo.mp3";
import '../../assets/css/charla.css'

const servicioBarberia = "/carrusel_servicios.webp";

const Profesionales = () => {
  const audioRef = useRef(null);

  useEffect(() => {

    const startMusic = () => {

      if (audioRef.current) {
        audioRef.current.volume = 0.15;
        audioRef.current.play().catch(() => { });
      }

      window.removeEventListener("click", startMusic);
      window.removeEventListener("scroll", startMusic);

    };

    window.addEventListener("click", startMusic);
    window.addEventListener("scroll", startMusic);

  }, []);

  return (
    <>
      <div className="position-relative w-100 hero-servicios" style={{ height: "750px" }}>
        {/* audio */}
        <audio ref={audioRef} loop>
          <source src={music} type="audio/mp3" />
        </audio>
        {/* Imagen de fondo */}
        <img
          src={servicioBarberia}
          className="position-absolute top-0 start-0 w-100 h-100 img-servicios-zoom"
          alt="servicioBarberia"
          decoding="async"
          loading="eager"
          fetchpriority="high"
        />

        {/* Capa oscura */}
        <div className="position-absolute top-0 start-0 w-100 h-100 overlay-dark"></div>

        {/* Texto */}
        <div
          className="position-absolute top-50 start-50 translate-middle text-white text-center px-3 titulo-servicios"
        >
          SERVICIOS
        </div>

      </div>

      <ServiciosBarberia />
      <div className='p-5'></div>
      <VideoSection />
      <div className='' style={{ marginTop: '160px' }}></div>
      <ServicesSection />
      <div className='p-5'></div>
      <BarberoServicio />
      <div className='' style={{ marginTop: '100px' }}></div>
    </>
  )
}

export default Profesionales