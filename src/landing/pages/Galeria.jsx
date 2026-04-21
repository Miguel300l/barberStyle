import React, { useEffect, useRef } from "react";
import Galeria from '../componentes/Galeria';
import LogoProducto from '../componentes/GaleriaProductos';
import music from "../../assets/img/videos/musica_fondo.mp3";

const galeriaBar = "/carrusel_galeria.webp";
const Cuidados = () => {
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
      <div className="position-relative w-100 hero-galeria" style={{ height: '750px' }}>
        {/* audio */}
        <audio ref={audioRef} loop>
          <source src={music} type="audio/mp3" />
        </audio>

        {/* Imagen de fondo */}
        <img
          src={galeriaBar}
          className="position-absolute top-0 start-0 w-100 h-100 img-galeria-zoom"
          alt="galeriaBar"
          decoding="async"
          loading="eager"
          fetchpriority="high"
        />

        {/* Capa oscura */}
        <div className="overlay-galeria position-absolute top-0 start-0 w-100 h-100"></div>

        <div
          className="position-absolute top-50 start-50 translate-middle text-white text-center px-3 titulo-galeria"
        >
          GALERIA
        </div>

      </div>

      <Galeria />
      <div className='' style={{ marginTop: '160px' }}></div>
      <LogoProducto />
      <div className='' style={{ marginTop: '100px' }}></div>
    </>
  );
};

export default Cuidados;
