import React from 'react';
import fondoVideo from '../../assets/img/fondoVideo.jpeg';
import separador from '../../assets/img/separador.svg';
import '../../assets/css/videoSection.css'

const VideoSection = () => {
  return (
    <section
      className="container-fluid p-5 position-relative video-section text-white"
      style={{ backgroundImage: `url(${fondoVideo})`, marginTop: '-40px' }}
    >
      {/* Capa oscura */}
      <div className="position-absolute start-0 top-0 w-100 h-100 overlay"></div>

      <div className="row d-flex flex-wrap justify-content-center align-items-center position-relative" style={{ zIndex: 2 }}>
        {/* Video Column */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/lqY_htQjCl4"
              title="Promo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        {/* Text Column */}
        <div className="col-md-6">
          <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'justify' }}>
            <p className="fw-bold text-center text-uppercase mb-3" style={{ fontSize: 'clamp(20px, 4vw, 40px)' }}>El Barbero</p>
            <div className="d-flex justify-content-center mb-3">
              <img
                src={separador}
                alt="separador"
                style={{ width: '120px', height: 'auto' }}
              />
            </div>
            <p className="text-center px-3" style={{ fontSize: '15px', fontFamily: 'Lato', }}>
              El barbero es un profesional dedicado a crear el estilo que mejor se adapta a ti. Con experiencia y atención al detalle, se encarga de resaltar tu mejor versión, guiándote en cada elección para un look único y personalizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;