import React, { useEffect, useState, useRef } from "react";
import { datosInicio } from "../data/DataInicioSesion";
import FechaNotificacion from "../../assets/js/FechaNotificacion";
import barberTutorial from '../../assets/img/barberTutorial.jpeg'
import music from "../../assets/img/videos/musica_fondo.mp3";

const Contactanos = () => {
  const [dataInicio, setDataInicio] = useState([]);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const datos = await datosInicio();
      const soloVideos = datos.filter(
        (evento) =>
          evento.tipo === "destacado" &&
          evento.video &&
          evento.video !== "null" &&
          evento.video.trim() !== ""
      );
      setDataInicio(soloVideos.reverse());
    };

    fetchData();

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
      <div className="position-relative w-100" style={{ height: '750px' }}>
        {/* audio */}
        <audio ref={audioRef} loop>
          <source src={music} type="audio/mp3" />
        </audio>
        {/* Imagen de fondo */}
        <img
          src={barberTutorial}
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          alt="barberTutorial"
          style={{ objectFit: 'cover' }}
        />

        {/* Capa oscura */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}
        ></div>

        <div
          className="position-absolute top-50 start-50 translate-middle text-white text-center px-3"
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: 'clamp(24px, 5vw, 50px)',
            zIndex: 2,
          }}
        >
          TUTORIALES
        </div>
      </div>
      <div className="row gx-3 justify-content-center mx-3 mx-md-4" style={{ marginTop: '40px' }}>
        {dataInicio.map((data) => (
          <div
            key={data._id}
            className="col-12 col-sm-10 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center mb-4"
          >
            <div
              className="box border rounded-0 d-flex flex-column w-100 h-100"
              style={{
                boxShadow: "0 0 8px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
              }}
            >
              {/* Video */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%",
                  overflow: "hidden",
                }}
              >
                <video
                  controls
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                >
                  <source src={data.video} type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>

              {/* Contenido principal */}
              <div className="mx-3 my-2 d-flex flex-column flex-grow-1">
                <h5
                  className="text-uppercase text-center mb-2"
                  style={{
                    fontSize: "16px",
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  {data.titulo}
                </h5>

                <p
                  className="text-body"
                  style={{
                    fontSize: "14px",
                    fontFamily: "'Lato', sans-serif",
                  }}
                >
                  {data.descripcion}
                </p>
              </div>

              {/* Footer */}
              <div className="bg-green px-3 py-1" style={{ flexShrink: 0 }}>
                <small className="text-muted1">
                  {data.updatedAt ? FechaNotificacion(data.updatedAt) : ""}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-5"></div>
      <div className="p-3"></div>
    </>
  );
};

export default Contactanos;
