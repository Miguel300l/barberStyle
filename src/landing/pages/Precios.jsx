import React, { useEffect, useRef } from "react";
import separador from '../../assets/img/separador.svg';
import PrecioCursos from '../componentes/PrecioCursos'
import Cortes from '../componentes/Cortes'
import HorariosAtencion from '../componentes/HorariosAtencion'
import ServiciosPrecios from '../componentes/ServiciosPrecios'
import music from "../../assets/img/videos/musica_fondo.mp3"

const precios = "/carrusel_precios.jpeg";

const Contenido = () => {
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
  return (<>
    <div className="position-relative w-100 hero-precios" style={{ height: '750px' }}>
      {/* audio */}
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mp3" />
      </audio>
      {/* Imagen de fondo */}
      <img
        src={precios}
        className="position-absolute top-0 start-0 w-100 h-100 img-precios-zoom"
        alt="precios"
      />

      {/* Capa oscura */}
      <div className="overlay-precios position-absolute top-0 start-0 w-100 h-100"></div>

      <div
        className="position-absolute top-50 start-50 translate-middle text-white text-center px-3 titulo-precios"
      >
        PRECIOS
      </div>

    </div>

    <section className="container-fluid p-5">
      <div className="row d-flex flex-wrap justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'justify' }}>
            <p className="fw-bold text-center text-nowrap" style={{ fontSize: 'clamp(18px, 4vw, 40px)', textTransform: 'uppercase', }}>Cursos</p>

            <div className="d-flex justify-content-center">
              <img
                src={separador}
                alt="separador"
                style={{ width: '120px', height: 'auto', margin: '10px 0' }}
              />
            </div>

            <p style={{ fontSize: '15px', textAlign: 'center', padding: '10px' }}>
              Convierte tu talento en ingresos reales.
              Aprende técnicas de alto impacto, mejora tu precisión y crea un estilo que no solo se ve bien, sino que atrae clientes y te posiciona.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div style={{ marginTop: '100px' }}></div>
    <PrecioCursos />
    <Cortes />
    <div style={{ marginTop: '180px' }}></div>
    <HorariosAtencion />
    <div style={{ marginTop: '180px' }}></div>
    <ServiciosPrecios />
    <div style={{ marginTop: '100px' }}></div>
  </>
  );
};

export default Contenido;
